"use client";

import React from "react";
import Nav from "./component/Nav";
import Paralax from "./component/Intro";
import Event from "./component/event";
import Timeline from "./component/timeline";
import Rayon from "./component/rayon";
import Olmat from "./component/olmat";
import Footer from "./component/Footer";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import ComingSoon from "./component/ComingSoon";
import WaveBackground from "./component/wave";

export default function Home() {
  return (
    <main className="bg-white">
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          width: "100%",
        }}
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <div className="fixed top-0 z-40">
          <Nav />
        </div>
        <MouseParallaxChild
          factorX={0.9}
          factorY={0.1}
          style={{
            background: "url(/assets/paralax/awanPink.png)",
            backgroundPositionY: "50%",
            position: "absolute",
            filter: "blur(4px) brightness(100%)",
            opacity: "60%",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        />
        <div>
          <div className="h-[95vh] mt-[65px]" id="home">
            <Paralax />
          </div>
          <div className="" id="olmat">
            <Olmat />
          </div>
          <div className="pt-16" id="rayon">
            <Rayon />
          </div>
          <div className="bg-gradient-to-t from-tema2-0 to-white">
            <div id="event">
              <Event />
            </div>
            <div id="timeline" className="mt-10 ">
              <Timeline />
            </div>
          </div>
          <div>
            {/* <div className="h-screen">
            <ComingSoon />
          </div> */}
            <WaveBackground />
            <Footer />
          </div>
        </div>
      </MouseParallaxContainer>
      <div className=""></div>
    </main>
  );
}
