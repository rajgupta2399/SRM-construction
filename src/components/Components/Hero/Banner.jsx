import Image from "next/image";
import Link from "next/link";
import React from "react";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `
Complete Waterproofing solutions for your Home.Let's waterproof your architectural marvels through Liquid Membranes.`;

const HomeCoverSection = ({ blogs }) => {
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
        />
        <Image
          src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // placeholder="blur"
          //   blurDataURL={blog.image.blurDataURL}
          alt="title"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
          fill
          unoptimized
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          sizes="100vw"
          priority
        />

        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          {/* <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} /> */}
          <Link href="" className="mt-6">
            <h1 className="font-bold capitalize text-xl sm:text-xl md:text-3xl lg:text-4xl">
              <GradualSpacing
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 font-bold -tracking-widest "
                text="SRM Construction"
              />
              {/* <GradualSpacing
                  className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
                  text="SRM Construction"
                /> */}
              {/* </span> */}
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-4 sm:text md:text-lg lg:text-xl font-in">
            <TextGenerateEffect words={words} />
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
