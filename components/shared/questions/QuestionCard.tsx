import AvatarIcon from "@/components/icons/Avatar";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";

type QuestioCardProps = {
  owner: string;
  question: string;
  tags: string[];
  view: number;
  vote: number;
  answer: number;
};

const QuestionCard: React.FC<QuestioCardProps> = ({
  owner,
  question,
  tags,
  view,
  vote,
  answer,
}) => {
  return (
    <div className="rounded-lg background-light900_dark200 mt-6 flex flex-col justify-between items-start gap-4 p-4 shadow-md">
      <div className="flex justify-between w-full items-center">
        <div className="flex-center gap-1">
          <AvatarIcon />
          <p className="text-dark100_light900 text-sm base-bold">{owner}</p>
        </div>
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
        <div className="flex-between gap-4 !text-light400_light500 font-bold text-xs">
          <div className="flex-between">
            <AiOutlineLike />
            <p>{vote} Voted</p>
          </div>
          <div className="flex-between">
            <RiQuestionAnswerLine />
            <p>{answer} Answered</p>
          </div>
          <div className="flex-between">
            <GrView />
            <p>{view} Viewed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
