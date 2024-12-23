import React from "react";
import Owner from "./Owner";
import { Founder } from "./Founder";
import { Marketing } from "./Marketing";

const ExpertTeam = () => {
  return (
    <>
      <div className="px-12 mt-3">
        <div className="heading">
          <h1 className="font-semibold sm:text-4xl text-2xl text-center sm:text-left">Meet Our Founders</h1>
        </div>
        <div className="flex gap-8 sm:flex-row md:flex-col flex-col lg:flex-row sm:mt-[-30px] mt-[20px]">
          <div className="owner">
            <Owner />
          </div>
          <div className="founder">
            <Founder />
          </div>
          <div className="marketing">
            <Marketing />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertTeam;
