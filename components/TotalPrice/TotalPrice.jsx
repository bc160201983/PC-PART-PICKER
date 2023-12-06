"use client";
import { useGlobalContext } from "@/context/context";
import React from "react";

const TotalPrice = ({ shareProducts }) => {
  const { cart } = useGlobalContext();
  const total =
    shareProducts?.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    ) || cart.reduce((accumulator, product) => accumulator + product.price, 0);
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
