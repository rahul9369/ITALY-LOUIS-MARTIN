import { useParams } from "react-router-dom";
import Devilred10 from "../assets/Devilred10.png";
import red6 from "../assets/red5.5.jpg";
import red5 from "../assets/red5.jpg";
import red9 from "../assets/red9.jpg";
import red12 from "../assets/red12.jpg";
import Footer from "./Footer";
const products = [
  {
    img: Devilred10,
    title: "Point Source Series",
    model: "Red 10",
    description:
      "Dual custom high-performance 6” carbon fiber drivers deliver incredible sound quality and 121 dB continuous SPL output capability from this advanced ultra-compact cabinet, resulting in extraordinary power levels and signal coverage from this discretely dimensioned loudspeaker.",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    response: "42 Hz – 18 kHz",
    spl: "141 dB (musical program)",
    weight: "64.6 kg",
  },
  {
    img: red6,
    title: "Point Source Series",
    model: "Red 5.5",
    description:
      "Dual custom high-performance 6” carbon fiber drivers deliver incredible sound quality and 121 dB continuous SPL output capability from this advanced ultra-compact cabinet, resulting in extraordinary power levels and signal coverage from this discretely dimensioned loudspeaker.",
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: red5,
    title: "Point Source Series",
    model: "Red 5",
    description:
      "Dual custom high-performance 6” carbon fiber drivers deliver incredible sound quality and 121 dB continuous SPL output capability from this advanced ultra-compact cabinet, resulting in extraordinary power levels and signal coverage from this discretely dimensioned loudspeaker.",
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: red9,
    title: "Point Source Series",
    model: "Red 9",
    description:
      "Dual custom high-performance 6” carbon fiber drivers deliver incredible sound quality and 121 dB continuous SPL output capability from this advanced ultra-compact cabinet, resulting in extraordinary power levels and signal coverage from this discretely dimensioned loudspeaker.",
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: red12,
    title: "Point Source Series",
    model: "Red 12",
    description:
      "Dual custom high-performance 6” carbon fiber drivers deliver incredible sound quality and 121 dB continuous SPL output capability from this advanced ultra-compact cabinet, resulting in extraordinary power levels and signal coverage from this discretely dimensioned loudspeaker.",
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
];

const ProductDetail = () => {
  const { model } = useParams();
  const product = products.find((p) => p.model.toLowerCase() === model);

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found!</h2>;
  }

  return (
    <>
      <div className="w-[90%] grid grid-cols-2 gap-6 mx-auto p-6">
        <div>
          <img
            src={product.img}
            alt={product.model}
            className="w-full h-[90%] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mt-4">
            {product.title} - {product.model}
          </h1>
          <p className="text-gray-600 text-xl mt-2">{product.description}</p>
          <p className="text-gray-700 mt-4">
            <strong>Power:</strong> {product.power}
          </p>
          <p className="text-gray-700 py-2">
            <strong>Response:</strong> {product.response}
          </p>
          <p className="text-gray-700">
            <strong>SPL:</strong> {product.spl}
          </p>
          <p className="text-gray-700 py-2">
            <strong>Weight:</strong> {product.weight}
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg">
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
