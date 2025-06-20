"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { useContext } from "react";

interface IAddtoCartProps {
  id: string;
}

export default function AddtoCart({ id }: IAddtoCartProps) {
  const { handleIncreaseProductQty, CartItems } = useShoppingCartContext();

  console.log(CartItems);

  return (
    <div className="mt-4">
      <button
        onClick={() => handleIncreaseProductQty(parseInt(id))}
        className="text-green-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer"
      >
        +
      </button>
      <span className="mx-2">2</span>
      <button className="text-red-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer">
        -
      </button>
    </div>
  );
}
