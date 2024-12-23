import React from "react";
import { Cover } from "./Cover";
import { WobbleCardDemo } from "./ServiceCard";

const OurService = () => {
  return (
    <div className="mt-[-30px] sm:mt-[-10px]">
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-0 pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Cost-Effective Waterproofing Solutions <br /> at{" "}
          <Cover>SRM Construction</Cover>
        </h1>
      </div>
      <div className="mb-12">
        <WobbleCardDemo />
      </div>
    </div>
  );
};

export default OurService;
