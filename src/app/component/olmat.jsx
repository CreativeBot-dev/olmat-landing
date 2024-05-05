import React from "react";
import MapIndo from "../Icon/mapMd";
import MapSm from "../Icon/mapSm";
import Image from "next/image";

function Olmat() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-tema2-0 to-white">
      <div className="grid lg:grid-cols-2 left-0 pt-16">
        <div className="bg-tema1-0 flex flex-col items-center lg:rounded-r-xl">
          <h1 className="w-fit text-center my-4 text-white text-4xl font-Adlam hover:scale-110 pointer-events-none">
            About Us
          </h1>
          <div className="flex flex-col items-center bg-[url(/assets/olmatText.svg)]">
            <Image
              width={270}
              height={100}
              src="/assets/olmat-logo.png"
              alt="logo olmat"
            />
            <h1 className="text-white text-sm my-7 px-5 text-center">
              OLMAT UINSA merupakan olimpiade matematika tingkat Nasional pada
              jenjang SD/MI, SMP/MTs, SMA/SMK/MA islam dengan sebaran 18
              Rayon di seluruh Indonesia
            </h1>
          </div>
        </div>
        <div className="mt-4 pl-4 hidden md:flex md:visible">
          <MapIndo />
          {/* <img src="/assets/map2.svg" alt="" /> */}
        </div>
        <div className="mt-4 pl-4 md:hidden">
          <MapSm />
        </div>
      </div>
    </div>
  );
}

export default Olmat;
