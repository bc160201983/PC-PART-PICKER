import Link from "next/link";
import React from "react";

const PartsSelectionTable = () => {
  return (
    <>
      <div className="">
        <table className="w-full text-sm text-left">
          <thead className="text-[11px] border-1 border-b border-[#dbdbdb]">
            <tr className="border-b-1 border-[#dbdbdb]">
              <th className="border-spacing-0 w-[100px]">Component</th>
              <th scope="col" className="">
                Selection
              </th>
              <th scope="col" className="w-[100px]">
                Price
              </th>
              <th scope="col" className="">
                Where
              </th>
              <th scope="col" className="">
                Buy
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-xs font-bold underline text-[#1e5c85] py-2 whitespace-nowrap">
                CPU
              </td>

              <td className="text-xs font-bold py-4">
                <Link
                  href={"#"}
                  className="bg-[#2c87c3] py-2 px-4 text-white font-bold rounded"
                >
                  Choose A CPU
                </Link>
              </td>
              <td className="">$2999</td>
              <td className="">Amazon.co.uk</td>
              <td className="p">
                <Link
                  href="#"
                  className="text-sm font-bold bg-[#00b16a] py-2 px-4 text-white rounded"
                >
                  Buy
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PartsSelectionTable;
