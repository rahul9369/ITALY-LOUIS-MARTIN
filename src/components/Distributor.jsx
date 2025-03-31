import React from "react";
import India from "../assets/Distributor/India.jpg";
import Chaina from "../assets/Distributor/Chaina.jpg";
import Indonesiya from "../assets/Distributor/Indonesiya.jpg";
import Maxico from "../assets/Distributor/Maxico.jpg";
import Thailand from "../assets/Distributor/Thailand.jpg";
import Vetnam from "../assets/Distributor/Vetnam.jpg";
import Footer from "./Footer";
// import img from "../assets/carausalimg2.jpg";
import Distributors from "../assets/Distributor/Distributors.jpg";

const distributors = [
  {
    country: "India (New Delhi)",
    company: "Eminent Audio Visual Pvt ltd",
    image: India,
  },
  {
    country: "China (GuangZhou)",
    company: "Jing Ying Electronics co., ltd",
    image: Chaina,
  },
  {
    country: "Indonesia (Bali Island)",
    company: "PT Monalisa Tunggal Jaya",
    image: Indonesiya,
  },
  {
    country: "Thailand (Bangkok)",
    company: "Alab Professional Audio Co., Ltd",
    image: Thailand,
  },
  {
    country: "Viet Nam (Hanoi)",
    company: "Mai Ly Invest Ment And Trading Ltd",
    image: Vetnam,
  },
  {
    country: "Mexico (Mexico City)",
    company: "Juan Carlos Laguna Sierra",
    image: Maxico,
  },
];

const DistributorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
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
                <p className="mt-2 text-2xl hover:bg-orange-600 px-2 py-2 rounded-md">
                  {dist.company}
                </p>
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
