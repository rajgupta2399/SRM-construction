import React from "react";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const AboutText = () => {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="sm:text-[2.3rem] text-[1.9rem] font-semibold">
          Welcome to SRM Construction
          {/* <span className="text-[#5046e6]">.</span> */}
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-0">
          <p className=" sm:text-[18px] my-2">
            SRM Construction is one of the best waterproofing in Delhi NCR. we
            deal in all kinds of waterproofing Like Chemical waterproofing,
            Guniting, Kota, etc. We are one of the best waterproofing
            contractors in the market with 25 years in the field.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          SRM Construction have many{" "}
          <span className="text-[#5046e6]"> Specialization are :</span>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={1}>
        <ul className="list-disc list-inside mt-2 text-[1rem]">
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-sitemap text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300 "></i>
            <strong>
              <span className="text-[#0094DE]">Site Planning :</span>
            </strong>{" "}
            Prepare plan after the site visit.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-user-nurse text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">Best Workers :</span>
            </strong>{" "}
            We have the best experienced workers in our field.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-brands fa-creative-commons-nd text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">Civil Engineers :</span>
            </strong>{" "}
            They work professionally in their field.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-road-circle-check text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">Free Site Visit :</span>
            </strong>{" "}
            We offer free site visits to our happy customers.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-shield text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">10-Year Warranty :</span>
            </strong>{" "}
            We provide a 10-year warranty to our happy customers.
          </li>
        </ul>
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
