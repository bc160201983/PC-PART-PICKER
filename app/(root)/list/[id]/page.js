"use server";
import {
  createShareLink,
  fetchShareLinkProducts,
  fetchcategories,
} from "@/app/(dashboard)/lib/actions";
import Build from "@/components/build/Build";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const categories = await fetchcategories();
  const products = await fetchShareLinkProducts(id);
  console.log(products);

  return (
    <div className="min-h-screen bg-[#f4f4f3]">
      <Build
        categories={categories}
        shareLinkID={id}
        shareProducts={products}
      />
    </div>
  );
};

export default page;
