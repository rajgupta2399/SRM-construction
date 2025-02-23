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
            Welcome to SRM Waterproofing Contractor, your trusted partner for
            comprehensive waterproofing solutions since 1995. As a
            third-generation family business, we pride ourselves on our
            deep-rooted expertise and commitment to excellence in the field of
            waterproofing. Our team consists of highly skilled specialists and
            dedicated workers who ensure the highest quality of service. Our
            professionally managed site inspection and consultancy services are
            designed to provide tailored, value-added solutions that meet our
            clients' specific needs. Whether it's for residential, commercial,
            or industrial properties, we offer a wide range of services to
            protect your structures from water damage. Our services include
            terrace waterproofing, swimming pool waterproofing, tin shed
            waterproofing, PU coating, and toilet and kitchen
            waterproofing, among others.
          </p>
          <p className=" sm:text-[22px] my-2 w-full">
            At SRM Waterproofing Contractor, we believe in delivering
            lasting results through meticulous workmanship and innovative
            techniques. Our goal is to ensure that every project we undertake is
            executed with precision and attention to detail, providing our
            clients with peace of mind and long-term protection. Contact us
            today to learn more about how we can assist you with your
            waterproofing needs. Experience the reliability and expertise that
            have made us a leader in the industry for over three decades.
          </p>
        </div>
      </BoxReveal>
    </div>
  );
};

export default AbText;
