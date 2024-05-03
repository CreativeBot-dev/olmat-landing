import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

function Rayon() {
  let regions = [
    {
      region: "Rayon Bandung",
      nameAll: "Faizah Qonatus Shofiyah",
      name: "Faizah",
      telp: "6285895620433",
    },
    {
      region: "Rayon Banyumas",
      nameAll: "Ananda Amelia Rif’atus Sholihah",
      name: "Ananda",
      telp: "6281252575679",
    },
    {
      region: "Rayon Cirebon",
      nameAll: "Intan Syaqinah",
      name: "Intan",
      telp: "625846481964",
    },
    {
      region: "Rayon Jabodetabek",
      nameAll: "Andini Dwi Savitri",
      name: "Andini",
      telp: "6289680892955",
    },
    {
      region: "Rayon Jember",
      nameAll: "Sandra pratiwi",
      name: "Sandra",
      telp: "6285692199880",
    },
    {
      region: "Rayon Kalimantan",
      nameAll: "Athallahsaanih Mardihanifah",
      name: "Athallah",
      telp: "6287791554494",
    },
    {
      region: "Rayon Kediri",
      nameAll: "Marta 'Azimatul 'Ulya",
      name: "Marta",
      telp: "6281515125303",
    },
    {
      region: "Rayon Lamongan",
      nameAll: "Diwahyuni",
      name: "Diwahyuni",
      telp: "6285708374556",
    },
    {
      region: "Rayon Madiun",
      nameAll: "Novia Arya Ningsih",
      name: "Novia",
      telp: "6281455047730",
    },
    {
      region: "Rayon Madura",
      nameAll: "Siti Shabrina Al Asra",
      name: "Siti",
      telp: "628563238366",
    },

    {
      region: "Rayon Malang",
      nameAll: "Rosidatul ula ",
      name: "Rosidatul",
      telp: "685607271271",
    },

    {
      region: "Rayon Papua-Bali",
      nameAll: "Zahrotunnisa",
      name: "Zahrotunnisa",
      telp: "6285645821834",
    },
    {
      region: "Rayon Ponorogo",
      nameAll: "I'anatul Ulya",
      name: "Ulya",
      telp: "62883831256125",
    },
    {
      region: "Rayon Semarang",
      nameAll: "Shakila Syafa Rahmanisa",
      name: "Shakila",
      telp: "6287817141028",
    },
    {
      region: "Rayon Sulawesi",
      nameAll: "Nailis Sa'adah Moesleh",
      name: "Nailis",
      telp: "6288989918173",
    },
    {
      region: "Rayon Sumatera",
      nameAll: "Aisyah Rizkyah Savitri",
      name: "Aisyah",
      telp: "6281249314146",
    },
    {
      region: "Rayon Surabaya",
      nameAll: "Khalista Hafsari Rismaya",
      name: "Khalista",
      telp: "628989735922",
    },
    {
      region: "Rayon Yoygyakarta",
      nameAll: "Sherly Aprilia",
      name: "Sherly",
      telp: "6285336478144",
    },
  ];
  return (
    <div className="grid bg-white items-center">
      <div className="flex items-center justify-center">
        <h1 className=" w-fit text-center text-tema1-0 text-4xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110 pointer-events-none">
          Rayon
        </h1>
      </div>

      <div className="grid gap-4 md:px-6 md:grid-cols-2 md:gap-6 lg:px-20 lg:grid-cols-3 items-center justify-center mt-7">
        {regions.map((rayon) => (
          <a
            key={rayon.name}
            className="flex items-center justify-between bg-white drop-shadow-md rounded-full px-3 transition hover:scale-105 hover:bg-tema4-0  "
            href={`https://api.whatsapp.com/send/?phone=${rayon.telp}&text=Hai+kak+${rayon.name}%2C+saya+dari+${rayon.region}&type=phone_number&app_absent=0`}
            target="blank">
            <TfiLocationPin size={"25px"} color="#95204D" />

            <div className="mx-4 lg:mx-0">
              <h1 className="font-bold text-center text-tema1-0 ">
                {rayon.region}
              </h1>
              <h2 className="text-sm text-center">{rayon.nameAll}</h2>
            </div>
            <BsWhatsapp size={"25px"} color="#95204D" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Rayon;
