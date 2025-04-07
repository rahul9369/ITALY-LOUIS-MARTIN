import React from "react";
import Amplifiers from "../../assets/Amplifiers.png";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import TIP from "../../assets/TIPA.jpg";

const products = [
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP 1002",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1000W×2/8Ω   1600W×2/4Ω",
    response: " ＞800",
    weight: "5.8kg",
  },
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP 1602",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1600W×2/8Ω   2600W×2/4Ω",
    response: " ＞1000",
    weight: "6.5kg",
  },
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP 2002",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "2000W×2/8Ω   3200W×2/4Ω",
    response: " ＞1000",
    weight: "6.8kg",
  },
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP 2402",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "2400W×2/8Ω   4000W×2/4Ω",
    response: " ＞1000",
    weight: "7kg",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-72 object-cover cursor-pointer rounded-lg"
        onClick={() =>
          navigate(
            `/electronics/${product.model.toLowerCase().replace(/\s+/g, " ")}`
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
      <p className="text-sm font-semibold mt-2 text-gray-700">
        <span className="font-bold">Output Power:</span> {product.power}
      </p>
      <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold"> Damping factor:</span> {product.response}
      </p>
      {/* <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold">Sensitivity(1W/1m) :</span>{" "}
        {product.Sensitivity}
      </p> */}
      {/* <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold">Max SPL(Continuous):</span> {product.spl}
      </p> */}
      <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold">Net Weight:</span> {product.weight}
      </p>
      <button
        className="mt-4 cursor-pointer w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
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
        <h1 className="text-4xl mx-auto font-bold  mb-4">
          Amplifiers - TIP Series
        </h1>
        <p className="text-lg text-gray-700 max-w-7xl mt-5 mx-auto">
          We offer amplifiers tailored for a variety of applications, from live
          concerts to installations. Each amplifier is meticulously designed
          with high-quality components, ensuring exceptional dynamic power and
          long-term reliability. Our commitment to precision engineering
          guarantees superior performance and sustainability over many years.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 bg-gray-100 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
