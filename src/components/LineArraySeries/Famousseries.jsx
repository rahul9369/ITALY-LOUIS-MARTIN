import React from "react";
import Linearray from "../../assets/Linerarray.jpg";
import Footer from "../Footer";
import Linear from "../../assets/Famousmartin1.jpg";

import { useNavigate } from "react-router-dom";

const products = [
  {
    img: Linear,
    title: "Line array Series",
    model: "Famous 210",
    description: `2x10" Two-way Bi-amp Externally Amplified Line Array Speaker System`,
    Power: "LF: 600W/2400W, HF: 150W/600W",
    response: "70Hz-19KHz",
    Sensitivity: "LF 103 dB , HF: 113 dB",
    spl: "LF (133dB) , HF (137dB)",
    weight: "50Kg",
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
        className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
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
      <img src={Linearray} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="text-4xl mx-auto font-bold  mb-4">
          Line Arrays - All Series
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
