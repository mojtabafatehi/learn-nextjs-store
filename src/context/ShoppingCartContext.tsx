"use client";

import CartItem from "@/components/CartItem";
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

  const handleIncreaseProductQty = (id: number) => {
    return setCartItems((currentItem) => {
      const isNotproductExist =
        currentItem.find((item) => item.id == id) == null;

      console.log(id);

      if (isNotproductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
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

  return (
    <ShoppingCartContext.Provider
      value={{ CartItems, handleIncreaseProductQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
