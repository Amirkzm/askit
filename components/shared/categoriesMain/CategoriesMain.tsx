import { Button } from "@/components/ui/button";
import React from "react";
import GlobalSearch from "../search/GlobalSearch";
import CategoryItem from "./CategoryItem";
import { tempCatgories, tempLatestQuestions } from "@/constants/tempConst.tsx";
import { MdOutlineComputer } from "react-icons/md";
import ViewMoreItems from "@/components/ui/ViewMoreButton";

const CategoriesMain = () => {
  const showMoreComponent = (
    <div className="bg-transparent text-primary_gradient border-primary-500 border-2 hover:bg-transparent rounded-md p-2">
      All Categories
    </div>
  );

  return (
    <section className="flex-1 flex flex-col gap-4">
      <div className="flex-between w-full">
        <h3 className="base-bold text-dark400_light900">Explore Categories</h3>
        <Button className="bg-transparent text-primary_gradient border-primary-500 border-2 hover:bg-transparent">
          All Categories
        </Button>
      </div>
      <GlobalSearch />
      <div className="grid grid-cols-4 gap-4">
        {tempCatgories.map((category, index) => {
          if (index < 12) {
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
