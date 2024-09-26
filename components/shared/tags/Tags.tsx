import React from "react";
import GlobalSearch from "../search/GlobalSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tempTags } from "@/constants/tempConst";
import TagCard from "./TagCard";

const Tags = () => {
  return (
    <div>
      <h3 className="h3-bold mb-8">All Tags</h3>
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
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {tempTags.map((tag) => (
          <TagCard
            key={tag.name}
            description={tag.description}
            followers={tag.followers}
            questions={tag.questions}
            tagTitle={tag.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;
