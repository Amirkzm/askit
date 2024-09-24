import { Button } from "@/components/ui/button";
import React from "react";
import GlobalSearch from "../search/GlobalSearch";

const Questions = () => {
  return (
    <section>
      <div className="flex-between items-center mb-8">
        <h2 className="text-2xl font-bold">Questions</h2>
        <Button className=" base-bold !bg-primary-500">Ask a Question</Button>
      </div>
      <GlobalSearch className="w-full" />
    </section>
  );
};

export default Questions;
