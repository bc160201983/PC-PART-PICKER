"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Components from "../Components/Components";
import ProductList from "@/components/ProductList/ProductList";
import { findProductByCat } from "@/app/(dashboard)/lib/actions";
import AddButton from "@/components/AddButton/AddButton";
import { usePathname } from "next/navigation";

const ProductTable = ({ products }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const pathname = usePathname();

  const handleCheckBox = (id) => {
    // console.log(id);
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        // If ID is already selected, remove it
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      } else {
        // If ID is not selected, add it
        return [...prevSelectedIds, id];
      }
    });
  };

  return (
    <>
      {pathname !== "/products" && (
        <div className="search flex items-center gap-2 text-xs py-3">
          <div
            onClick={() => setSelectedIds([])}
            className={`${
              selectedIds?.length > 0 ? "com-btn" : "btn-icon"
            } font-normal `}
          >
            Select None
          </div>
          <Link
            href={`/compare/${selectedIds}`}
            className={`${
              selectedIds.length > 0 ? "com-btn" : "btn-icon"
            } font-normal `}
          >
            Compare Selected
          </Link>
        </div>
      )}

      <div className="mt-5">
        <table className="w-full text-sm text-left">
          <thead className="text-[11px] border-1 border-b border-[#dbdbdb]">
            <tr className="border-b-1 border-[#dbdbdb]">
              <th className="border-spacing-0 w-[30px]"></th>
              <th scope="col" className="">
                Name
              </th>
              <th scope="col" className="w-[150px] text-right">
                Price
              </th>
              <th scope="col" className="text-right w-[150px]">
                Where
              </th>

              <th scope="col" className="text-right w-[100px]">
                Buy
              </th>
              <th scope="col" className="text-right w-[100px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              ({
                _id,
                category,
                title,
                link,
                desc,
                price,
                socket,
                series,
                capacity,
                img,
              }) => (
                <tr key={_id} className="border-1 border-b border-[#dbdbdb]">
                  <td className="" onClick={() => handleCheckBox(_id)}>
                    <input
                      type="checkbox"
                      value={_id}
                      checked={selectedIds.includes(_id)}
                      name=""
                      id=""
                      onChange={() => {}}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </td>

                  <td td className="text-xs font-bold py-4">
                    <Link
                      href={`/product/${_id}`}
                      className="flex justify-start items-center gap-2"
                    >
                      <div className="-_image p-1 bg-white w-12 h-12 flex justify-center items-center img-border">
                        <Image
                          alt={title}
                          className="w-9 h-9"
                          width={36}
                          height={36}
                          src={img}
                        />
                      </div>

                      <p className="text-sm capitalize hover:text-[#2c87c3] hover:transition-all hover:ease-in-out">
                        {title}
                      </p>
                    </Link>
                  </td>
                  <td className="text-right">£{price}</td>
                  <td className="text-right">Amazon.co.uk</td>
                  <td className="text-right mr-8">
                    <Link
                      href={`${link}`}
                      className="text-sm font-bold bg-[#00b16a] py-2 px-4 text-white rounded"
                    >
                      Buy
                    </Link>
                  </td>
                  <td className="float-right pt-6">
                    <AddButton
                      text={"Add"}
                      product={{
                        _id,
                        category,
                        title,
                        img,
                        link,
                        desc,
                        price,
                        socket,
                        series,
                        capacity,
                      }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
