import React from "react";

import PartsSelectionTable from "../shared/PartsSelectionTable/PartsSelectionTable";
import PageTitleHeader from "../shared/PageTitleHeader/PageTitleHeader";
import { fetchcategories } from "@/app/(dashboard)/lib/actions";
import { useGlobalContext } from "@/context/context";
import SearchArea from "../SearchArea/SearchArea";

const Build = async ({ shareLinkID, shareProducts }) => {
  return (
    <>
      <PageTitleHeader title="Choose Your Parts" />
      <section className="max-w-6xl flex flex-col m-auto justify-center items-center">
        <SearchArea paramShareLinkID={shareLinkID} />
        <div className="pcPartsSelection h-full w-full">
          <PartsSelectionTable
            shareLinkID={shareLinkID}
            shareProducts={shareProducts}
          />
        </div>
      </section>
    </>
  );
};

export default Build;
