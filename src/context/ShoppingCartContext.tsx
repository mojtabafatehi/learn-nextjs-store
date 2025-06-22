"use client";

import { createContext, useContext, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
  CartItems: CartItems[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  productQty: (id: number) => number;
  totalProductQty: number;
  handleRemoveProduct: (id: number) => void;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

//cahnge to hook:
export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [CartItems, setCartItems] = useState<CartItems[]>([]);

  const productQty = (id: number) => {
    return CartItems.find((item) => item.id == id)?.qty || 0;
  };

  const totalProductQty = CartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  const handleIncreaseProductQty = (id: number) => {
    return setCartItems((currentItems) => {
      const isNotproductExist =
        currentItems.find((item) => item.id == id) == null;

      if (isNotproductExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    return setCartItems((currentItems) => {
      const isLastOne = currentItems.find((item) => item.id == id)?.qty == 1;

      if (isLastOne) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty > 1 ? item.qty - 1 : 0,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        CartItems,
        handleIncreaseProductQty,
        productQty,
        totalProductQty,
        handleDecreaseProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
