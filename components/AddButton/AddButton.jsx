"use client";
import { useGlobalContext } from "@/context/context";
import React from "react";

const AddButton = ({ text, product }) => {
  const { addToCart } = useGlobalContext();
  return (
    <div
      onClick={() => addToCart(product)}
      className="btn-add max-w-fit py-[6px] px-[10px] rounded bg-[#2c87c3] text-white font-medium hover:bg-[#153f5b] hover:transition-all hover:ease-in-out cursor-pointer"
    >
      Add
    </div>
  );
};

export default AddButton;
