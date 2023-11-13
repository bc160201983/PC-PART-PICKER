import React from "react";

const PageTitleHeader = ({ title }) => {
  return (
    <div className="h-[100px] bg-[#545578] flex justify-center items-center flex-col">
      <h1 className="text-[32px] font-bold text-white">{title}</h1>
    </div>
  );
};

export default PageTitleHeader;
