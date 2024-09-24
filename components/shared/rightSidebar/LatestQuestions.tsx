import { tempLatestQuestions } from "@/constants/tempConst";
import React from "react";
import LatestQuestionItem from "./LatestQuestionItem";

const LatestQuestions = () => {
  return (
    <div className="flex-1">
      <h2 className="h3-bold text-dark100_light900">Latest Questions</h2>
      {tempLatestQuestions.map((question) => (
        <LatestQuestionItem
          key={question.id}
          question={question.title}
          tags={question.tags}
        />
      ))}
    </div>
  );
};

export default LatestQuestions;
