import React from "react";

import PartsSelectionTable from "../shared/PartsSelectionTable/PartsSelectionTable";
import PageTitleHeader from "../shared/PageTitleHeader/PageTitleHeader";
import { fetchcategories } from "@/app/(dashboard)/lib/actions";
import { useGlobalContext } from "@/context/context";
import SearchArea from "../SearchArea/SearchArea";

const Build = async () => {
  return (
    <>
      <PageTitleHeader title="Choose Your Parts" />
      <section className="max-w-6xl flex flex-col m-auto justify-center items-center">
        <SearchArea />
        <div className="pcPartsSelection h-full w-full">
          <PartsSelectionTable />
        </div>
      </section>
    </>
  );
};

export default Build;
