import Image from "next/image";
import Link from "next/link";
import React from "react";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

const TextGenerateEffectAbout = ({
  words,
  className,
  filter = true,
  duration = 0.3,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-black text-black opacity-0 font-semibold"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-0">
        <div className=" dark:text-white text-white sm:text-2xl leading-snug tracking-wide font-semibold">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

const words = `Protecting your structure through Waterproofing Design`;
const AboutBanner = ({ blogs }) => {
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[55vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
        />
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // placeholder="blur"
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
            <h1 className="font-smibold capitalize text-xl sm:text-xl md:text-3xl lg:text-4xl">
              <GradualSpacing
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px] text-[#111]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 font-bold -tracking-widest "
                text=" SRM Construction"
              />
              {/* <GradualSpacing
                  className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
                  text="SRM Construction"
                /> */}
              {/* </span> */}
            </h1>
          </Link>
          <p className="sm:inline-block mt-4 sm:text-xm md:text-lg lg:text-xl text-black">
            <TextGenerateEffectAbout words={words} />
          </p>
        </div>
      </article>
    </div>
  );
};

export default AboutBanner;
