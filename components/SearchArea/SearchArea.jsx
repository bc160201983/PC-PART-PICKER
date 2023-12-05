"use client";
import { FaHistory } from "react-icons/fa";
import { PiCopySimple } from "react-icons/pi";
import { BsSave, BsClockHistory } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/context";
import { BlobProvider } from "@react-pdf/renderer";
import InvoicePDF from "@/components/InvoicePDF/InvoicePDF";
import {
  addProductsShareLink,
  createShareLink,
  fetchShareLinkProducts,
} from "@/app/(dashboard)/lib/actions";
import Cookies from "js-cookie";

const SearchArea = () => {
  const { cart } = useGlobalContext();
  const shareLinkID = Cookies.get("shareLinkID");

  return (
    <>
      <div
        className="shareArea w-full bg-white rounded-lg p-2 my-[48px] shadow-lg

"
      >
        <div className="flex justify-center items-center  w-2/3">
          <div className=" copy-icon bg-[#f7f7f7] flex justify-center items-center cursor-pointer">
            <PiCopySimple className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={
              shareLinkID
                ? `http://localhost:3000/list/${shareLinkID}`
                : "Add Product to get link"
            }
            placeholder="permalink"
            className="bg-[#f7f7f7] outline-none w-full"
            onChange={() => {}}
          />
        </div>
        <div className="btn-area flex justify-end items-center flex-1 w-1/4">
          {/* <form action={createShareLink(cart)}> */}
          <button
            className="btn-icon"
            onClick={() => addProductsShareLink(cart)}
          >
            <BsClockHistory className="mr-1 w-4 h-4" />
            Share
          </button>
          {/* </form> */}
          <div className="btn-icon">
            <BsSave className="mr-1 w-4 h-4" />
            Save As
          </div>
          <button className="btn-icon">
            <AiOutlinePlus className="mr-1 w-4 h-4" />
            Start New
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchArea;
