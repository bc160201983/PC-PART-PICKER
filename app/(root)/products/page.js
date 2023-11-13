import PageTitleHeader from "@/components/shared/PageTitleHeader/PageTitleHeader";
import PartsSelectionTable from "@/components/shared/PartsSelectionTable/PartsSelectionTable";
import ProductTable from "@/components/shared/ProductsTable/ProductTable";
import React from "react";
import { BsSearch } from "react-icons/bs";

const page = () => {
  return (
    <>
      <PageTitleHeader
        title="Choose A CPU Cooler
"
      />
      <section className="min-h-screen bg-[#f4f4f3] flex justify-center ">
        <div className="wrapper px-12 my-8">
          <div className="left-sidebar w-[250px] h-full">sidebar</div>
          <div className="main flex-1 w-[1280px] h-full">
            <div className="header">
              <div className="search flex justify-between items-center">
                <h1 className="font-bold text-[18xp]">
                  972 Compatible Products
                </h1>
                <div className=" flex justify-center items-center h-full mb-4">
                  <BsSearch />
                  <input
                    type="text"
                    className="outline-none rounded bg-white h-[30px] ml-2 search-box"
                  />
                </div>
              </div>
              <div className="search flex items-center gap-2 text-xs py-3">
                <p className="cursor-pointer text-[#2c87c3] hover:transition-all hover:ease-in-out hover:underline">
                  Select All
                </p>
                <p className="cursor-pointer text-[#929292] hover:text-[#2c87c3] hover:transition-all hover:ease-in-out hover:underline">
                  Select None
                </p>
                <p className="cursor-pointer text-[#929292] hover:text-[#2c87c3] hover:transition-all hover:ease-in-out hover:underline">
                  Compare Selected
                </p>
              </div>
              <div className="product-list">
                <div className="pcPartsSelection h-full w-full">
                  <ProductTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
