"use client";
import Link from "next/link";
import React from "react";
import Avatar from "@/components/icons/Avatar";

import { GoFileSymlinkFile } from "react-icons/go";

type RihghtSidebarQuestionItemProps = {
  owner: string;
  question: string;
  tags: string[];
  categoryIcon: React.ReactNode;
};

const RightSidebarQuestionItem: React.FC<RihghtSidebarQuestionItemProps> = ({
  owner,
  question,
  tags,
  categoryIcon,
}) => {
  return (
    <div>
      <div className="rounded-lg background-light900_dark200 mt-2 flex flex-col justify-between items-start gap-2 p-4 shadow-md">
        <div className="flex justify-between w-full items-center">
          <div className="flex-center gap-1">
            <Avatar />
            <p className="text-dark100_light900 text-sm base-bold">{owner}</p>
          </div>
          {categoryIcon}
        </div>
        <p className="text-dark100_light900 ">{question}</p>

        <div className="flex-between  w-full">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="rounded-lg text-xs text-dark200_light800 background-light700_dark400 p-1"
              >
                {tag}
              </p>
            ))}
          </div>
          <Link href="#" className="primary-gradient p-1 px-2 rounded-md">
            <GoFileSymlinkFile />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSidebarQuestionItem;
