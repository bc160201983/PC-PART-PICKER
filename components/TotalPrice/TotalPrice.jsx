"use client";
import { useGlobalContext } from "@/context/context";
import React from "react";

const TotalPrice = () => {
  const { cart } = useGlobalContext();
  const total = cart.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
  return (
    <>
      <tr className="h-[48px] text-[20px] leading-[30px]">
        <td className="text-right"></td>
        <td className="text-right"></td>
        <td className="text-left">Total:</td>
        <td className="text-left font-bold">£{total}</td>
      </tr>
    </>
  );
};

export default TotalPrice;
