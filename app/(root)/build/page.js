import { fetchcategories } from "@/app/(dashboard)/lib/actions";
import Build from "@/components/build/Build";
import React from "react";
import { metadata } from "../layout";
const page = async () => {
  const categories = await fetchcategories();
  const title = metadata;
  title.title = "Build PC";

  return (
    <div className="min-h-screen bg-[#f4f4f3]">
      <Build categories={categories} />
    </div>
  );
};

export default page;
