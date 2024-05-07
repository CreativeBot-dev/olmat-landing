"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import React from "react";
import Image from "next/image";

export default function paralax() {
  return (
    <div className="flex justify-center bg-gradient-to-t from-tema2-0 to-white -mb-60">
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          height: "95vh",
          width: "100%",
          display: "flex",
        }}
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <div className="grid gap-0 px-4 sm:grid-cols-1 lg:grid-cols-2 md:flex-row md:px-14 sm:px-6">
          <div className="flex flex-col justify-center row-start-2 lg:row-start-auto lg:justify-center lg:pr-11">
            <h1 className="text-5xl font-bold md:text-8xl lg:text-7xl font-Adlam text-tema1-0">
              OLMAT UINSA
            </h1>
            <h2 className="text-4xl font-bold md:text-7xl font-Adlam text-tema1-0">
              2024
            </h2>

            <p className="lg:text-xl mt-[3%]">
              &quot;Explore Mathematics Skills with ASIC: Action, Spirit,
              Intelligence, and Competitive&quot;
            </p>
            <div className="grid py-2 my-10 place-items-center md:my-7 ">
              <a
                className="px-8 py-2 text-2xl text-white rounded-full bg-tema1-0 animate-bounce"
                href="https://daftar.olmatuinsa.online/"
                target="blank"
              >
                Daftar
              </a>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center row-span-1 pt-5 lg:px-16">
            <div className="absolute z-0">
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <Image
                  width={800}
                  height={800}
                  src="/assets/paralax/awanBg.png"
                  alt=""
                />
              </MouseParallaxChild>
            </div>
            <div className="z-10">
              <MouseParallaxChild factorX={0.7} factorY={0.5}>
                <Image
                  width={800}
                  height={800}
                  src="/assets/maskot.png"
                  alt=""
                />
              </MouseParallaxChild>
            </div>
            <div className="bottom-[5%] lg:bottom-[20%] absolute z-20">
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <Image
                  width={800}
                  height={800}
                  src="/assets/paralax/awanFront.png"
                  alt=""
                />
              </MouseParallaxChild>
            </div>
          </div>
        </div>
      </MouseParallaxContainer>
    </div>
  );
}
