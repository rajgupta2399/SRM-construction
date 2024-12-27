import React from "react";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const AboutSection = () => {
  return (
    <div className=" px-6 sm:mx-10 mt-5 sm:mb-[0px] mb-10">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 sm:mt-[-35px]">
          <AboutText />
        </div>
        <div className="w-full lg:w-1/2">
          <AboutImage />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
