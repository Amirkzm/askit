import { popularCatgories, tempLatestQuestions } from "@/constants/tempConst";
import React from "react";
import LatestQuestionItem from "./LatestQuestionItem";
import QuestionRecommendation from "./QuestionRecommendation";
import { Separator } from "@/components/ui/separator";
import PopularCategories from "./PopularCategories";
import LatestQuestions from "./LatestQuestions";
import PopularTags from "./PopularTags";

const RightSidebar = () => {
  return (
    <section className="background-light700_dark400 light-border custom-scrollbar sticky right-0  flex h-[75vh] rounded-md w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden text-dark200_light800 !tracking-tight	">
      <LatestQuestions />
      <Separator className="my-4 !background-dark400_light800" />
      <QuestionRecommendation />
      <Separator className="my-4 !background-dark400_light800" />
      <PopularCategories />
      <Separator className="my-4 !background-dark400_light800" />
      <PopularTags />
    </section>
  );
};

export default RightSidebar;
