import React, { useEffect } from "react";
import Linearray from "../assets/Linerarray.jpg";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

//new img//

import famouf from "../assets/fam/famouf.JPG";
import qfront from "../assets/q50/qfront.JPG";
import q60front from "../assets/q60/q60front.JPG";
import q70front from "../assets/q70/q70front.JPG";
import q80f from "../assets/q80/q80f.JPG";
import coxf from "../assets/coximg/coxf.jpg";
// import qss from "../assets/q50/qss.JPG";
import q60s from "../assets/q60/q60s.JPG";
// import q70ss from "../assets/q70/q70ss.JPG";
import coxs from "../assets/coximg/coxs.jpg";


const products = [
  {
    img: famouf,
    title: "Famous Series",
    model: "Famous 210",
    description: `2x10" Two-way Bi-amp Externally Amplified Line Array Speaker System`,
    power: "LF: 600W/2400W, HF: 150W/600W",
    response: "70Hz-19kHz",
    Sensitivity: "LF: 103 dB , HF: 109 dB",
    spl: "LF (133dB) , HF (133dB)",
    weight: "50Kg",
  },
  {
    img: qfront,
    title: "Q Series",
    model: "Q 50",
    description: `1x10" Two-way Passive/ Bi-Amp Switchable Line Array Speaker System`,
    power: "500W/2000W（Passive); LF:350W/1400W, HF:150W/600W (Bi-Amp)",
    response: "65Hz-20kHz",
    Sensitivity: "101dB",
    spl: "131dB（Passive/Bi-Amp)",
    weight: "16.8Kg",
  },
  {
    img: q60s,
    title: "Q Series",
    model: "Q 60",
    description: `2x10" Two-way Passive/ Bi-Amp Switchable Line Array Speaker System`,
    power: "750W/3000W（Passive); LF: 600W/2400W, HF:150W/600W (Bi-Amp)",
    response: "60Hz-20kHz",
    Sensitivity: "102dB",
    spl: "133dB（Passive/Bi-Amp)",
    weight: "22.8Kg",
  },
  {
    img: q70front,
    title: "Q Series",
    model: "Q 70",
    description: `1x12" Two-way Passive/ Bi-Amp Switchable Line Array Speaker System`,
    power: "550W/2200W（Passive); LF:400W/1600W, HF:150W/600W (Bi-Amp)",
    response: "60Hz-20kHz",
    Sensitivity: "103dB",
    spl: "133dB（Passive/Bi-Amp)",
    weight: "22Kg",
  },
  {
    img: q60s,
    title: "Q Series",
    model: "Q 80",
    description: `2x12" Two-way Passive/ Bi-Amp Switchable Line Array Speaker System`,
    power: "1000W/4000W（Passive); LF:850W/3400W, HF:150W/600W (Bi-Amp)",
    response: "60Hz-20kHz",
    Sensitivity: "103dB",
    spl: " 136 dB / 139 dB",
    weight: "36.8Kg",
  },
  {
    img: coxs,
    title: "Cox Series",
    model: "Cox 12",
    description: `1x12"Two-way Coaxial full Range Bi-amp/Passive Switchable line Array Speaker System`,
    power: "450W/1800W（Passive); LF:400W/1600W, HF:50W/200W (Bi-Amp)",
    response: "60Hz-19kHz",
    Sensitivity: "98dB",
    spl: "127dB",
    weight: "22Kg",
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
        className="w-full h-72 object-contain cursor-pointer rounded-lg"
        loading="eager"
        decoding="async"
        onClick={() =>
          navigate(
            `/linearray/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
          )
        }
      />
      <div className="sm:h-90">
        <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
        <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>

        <p className="text-md text-black font-bold my-2">
          {product.description}
        </p>
        <p className="text-sm font- mt-6 text-gray-700">
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
          <span className="font-bold">Max SPL(Continuous/1m):</span>{" "}
          {product.spl}
        </p>
        <p className="text-sm mt-5 text-gray-700">
          <span className="font-bold">Net Weight:</span> {product.weight}
        </p>
      </div>
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
            `/linearray/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
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
        <title>Line Arrays - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img src={Linearray} alt="Line Array" className="w-full " />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl  text-[25px] mx-auto font-bold  mb-4 text-red-800">
          Line Arrays - All Series
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          Our Line Array Systems are meticulously designed to provide consistent
          and even sound coverage across large areas. With features like Uniform
          Sound Distribution, Controlled Dispersion, and High Output Levels,
          they ensure exceptional audio clarity and quality. These systems are
          the perfect solution for concerts, conferences, and other events where
          reliable and immersive sound is essential.
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
