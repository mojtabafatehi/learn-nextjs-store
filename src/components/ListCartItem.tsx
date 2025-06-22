"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProductItemProps } from "./ProductItem";
import { formatNumberWithCammas } from "@/utils/number";
import Link from "next/link";

export default function ListCartItem() {
  const { CartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>();
  useEffect(() => {
    axios(`http://localhost:8001/products`)
      .then((result) => {
        const { data } = result;
        setData(data);
      })
      .catch((err) => {
        console.error("خطا در گرفتن محصول:", err.message);
      });
  }, []);

  if (!CartItems.length) {
    return (
      <div className="flex flex-col items-center justify-center h-40 gap-4">
        <p className="text-center text-gray-500 p-2 mt-10 border-1 border-red-100 rounded-2xl">
          سبد خرید خالی است!
        </p>
        <Link
          href={"/store"}
          className=" px-7 py-2 bg-red-500 text-white rounded cursor-pointer text-center"
        >
          رفتن به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div>
      {CartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="bg-gray-50 p-4">
        <div>
          <h3>
            قیمت کل:
            <span>
              {formatNumberWithCammas(
                CartItems.reduce((total, item) => {
                  let price =
                    data?.find((product) => product.id == item.id)?.price || 0;

                  return total + price * item.qty;
                }, 0)
              )}
            </span>
          </h3>
          <h3>
            سود شما از این خرید: <span>22</span>
          </h3>
          <h3>
            قیمت نهایی: <span>77</span>
          </h3>
        </div>
        <div className="mt-4">
          <input
            className=" border-amber-300 border-2 p-2 mx-2 rounded"
            placeholder="کد تخفیف را وارد کنید"
          ></input>
          <button className="px-3 py-1 bg-red-400 text-white rounded cursor-pointer">
            اعمال کد تخفیف
          </button>
        </div>
      </div>
    </div>
  );
}
