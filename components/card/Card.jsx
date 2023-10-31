import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineComment } from "react-icons/ai";

const Card = () => {
  return (
    <>
      <section className="guide flex justify-center w-full bg-[#545578] h-[550px] py-[48px]">
        <div className="flex justify-start items-center max-w-7xl h-full">
          <div className="info flex flex-col justify-center text-left">
            <h1 className="text-[48px] font-bold text-white mb-4">
              Build Guide
            </h1>
            <p className="max-w-[600px] mb-8  pr-[48px] text-[rgba(255,255,255,0.6)]">
              Building your own PC and need ideas on where to get started?
              Explore our build guides which cover systems for a variety of
              use-cases and budgets.
            </p>
            <Link
              className="hover:bg-[#1e5c85] flex-wrap hover:transition-all hover:ease-in-out text-[18px] flex justify-center items-center  rounded text-white font-bold py-2 px-3 bg-[#2C87C3]"
              href={"#"}
            >
              <CgFileDocument className="mr-2" />
              Start Your Build
            </Link>
          </div>
          <div className="card w-[430px] h-[293px]">
            <Image />
            <h3>Entry Level Gaming Build</h3>
            <p></p>
            <div className="price">
              <p>£629.39</p>
              <div>
                <AiOutlineComment />
              </div>
            </div>
          </div>
          <div className="card w-[430px] h-[293px]">
            <Image />
            <h3>Entry Level Gaming Build</h3>
            <p></p>
            <div className="price">
              <p>£629.39</p>
              <div>
                <AiOutlineComment />
              </div>
            </div>
          </div>
          <div className="card w-[430px] h-[293px]">
            <Image />
            <h3>Entry Level Gaming Build</h3>
            <p></p>
            <div className="price">
              <p>£629.39</p>
              <div>
                <AiOutlineComment />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
