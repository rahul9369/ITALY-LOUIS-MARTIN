import React from "react";
import Linearray from "../assets/Linerarray.jpg";
import Footer from "../components/Footer";
import Devilred10 from "../assets/Devilred10.png";
import red6 from "../assets/red5.5.jpg";
import red5 from "../assets/red5.jpg";
import red9 from "../assets/red9.jpg";
import red12 from "../assets/red12.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  {
    img: Devilred10,
    title: "Point Source Series",
    model: "Red 10",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: red6,
    title: "Point Source Series",
    model: "Red 6",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: red5,
    title: "Point Source Series",
    model: "Red 5",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: red9,
    title: "Point Source Series",
    model: "Red 9",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: red12,

    title: "Point Source Series",
    model: "Red 12",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
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
      <img src={Linearray} alt="Line Array" className="w-full" />
      <div className="w-full text-center py-6 px-4">
        <h1 className="text-4xl mx-auto font-bold  mb-4">
          Column Sound Speaker - All Series
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
