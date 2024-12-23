import React from "react";
import ServiceHeading from "./_components/ServiceHeading/ServiceHeading";
import TerraceWaterproofing from "./_components/TerraceWaterproofing/TerraceWaterproofing";
import InjuctionGrouting from "./_components/TerraceWaterproofing/InjuctionGrouting";
import LiftPitWaterproofing from "./_components/TerraceWaterproofing/LiftPitWaterproofing";
import ExpansionJoint from "./_components/TerraceWaterproofing/ExpansionJoint";
import RccStructure from "./_components/TerraceWaterproofing/Rcc";
import BasementWaterproofing from "./_components/TerraceWaterproofing/BasementWaterproofing";

const Service = () => {
  return (
    <>
      <div>
        <ServiceHeading/>
        <TerraceWaterproofing/>
        <InjuctionGrouting/>
        <LiftPitWaterproofing/>
        <ExpansionJoint/>
        <RccStructure/>
        <BasementWaterproofing/>
      </div>
    </>
  );
};

export default Service;
