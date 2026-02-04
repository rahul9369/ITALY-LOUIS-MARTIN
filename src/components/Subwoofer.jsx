import React, { useEffect } from "react";
import Subwoofer from "../assets/Subwoofer.jpg";

import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
//newimg//
import ksf18 from "../assets/ks18/ksf18.JPG";
import ksf218 from "../assets/ks218/ksf218.JPG";
// import sf18 from "../assets/s18/sf18.JPG";
import sf18 from "../assets/s18/s18front.jpg";

import sf218 from "../assets/s218/sf218.JPG";

import fronts12 from "../assets/s12/fronts12.JPG";

const products = [
  {
    img: ksf18,
    title: "Subwoofer",
    model: "KS18",
    description: '1x18" High Power Passive Subwoofer',
    power: "1000W/4000W (Passive)",
    response: "35Hz-120Hz",
    Sensitivity: "98dB",
    spl: "131dB",
    weight: "58Kg",
  },
  {
    img: ksf218,
    title: "Subwoofer",
    model: "KS218",
    description: '2x18" High Power Passive Subwoofer',
    power: "2000W/8000W (Passive)",
    response: "30Hz-120Hz",
    Sensitivity: "102dB",
    spl: "138dB",
    weight: "88Kg",
  },
  //s12 new product //
  {
    img: fronts12,
    title: "Subwoofer",
    model: "S12",
    description: '1x12" High Power Passive Subwoofer',
    power: "450W/1800W (Passive)",
    response: "38 Hz – 120 Hz",
    Sensitivity: "96dB",
    spl: "123dB",
    weight: "20Kg",
  },
  {
    img: sf18,
    title: "Subwoofer",
    model: "S18",
    description: '1x18" High Power Passive Subwoofer',
    power: "1000W/4000W (Passive)",
    response: "35Hz-120Hz",
    Sensitivity: "97dB",
    spl: "130dB",
    weight: "48Kg",
  },
  {
    img: sf218,
    title: "Subwoofer",
    model: "S218",
    description: '2x18" High Power Passive Subwoofer',
    power: "2000W/8000W (Passive)",
    response: "35Hz-120Hz",
    Sensitivity: "99dB",
    spl: "136dB",
    weight: "78Kg",
  },
];

const ProductCard = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full ">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-72 object-contain cursor-pointer rounded-lg"
        loading="eager"
        decoding="async"
        onClick={() =>
          navigate(
            `/subwoofer/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
      <p className="text-sm font mt-4 text-gray-700">
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
            `/subwoofer/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
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
        <title>Subwoofers - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img src={Subwoofer} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl text-[25px] mx-auto font-bold  mb-4 text-red-800">
          Subwoofers - All Series
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
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
