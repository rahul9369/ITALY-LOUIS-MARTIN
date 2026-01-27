import React, { useEffect } from "react";
import PlasticSpeaker from "../assets/PlasticSpeaker.JPG";



import Footer from "../components/Footer";


import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
//newimg//
import dsf5 from "../assets/ds5/dsf5.jpg";
import dsf12 from "../assets/ds12/dsf12.JPG";
import dsf15 from "../assets/ds15/dsf15.JPG";
import Hwfornt from "../assets/Hwfront.png";
import dsf8 from "../assets/ds8/dsf8.JPG";

import tlfront from "../assets/tl55/tlfront.jpg";


const products = [
  {
    img: dsf5,
    title: "Plastic Speaker",
    model: "DS5",
    description: '1x5" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "100W/400W (Passive)",
    response: "65Hz-19kHz",
    Sensitivity: "93dB",
    spl: "115dB",
    weight: "5Kg",
  },
  {
    img: dsf8,
    title: "Plastic Speaker",
    model: "DS8",
    description: '1x8" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "150W/600W (Passive)",
    Sensitivity: "95dB",
    response: "60Hz-19kHz",
    spl: "118dB",
    weight: "8Kg",
  },
  {
    img: dsf12,
    title: "Plastic Speaker",
    model: "DS12",
    description: '1x12" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "400W/1600W (Passive)",
    Sensitivity: "99dB",
    response: "70Hz-19kHz",
    spl: "128dB",
    weight: "17Kg",
  },
  {
    img: dsf15,
    title: "Plastic Speaker",
    model: "DS15",
    description: '1x15" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "500W/2000W (Passive)",
    Sensitivity: "102dB",
    response: "65Hz-19kHz",
    spl: "132dB",
    weight: "25Kg",
  },
  {
    img: Hwfornt,
    title: "Plastic Speaker",
    model: "HW 6.5",
    description: " Two-way full range plastic IP 65 Weatherproof loudspeaker",
    power: " 40W / 80W @8 ohms",
    Sensitivity: " 88 dB",
    response: " 65 Hz – 18 kHz",
    spl: "109dB",
    weight: "3.2Kg",
  },

  {
    img: tlfront,
    title: " Motorised Ceiling Speaker",
    model: "TL5.5",
    description: " Two-way full range ceiling loudspeaker",
    power: " 30W / 120W @8 ohms",
    Sensitivity: " 88 dB",
    response: " 65 Hz – 19 kHz",
    spl: "109dB",
    weight: "2.5Kg",
  },
];

const ProductCard = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-[300px] object-contain rounded-lg cursor-pointer"
        loading="eager"
                decoding="async"
        onClick={() =>
          navigate(
            `/plastic/${product.model.toLowerCase().replace(/\s+/g, " ")}`
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
      <p className="text-sm font mt-4 text-gray-700">
        <span className="font-bold">RMS/Peak Power:</span> {product.power}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold"> Frequency Response:</span>{" "}
        {product.response}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Sensitivity(1W/1m) :</span>{" "}
        {product.Sensitivity}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Max SPL(Continuous/1m):</span> {product.spl}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Net Weight:</span> {product.weight}
      </p>
      <button
        className="mt-4 mx-auto block cursor-pointer 
border border-red-800 text-red-800 
px-3 py-2 sm:px-5 sm:py-2 
text-sm sm:text-base
rounded-lg bg-transparent 
hover:bg-red-800 hover:text-white 
transition duration-300"
        onClick={() =>
          navigate(
            `/plastic/${product.model.toLowerCase().replace(/\s+/g, " ")}`
          )
        }>
        {product.model}
      </button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Commercial Speaker - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img src={PlasticSpeaker} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl text-[25px] mx-auto font-bold  mb-4 text-red-800">
          Commercial Speaker - All Series
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          This series is engineered to endure rigorous use and harsh
          environments, ensuring long-lasting performance with an IP54 rating.
          These systems are meticulously designed to deliver clear,
          high-fidelity audio, making them ideal for music reproduction,
          announcements, stadium & sports complexes.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 sm:p-10 bg-gray-100 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
