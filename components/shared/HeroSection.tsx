import React from "react";
import styles from "./heroSection.module.css";
import { Button } from "../ui/button";
import GlobalSearch from "./search/GlobalSearch";

const HeroSection = () => {
  return (
    <section
      className={` ${styles.hero} relative  h-[400px] bg-cover bg-center  `}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="hidden md:block md:w-[50%] md:flex-center absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <GlobalSearch />
      </div>
      <div className="absolute inset-0 flex-between top-[40%] left-[5%]">
        <div className="text-white base-bold text-left ![font-size:_clamp(2rem,5vw,4rem)] leading-8 md:leading-tight">
          <h1 className="">Let's not waste the time</h1>
          <p className="![font-size:_clamp(1rem,3vw,2rem)]">
            Find The Answers Faster
          </p>
          <Button className="mt-4 self-end !primary-gradient font-bold">
            Start Here
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
