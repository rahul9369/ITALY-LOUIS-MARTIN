import React from "react";
import Amplifiers from "../../assets/Amplifiers.jpg";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import DT400 from "../../assets/DT400.jpg";

import df200 from "../../assets/d200/df200.JPG";
import DSP26 from "../../assets/dsp/dl2.jpg";
// import DSP48 from "../../assets/dsp/front.jpg";

const products = [
  {
    img: DSP26,
    title: "DSP",
    model: "DL 2.6",
    description: "DIGITAL LOUDSPEAKER MANAGEMENT SYSTEM",
    power: "250W×2/8Ω      400W×2/4Ω",
    response: " ＞500(1 KHz @ 8Ω)",
    weight: "2.5kg",
  },
  {
    img: DSP48,
    title: "DSP",
    model: "DL 4.8",
    description: "DIGITAL LOUDSPEAKER MANAGEMENT SYSTEM",
    power: "350W×2/8Ω      600W×2/4Ω",
    response: " ＞500(1 KHz @ 8Ω)",
    weight: "2.8kg",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-[150px] object-contain rounded-lg cursor-pointer"
        loading="eager"
        decoding="async"
        onClick={() =>
          navigate(
            `/electronics/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
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
            `/electronics/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
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
        <h1 className="text-4xl mx-auto font-bold  mb-4 text-red-800">DSP</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          Our all DSP offers High‑precision 64‑bit DSP technology ensures
          crystal‑clear sound and exceptional dynamic range. A flexible
          4‑in/8‑out matrix design allows seamless routing and integration into
          any system. Each channel offers complete control with gain, 10‑band
          parametric EQ, crossover, delay, phase, and limiter. Extensive preset
          storage enables quick recall of tailored audio setups for different
          environments. Professional‑grade processing delivers reliable,
          customizable performance with outstanding sound quality
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
