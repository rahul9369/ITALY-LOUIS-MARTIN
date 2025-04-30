import React from "react";
import Column from "../assets/Columnspeaker.jpg";
import Footer from "../components/Footer";
import K302 from "../assets/k302.png";
import K304 from "../assets/K304.png";
import K306 from "../assets/k306.png";
import K308 from "../assets/K308.png";
import K312 from "../assets/K312.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const products = [
  {
    img: K302,
    title: "Column Speaker",
    model: "K302",
    description: '2x1.75" Passive Full Range Column Speaker',
    power: "40W/160W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "91dB",
    spl: "110dB",
    weight: "2.2Kg",
  },
  {
    img: K304,
    title: "Column Speaker",
    model: "K304",
    description: '4x1.75" Passive Full Range Column Speaker',
    power: "80W/320W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "91dB",
    spl: "113dB",
    weight: "4.1Kg",
  },
  {
    img: K306,
    title: "Column Speaker",
    model: "K306",
    description: '4x1.75" Passive Full Range Column Speaker',
    power: "80W/320W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "91dB",
    spl: "114dB",
    weight: "4.1Kg",
  },
  {
    img: K308,
    title: "Column Speaker",
    model: "K308",
    description: '8x1.75" Passive Full Range Column Speaker',
    power: "160W/640W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "91dB",
    spl: "116dB",
    weight: "7.8Kg",
  },
  {
    img: K312,
    title: "Column Speaker",
    model: "K312",
    description: '12x1.75" Passive Full Range Column Speaker',
    power: "220W/880W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "91dB",
    spl: "117dB",
    weight: "10.6Kg",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-fit shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-[40%] sm:h-[60%] object-fit cursor-pointer rounded-lg"
        onClick={() =>
          navigate(
            `/column/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
            `/column/${product.model.toLowerCase().replace(/\s+/g, " ")}`
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
      <Helmet>
        <title>Column Sound Speaker - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img src={Column} alt="Line Array" className="w-full h-auto" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl text-[22px] mx-auto font-bold  mb-4">
          Column Sound Speaker - All Series
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          Our column speakers are meticulously engineered to enhance speech
          intelligibility and fidelity in environments where these attributes
          are paramount. Their sleek and vertical design not only ensures
          aesthetic appeal but also makes them highly functional for spaces such
          as airports, churches, and educational institutions.
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
