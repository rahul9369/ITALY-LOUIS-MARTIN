import React from "react";
import PlasticSpeaker from "../../assets/PlasticSpeaker.jpg";
import DS12 from "../../assets/DS12.jpg";

import Footer from "../Footer";
import plasticDs5 from "../../assets/plasticDs5.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  {
    img: plasticDs5,
    title: "Plastic Speaker",
    model: "DS5",
    description: '1x5" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "100W/400W (Passive)",
    response: "65Hz-19KHz",
    Sensitivity: "93dB(1W/1m)",
    spl: "93dB",
    weight: "5Kg",
  },
  {
    img: plasticDs5,
    title: "Plastic Speaker",
    model: "DS8",
    description: '1x8" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "150W/300W (Passive)",
    Sensitivity: "95dB(1W/1m)",
    response: "60Hz-19KHz",
    spl: "95dB",
    weight: "8Kg",
  },
  {
    img: DS12,
    title: "Plastic Speaker",
    model: "DS12",
    description: '1x8" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "400W/800W (Passive)",
    Sensitivity: "99dB(1W/1m)",
    response: "70Hz-19KHz",
    spl: "99dB",
    weight: "17Kg",
  },
  {
    img: DS12,
    title: "Plastic Speaker",
    model: "DS15",
    description: '1x8" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "400W/800W (Passive)",
    Sensitivity: "99dB(1W/1m)",
    response: "70Hz-19KHz",
    spl: "99dB",
    weight: "17Kg",
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
            `/plastic/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
        <span className="font-bold">Max SPL(Continuous):</span> {product.spl}
      </p>
      <p className="text-sm mt-2 text-gray-700">
        <span className="font-bold">Net Weight:</span> {product.weight}
      </p>
      <button
        className="mt-4 cursor-pointer w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
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
      <img src={PlasticSpeaker} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="text-4xl mx-auto font-bold  mb-4">
          Commercial Speaker - DS Series
        </h1>
        <p className="text-lg text-gray-700 max-w-7xl mt-5 mx-auto">
          The DS series is engineered to endure rigorous use and harsh
          environments, ensuring long-lasting performance with an IP54 rating.
          These systems are meticulously designed to deliver clear,
          high-fidelity audio, making them ideal for music reproduction,
          announcements, stadium & sports complexes.
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
