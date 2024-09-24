import Link from "next/link";
import React from "react";

interface CategoryItemProps {
  title: string;
  icon: string | React.ReactNode;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, icon }) => {
  return (
    <Link
      href={"#"}
      className="p-8 background-dark300_light800 rounded-md !text-light900_dark100 flex flex-col items-center flex-wrap hover:background-dark400_light700"
    >
      <span className="text-3xl">{icon}</span>
      <p className="base-bold">{title}</p>
    </Link>
  );
};

export default CategoryItem;
