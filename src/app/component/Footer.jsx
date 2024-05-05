import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import WaveBackground from "./wave";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  let contatcIcon = [
    {
      name: "email",
      icon: <MdEmail />,
      href: "mailto:olimpiadematematikauinsa@gmail.com",
    },
    {
      name: "instagram",
      icon: <RiInstagramFill />,
      href: "https://www.instagram.com/olmatuinsa/",
    },
    {
      name: "facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/olmatuinsa/",
    },
    {
      name: "youtube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@olimpiadematematikauinsa7027",
    },
  ];
  let contactPerson = [{ name: "Ummi", telp: "6285963106144" }];

  return (
    <div>
      <div className="bg-tema1-0 p-3 bg-[url(/assets/olmatText.svg)] ">
        <div className="flex items-center md:justify-center">
          <Image
            width={100}
            height={100}
            src="/assets/olmat-logo.png"
            alt="maskot olmat"
            className="w-9"
          />
          <h1 className="font-Adlam text-2xl text-white pl-3">
            OLMAT UINSA 2024
          </h1>
        </div>

        <div className="md:flex md:justify-between">
          <div className="m-5">
            <h1 className="text-white font-Adlam text-xl">Visit Us &#8758;</h1>
            <div className="flex flex-row">
              {contatcIcon.map((contact) => (
                <div key={contact.name}>
                  <a
                    className="block bg-tema2-0 rounded-full p-2 m-2 transition hover:bg-white hover:scale-125 hover:text-tema1-0 hover:drop-shadow-2xl"
                    href={contact.href}>
                    {contact.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="m-5">
            <h1 className="text-white font-Adlam text-xl">Address &#8758;</h1>
            <a
              href="https://goo.gl/maps/bheSpaYQuVWnAmfH8"
              target="blank"
              className="text-white text-sm ">
              <div className="transition hover:scale-110 duration-500 px-4 py-2 rounded-full">
                Gedung ELTIS Lt 2, Fakultas Tarbiyah dan Keguruan,
                <br /> Universitas Islam Negeri Sunan Ampel, Surabaya, Jawa
                Timur
              </div>
            </a>
          </div>
          <div className="m-5">
            <h1 className="text-white font-Adlam text-xl">
              Contact Person &#8758;
            </h1>
            {contactPerson.map((cp) => (
              <Link
                className="flex items-center gap-3 text-tema1-0 mt-4 py-1 px-3 rounded-full bg-tema2-0"
                key={cp.name}
                href={`https://api.whatsapp.com/send/?phone=${cp.telp}&text=Hai+kak+${cp.name}%2C+saya+mau+bertanya&type=phone_number&app_absent=0`}
                target="blank">
                <BsWhatsapp />
                {cp.name}
              </Link>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-base text-white text-center">
            © Copyright OLMAT UINSA 2024. All rights reserved
          </h1>
          <a
            className="text-[10px] text-white"
            href="https://www.instagram.com/mch.rama__/"
            target="blank">
            Crafted By @mch.rama__
          </a>
        </div>
      </div>
    </div>
  );
}
