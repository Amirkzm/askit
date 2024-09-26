"use client";
import React, { useEffect } from "react";

type ProhressIndicatorProps = {
  progress: number;
  classNames?: string;
};

const ProgressIndicator: React.FC<ProhressIndicatorProps> = ({
  progress,
  classNames,
}) => {
  const [width, setWidth] = React.useState<number>(0);

  useEffect(() => {
    setWidth(progress * 0.01 * 100);
  }, [progress]);

  return (
    <div
      role="progressbar"
      className={`relative w-[80%] bg-slate-200 ${classNames}`}
    >
      <div
        className="bg-blue-800 rounded h-1 text-center"
        style={{ width: `${width}px`, transition: "all 2s" }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
