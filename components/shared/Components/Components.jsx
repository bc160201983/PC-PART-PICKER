import { fetchcategories } from "@/app/(dashboard)/lib/actions";
import Link from "next/link";
import React from "react";

const Components = async ({ name, slug }) => {
  return (
    <>
      <tr className="search">
        <td className="text-xs font-bold underline cursor-pointer text-[#1e5c85] py-2 pr-4 whitespace-nowrap">
          {name}
        </td>

        <td className="text-xs font-bold py-4">
          <Link
            href={`/products/${slug}`}
            className="bg-[#2c87c3] capitalize py-2 px-4 text-white font-bold rounded hover:bg-[#1e5c85] hover:transition-all hover:ease-in-out"
          >
            Choose A {name}
          </Link>
        </td>
        <td className="text-right">$2999</td>
        <td className="text-right">Amazon.co.uk</td>
        <td className="text-right">
          <Link
            href="#"
            className="text-sm font-bold bg-[#00b16a] py-2 px-4 text-white rounded"
          >
            Buy
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Components;
