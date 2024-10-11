"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import GlobalSearch from "../search/GlobalSearch";
import CategoryItem from "./CategoryItem";
import { tempCatgories, tempLatestQuestions } from "@/constants/tempConst.tsx";
import { MdOutlineComputer } from "react-icons/md";
import ViewMoreItems from "@/components/ui/ViewMoreButton";
import RightSidebarQuestionItem from "../rightSidebar/RightSidebarQuestionItem";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Carousel from "@/components/carousel/Carousel";

const CategoriesMain = () => {
  const showMoreComponent = (
    <div className="bg-transparent text-primary_gradient border-primary-500 border-2 hover:bg-transparent rounded-md p-2">
      All Categories
    </div>
  );

  return (
    <section className="flex flex-col gap-4 flex-wrap">
      <div className="flex-between w-full">
        <h3 className="base-bold text-dark400_light900">Explore Categories</h3>
        <Button className="bg-transparent text-primary_gradient border-primary-500 border-2 hover:bg-transparent">
          All Categories
        </Button>
      </div>
      <div className="flex-between gap-16 mb-8">
        <GlobalSearch className="flex-1" />
        <Select>
          <SelectTrigger className="w-[180px] !h-[50px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="self-center">
        <h1 className="h1-bold text-center mb-16 text-dark400_light900 ">
          Top Engaged questions
        </h1>
        <Carousel containerStyle="w-[800px]">
          {tempLatestQuestions.map((question, index) => (
            <RightSidebarQuestionItem
              question={question.title}
              tags={question.tags}
              key={question.id}
              owner={question.owner}
              categoryIcon
            />
          ))}
        </Carousel>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {tempCatgories.map((category, index) => {
          if (index < 11) {
            return (
              <CategoryItem
                title={category.name}
                key={index}
                icon={<MdOutlineComputer />}
              />
            );
          } else if (index === 11) {
            return (
              <CategoryItem
                title={"All Categories"}
                key={index}
                icon={<MdOutlineComputer />}
              />
            );
          }
        })}
        <div className="col-span-4">
          <ViewMoreItems
            ContainerClassNames={{ display: "grid" }}
            showMoreComponent={showMoreComponent}
            showLessButton={false}
          >
            <div className="grid grid-cols-4 gap-4">
              {tempCatgories.map((category, index) => {
                if (index >= 12) {
                  return (
                    <CategoryItem
                      title={category.name}
                      key={category.id}
                      icon={<MdOutlineComputer />}
                    />
                  );
                }
                return null;
              })}
            </div>
          </ViewMoreItems>
        </div>
      </div>
    </section>
  );
};

export default CategoriesMain;
