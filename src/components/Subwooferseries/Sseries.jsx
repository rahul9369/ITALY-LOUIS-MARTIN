import React from "react";
import Subwoofer from "../../assets/Subwoofer.png";
// import KS18 from "../../assets/ks18.jpg";
import S218 from "../../assets/S218.png";
import S18 from "../../assets/S18.png";
import SubwooferImg from "../../assets/subwoofer218.png";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const products = [
  {
    img: S18,
    title: "Subwoofer",
    model: "S18",
    description: '1x18" High Power Passive Subwoofer',
    power: "750W/3000W (Passive)",
    response: "38Hz-120Hz",
    Sensitivity: "96dB",
    spl: "127dB",
    weight: "45Kg",
  },
  {
    img: S218,
    title: "Subwoofer",
    model: "S218",
    description: '2x18" High Power Passive Subwoofer',
    power: "1500W/6000W (Passive)",
    response: "35Hz-120Hz",
    Sensitivity: "102dB",
    spl: "136dB",
    weight: "78Kg",
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
            `/subwoofer/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
        className="mt-4 cursor-pointer w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        onClick={() =>
          navigate(
            `/subwoofer/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
      <img src={Subwoofer} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl text-[22px] mx-auto font-bold  mb-4">
          Sub Woofers - S Series
        </h1>
        <p className="text-lg text-gray-700 max-w-7xl mt-5 mx-auto">
          Our subwoofers are equipped with state-of-the-art high-excursion
          drivers, ensuring the delivery of deep and precise bass. The robust
          construction and exceptional durability guarantee high-quality deep
          subwoofer performance for many years.
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
