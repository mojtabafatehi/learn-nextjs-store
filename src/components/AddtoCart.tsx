"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface IAddtoCartProps {
  id: string;
}

export default function AddtoCart({ id }: IAddtoCartProps) {
  const {
    handleIncreaseProductQty,
    productQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  return (
    <div>
      <div className="mt-4">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="text-green-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer"
        >
          +
        </button>
        <span className="mx-2">{productQty(id)}</span>
        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="text-red-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer"
        >
          -
        </button>
      </div>

      <div>
        <button
          onClick={() => handleRemoveProduct(parseInt(id))}
          className="mt-2 px-7 py-2 bg-red-500 text-white rounded cursor-pointer"
        >
          حذف از سبد خرید
        </button>
      </div>
    </div>
  );
}
