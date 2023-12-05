"use server";
import PageTitleHeader from "@/components/shared/PageTitleHeader/PageTitleHeader";
import React from "react";
import Image from "next/image";
import AddButton from "@/components/AddButton/AddButton";
import {
  fetchBrandById,
  fetchProductById,
} from "@/app/(dashboard)/lib/actions";

const page = async ({ params }) => {
  const { id } = params;
  const product = await fetchProductById(id);
  const brand = await fetchBrandById(product.brand);

  return (
    <>
      <PageTitleHeader title={product?.title} />
      <div className="wrapper h-screen flex justify-center w-full bg-[#f4f4f3]">
        <div className="max-w-6xl h-full w-full flex py-[48px]">
          <div className="leftSide h-full w-[317px] pl-[24px] flex flex-col ">
            <div className="info p-6 bg-white rounded-lg shadow-lg  ">
              <Image
                alt="image"
                className="w-[256px] h-[256px]"
                width={256}
                height={256}
                src={product.img}
              />
              <div className="actionBtn py-4 px-2 flex justify-center items-center gap-4 border border-[#dfdfdf]">
                <div className="flex justify-center items-center gap-1">
                  <p className="font-bold">Price:</p> £{product?.price}
                </div>
                <AddButton text={"Add"} product={product} />
              </div>
            </div>
            <div className="specification mt-10">
              <h2 className="font-bold text-lg pb-4 border-b border-[#dbdbdb]">
                Specifications
              </h2>
              <div className="divgroup-specs text-xs py-3 border-b border-[#dbdbdb]">
                <h3 className="font-bold pb-1">Manufacturer</h3>
                <p className="text-sm uppercase">{brand.name}</p>
              </div>
              <div className="divgroup-specs text-xs py-3 border-b border-[#dbdbdb]">
                <h3 className="font-bold">Core Count</h3>
                <p className="text-sm">{product.core_count}</p>
              </div>
              <div className="divgroup-specs text-xs py-3 border-b border-[#dbdbdb]">
                <h3 className="font-bold">Performance Core Clock</h3>
                <p className="text-sm">{product?.core_clock}</p>
              </div>
              <div className="divgroup-specs text-xs py-3 border-b border-[#dbdbdb]">
                <h3 className="font-bold">Series</h3>
                <p className="text-sm capitalize">{product?.series}</p>
              </div>
              <div className="divgroup-specs text-xs py-3 border-b border-[#dbdbdb]">
                <h3 className="font-bold">Microarchitecture</h3>
                <p className="text-sm capitalize">
                  {product.microarchitecture}
                </p>
              </div>
              <div className="divgroup-specs text-xs py-3 border-b border-[#dbdbdb]">
                <h3 className="font-bold">Socket</h3>
                <p className="text-sm capitalize">{product?.socket}</p>
              </div>
              <div className="divgroup-specs text-xs py-3 border-b border-[#dbdbdb]">
                <h3 className="font-bold">Capacity</h3>
                <p className="text-sm capitalize">{product?.capacity}</p>
              </div>
            </div>
          </div>
          <div className="rightSide h-full w-3/4 pl-6">{product?.desc}</div>
        </div>
      </div>
    </>
  );
};

export default page;
