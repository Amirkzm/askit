import Link from "next/link";
import React from "react";
import { RiUserFollowLine } from "react-icons/ri";

type TagCardProps = {
  tagTitle: string;
  questions: number;
  followers: number;
  description: string;
};

const TagCard: React.FC<TagCardProps> = ({
  followers,
  questions,
  tagTitle,
  description,
}) => {
  return (
    <Link
      href={"#"}
      className="flex flex-col background-light900_dark200 !text-dark100_light900 shadow-lg p-6 gap-4 flex-grow justify-between"
    >
      <h3 className="background-light700_dark300 p-2 base-bold text-sm">
        {tagTitle}
      </h3>
      <p className="p-2 text-sm">{description}</p>

      <div className="flex-between">
        <p className="text-xs">
          <span className="text-primary-500">{questions} +</span> Questions
        </p>
        <div className="flex-between text-sm  gap-2">
          <span className="text-xs">{followers}</span>
          <RiUserFollowLine className="text-primary-500" />
        </div>
      </div>
    </Link>
  );
};

export default TagCard;
