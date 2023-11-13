import Link from "next/link";
import React from "react";

const Components = () => {
  return (
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
      <td className="text-right">$2999</td>
      <td className="text-right">Amazon.co.uk</td>
      <td className="text-right">
        <Link
          href="#"
          className="text-sm font-bold bg-[#00b16a] py-2 px-4 text-white rounded"
        >
          Buy
        </Link>
      </td>
    </tr>
  );
};

export default Components;
