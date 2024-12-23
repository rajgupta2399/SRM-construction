import React from "react";
import { Cover } from "@/components/Components/HomeServices/Cover";

const ServiceHeading = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-0 pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          A leak proof approach from beginning to end <br /> at{" "}
          <Cover>SRM Construction</Cover>
        </h1>
      </div>
    </div>
  );
};

export default ServiceHeading;
