import AboutBanner from "@/components/Components/Hero/AboutBanner";
import React from "react";
import AboutTextPage from "./_components/AboutText/AboutTextPage";
import VisionAndMission from "./_components/AboutText/VisionAndMission";
import AboutClient from "./_components/AboutText/AboutClient";
import ExpertTeam from "@/components/Components/Team/ExpertTeam";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutTextPage />
      <VisionAndMission/>
      <ExpertTeam/>
      <AboutClient/>
    </div>
  );
};

export default About;
