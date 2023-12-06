"use server";
import Link from "next/link";
import React from "react";
import Components from "../Components/Components";
import { usePathname } from "next/navigation";
import { fetchcategories } from "@/app/(dashboard)/lib/actions";
import { useGlobalContext } from "@/context/context";
import TotalPrice from "@/components/TotalPrice/TotalPrice";

const PartsSelectionTable = async ({ shareLinkID, shareProducts }) => {
  const cat = await fetchcategories();

  return (
    <>
      <div className="">
        <table className="w-full text-sm text-left">
          <thead className="text-[11px] border-1 border-b border-[#dbdbdb]">
            <tr className="border-b-1 border-[#dbdbdb]">
              <th className="border-spacing-0 w-[100px]">Component</th>
              <th scope="col" className="">
                Selection
              </th>
              <th scope="col" className="w-[150px] text-right">
                Price
              </th>
              <th scope="col" className="text-right w-[150px]">
                Where
              </th>
              <th scope="col" className="text-right w-[100px]">
                Buy
              </th>
              <th scope="col" className="text-right w-[100px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cat.map((category) => (
              <Components
                key={category._id}
                catId={category._id}
                name={category.name}
                slug={category.slug}
                shareLinkID={shareLinkID}
                shareProducts={shareProducts}
              />
            ))}
            <TotalPrice shareProducts={shareProducts} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PartsSelectionTable;
