import React from "react";
import pointsource from "../assets/pointsource.jpg";
import Footer from "../components/Footer";
import Devilred10 from "../assets/Devilred10.png";
import red6 from "../assets/red5.5.jpg";
import red5 from "../assets/red5.jpg";
import red9 from "../assets/red9.jpg";
import red12 from "../assets/red12.jpg";
import F8 from "../assets/F8.png";
import F10 from "../assets/F10.png";
import F12 from "../assets/F12.jpg";
import F15 from "../assets/F15.png";

import { useNavigate } from "react-router-dom";
const products = [
  {
    img: Devilred10,
    title: "Red Series",
    model: "Red 10",
    description: `2x10" Two-Way Passive Full-Range High Power Loudspeaker`,
    power: "600W/2400W (Passive)",
    response: "65Hz-20KHz",
    Sensitivity: "101dB(1W/1m)",
    spl: "131dB",
    weight: "38Kg",
  },
  {
    img: red6,
    title: "Red Series",
    model: "Red 5.5",
    description: '2x5" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "200W/800W (Passive)",
    response: "80Hz-19KHz",
    Sensitivity: "96dB(1W/1m)",
    spl: "124dB",
    weight: "9Kg",
  },
  {
    img: red5,
    title: "Red Series",
    model: "Red 5",
    description: '1x5" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "100W/400W (Passive)",
    response: "90Hz-19KHz",
    Sensitivity: "93dB(1W/1m)",
    spl: "115dB",
    weight: "6Kg",
  },
  {
    img: red9,
    title: "Red Series",
    model: "Red 9",
    description: '1x10" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "200W/800W (Passive)",
    response: "75Hz-19KHz",
    Sensitivity: "96dB(1W/1m)",
    spl: "121dB",
    weight: "15Kg",
  },
  {
    img: red12,
    title: "Red Series",
    model: "Red 12",
    description: '1x12" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "250W/1000W (Passive)",
    response: "70Hz-19KHz",
    Sensitivity: "97dB(1W/1m)",
    spl: "123dB",
    weight: "18Kg",
  },
  {
    img: F8,
    title: "F Series",
    model: "F8",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    Sensitivity: "93dB(1W/1m)",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: F10,
    title: "F Series",
    model: "F10",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    Sensitivity: "96dB(1W/1m)",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: F12,
    title: "F Series",
    model: "F12",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    Sensitivity: "97dB(1W/1m)",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: F15,
    title: "F Series",
    model: "F15",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    Sensitivity: "99dB(1W/1m)",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
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
        <span className="font-bold">Max SPL(Continuous):</span> {product.spl}
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
        <h1 className="text-4xl mx-auto font-bold  mb-4">
          Point Source - All Series
        </h1>
        <p className="text-lg text-gray-700 max-w-7xl mt-5 mx-auto">
          Our Line Array Systems are meticulously designed to provide consistent
          and even sound coverage across large areas. With features like Uniform
          Sound Distribution, Controlled Dispersion, and High Output Levels,
          they ensure exceptional audio clarity and quality. These systems are
          the perfect solution for concerts, conferences, and other events where
          reliable and immersive sound is essential.
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
