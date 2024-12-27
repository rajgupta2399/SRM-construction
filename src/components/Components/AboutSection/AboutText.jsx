import React from "react";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const AboutText = () => {
  return (
    <div className="w-full max-w-lg mx-auto px-0 lg:px-0 pt-8">
      {/* Welcome Section */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[1.5rem] sm:text-[2rem] font-bold text-center sm:text-left ">
          Welcome to SRM Construction
        </p>
      </BoxReveal>

      {/* About Description */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-4 sm:mt-0">
          <p className="text-[0.95rem] sm:text-[1rem] text-center sm:text-left">
            SRM Construction is one of the best waterproofing services in Delhi
            NCR. We specialize in Chemical Waterproofing, Guniting, Kota, and
            more. With over 25 years of expertise, we are among the top
            waterproofing contractors.
          </p>
        </div>
      </BoxReveal>

      {/* Specialization Section */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-4 text-[1rem] sm:text-[0.9rem] font-medium text-center sm:text-left ">
          SRM Construction has many{" "}
          <span className="text-[#5046e6] font-semibold">Specializations:</span>
        </h2>
      </BoxReveal>

      {/* Specialization List */}
      <BoxReveal boxColor={"#5046e6"} duration={1}>
        <ul className="list-disc list-inside mt-4 text-[0.95rem] sm:text-[1rem] space-y-4">
          {[
            {
              icon: "fa-sitemap",
              title: "Site Planning",
              description: "Prepare plans after the site visit.",
            },
            {
              icon: "fa-user-nurse",
              title: "Best Workers",
              description: "We have the best-experienced workers in our field.",
            },
            {
              icon: "fa-creative-commons-nd",
              title: "Civil Engineers",
              description: "Professional engineers working in the field.",
            },
            {
              icon: "fa-road-circle-check",
              title: "Free Site Visit",
              description: "We offer free site visits to our happy customers.",
            },
            {
              icon: "fa-shield",
              title: "10-Year Warranty",
              description:
                "We provide a 10-year warranty to our happy customers.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 group  cursor-pointer"
            >
              <i
                className={`fa-solid ${item.icon} text-lg sm:text-xl text-gray-500 group-hover:text-[#5046e6] transition-colors duration-300`}
              ></i>
              <div>
                <strong className="text-[#0094DE]">{item.title}:</strong>{" "}
                <span>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </BoxReveal>

      {/* Call to Action */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Link href={"/Contact"}>
          <InteractiveHoverButton className="mt-4 sm:mt-6 mx-auto " />
        </Link>
      </BoxReveal>
    </div>
  );
};

export default AboutText;
