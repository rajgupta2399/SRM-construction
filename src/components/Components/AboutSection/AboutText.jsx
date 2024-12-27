import React from "react";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const AboutText = () => {
  return (
    <div className="w-full max-w-lg mx-auto sm:px-4 lg:px-8 pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[1.8rem] sm:text-[2.3rem] font-semibold text-center sm:text-left">
          Welcome to SRM Construction
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-4 sm:mt-6">
          <p className="text-[1rem] sm:text-[1.125rem] my-2 text-center sm:text-left">
            SRM Construction is one of the best waterproofing in Delhi NCR. We
            deal in all kinds of waterproofing like Chemical waterproofing, Guniting,
            Kota, etc. With 25 years in the field, we are among the best waterproofing
            contractors.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] sm:text-[1.25rem] text-center sm:text-left">
          SRM Construction has many{" "}
          <span className="text-[#5046e6]">Specializations:</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={1}>
        <ul className="list-disc list-inside mt-4 text-[1rem] sm:text-[1.125rem]">
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-sitemap text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">Site Planning:</span>
            </strong>{" "}
            Prepare plans after the site visit.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-user-nurse text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">Best Workers:</span>
            </strong>{" "}
            We have the best-experienced workers in our field.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-brands fa-creative-commons-nd text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">Civil Engineers:</span>
            </strong>{" "}
            Professional engineers working in the field.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-road-circle-check text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">Free Site Visit:</span>
            </strong>{" "}
            We offer free site visits to our happy customers.
          </li>
          <li className="flex items-start gap-2 group mb-3 cursor-pointer">
            <i className="fa-solid fa-shield text-2xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300"></i>
            <strong>
              <span className="text-[#0094DE]">10-Year Warranty:</span>
            </strong>{" "}
            We provide a 10-year warranty to our happy customers.
          </li>
        </ul>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Link href={"/Contact"}>
          <InteractiveHoverButton className="mt-4 sm:mt-6 mx-auto" />
        </Link>
      </BoxReveal>
    </div>
  );
};

export default AboutText;
