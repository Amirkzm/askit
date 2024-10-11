"use client";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

type ViewMoreButtonProps = {
  children?: React.ReactNode | null;
  showMoreComponent?: React.ReactNode;
  showLessComponent?: React.ReactNode;
  ContainerClassNames?: React.CSSProperties;
  showLessButton?: boolean;
};

const ViewMoreItems: React.FC<ViewMoreButtonProps> = ({
  children,
  showMoreComponent,
  showLessComponent,
  ContainerClassNames,
  showLessButton = true,
}) => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);

  return (
    <Collapsible
      className={`!transition-all flex ${
        ContainerClassNames ?? "w-full flex-wrap"
      }`}
    >
      <CollapsibleTrigger
        className={`${
          isOpen ? "hidden" : ""
        } text-primary_gradient base-bold mx-auto`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {showMoreComponent ? (
          <div className="self-center">{showMoreComponent}</div>
        ) : (
          <p className="!w-full text-center p-4 ">
            Show More Items <span className="ml-4">&#8744;</span>
          </p>
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        {children}
      </CollapsibleContent>
      <CollapsibleTrigger
        className={`${isOpen ? "" : "hidden"} text-primary_gradient base-bold`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {showLessComponent ??
          (showLessButton && (
            <p className="!w-full text-center p-4 ">
              Show Less Items <span className="ml-4">&#8743;</span>
            </p>
          ))}
      </CollapsibleTrigger>
    </Collapsible>
  );
};

export default ViewMoreItems;
