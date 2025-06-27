"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProductItemProps } from "./ProductItem";
import { formatNumberWithCammas } from "@/utils/number";
import Link from "next/link";

interface IDiscount {
  code: string;
  id: number;
  percentage: number;
}

export default function ListCartItem() {
  const { CartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>();
  const [discountCode, setDiscountCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

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

  let totalPrice = CartItems.reduce((total, item) => {
    let price = data?.find((product) => product.id == item.id)?.price || 0;

    return total + price * item.qty;
  }, 0);

  function handleDiscount() {
    axios(`http://localhost:8001/discounts?code=${discountCode}`).then(
      (result) => {
        const data = result.data as IDiscount[];

        console.log(totalPrice);
        let discountPR = (totalPrice * (data[0]?.percentage || 0)) / 100;
        let finalPrice = totalPrice - discountPR;

        setDiscountPrice(discountPR);
        setFinalPrice(finalPrice);
      }
    );
  }

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
            <span>{formatNumberWithCammas(totalPrice)}</span>
          </h3>
          <h3>
            سود شما از این خرید:{" "}
            <span>{formatNumberWithCammas(discountPrice)}</span>
          </h3>
          <h3>
            قیمت نهایی: <span>{formatNumberWithCammas(finalPrice)}</span>
          </h3>
        </div>
        <div className="mt-4">
          <input
            className=" border-amber-300 border-2 p-2 mx-2 rounded"
            placeholder="کد تخفیف را وارد کنید"
            onChange={(e) => {
              setDiscountCode(e.target.value);
            }}
          ></input>
          <button
            className="px-3 py-1 bg-blue-400 text-white rounded cursor-pointer"
            onClick={() => {
              handleDiscount();
            }}
          >
            اعمال کد تخفیف
          </button>
        </div>
      </div>
    </div>
  );
}
