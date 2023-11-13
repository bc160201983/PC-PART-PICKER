import React from "react";
import Components from "../Components/Components";
import ProductList from "@/components/ProductList/ProductList";

const ProductTable = () => {
  return (
    <>
      <div className="mt-5">
        <table className="w-full text-sm text-left">
          <thead className="text-[11px] border-1 border-b border-[#dbdbdb]">
            <tr className="border-b-1 border-[#dbdbdb]">
              <th className="border-spacing-0 w-[30px]"></th>
              <th scope="col" className="">
                Name
              </th>
              <th scope="col" className="w-[150px] text-right">
                Colour
              </th>
              <th scope="col" className="text-right w-[150px]">
                Rating
              </th>
              <th scope="col" className="text-right w-[100px]">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <ProductList />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
