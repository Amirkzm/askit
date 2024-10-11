"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type QuestionCarouselProps = {
  question?: string;
  answer?: number;
  vote?: number;
  view?: number;
  tags?: string[];
  owner?: string;
  items?: any[];
  children: React.ReactNode[];
};

const QuestoinCarousel: React.FC<QuestionCarouselProps> = ({
  answer,
  owner,
  question,
  tags,
  view,
  vote,
  items,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < children.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <Carousel
      className={`p-4 mt-16 w-[${
        windowWidth * 0.8
      }px] sm:w-[600px] md:w-[700px] lg:w-[900px]`}
      style={{ transition: "all 2s" }}
    >
      <CarouselContent className="p-8">
        {children.map((item, index) => (
          <CarouselItem
            className={`${
              activeIndex === index && "!scale-[1.30] !-translate-y-8 !z-[10]"
            } ${activeIndex < index && "rotate-12"}
            ${
              activeIndex > index && "-rotate-12"
            } basis-1/3 top-0 left-0 relative mt-16 `}
            key={index}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div onClick={handlePrevious}>
        <CarouselPrevious />
      </div>
      <div onClick={handleNext}>
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default QuestoinCarousel;
