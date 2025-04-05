import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Linear from "../assets/Famousmartin1.jpg";
import Q50 from "../assets/Q50.jpg";
import Q60 from "../assets/Q60.jpg";
import Q70 from "../assets/Q70.jpg";
import Q80 from "../assets/Q80.jpg";
import Cox12 from "../assets/cox12.jpg";
import Famous210N from "../assets/pdf/Famous210N.pdf";
import Cox112 from "../assets/pdf/COX12.pdf";
import Q50a from "../assets/pdf/Q50a.pdf";
import Q60a from "../assets/pdf/Q60a.pdf";
import Q70a from "../assets/pdf/Q70a.pdf";
import Q80a from "../assets/pdf/Q80a.pdf";

const products = [
  {
    img: Linear,
    title: "Line array Series",
    model: "famous 210",
    description:
      " The Famous– 210N is meticulously engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified model features two 10-inch Neodymium drivers and two 1.75inch high-frequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
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
    pdf: Famous210N,
  },
  {
    img: Q50,
    title: "Line Array Series",
    model: "Q 50",
    description:
      " The Q-50 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features one 10-inch neodymium drivers and two 1.4-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      "Outdoor Events",
      "Fixed Installations",
      "Theaters and Auditoriums",
      "Places of worship",
    ],
    power: "2500 W (LF) + 500 W (HF) Class D Bi-amp",
    impedance: "8Ω available",
    spl: "136 dB (musical program)",
    maxSpl: "120 dB",
    response: "65 Hz – 19 kHz",
    dimensions: "500 x 250 x 270 mm",
    weight: "37.4 kg",
    finish: "High-quality Polyurea® coated wooden cabinet",
    grille: "Powder-coated steel with black mesh",
    pdf: Q50a,
  },
  {
    img: Q60,
    title: "Line array Series",
    model: "Q 60",
    description:
      " The Q-60 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features two 10-inch neodymium drivers and two 1.4-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      "Outdoor Events",
      "Live Performance",
      "Fixed Installations",
      "Theaters and Auditoriums",
      "Places of worship",
    ],
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
    pdf: Q60a,
  },
  {
    img: Q70,
    title: "Line array Series",
    model: "Q 70",
    description:
      " The Q-50 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features one 12-inch neodymium drivers and one 1.75-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Places of worKship",
    ],
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
    pdf: Q70a,
  },
  {
    img: Q80,
    title: "Line array Series",
    model: "Q 80",
    description:
      " The Q-80 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features two 10-inch neodymium drivers and two 1.75-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Live Performance",
      "Theaters and Auditoriums",
      "Fixed Installations",
      "Places of worKship",
    ],
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
    pdf: Q80a,
  },
  {
    img: Cox12,
    title: "Line array Series",
    model: "Cox 12",
    description:
      " The Cox – 12 has one powerful 12” (304 mm)  coaxial driver with 1.5” (38 mm) HF. It is a high-performance, versatile, passive line array speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for rental market for small to medium format application along with high end install applications, including night clubs, auditorium, multipurpose hall etc.",
    application: [
      "Live Events",
      "Auditorium & Theaters",
      "Convention Centers",
      "Stadium & Sport Complex",
      "House of worKship",
    ],
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
    pdf: Cox112,
  },
];

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const { model } = useParams();
  const product = products.find((p) => p.model.toLowerCase() === model);
  const [activeTab, setActiveTab] = useState("Specifications");

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found!</h2>;
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = product.pdf;
    link.download = `${product.model}_specifications.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-[90%] mx-auto p-6">
        {/* Product Image and Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 space-x-6">
          <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          />
          <div className="">
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.title} - {product.model}
            </h1>
            <p className="text-gray-600 text-md md:text-xl mt-2">
              {product.description}
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Applications</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {product.application.map((app, index) => (
                  <li className="text-lg" key={index}>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 border-b border-gray-300 flex flex-wrap">
          {["Specifications", "Downloads"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 md:px-6 md:py-3 cursor-pointer text-sm md:text-lg flex-1 ${
                activeTab === tab
                  ? "border-b-2 border-black font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "Specifications" && (
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-md">
              <tbody>
                {[
                  { label: "Program Power", value: product.power },
                  { label: "Impedance", value: product.impedance },
                  { label: "SPL (1W/1m)", value: product.spl },
                  { label: "Maximum SPL", value: product.maxSpl },
                  { label: "Frequency Response", value: product.response },
                  { label: "Dimensions (HxWxD)", value: product.dimensions },
                  { label: "Weight", value: product.weight },
                  { label: "Finish", value: product.finish },
                  { label: "Grille", value: product.grille },
                ].map((spec, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-2 md:px-4 py-2 font-semibold">
                      {spec.label}
                    </td>
                    <td className="px-2 md:px-4 py-2">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === "Downloads" && (
            <div className="mt-4">
              <p className="text-gray-600 text-sm md:text-md">
                Click below to download the specifications.
              </p>
              <button
                onClick={handleDownload}
                className="mt-4 px-4 py-2 md:px-6 md:py-2 cursor-pointer bg-green-500 text-white rounded-lg text-sm md:text-lg">
                Download PDF
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 cursor-pointer text-white rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
