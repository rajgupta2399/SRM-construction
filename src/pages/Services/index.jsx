import React from "react";
import ServiceHeading from "./_components/ServiceHeading/ServiceHeading";
import TerraceWaterproofing from "./_components/TerraceWaterproofing/TerraceWaterproofing";
import InjuctionGrouting from "./_components/TerraceWaterproofing/InjuctionGrouting";
import LiftPitWaterproofing from "./_components/TerraceWaterproofing/LiftPitWaterproofing";
import ExpansionJoint from "./_components/TerraceWaterproofing/ExpansionJoint";
import RccStructure from "./_components/TerraceWaterproofing/Rcc";
import BasementWaterproofing from "./_components/TerraceWaterproofing/BasementWaterproofing";
import SwimmingWaterproofing from "./_components/TerraceWaterproofing/SwimmingWaterproofing";
import AppMembraneWaterproofing from "./_components/TerraceWaterproofing/AppMembrane";
import VermiculiteWaterproofing from "./_components/TerraceWaterproofing/VermiculiteWaterproofing";
import TinShedWaterproofing from "./_components/TerraceWaterproofing/TinShedWaterproofing";
import ElastomericLiquidMembraneWaterproofing from "./_components/TerraceWaterproofing/ElastomericLiquidMembraneWaterproofing";
import Shortcreting from "./_components/TerraceWaterproofing/Shortcreting";
import ToiletAndKitchenWaterproofing from "./_components/TerraceWaterproofing/ToiletKitchenWaterproofing";
import PuCoating from "./_components/TerraceWaterproofing/PuCoating";

const Service = () => {
  return (
    <>
      <div>
        <ServiceHeading />
        <TerraceWaterproofing />
        <InjuctionGrouting />
        <LiftPitWaterproofing />
        <ExpansionJoint />
        <RccStructure />
        <BasementWaterproofing />
        <SwimmingWaterproofing />
        <AppMembraneWaterproofing/>
        <VermiculiteWaterproofing/>
        <TinShedWaterproofing/>
        <ElastomericLiquidMembraneWaterproofing/>
        <Shortcreting/>
        <ToiletAndKitchenWaterproofing/>
        <PuCoating/>
      </div>
    </>
  );
};

export default Service;
