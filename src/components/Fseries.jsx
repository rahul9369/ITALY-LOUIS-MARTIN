import React from "react";
import pointsource from "../assets/pointsource.jpg";
import Footer from "../components/Footer";
import ffront8 from "../assets/f8/ffront8.jpg"
import ff10 from "../assets/f10/ff10.jpg"
import ff12 from "../assets/f12/ff12.jpg"
import ff15 from "../assets/f15/ff15.jpg"

import { useNavigate } from "react-router-dom";
const products = [
  {
    img: ffront8,
    title: "F Series",
    model: "F8",
    description: '1x8" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "100W/400W (Passive)",
    response: "70Hz-19kHz",
    Sensitivity: "93dB",
    spl: "115dB",
    weight: "12 Kg",
  },
  {
    img: ff10,
    title: "F Series",
    model: "F10",
    description: '1x10" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "300W/1200W (Passive)",
    response: "60Hz-19kHz",
    Sensitivity: "96dB",
    spl: "123dB",
    weight: "17 Kg",
  },
  {
    img: ff12,
    title: "F Series",
    model: "F12",
    description: '1x12" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "400W/1600W (Passive)",
    response: "55Hz-19kHz",
    Sensitivity: "97dB",
    spl: "126dB",
    weight: "25 Kg",
  },
  {
    img: ff15,
    title: "F Series",
    model: "F15",
    description: '1x15" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "500W/2000W (Passive)",
    Sensitivity: "99dB",
    response: "50Hz-19kHz",
    spl: "129dB",
    weight: "30 Kg",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
          className="w-full h-72 object-contain cursor-pointer rounded-lg"
        onClick={() =>
          navigate(
            `/product/${product.model.toLowerCase().replace(/\s+/g, " ")}`
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
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
        <span className="font-bold">Max SPL(Continuous/1m):</span> {product.spl}
      </p>
      <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold">Net Weight:</span> {product.weight}
      </p>
      <button
        className="mt-4 cursor-pointer w-full bg-orange-500  text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        onClick={() =>
          navigate(
            `/product/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
      <img src={pointsource} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl text-[22px] mx-auto font-bold  mb-4">
          Point Source - F Series
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          Experience Pure Sound with Our Point Source Loudspeaker Our point
          source loudspeaker is designed in such a way that minimises distortion
          and phase issues and gives crystal-clear audio with precise sound
          reproduction, ensuring every note and beat is delivered with
          exceptional fidelity.
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
