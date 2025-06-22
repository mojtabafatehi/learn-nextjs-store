"use client";
import { useEffect, useState } from "react";
import AddtoCart from "./AddtoCart";
import axios from "axios";
import { IProductItemProps } from "./ProductItem";
import { formatNumberWithCammas } from "@/utils/number";

interface ICartItyemProps {
  id: string;
  qty: number;
}
export default function CartItem({ id, qty }: ICartItyemProps) {
  const [data, setData] = useState({} as IProductItemProps);
  useEffect(() => {
    axios(`http://localhost:8001/products/${id}`)
      .then((result) => {
        const { data } = result;
        setData(data);
      })
      .catch((err) => {
        console.error("خطا در گرفتن محصول:", err.message);
      });
  }, [id]);

  return (
    <div className="grid grid-cols-12 mb-2 shadow-md bg-slate-50">
      <div className="col-span-2">
        <img className="h-full" src={data.image}></img>
      </div>
      <div className="col-span-10 p-4">
        <h1 className="text-2xl">{data.title}</h1>
        <p>
          قیمت: <span>{formatNumberWithCammas(data.price ?? 0)}</span>
        </p>
        <p>
          تعداد: <span>{qty}</span>
        </p>

        <AddtoCart key={id} id={id} />
      </div>
    </div>
  );
}
