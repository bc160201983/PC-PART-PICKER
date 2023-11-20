"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductList = ({
  id,
  title,
  link,
  desc,
  price,
  socket,
  series,
  capacity,
}) => {
  return (
    <>
      <tr className="border-1 border-b border-[#dbdbdb]">
        <td className="">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-4 h-4 cursor-pointer"
          />
        </td>

        <td td className="text-xs font-bold py-4">
          <Link
            href={`/product/1`}
            className="flex justify-start items-center gap-2"
          >
            <div className="-_image p-1 bg-white w-12 h-12 flex justify-center items-center img-border">
              <Image
                alt={title}
                className="w-9 h-9"
                width={36}
                height={36}
                src={
                  "https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
                }
              />
            </div>

            <p className="text-sm capitalize hover:text-[#2c87c3] hover:transition-all hover:ease-in-out">
              {title}
            </p>
          </Link>
        </td>
        <td className="text-right">£{price}</td>
        <td className="text-right">Amazon.co.uk</td>
        <td className="text-right">
          <Link
            href={`${link}`}
            className="text-sm font-bold bg-[#00b16a] py-2 px-4 text-white rounded"
          >
            Buy
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ProductList;
