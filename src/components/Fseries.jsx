import React from "react";
import pointsource from "../assets/pointsource.jpg";
import Footer from "../components/Footer";
import Fseries from "../assets/SpeakerF12.jpg";
import { useNavigate } from "react-router-dom";
const products = [
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F8",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F10",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F12",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F15",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
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
      <h2 className="text-xl  text-gray-800 mt-4">{product.title}</h2>
      <h3 className="text-lg font-bold text-gray-600">{product.model}</h3>
      <p className="text-md font-bold text-black my-2">{product.description}</p>
      <p className="text-md  text-gray-700">
        <span className="font-bold"> Program Power:</span> {product.power}
      </p>
      <p className="text-sm py-2 text-gray-700">
        <span className="font-bold"> Frequency Response:</span>{" "}
        {product.response}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-bold">Max SPL:</span> {product.spl}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-bold">Sensitivity:</span> {product.Sensitivity}
      </p>
      <p className="text-sm my-2 text-gray-700">
        <span className="font-bold">Weight:</span> {product.weight}
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
          Point Source - F Series
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
