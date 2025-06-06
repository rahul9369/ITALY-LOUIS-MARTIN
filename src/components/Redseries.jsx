import React from "react";
import pointsource from "../assets/pointsource.jpg";
import Footer from "../components/Footer";
import Devilred10 from "../assets/Devilred10.png";
import red6 from "../assets/red5.5.jpg";
import red5 from "../assets/red5.jpg";
import red9 from "../assets/red9.png";
import red12 from "../assets/red12.png";
import { useNavigate } from "react-router-dom";
const products = [
  {
    img: Devilred10,
    title: "Red Series",
    model: "Red 10",
    description: `2x10" Two-Way Passive Full-Range High Power Loudspeaker`,
    power: "600W/2400W (Passive)",
    response: "65Hz-20kHz",
    Sensitivity: "101dB",
    spl: "131dB",
    weight: "38Kg",
  },
  {
    img: red6,
    title: "Red Series",
    model: "Red 5.5",
    description: '2x5" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "200W/800W (Passive)",
    response: "80Hz-19kHz",
    Sensitivity: "96dB",
    spl: "121dB",
    weight: "9Kg",
  },
  {
    img: red5,
    title: "Red Series",
    model: "Red 5",
    description: '1x5" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "100W/400W (Passive)",
    response: "90Hz-19kHz",
    Sensitivity: "93dB",
    spl: "115dB",
    weight: "6Kg",
  },
  {
    img: red9,
    title: "Red Series",
    model: "Red 9",
    description: '1x10" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "200W/800W (Passive)",
    response: "75Hz-19kHz",
    Sensitivity: "96dB",
    spl: "121dB",
    weight: "15Kg",
  },
  {
    img: red12,
    title: "Red Series",
    model: "Red 12",
    description: '1x12" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "250W/1000W (Passive)",
    response: "70Hz-19kHz",
    Sensitivity: "97dB",
    spl: "123dB",
    weight: "18Kg",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-72 object-cover rounded-lg"
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
        className="mt-4 cursor-pointer w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
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
          Point Source - Red Series
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
