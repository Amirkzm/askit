import Link from "next/link";
import React from "react";

type LatestQuestionItemProps = {
  question: string;
  tags: string[];
};

const LatestQuestionItem: React.FC<LatestQuestionItemProps> = ({
  question,
  tags,
}) => {
  return (
    <Link
      href={"#"}
      className="rounded-lg background-light900_dark200 mt-2 flex flex-col justify-between items-start gap-2 p-4 shadow-md"
    >
      <p className="text-dark100_light900">{question}</p>
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
    </Link>
  );
};

export default LatestQuestionItem;
