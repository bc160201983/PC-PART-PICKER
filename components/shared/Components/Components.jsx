"use client";
import { fetchcategories } from "@/app/(dashboard)/lib/actions";
import AddButton from "@/components/AddButton/AddButton";
import { RxCross2 } from "react-icons/rx";

import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Bot from "@/components/Bot/Bot";

const Components = ({ catId, name, slug }) => {
  const { cart, removeFromCart } = useGlobalContext();
  // Filter cart items by category
  const selectedProducts = cart.filter((p) => p.category === catId);

  return (
    <>
      <tr className="search h-[48px]">
        <td className="text-xs font-bold underline cursor-pointer text-[#1e5c85] py-2 pr-4 whitespace-nowrap">
          <Link href={`/products/${slug}`}>{name}</Link>
        </td>

        <td>
          {selectedProducts.length > 0 ? (
            // Display selected products in the build table
            <BuildTable products={selectedProducts} />
          ) : (
            // If no products selected, provide a "Choose" link
            <Link
              href={`/products/${slug}`}
              className="bg-[#2c87c3] capitalize py-2 px-4 text-white font-bold rounded hover:bg-[#1e5c85] hover:transition-all hover:ease-in-out"
            >
              Choose A {name}
            </Link>
          )}
        </td>

        <td className="text-right">
          {cart &&
            cart.length > 0 &&
            cart.map((p) => p.category === catId && <p>£{p.price}</p>)}
        </td>
        <td className="text-right">
          {cart &&
            cart.length > 0 &&
            cart.map((p) => p.category === catId && <p>{"Amazon.co.uk"}</p>)}
        </td>

        <td className="text-right">
          {cart &&
            cart.length > 0 &&
            cart.map(
              (p) =>
                p.category === catId && (
                  <Link
                    href={p.link}
                    className="text-sm font-bold bg-[#00b16a] py-2 px-4 text-white rounded"
                  >
                    Buy
                  </Link>
                )
            )}
        </td>
        <td className="text-center flex justify-end p-2 px-4">
          {/* <AddButton text={"Add"} /> */}
          {cart &&
            cart.length > 0 &&
            cart.map(
              (p) =>
                p.category === catId && (
                  <div
                    onClick={() => removeFromCart(p._id)}
                    href="#"
                    className="text-sm font-bold w-4  text-[#00b16a] cursor-pointer"
                  >
                    <RxCross2 className="shrink-0" />
                  </div>
                )
            )}
          {/* <div
            onClick={() => removeFromCart()}
            href="#"
            className="text-sm font-bold w-4 py-2 px-4 text-[#00b16a] cursor-pointer"
          >
            <RxCross2 className="shrink-0" />
          </div> */}
        </td>
      </tr>

      <Bot products={cart} />
    </>
  );
};

export default Components;

const BuildTable = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className="flex items-center gap-4" key={product._id}>
          {/* Display product information here */}
          <div className="h-[40px] w-[40px] flex justify-center items-center bg-white border border-[#dbdbdb]">
            <Image
              className="w-9 h-9"
              width={36}
              height={36}
              src={
                "https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
              }
              alt={product.title}
            />
          </div>
          <Link
            href={`/product/${product._id}`}
            className="hover:underline hover:text-[#1e5c85] hover:transition-all hover:ease-in-out"
          >
            <h1 className="text-[14px] font-bold flex-wrap">{product.title}</h1>
          </Link>
        </div>
      ))}
    </>
  );
};
