import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

const VisionAndMission = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-0 pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Our Vision & Mission
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full sm:px-12 px-6 sm:py-5 py-3 mb-5">
          <WobbleCard containerClassName="col-span-1 h-full bg-pink-800 min-h-[400px] flex flex-col justify-center">
            <div className="px-6">
              <h2 className="text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Our Vision
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                At SRM, our vision is to revolutionize waterproofing
                applications throughout India. We aim to lead the industry,
                establishing fresh benchmarks of excellence and innovation in
                shielding structures from water intrusion and enhancing their
                durability. In all our endeavours, SRM strives to transform the
                perception of waterproofing from a mere necessity to an integral
                aspect of construction that adds value, longevity, and strength
                to every structure we touch.
              </p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 h-full bg-blue-800 min-h-[400px] flex flex-col justify-center">
            <div className="px-6">
              <h2 className="text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Our Mission
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                To be the leading waterproofing solution provider wherever we
                go, providing finest service exceeding customers’ expectations
                and be recognised as the preferred restoration partner in the
                market. <br />
                Our motto is to give the best service to our customer’s pre or
                post application. May be its an appreciation of doing a very
                good job or any challenge that has cropped in while the project
                is on a working stage, SRM CONSTRUCTION Team will be there to
                find the solution for you.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </>
  );
};

export default VisionAndMission;
