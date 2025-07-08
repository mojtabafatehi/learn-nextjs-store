"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const currentURL = new URLSearchParams(searchParams.toString());

    currentURL.set("title", search);

    router.push(`/store?${currentURL.toString()}`);
  };

  return (
    <div className="flex gap-4">
      <input
        className="bg-amber-200 p-2 w-80 rounded"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="محصول مورد نظر را جست و جو کنید . . ."
      />
      <button className="bg-green-600 w-30 rounded-2xl" onClick={handleSearch}>
        جستوجو
      </button>
    </div>
  );
}
