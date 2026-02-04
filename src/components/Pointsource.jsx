import React, { useEffect } from "react";
import pointsource from "../assets/pointsource.jpg";
import Footer from "../components/Footer";

//new image//

import redfront from "../assets/red10/redfront.JPG";
import redfront5 from "../assets/red5/redfront5.jpg";
import redf5 from "../assets/red6/redf5.JPG";
import redff9 from "../assets/red9/redff9.JPG";
import red412 from "../assets/red12/red412.jpg";
import ffront8 from "../assets/f8/ffront8.jpg";
import fopen10 from "../assets/f10/fopen10.JPG";
import ff12 from "../assets/f12/ff12.jpg";
import ff15 from "../assets/f15/ff15.jpg";
import ff10 from "../assets/f10/ff10.jpg";
import f12am from "../assets/f12am/45.jpg";
import redds5 from "../assets/red5/redds5.jpg";
import f415 from "../assets/f15/f415.jpg";
import f412 from "../assets/f12/f412.jpg";
import f410 from "../assets/f10/f410.jpg";
import f458 from "../assets/f8/f458.jpg";
import red94 from "../assets/red9/red94.jpg";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const products = [
  {
    img: redfront,
    title: "Red Series",
    model: "Red 10",
    description: `2x10" Two-Way Passive Full-Range High Power Loudspeaker`,
    power: "600W/2400W (Passive)",
    response: "65Hz-20kHz",
    Sensitivity: "101dB",
    spl: "131dB",
    weight: "25Kg",
  },
  {
    img: redf5,
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
    img: redds5,
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
    img: red94,
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
    img: red412,
    title: "Red Series",
    model: "Red 12",
    description: '1x12" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "250W/1000W (Passive)",
    response: "75Hz-19kHz",
    Sensitivity: "97dB",
    spl: "123dB",
    weight: "18Kg",
  },
  {
    img: f458,
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
    img: f410,
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
    img: f412,
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
    img: f415,
    title: "F Series",
    model: "F15",
    description: '1x15" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "500W/2000W (Passive)",
    Sensitivity: "99dB",
    response: "50Hz-19kHz",
    spl: "129dB",
    weight: "30 Kg",
  },
  {
    img: f12am,
    title: "F Series",
    model: "F12 AM",
    description: "12” Two-Way Coaxial Full - Range Active Loudspeaker",
    power: "1200W Class-D Amplifier with DSP",
    Sensitivity: "55 Hz – 19 kHz",
    response: "50Hz-19kHz",
    spl: "122 dB",
    weight: "21.5 Kg",
  },
];

const ProductCard = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-xl sm:p-6 p-2 w-full">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-[300px] object-contain rounded-lg cursor-pointer"
        loading="eager"
        decoding="async"
        onClick={() =>
          navigate(
            `/product/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
      {product.model === "F12 AM" ? (
        <p className="text-sm font mt-4 text-gray-700">
          <span className="font-bold">Amplifier Program Power:</span>{" "}
          {product.power}
        </p>
      ) : (
        <>
          <p className="text-sm font mt-4 text-gray-700">
            <span className="font-bold">RMS/Peak Power:</span> {product.power}
          </p>
          <p className="text-sm mt-5 text-gray-700">
            <span className="font-bold">Sensitivity(1W/1m) :</span>{" "}
            {product.Sensitivity}
          </p>
        </>
      )}

      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold"> Frequency Response:</span>{" "}
        {product.response}
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
            `/product/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
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
        <title>Point Source - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img src={pointsource} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="md:text-4xl text-[25px] mx-auto font-bold  mb-4 text-red-800">
          Point Source - All Series
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          Experience Pure Sound with Our Point Source Loudspeaker. Our point
          source loudspeaker is designed in such a way that minimises distortion
          and phase issues and gives crystal-clear audio with precise sound
          reproduction, ensuring every note and beat is delivered with
          exceptional fidelity.
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
