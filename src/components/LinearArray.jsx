import React, { useEffect } from "react";
import Linearray from "../assets/Linerarray.jpg";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import coxf from "../assets/coximg/coxf.jpg";

//new img//
import famouf from "../assets/fam/famouf.jpg";
import qfront from "../assets/q50/qfront.jpg";
import q60front from "../assets/q60/q60front.jpg";
import q70front from "../assets/q70/q70front.jpg";
import q80f from "../assets/q80/q80f.jpg";

const products = [
  {
    img: famouf,
    title: "Famous Series",
    model: "Famous 210",
    description: `2x10" Two-way Bi-amp Externally Amplified Line Array Speaker System`,
    power: "LF: 600W/2400W, HF: 150W/600W",
    response: "70Hz-19kHz",
    Sensitivity: "LF 103 dB , HF: 109 dB",
    spl: "LF (133dB) , HF (133dB)",
    weight: "50Kg",
  },
  {
    img: qfront,
    title: "Q Series",
    model: "Q 50",
    description: `1x10" Two-way Passive/Bi-Amp Switchable Line Array Speaker System`,
    power: "500W/2000W（Passive); LF:350W/1400W, HF:150W/600W (Bi-Amp)",
    response: "65Hz-20kHz",
    Sensitivity: "101dB",
    spl: "131dB（Passive/Bi-Amp)",
    weight: "16.8Kg",
  },
  {
    img: q60front,
    title: "Q Series",
    model: "Q 60",
    description: `2x10" Two-way Passive/Bi-Amp Switchable Line Array Speaker System`,
    power: "650W/2600W（Passive); LF:500W/2000W,HF:150W/600W(Bi-Amp)",
    response: "60Hz-20kHz",
    Sensitivity: "102dB",
    spl: "133dB（Passive/Bi-Amp)",
    weight: "22.8Kg",
  },
  {
    img: q70front,
    title: "Q Series",
    model: "Q 70",
    description: `1x12" Two-way Passive/Bi-Amp Switchable Line Array Speaker System`,
    power: "550W/2200W（Passive); LF:400W/1600W, HF:150W/600W (Bi-Amp)",
    response: "60Hz-20kHz",
    Sensitivity: "103dB",
    spl: "133dB（Passive/Bi-Amp)",
    weight: "22Kg",
  },
  {
    img: q80f,
    title: "Q Series",
    model: "Q 80",
    description: `2x12" Two-way Passive/Bi-Amp Switchable Line Array Speaker System`,
    power: "1000W/4000W（Passive）; LF:850W/3400W, HF:150W/600W (Bi-Amp)",
    response: "60Hz-20kHz",
    Sensitivity: "103dB",
    spl: " 136 dB / 139 dB",
    weight: "36.8Kg",
  },
  {
    img: coxf,
    title: "Cox Series",
    model: "Cox 12",
    description: `1x12" Passive Co-axial line array Speaker System`,
    power: "450W/1800W (Passive)",
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
        onClick={() =>
          navigate(
            `/linearray/${product.model.toLowerCase().replace(/\s+/g, " ")}`
          )
        }
      />
      <div className="sm:h-68">
        <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
        <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>

        <p className="text-md text-black font-bold my-2">
          {product.description}
        </p>
        <p className="text-sm font-semibold mt-2 text-gray-700">
          <span className="font-bold">RMS/Peak Power:</span> {product.power}
        </p>
        <p className="text-sm mt-2 text-gray-700">
          <span className="font-bold"> Frequency Response:</span>{" "}
          {product.response}
        </p>
        <p className="text-sm mt-2 text-gray-700">
          <span className="font-bold">Sensitivity(1W/1m) :</span>{" "}
          {product.Sensitivity}
        </p>
        <p className="text-sm mt-2 text-gray-700">
          <span className="font-bold">Max SPL(Continuous/1m):</span>{" "}
          {product.spl}
        </p>
        <p className="text-sm mt-2 text-gray-700">
          <span className="font-bold">Net Weight:</span> {product.weight}
        </p>
      </div>
      <button
        className="mt-4 w-full cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        onClick={() =>
          navigate(
            `/linearray/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
      <img src={Linearray} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl text-[25px] mx-auto font-bold  mb-4">
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
