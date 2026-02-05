import React, { useEffect } from "react";
import Column from "../assets/Columnspeaker.jpg";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

//newimg//
import kff302 from "../assets/k302/kff302.jpg";
import kf304 from "../assets/k304/kf304.jpg";
import kf306 from "../assets/k306/kf306.jpg";
import kf308 from "../assets/k308/kf308.JPG";
import kf312 from "../assets/k312/kf312.jpg";

const products = [
  {
    img: kff302,
    title: "Column Speaker",
    model: "K302",
    description: '2x3" Passive Full Range Column Speaker',
    power: "40W/160W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "91dB",
    spl: "110dB",
    weight: "2.2Kg",
    //lll
  },
  {
    img: kf304,
    title: "Column Speaker",
    model: "K304",
    description: '4x3" Passive Full Range Column Speaker',
    power: "80W/320W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "93dB",
    spl: "115dB",
    weight: "4.1Kg",
  },
  {
    img: kf306,
    title: "Column Speaker",
    model: "K306",
    description: '6x3" Passive Full Range Column Speaker',
    power: "120W/480W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "95dB",
    spl: "118dB",
    weight: "5.9Kg",
  },
  {
    img: kf308,
    title: "Column Speaker",
    model: "K308",
    description: '8x3" Passive Full Range Column Speaker',
    power: "160W/640W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "97dB",
    spl: "121dB",
    weight: "7.8Kg",
  },
  {
    img: kf312,
    title: "Column Speaker",
    model: "K312",
    description: '12x3" Passive Full Range Column Speaker',
    power: "240W/960W (Passive)",
    response: "150Hz-18kHz",
    Sensitivity: "99dB",
    spl: "125dB",
    weight: "10.6Kg",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div className="bg-white h-fit shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-72 object-contain cursor-pointer rounded-lg"
        loading="eager"
        decoding="async"
        onClick={() =>
          navigate(
            `/column/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
      <p className="text-sm font- mt-4 text-gray-700">
        <span className="font-bold">RMS/Peak Power:</span> {product.power}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold"> Frequency Response:</span>{" "}
        {product.response}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Sensitivity(1W/1m) :</span>{" "}
        {product.Sensitivity}
      </p>
      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Max SPL(Continuous/1m):</span> {product.spl}
      </p>
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
            `/column/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
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
        <title>Column Speaker - Louis Martin</title>
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
        <h1 className="sm:text-4xl text-[22px] mx-auto font-bold  mb-4 text-red-800">
          Column Speaker - All Series
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
