import React, { useState } from "react";
import Subwoofer from "../../assets/Subwoofer.jpg";
// import sf18 from "../../assets/s18/sf18.JPG";
import sf18 from "../../assets/s18/s18front.jpg";

import sf218 from "../../assets/s218/sf218.JPG";
import fronts12 from "../../assets/s12/fronts12.JPG";
import Footer from "../Footer";
import s1245 from "../../assets/s12/s1245.JPG";
import sop18 from "../../assets/s18/s1845.jpg";
import s4218 from "../../assets/s218/s4218.JPG";
import { useNavigate } from "react-router-dom";

const products = [
  {
    img: s1245,
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
    img: sop18,
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
    img: s4218,
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

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = Array.isArray(product.img) ? product.img : [product.img];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full">
      {/* IMAGE FIX — SHOW FULL IMAGE (NO CUT) */}
      <img
        src={images[currentImgIndex]}
        alt={product.model}
        className="w-full h-[300px] object-contain rounded-lg cursor-pointer"
        loading="eager"
        decoding="async"
        onClick={() => navigate(`/subwoofer/${product.model.toLowerCase()}`)}
      />

      <h2 className="text-xl text-gray-600 mt-4">{product.title}</h2>
      <h3 className="text-xl font-bold text-gray-600">{product.model}</h3>

      <p className="text-md text-black font-bold my-2">{product.description}</p>

      <p className="text-sm font mt-4 text-gray-700">
        <span className="font-bold">RMS/Peak Power:</span> {product.power}
      </p>

      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Frequency Response:</span>{" "}
        {product.response}
      </p>

      <p className="text-sm mt-5 text-gray-700">
        <span className="font-bold">Sensitivity(1W/1m):</span>{" "}
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
        onClick={() => navigate(`/subwoofer/${product.model.toLowerCase()}`)}>
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
        <h1 className="sm:text-4xl text-red-800 text-[22px] mx-auto font-bold mb-4">
          Subwoofers - S Series
        </h1>

        <p className="text-lg text-gray-700 max-w-7xl mt-5 mx-auto">
          Our subwoofers are equipped with state-of-the-art high-excursion
          drivers, ensuring the delivery of deep and precise bass. The robust
          construction ensures long-lasting performance.
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
