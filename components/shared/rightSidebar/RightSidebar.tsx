import {
  popularCatgories,
  tempLatestQuestions,
} from "@/constants/tempConst.tsx";
import React from "react";
import LatestQuestionItem from "./LatestQuestionItem";
import QuestionRecommendation from "./QuestionRecommendation";
// import { Separator } from "@/components/ui/separator";
import PopularCategories from "./PopularCategories";
import LatestQuestions from "./LatestQuestions";
import PopularTags from "./PopularTags";
import RightSidebarQuestionItem from "./RightSidebarQuestionItem";
import { MdOutlineComputer } from "react-icons/md";

const RightSidebar = () => {
  return (
    <section className="!bg-[#a5a5a300] light-border custom-scrollbar sticky right-0  flex h-[85vh] p-6 rounded-xl w-[350px] flex-col gap-4 overflow-y-auto border-l dark:shadow-none max-xl:hidden text-dark200_light800 !tracking-tight !shadow-xl">
      <LatestQuestions />
      <QuestionRecommendation />

      <PopularCategories />
      <PopularTags />
    </section>
  );
};

export default RightSidebar;
