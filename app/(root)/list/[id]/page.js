import {
  createShareLink,
  fetchcategories,
} from "@/app/(dashboard)/lib/actions";
import Build from "@/components/build/Build";
import React from "react";

const page = async () => {
  const categories = await fetchcategories();

  return (
    <div className="min-h-screen bg-[#f4f4f3]">
      <Build categories={categories} />
    </div>
  );
};

export default page;
