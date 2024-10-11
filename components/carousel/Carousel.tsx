import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  backButton?: React.ReactNode;
  forwardButton?: React.ReactNode;
  children: React.ReactNode[];
  containerStyle?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  backButton,
  forwardButton,
  containerStyle,
  children,
}) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const backBtnHandler = () => {
    if (activeItem - 1 >= 0) {
      setActiveItem((prev) => prev - 1);
    }
  };

  const forwardBtnHandler = () => {
    if (activeItem + 1 < children.length) {
      setActiveItem((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current && itemRefs.current[activeItem]) {
      const carouselRect = carouselRef.current.getBoundingClientRect();
      const activeCardRect =
        itemRefs.current[activeItem]?.getBoundingClientRect();

      if (activeCardRect) {
        const scrollPosition =
          activeCardRect.left -
          carouselRect.left +
          carouselRef.current.scrollLeft -
          (carouselRect.width / 2 - activeCardRect.width / 2); // Centering logic

        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeItem]);

  return (
    <div className="flex-center gap-8 ">
      {backButton ? (
        <div onClick={backBtnHandler}>{backButton}</div>
      ) : (
        <button
          onClick={backBtnHandler}
          className="bg-slate-300 p-4 rounded-md hidden md:block"
        >
          Back
        </button>
      )}
      <div
        className={`flex w-[600px] overflow-x-scroll no-scrollbar px-20 ${containerStyle}`}
        ref={carouselRef}
      >
        {children.map((child, index) => (
          <div
            className={`transition-transform duration-300 ${
              activeItem === index && "!scale-[1.30] !-translate-y-8 !z-[10]"
            } ${activeItem < index && "rotate-12"} ${
              activeItem > index && "-rotate-12"
            } top-0 left-0 relative mt-16`}
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {forwardButton ? (
        <div onClick={forwardBtnHandler}>{forwardButton}</div>
      ) : (
        <button
          onClick={forwardBtnHandler}
          className="bg-slate-300 p-4 rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Carousel;
