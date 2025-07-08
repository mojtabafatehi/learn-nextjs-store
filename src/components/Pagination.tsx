"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;

    router.push(`/store?page=${page}&per_page=${5}`);
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
