"use client";
import React from "react";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const Pagination = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  //   ⁡⁣⁢⁣𝗛𝗮𝗻𝗱𝗹𝗲𝗡𝗮𝘃𝗶𝗴𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗣𝗮𝗴𝗲𝘀 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻⁡
  const handleNavigation = (direction: string) => {
    const nextPageNumber =
      direction === "prev" ? pageNumber - 1 : pageNumber + 1;

    // ⁡⁢⁣⁣Update the URL⁡
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });

    router.push(newUrl); // we don't need to pass `scroll: false` coz we do need to scroll to the top of the new page
  };

  //   Hide Pagination
  if (!isNext && pageNumber === 1) return null;

  return (
    <div className="flex-center w-full gap-2">
      <Button
        disabled={pageNumber === 1}
        onClick={() => handleNavigation("prev")} // previous page
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border "
      >
        <p className="body-medium text-gray600_light800">Prev</p>
      </Button>

      <div className="flex-center rounded-md bg-primary-500 px-3.5 py-2">
        <p className="body-semibold text-light-900">{pageNumber}</p>
      </div>
      <Button
        disabled={!isNext}
        onClick={() => handleNavigation("next")} // previous page
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border "
      >
        <p className="body-medium text-gray600_light800">Next</p>
      </Button>
    </div>
  );
};

export default Pagination;