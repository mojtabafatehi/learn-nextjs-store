import React from "react";

export default function CartItem() {
  return (
    <div className="grid grid-cols-12 mb-2 shadow-md bg-slate-50">
      <div className="col-span-2">
        <img
          className="h-full"
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg"
        ></img>
      </div>
      <div className="col-span-10 p-4">
        <h1 className="text-2xl">نام محصول</h1>
        <p>
          قیمت: <span>20000</span>
        </p>
        <p>
          تعداد: <span>2</span>
        </p>

        <div className="mt-4">
          <button className="text-green-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer">
            +
          </button>
          <span className="mx-2">2</span>
          <button className="text-red-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>
  );
}
