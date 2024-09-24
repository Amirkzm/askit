import { popularCatgories } from "@/constants/tempConst";
import React from "react";

const PopularCategories = () => {
  return (
    <div>
      <div className="flex-1 ">
        <h2 className="h3-bold my-4">Popular Categories</h2>
        <div className="flex gap-4 flex-wrap ">
          {popularCatgories.map((category) => (
            <p
              className="rounded-lg text-xs background-light900_dark200 p-2 w-full cursor-pointer text-center base-bold  text-dark200_light900 hover:background-light800_dark300"
              key={category.name}
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
