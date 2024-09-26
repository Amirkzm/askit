import { Button } from "@/components/ui/button";
import React from "react";
import GlobalSearch from "../search/GlobalSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tempLatestQuestions } from "@/constants/tempConst";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  return (
    <section>
      <div className="flex-between items-center mb-8">
        <h2 className="text-2xl font-bold">Questions</h2>
        <Button className=" base-bold !bg-primary-500">Ask a Question</Button>
      </div>
      <div className="flex-between gap-16 ">
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
      <div>
        {tempLatestQuestions.map((question) => {
          return (
            <QuestionCard
              owner={question.owner}
              question={question.title}
              tags={question.tags}
              key={question.id}
              view={question.views}
              vote={question.votes}
              answer={question.answers}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Questions;
