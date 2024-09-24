import { tempLatestQuestions } from "@/constants/tempConst.tsx";
import React from "react";
import LatestQuestionItem from "./LatestQuestionItem";
import ViewMoreItems from "@/components/ui/ViewMoreButton";
import RightSidebarQuestionItem from "./RightSidebarQuestionItem";
import { MdOutlineComputer } from "react-icons/md";

const LatestQuestions = () => {
  return (
    <div className="flex-1 flex flex-col">
      <h2 className="h3-bold text-dark100_light900">Latest Questions</h2>
      {tempLatestQuestions.map((question, index) => {
        if (index < 2) {
          return (
            <RightSidebarQuestionItem
              key={question.id}
              owner={question.owner}
              question={question.title}
              tags={question.tags}
              categoryIcon={<MdOutlineComputer />}
            />
          );
        }
        return null;
      })}
      <ViewMoreItems>
        {tempLatestQuestions.map((question, index) => {
          if (index >= 2) {
            return (
              <RightSidebarQuestionItem
                key={question.id}
                owner={question.owner}
                question={question.title}
                tags={question.tags}
                categoryIcon={<MdOutlineComputer />}
              />
            );
          }
          return null;
        })}
      </ViewMoreItems>
    </div>
  );
};

export default LatestQuestions;
