"use server";
import {
  createShareLink,
  fetchShareLinkProducts,
  fetchcategories,
} from "@/app/(dashboard)/lib/actions";
import Build from "@/components/build/Build";
import React from "react";
import { redirect } from "next/navigation";

const page = async ({ params }) => {
  const { id } = params;
  const categories = await fetchcategories();
  const products = await fetchShareLinkProducts(id);
  if (!products) {
    return redirect("/build");
  }

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
