"use client";
import { FaHistory } from "react-icons/fa";
import { PiCopySimple } from "react-icons/pi";
import { BsSave, BsClockHistory } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/context/context";
import { BlobProvider } from "@react-pdf/renderer";
import InvoicePDF from "@/components/InvoicePDF/InvoicePDF";
import {
  addProductsShareLink,
  createShareLink,
  fetchShareLinkProducts,
} from "@/app/(dashboard)/lib/actions";
import Cookies from "js-cookie";
import DownloadPDFButton from "../DownloadPDFButton/DownloadPDFButton";

const SearchArea = ({ paramShareLinkID, shareProducts }) => {
  const { cart, startNewSession } = useGlobalContext();
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);
  const copyTextRef = useRef(null);
  const shareLinkID = paramShareLinkID || Cookies.get("shareLinkID");
  const products = shareProducts || cart;

  const copyToClipboard = () => {
    console.log("clicked");
    const copyText = copyTextRef.current;

    if (copyText) {
      const textToCopy = copyText.value;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // Text successfully copied
          setCopyMessageVisible(true);
          setTimeout(() => {
            setCopyMessageVisible(false);
          }, 2000);
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Failed to copy text: ", error);
        });
    }
  };

  return (
    <>
      {copyMessageVisible && (
        <div className="absolute top-0 left-1/2 mt-10 p-2 bg-blue-600 text-white rounded opacity-0 invisible transition-opacity duration-300 translate-x-[-50%] z-10">
          Permalink Copied
        </div>
      )}
      <div
        className="shareArea w-full bg-white rounded-lg p-2 my-[48px] shadow-lg

"
      >
        <div className="flex justify-center items-center  w-2/3">
          {/* <div
            className=" copy-icon bg-[#f7f7f7] flex justify-center items-center cursor-pointer"
            onClick={copyToClipboard}
          >
            <PiCopySimple className="w-5 h-5" />
          </div> */}
          <div className="relative inline-block">
            <div
              className=" copy-icon bg-[#f7f7f7] flex justify-center items-center cursor-pointer"
              onClick={copyToClipboard}
            >
              <PiCopySimple className="w-5 h-5" />
            </div>
            {copyMessageVisible && (
              <div className="absolute top-0 left-1/2 mt-10 p-2 whitespace-nowrap bg-green-600 text-white rounded opacity-100 transition-opacity duration-300 translate-x-[-50%] z-10">
                <FiCheckCircle className="inline text-xl mb-1 mr-1" />
                Copied!
              </div>
            )}
          </div>

          <input
            onClick={copyToClipboard}
            type="text"
            id="copyText"
            ref={copyTextRef} // Attach the ref to the input element
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

          {/* </form> */}
          <DownloadPDFButton selectedProducts={products} />
          {/* <div className="btn-icon cursor-pointer">
            <BsSave className="mr-1 w-4 h-4" />
            Save As
          </div> */}
          <button className="btn-icon" onClick={startNewSession}>
            <AiOutlinePlus className="mr-1 w-4 h-4" />
            Start New
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchArea;
