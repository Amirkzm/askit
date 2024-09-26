import React from "react";
import QuestionRecommendation from "./QuestionRecommendation";
import PopularCategories from "./PopularCategories";
import LatestQuestions from "./LatestQuestions";
import PopularTags from "./PopularTags";

const RightSidebar = () => {
  return (
    <section className="!bg-[#a5a5a300] light-border sticky right-0 top-0 h-max  flex  p-6 rounded-xl w-[350px] flex-col gap-4 overflow-y-auto border-l dark:shadow-none  text-dark200_light800 !tracking-tight !shadow-xl no-scrollbar">
      <LatestQuestions />
      <QuestionRecommendation />
      <PopularCategories />
      <PopularTags />
    </section>
  );
};

export default RightSidebar;
