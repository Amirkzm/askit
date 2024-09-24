import React from "react";
import styles from "./heroSection.module.css";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section
      className={` ${styles.hero} relative  h-[600px] bg-cover bg-center  `}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex-between top-[40%] left-[5%]">
        <div className="text-white base-bold text-left ![font-size:_clamp(2rem,5vw,4rem)] leading-8 md:leading-tight">
          <h1 className="">Let's not waste the time</h1>
          <p className="![font-size:_clamp(1rem,3vw,2rem)]">
            Find The Answers Faster
          </p>
          <Button>Start Here</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
