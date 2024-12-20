"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full sm:px-12 px-6 mb-5">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Waterproofing
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Waterproofing is essential for every construction project. With our
            expertise and technical knowledge, we offer a wide range of tailored
            solutions to prevent water leakages and seepage, ensuring the
            longevity of your building.
          </p>
        </div>
        <Image
          src="https://media.istockphoto.com/id/1318893320/photo/cover-the-concrete-wall-with-a-cement-polymer-waterproofing-membrane-waterproofing-with-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=MmLfhiEtcJErWEef2PAmABhNWbrI7-4_DHx7aR-tx7I="
          width={500}
          height={500}
          unoptimized
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Exapansion Joints
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Expansion joints separate concrete slabs to accommodate heat-induced
          expansion and contraction. Proper treatment is essential to seal these
          joints, preventing water from penetrating and damaging the structure.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Rcc Structure Repairs
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Patching involves filling localised damaged areas with specialised
            concrete repair mortars to restore aesthetics and structural
            integrity. Resurfacing, on the other hand, entails applying a new
            layer of concrete or polymer-modified materials over the existing
            surface to improve durability and appearance.
          </p>
        </div>
        <Image
          src="https://plus.unsplash.com/premium_photo-1683129630753-a67cb44a9dab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dEVSUkFDRSUyMFdBVEVSUFJPT0ZJTkd8ZW58MHx8MHx8fDA%3D"
          width={700}
          height={500}
          unoptimized
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-cover rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Waterproofing Liquid Membrane
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Waterproofing Liquid Membrane is a versatile and effective material
            used for protecting surfaces from water ingress. It is a thin,
            highly elastic coating that forms a seamless, waterproof barrier
            when applied to surfaces. Liquid membranes are popular in
            construction.
          </p>
        </div>
        <Image
          src="https://media.istockphoto.com/id/1318893320/photo/cover-the-concrete-wall-with-a-cement-polymer-waterproofing-membrane-waterproofing-with-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=MmLfhiEtcJErWEef2PAmABhNWbrI7-4_DHx7aR-tx7I="
          width={600}
          height={500}
          unoptimized
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Injunction Grouting
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Injection grouting is the method of filling the cracks, open joints,
          voids, or honeycombs, in concrete or masonry structural members. This
          is done under pressure with a grout material that cures in place to
          produce the desired results like strengthening a structure and
          preventing water ingress.
        </p>
      </WobbleCard>
    </div>
  );
}
