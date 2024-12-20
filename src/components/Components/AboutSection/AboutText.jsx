import React from "react";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const AboutText = () => {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="sm:text-[2.5rem] text-[1.9rem] font-semibold">
          Welcome to SRM Construction
          {/* <span className="text-[#5046e6]">.</span> */}
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Number One{" "}
          <span className="text-[#5046e6]">Waterproofing Company</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-0">
          <p className=" sm:text-[18px] my-2">
            SRM Construction is one of the best waterproofing in Delhi NCR. we
            deal in all kinds of waterproofing Like Chemical waterproofing,
            Guniting, Kota, etc. We are one of the best waterproofing
            contractors in the market with 25 years in the field. We are a team
            of qualified Civil Engineers, Supervisors and applicators working in
            this field for more than thirty years satisfactorily.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Link href={"/Contact"}>
          <InteractiveHoverButton className="mt-[0.7rem] " />
        </Link>
      </BoxReveal>
    </div>
  );
};

export default AboutText;
