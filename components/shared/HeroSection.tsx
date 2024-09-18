import React from "react";
import styles from "./heroSection.module.css";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section
      className={` ${styles.hero} relative w-full h-[600px] bg-cover bg-center bg-orange-100 `}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex-between top-[40%] left-48">
        <div className="text-white base-bold text-left">
          <h1 className="text-4xl font-bold">Let's not waste the time</h1>
          <p className="text-lg">Find The Answers Faster</p>
          <Button>Start Here</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
