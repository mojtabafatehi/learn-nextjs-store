"use client";

import Container from "@/components/Container";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

export default function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    axios({
      method: "POST",
      url: "http://localhost:8001/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(), // Random ID for demo purposes
        title: newProduct.title,
        price: parseFloat(newProduct.price), // Ensure price is a number
        image: newProduct.image,
        description: newProduct.description,
      },
    })
      .then((response) => {
        console.log("Product added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <Container>
      <div className=" bg-gray-50 p-10 mt-10 rounded-lg">
        <h1 className="text-center text-4xl font-bold">
          اضافه کردن محصول جدید
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <input
            className="bg-amber-200 rounded p-2"
            onChange={handleChangeProduct}
            type="text"
            placeholder="عنوان محصول"
            name="title"
          ></input>
          <input
            className="bg-amber-200 rounded p-2"
            onChange={handleChangeProduct}
            type="text"
            placeholder="قیمت محصول"
            name="price"
          ></input>
          <input
            className="bg-amber-200 rounded p-2"
            onChange={handleChangeProduct}
            type="text"
            placeholder="تصویر محصول"
            name="image"
          ></input>
        </div>

        <textarea
          className="mt-2 w-full bg-amber-200 rounded p-2"
          onChange={handleChangeProduct}
          placeholder="توضیحات محصول"
          name="description"
        ></textarea>

        <button
          onClick={() => handleAddProduct()}
          className="cursor-pointer bg-green-500 items-center w-[20%] text-white p-2 rounded mt-5"
        >
          اضافه کردن محصول
        </button>
      </div>
    </Container>
  );
}
