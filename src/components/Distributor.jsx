import React from "react";
import India from "../assets/Distributor/India.jpg";
import Chaina from "../assets/Distributor/Chaina.jpg";
import Indonesiya from "../assets/Distributor/Indonesiya.jpg";
import Maxico from "../assets/Distributor/Maxico.jpg";
import Thailand from "../assets/Distributor/Thailand.jpg";
import Vetnam from "../assets/Distributor/Vetnam.jpg";
import Footer from "./Footer";
// import img from "../assets/carausalimg2.jpg";
import Distributors from "../assets/Distributor/Distributors.png";
import { Helmet } from "react-helmet";

const distributors = [
  {
    country: "India (New Delhi)",
    company: "Eminent Audio Visual Pvt Ltd",
    image: India,
    link: "https://eminentav.in/",
  },
  {
    country: "China (GuangZhou)",
    company: "Jing Ying Electronics com. Ltd",
    image: Chaina,
  },
  {
    country: "Indonesia (Bali Island)",
    company: "PT Monalisa Tunggal Jaya",
    image: Indonesiya,
  },
  {
    country: "Thailand (Bangkok)",
    company: "Alab Professional Audio Com. Ltd",
    image: Thailand,
  },
  {
    country: "Viet Nam (Hanoi)",
    company: "Mai Ly Invest Ment And Trading Ltd",
    image: Vetnam,
  },
  {
    country: "Mexico (Mexico City)",
    company: "The Show Project ",
    image: Maxico,
    link: "https://theshowproject.com.mx/",
  },
];

const DistributorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Distributor - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img
        src={Distributors}
        alt="img"
        className="w-full h-[90px] sm:h-[250px]"
      />
      <div className="w-[90%] mx-auto py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-6">
          {distributors.map((dist, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src={dist.image}
                alt={dist.country}
                className="w-full h-64 object-cover transform transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-75 group-hover:scale-110"
              />
              <div className="absolute inset-0    bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-3xl  font-bold">{dist.country}</h2>

                {dist.link ? (
                  <a
                    href={dist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-2xl hover:bg-red-800 px-2 py-2 rounded-md transition cursor-pointer">
                    {dist.company}
                  </a>
                ) : (
                  <p
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-2xl hover:bg-red-800 px-2 cursor-pointer py-2 rounded-md transition">
                    {dist.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DistributorPage;
