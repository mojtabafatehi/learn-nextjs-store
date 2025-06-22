"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import CartItem from "./CartItem";

export default function ListCartItem() {
  const { CartItems } = useShoppingCartContext();

  return (
    <div>
      {CartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
