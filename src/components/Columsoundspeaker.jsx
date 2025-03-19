import React from "react";
import Linearray from "../assets/Linerarray.jpg";
import Footer from "../components/Footer";
import plasticDs5 from "../assets/plasticDs5.jpg";

const products = [
  {
    img: plasticDs5,
    title: "Xcellence Series",
    model: "X212AFD",
    description: '2x 12"+ 4x6"+ 2x3" SELF-POWERED TRI-AMPLIFIED',
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    response: "42 Hz – 18 kHz",
    spl: "141 dB (musical program)",
    weight: "64.6 kg",
  },
  {
    img: plasticDs5,
    title: "Xcellence Series",
    model: "XA211",
    description: '2x 10" TWO-WAY SELF-POWERED LINE ARRAY',
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: plasticDs5,
    title: "Xcellence Series",
    model: "XA211P",
    description:
      "TWO-WAY LINE ARRAY MODULE FOR EXTERNAL DSP + BI-AMPLIFICATION",
    power: "1450 W (LF) + 250 W (HF)",
    response: "65 Hz – 2 kHz (LF) / 800 Hz – 19 kHz (HF)",
    spl: "136 dB (LF) / 135 dB (HF)",
    weight: "35 kg",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full text-center">
      <img
        src={product.img}
        alt={product.model}
        className="w-full h-72 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold text-gray-800 mt-4">{product.title}</h2>
      <h3 className="text-lg font-semibold text-gray-600">{product.model}</h3>
      <p className="text-sm text-gray-500 my-2">{product.description}</p>
      <p className="text-sm font-semibold text-gray-700">
        Amplifier Power: {product.power}
      </p>
      <p className="text-sm text-gray-700">
        Frequency Response: {product.response}
      </p>
      <p className="text-sm text-gray-700">Max SPL: {product.spl}</p>
      <p className="text-sm text-gray-700">Weight: {product.weight}</p>
      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
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
