import React from "react";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const AbText = () => {
  return (
    <div className=" w-full items-center justify-center overflow-hidden pt-0 sm:px-12 px-6">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-0 w-full">
          <p className=" sm:text-[22px] my-2 w-full">
            Through 23 years of professional experience, our specialized team
            has successfully provided waterproofing solutions for homes,
            industrial sites, office & commercial spaces all over India. Since
            1998 . SRM CONSTRUCTION Waterproofing has established its reputation
            in the market as a reliable and cost- effective waterproofing
            coating from the roof, to the walls and to wet areas. Our hands-on
            approach and an established record of satisfied customers have
            contributed greatly to the rapid growth of our company over the
            years. Through added new technologies & product base we have set
            benchmark for our competitors in waterproofing solutions for
            residential and commercial properties. We aim to help you determine
            the source of water leakage, providing high quality, environmental
            friendly and cost effective waterproofing solutions for both
            interior and exterior. We also provide waterproofing consultancy
            including diagnosis and problem solving for all type of water
            leakage issues and projects. This will often include site visits and
            recommendations for specialty applications. We are into this
            business for part 23 years and associated with most of the reputed
            builders in the Delhi/NCR.
          </p>
        </div>
      </BoxReveal>
    </div>
  );
};

export default AbText;
