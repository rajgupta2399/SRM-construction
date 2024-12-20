import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import Link from "next/link";

const AboutImage = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[34rem] h-auto rounded-xl p-6 pb-4 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          SRM Construction
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Number One Waterproofing Company
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            height="500"
            unoptimized
            width="500"
            className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href={"/Contact"}>
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Call now →
            </CardItem>
          </Link>

          <Link href={"/Contact"}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Book An Appointment
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default AboutImage;
