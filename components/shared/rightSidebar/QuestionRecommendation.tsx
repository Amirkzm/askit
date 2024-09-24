import { Button } from "@/components/ui/button";
import ViewMoreButton from "@/components/ui/ViewMoreButton";
import { tempLatestQuestions } from "@/constants/tempConst.tsx";
import React from "react";
import RightSidebarQuestionItem from "./RightSidebarQuestionItem";
import { MdOutlineComputer } from "react-icons/md";
import ViewMoreItems from "@/components/ui/ViewMoreButton";

const QuestionRecommendation = () => {
  return (
    <section className="flex-1">
      <div className="flex-1 flex flex-col">
        <h2 className="h3-bold text-dark100_light900">You May Also Like</h2>
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
    </section>
  );
};

export default QuestionRecommendation;
