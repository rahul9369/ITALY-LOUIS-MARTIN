import React, { useEffect } from "react";
import Amplifiers from "../assets/Amplifiers.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import plf4 from "../assets/pl4/plf4.jpg";
import df200 from "../assets/d200/df200.JPG";
import fd4200 from "../assets/d4200/fd4200.jpg";
import fd4300 from "../assets/d4300/fd4300.jpg";
import { Helmet } from "react-helmet";
import ft300 from "../assets/tta300/ft300.jpg";
import ft1002 from "../assets/tip1002/ft1002.jpg";
import plf42 from "../assets/pl4/plf42.jpg";
import ft1302 from "../assets/tip1002/ft1302.jpg";
import ft2402 from "../assets/tip1002/ft2402.jpg";
import ft1003 from "../assets/tip1002/ft1003.jpg";
import ft800 from "../assets/tta300/ft800.jpg";
import ft600 from "../assets/tta300/ft600.jpg";
import ft500 from "../assets/tta300/ft500.jpg";
import ft3001 from "../assets/tta300/ft3001.jpg";
import ft1000 from "../assets/tta300/ft1000.jpg";
import ft1300 from "../assets/tta300/ft1300.jpg";
import df2001 from "../assets/d200/df2001.jpg";
import pl423 from "../assets/pl4/pl423.jpg";
import plf405 from "../assets/pl4/plf405.jpg";
import dsp26 from "../assets/dsp/dl2.jpg";
import dsp48 from "../assets/dsp/front.JPG";
import ttaf450 from "../assets/tta300/ttaf450.jpg";
const products = [
  {
    img: pl423,
    title: "PL Series",
    model: "PL 4.1",
    description: " DIGITAL POWER AMPLIFIER",
    power: "1000W×4/8Ω   1600W×4/4Ω",
    response: " ＞1000(1 kHz @ 8 Ω)",
    weight: "10kg",
  },
  {
    img: plf4,
    title: "PL Series",
    model: "PL 4.5",
    description: " DIGITAL POWER AMPLIFIER",
    power: "1500W×4/8Ω  2500W×4/4Ω",
    response: " ＞1000(1 kHz @ 8 Ω)",
    weight: "11kg",
  },
  {
    img: plf42,
    title: "PL Series",
    model: "PL 1004",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1000W×4/8Ω  1600W×4/4Ω",
    response: " ＞3000(1 kHz @ 8 Ω)",
    weight: "10kg",
  },
  {
    img: plf405,
    title: "PL Series",
    model: "PL 1504",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1500W×4/8Ω  2500W×4/4Ω",
    response: " ＞3000(1 kHz @ 8 Ω)",
    weight: "11kg",
  },

  {
    img: df2001,
    title: "D Series",
    model: "D 200",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "250W×2/8Ω      400W×2/4Ω",
    response: " ＞500(1 KHz @ 8Ω)",
    weight: "2.5kg",
  },
  {
    img: df200,
    title: "D Series",
    model: "D 300",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "350W×2/8Ω      600W×2/4Ω",
    response: " ＞500(1 KHz @ 8Ω)",
    weight: "2.5kg",
  },
  {
    img: fd4200,
    title: "D Series",
    model: "D 4200",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "200W×4/8Ω      350W×4/4Ω",
    response: " ＞500(1 KHz @ 8Ω)",
    weight: "4.8kg",
  },
  {
    img: fd4300,
    title: "D Series",
    model: "D 4300",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "300W×4/8Ω      500W×4/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "5kg",
  },

  {
    img: ft3001,
    title: "TTA Series",
    model: "TTA 300",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "350W×2/8Ω    465W×2/4Ω",
    response: " ＞500(1 KHz @ 8Ω)",
    weight: "15kg",
  },
  {
    img: ft500,
    title: "TTA Series",
    model: "TTA 500",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "450W×2/8Ω    750W×2/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "17kg",
  },
  {
    img: ft600,
    title: "TTA Series",
    model: "TTA 600",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "650w×2/8Ω    930W×2/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "18kg",
  },
  {
    img: ft800,
    title: "TTA Series",
    model: "TTA 800",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "850W×2/8Ω    1250W×2/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "20kg",
  },
  {
    img: ft1000,
    title: "TTA Series",
    model: "TTA 1000",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1000W×2/8Ω    1600W×2/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "24kg",
  },
  {
    img: ft1300,
    title: "TTA Series",
    model: "TTA 1300",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1300W×2/8Ω    1950W×2/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "26kg",
  },
  {
    img: ttaf450,
    title: "TTA Series",
    model: "TTA 450",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "450W×4/8Ω    750W×4/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "23kg",
  },
  {
    img: ttaf450,
    title: "TTA Series",
    model: "TTA 460",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "650W×4/8Ω    930W×4/4Ω",
    response: "＞500(1 KHz @ 8Ω)",
    weight: "25kg",
  },

  {
    img: ft1003,
    title: "TIP Series",
    model: "TIP 1002",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1000W×2/8Ω   1600W×2/4Ω",
    response: " ＞800(1 kHz @ 8 Ω)",
    weight: "5.8kg",
  },
  {
    img: ft1302,
    title: "TIP Series",
    model: "TIP 1302",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1300W×2/8Ω   2000W×2/4Ω",
    response: " ＞1000(1 kHz @ 8 Ω)",
    weight: "6.5kg",
  },
  {
    img: ft1002,
    title: "TIP Series",
    model: "TIP 1602",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "1600W×2/8Ω   2600W×2/4Ω",
    response: " ＞1000(1 kHz @ 8 Ω)",
    weight: "6.8kg",
  },

  {
    img: ft2402,
    title: "TIP Series",
    model: "TIP 2402",
    description: " PROFESSIONAL POWER AMPLIFIER",
    power: "2400W×2/8Ω   4000W×2/4Ω",
    response: " ＞1000(1 kHz @ 8 Ω)",
    weight: "7kg",
  },
  {
    img: dsp26,
    title: "DSP",
    model: "DL 2.6",
    description: "DIGITAL LOUDSPEAKER MANAGEMENT SYSTEM",
    power: "2 Channel electronically balanced",
    output: "6 Channel electronically balanced",
    response: " >100 dB (20 Hz – 20 kHz)",
    weight: "2.5kg",
  },
  {
    img: dsp48,
    title: "DSP",
    model: "DL 4.8",
    description: "DIGITAL LOUDSPEAKER MANAGEMENT SYSTEM",
    power: "4 Channel electronically balanced",
    output: "8 Channel electronically balanced",
    response: " >120 dB (20 Hz – 20 kHz)",
    fir: "800 FIR taps per output",
    weight: "2.8kg",
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
        className="w-full h-[150px] object-contain rounded-lg cursor-pointer"
        loading="eager"
        decoding="async"
        onClick={() =>
          navigate(
            `/electronics/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
          )
        }
      />
      <h2 className="text-xl  text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>
      <p className="text-md text-black font-bold my-2">{product.description}</p>
      {product.title === "DSP" ? (
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          {/* 🔥 Special title only for DL 4.8 */}

          <p className="text-sm font mt-4 text-gray-700">
            <span className="font-bold">Inputs: </span> {product.power}
          </p>

          <p className="text-sm font mt-4 text-gray-700">
            <span className="font-bold">Outputs: </span> {product.output}
          </p>

          <p className="text-sm font mt-4 text-gray-700">
            <span className="font-bold">Input Dynamic Range: </span>
            {product.response}
          </p>
          {product.model === "DL 4.8" && (
            <p className="text-sm font mt-4 text-gray-700">
              <span className="font-bold">FIR Filters: </span>
              {product.fir}
            </p>
          )}

          {/* <p>
            <span className="font-bold">A/D Converters:</span>
            {product.response}
          </p> */}

          <p className="text-sm mt-5 text-gray-700">
            <span className="font-bold">Net Weight:</span> {product.weight}
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm mt-4 text-gray-700">
            <span className="font-bold">Output Power:</span> {product.power}
          </p>

          <p className="text-sm mt-5 text-gray-700">
            <span className="font-bold">Damping Factor:</span>{" "}
            {product.response}
          </p>

          <p className="text-sm mt-5 text-gray-700">
            <span className="font-bold">Net Weight:</span> {product.weight}
          </p>
        </>
      )}

      {/* <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Net Weight:</span> {product.weight}
      </p> */}
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
            `/electronics/${product.model.toLowerCase().replace(/\s+/g, " ")}`,
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
        <title>Amplifiers - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img src={Amplifiers} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="sm:text-4xl text-[25px] mx-auto font-bold  mb-4 text-red-800">
          Amplifiers - All Series
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mt-5 px-4 sm:px-8 mx-auto">
          We offer amplifiers tailored for a variety of applications, from live
          concerts to installations. Each amplifier is meticulously designed
          with high-quality components, ensuring exceptional dynamic power and
          long-term reliability. Our commitment to precision engineering
          guarantees superior performance and sustainability over many years.
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
