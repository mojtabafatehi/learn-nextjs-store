"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;

    const currentURL = new URLSearchParams(searchParams.toString());

    currentURL.set("page", page);
    currentURL.set("per_page", 5);

    router.push(`/store?${currentURL.toString()}`);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="بعدی >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< قبلی"
      />
    </div>
  );
}
