import { tempPopularTags } from "@/constants/tempConst.tsx";
import Link from "next/link";
import React from "react";

const PopularTags = () => {
  return (
    <div className="flex-1">
      <h3 className="h3-bold my-4">Popular Tags</h3>
      <div className="flex gap-4 flex-wrap ">
        {tempPopularTags.map((tag) => (
          <Link
            href="#"
            className="rounded-lg text-xs background-light700_dark400 p-2 cursor-pointer text-center base-bold  text-dark200_light900 hover:background-light800_dark300"
            key={tag.id}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
