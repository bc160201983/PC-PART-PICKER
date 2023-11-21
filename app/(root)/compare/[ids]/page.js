import PageTitleHeader from "@/components/shared/PageTitleHeader/PageTitleHeader";

import { PiCopySimple } from "react-icons/pi";
import { BsSave, BsClockHistory, BsRobot, BsShare } from "react-icons/bs";

import { AiOutlinePlus } from "react-icons/ai";
import Compare from "@/components/compare/compare";
import { fetchComProducts } from "@/app/(dashboard)/lib/actions";

import Bot from "@/components/Bot/Bot";

const page = async ({ params, req }) => {
  const { ids } = params;
  const splitids = decodeURIComponent(ids).split(",");
  const products = await fetchComProducts(decodeURIComponent(ids));
  const url = process.env.HOSTNAME + "/compare/" + decodeURIComponent(ids);

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
              value={url}
              placeholder="permalink"
              className="bg-[#f7f7f7] outline-none w-full"
            />
          </div>
          <div className="btn-area flex justify-end items-center flex-1 w-1/4">
            <button className="btn-icon">
              <BsShare className="mr-1 w-4 h-4" />
              Share
            </button>
            <button className="btn-icon">
              <BsShare className="mr-1 w-4 h-4" />
              Share
            </button>
            <button className="btn-icon">
              <AiOutlinePlus className="mr-1 w-4 h-4" />
              Start New
            </button>
          </div>
        </div>
        <div className={`flex w-full gap-5`}>
          {products.map((product) => (
            <Compare
              id={product._id}
              title={product.title}
              link={product.link}
              price={product.price}
              brand={product.brand}
              socket={product.socket}
              series={product.series}
              copacity={product.copacity}
            />
          ))}
        </div>
      </div>
      <Bot />
    </div>
  );
};

export default page;
