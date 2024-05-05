"use client";

import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "Olmat", link: "/#olmat" },
    { name: "Rayon", link: "/#rayon" },
    { name: "Event", link: "/#event" },
    { name: "TImeline", link: "/#timeline" },
    { name: "Pusat Bantuan", link: "/pusat-bantuan" },
  ];

  const [panelOpen, setPanelOpen] = useState(false);
  const navBtn = () => {
    setPanelOpen(!panelOpen);
    document.body.style.overflow = panelOpen ? "auto" : "hidden";
  };

  return (
    <div className="grid">
      <div className=" top-0 left-0 h-[65px] w-screen bg-tema1-0 py-3 px-3 md:px-8 lg:px-14 flex items-center  z-10 drop-shadow-bawah">
        <a
          className="w-[55px] hover:scale-110 transform tranform-transition duration-200"
          href="/">
          <Image
            width={100}
            height={100}
            src="/assets/olmat-logo.png"
            alt="olmat"
          />
        </a>
        <h1 className="font-Adlam text-xl lg:text-3xl text-white px-6 min-w-fit select-none">
          OLMAT UINSA
        </h1>
        {/* <ul className="navPanel w-full text-white text-lg md:text-sm lg:text-lg gap-1 lg:gap-2 text-right item-center hidden md:visible md:flex justify-end">
          {Links.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul> */}
        {/* <button
          onClick={navBtn}
          className="w-[50px] h-[50px] flex flex-col gap-1 items-center justify-center md:hidden">
          <span
            className={
              !panelOpen
                ? "block w-6 h-1 rounded-full bg-tema3-0 animate-Nav1"
                : "absolute w-6 h-1 rounded-full bg-tema3-0 rotate-45"
            }></span>
          <span
            className={
              !panelOpen
                ? "block w-6 h-1 rounded-full bg-tema3-0 animate-Nav2"
                : "block w-0 h-1 rounded-full bg-tema3-0 duration-500"
            }></span>
          <span
            className={
              !panelOpen
                ? "block w-6 h-1 rounded-full bg-tema3-0 animate-Nav1 "
                : "absolute w-6 h-1 rounded-full bg-tema3-0 -rotate-45"
            }></span>
        </button> */}
      </div>

      {/* =========PANEL========== */}
      <div
        className={
          panelOpen
            ? "fixed grid h-[95vh] top-16 bg-tema2-0 w-[80%] sm:w-[40%] justify-end px-5 right-0 transition-all ease-out duration-700 md:hidden drop-shadow-kiri"
            : "fixed grid h-[95vh] top-16 bg-tema2-0 w-[80%] justify-end right-[-700px] transition-all ease-in duration-700 md:hidden"
        }
        //    "fixed flex h-screen top-16 bg-tema2-0 w-[80%] justify-center"
      >
        <div className="w-fit h-fit grid justify-end mt-8">
          <div className="grid place-items-center ">
            <a
              className="py-2 px-8 bg-tema1-0 rounded-full text-2xl  text-white animate-bounce"
              href="https://daftar.olmat-uinsa.com/"
              target="blank">
              Daftar
            </a>
          </div>
          <hr className="bg-tema3-0 h-1 mt-4" />
          <ul className="w-full mt-5 text-2xl  grid gap-5 text-right text-tema1-0">
            {Links.map((linkPanel) => (
              <li key={linkPanel.name}>
                <a href={linkPanel.link}>{linkPanel.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <Image
          width={200}
          height={100}
          src="/assets/maskot.png"
          alt="logo olmat"
          className=" absolute bottom-24 left-1/2 -translate-x-1/2 h-40 opacity-30"
        />

        <h1 className="absolute bottom-5 pb-3 text-[15px] text-center justify-center w-full">
          © Copyright by OLMAT 2024
          <br />
          <a
            href="https://instagram.com/mch.rama__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
            target="blank"
            className=" text-[10px] font-extralight">
            Crafted by @mch.rama__
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Nav;
