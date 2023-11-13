import PageTitleHeader from "@/components/shared/PageTitleHeader/PageTitleHeader";
import React from "react";
import { FaHistory } from "react-icons/fa";
import { PiCopySimple } from "react-icons/pi";
import { BsSave, BsClockHistory } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Compare from "@/components/compare/Compare";

const page = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f3]">
      <PageTitleHeader
        title="CPU Comparison
"
      />
      <div className="max-w-6xl m-auto">
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
              value={"https://uk.pcpartpicker.com/list/jDgyVn"}
              placeholder="permalink"
              className="bg-[#f7f7f7] outline-none w-full"
            />
          </div>
          <div className="btn-area flex justify-end items-center flex-1 w-1/4">
            <button className="btn-icon">
              <BsClockHistory className="mr-1 w-4 h-4" />
              History
            </button>
            <button className="btn-icon">
              <BsSave className="mr-1 w-4 h-4" />
              Save As
            </button>
            <button className="btn-icon">
              <AiOutlinePlus className="mr-1 w-4 h-4" />
              Start New
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center gap-5">
          <Compare />
          <Compare />
        </div>
      </div>
    </div>
  );
};

export default page;
