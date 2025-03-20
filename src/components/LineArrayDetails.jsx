import { useParams } from "react-router-dom";
import Linear from "../assets/Famousmartin1.jpg";
import Q50 from "../assets/Q50.jpg";
import Q60 from "../assets/Q60.jpg";
import Q70 from "../assets/Q70.jpg";
import Q80 from "../assets/Q80.jpg";
import Cox12 from "../assets/cox12.jpg";
const products = [
  {
    img: Linear,
    title: "Line array Series",
    model: "Famous 210",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence, leading us to optimize every component and material. At the core of the XA211P, audio innovation ensures unparalleled clarity, accuracy and fidelity, allowing to shape and sculpt the audio to utmost precision.",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    response: "42 Hz – 18 kHz",
    Sensitivity: "103 dB",
    spl: "141 dB (musical program)",
    weight: "64.6 kg",
  },
  {
    img: Q50,
    title: "Line Array Series",
    model: "Q 50",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence, leading us to optimize every component and material. At the core of the XA211P, audio innovation ensures unparalleled clarity, accuracy and fidelity, allowing to shape and sculpt the audio to utmost precision.",
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    Sensitivity: "103 dB",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: Q60,
    title: "Line Array Series",
    model: "Q 60",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence, leading us to optimize every component and material. At the core of the XA211P, audio innovation ensures unparalleled clarity, accuracy and fidelity, allowing to shape and sculpt the audio to utmost precision.",
    power: "1800W (CF) + 160W (HF)",
    response: "(± 5dB) 60Hz - 19kHz",
    Sensitivity: "103 dB",
    spl: " 123dB - 129dB",
    weight: "22.8 kg",
  },
  {
    img: Q70,
    title: "Line Array Series",
    model: "Q 70",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence, leading us to optimize every component and material. At the core of the XA211P, audio innovation ensures unparalleled clarity, accuracy and fidelity, allowing to shape and sculpt the audio to utmost precision.",
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    Sensitivity: "103 dB",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: Q80,
    title: "Line Array Series",
    model: "Q 80",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence, leading us to optimize every component and material. At the core of the XA211P, audio innovation ensures unparalleled clarity, accuracy and fidelity, allowing to shape and sculpt the audio to utmost precision.",
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    response: "65 Hz – 19 kHz",
    Sensitivity: "103 dB",
    spl: "136 dB (musical program)",
    weight: "37.4 kg",
  },
  {
    img: Cox12,
    title: "Line array Series",
    model: "Cox 12",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence, leading us to optimize every component and material. At the core of the XA211P, audio innovation ensures unparalleled clarity, accuracy and fidelity, allowing to shape and sculpt the audio to utmost precision.",
    power: "1450 W (LF) + 250 W (HF)",
    response: "65 Hz – 2 kHz (LF) / 800 Hz – 19 kHz (HF)",
    Sensitivity: "103 dB",
    spl: "136 dB (LF) / 135 dB (HF)",
    weight: "35 kg",
  },
];

const ProductDetail = () => {
  const { model } = useParams();
  const product = products.find((p) => p.model.toLowerCase() === model);

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found!</h2>;
  }

  return (
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
  );
};

export default ProductDetail;
