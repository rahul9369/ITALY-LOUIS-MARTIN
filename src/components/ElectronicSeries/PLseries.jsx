import React from "react";
import Amplifiers from "../../assets/Amplifiers.jpg";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import PL4 from "../../assets/PL4.jpg";

import plf4 from "../../assets/pl4/plf4.jpg";
import plf42 from "../../assets/pl4/plf42.jpg";
import plf405 from "../../assets/pl4/plf405.jpg";

const products = [
  {
    img: plf4,
    title: "PL Series",
    model: "PL 4.1",
    description: "DIGITAL POWER AMPLIFIER",
    power: "1000W×4/8Ω   1600W×4/4Ω",
    response: " ＞1000(1 kHz @ 8 Ω)",
    weight: "10kg",
  },
  {
    img: plf4,
    title: "PL Series",
    model: "PL 4.5",
    description: "DIGITAL POWER AMPLIFIER",
    power: "1500W×4/8Ω  2500W×4/4Ω",
    response: " ＞1000(1 kHz @ 8 Ω)",
    weight: "11kg",
  },
   {
    img: plf42,
    title: "PL Series",
    model: "PL 1004",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1000W×4/8Ω  1600W×4/4Ω",
    response: " ＞3000(1 kHz @ 8 Ω)",
    weight: "10kg",
  },
   {
    img: plf405,
    title: "PL Series",
    model: "PL 1504",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1500W×4/8Ω  2500W×4/4Ω",
    response: " ＞3000(1 kHz @ 8 Ω)",
    weight: "11kg",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
       className="w-full h-[200px] object-contain rounded-lg cursor-pointer"
        loading="eager"
                decoding="async"
        onClick={() =>
          navigate(
            `/electronics/${product.model.toLowerCase().replace(/\s+/g, " ")}`
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
      <p className="text-sm font mt-4 text-gray-700">
        <span className="font-bold">Output Power:</span> {product.power}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold"> Damping factor:</span> {product.response}
      </p>
      {/* <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold">Sensitivity(1W/1m) :</span>{" "}
        {product.Sensitivity}
      </p> */}
      {/* <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold">Max SPL(Continuous):</span> {product.spl}
      </p> */}
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
            `/electronics/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
      <img src={Amplifiers} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="text-4xl mx-auto font-bold  mb-4 text-red-800">
          Amplifiers - PL Series
        </h1>
        {/* <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          We offer amplifiers tailored for a variety of applications, from live
          concerts to installations. Each amplifier is meticulously designed
          with high-quality components, ensuring exceptional dynamic power and
          long-term reliability. Our commitment to precision engineering
          guarantees superior performance and sustainability over many years.
        </p> */}
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
