import { useParams } from "react-router-dom";
import SpeakerF12 from "../assets/SpeakerF12.jpg";
import Footer from "./Footer";
import KS18 from "../assets/ks18.jpg";
import subwooferImg from "../assets/subwoofer218.png";
import KS18PDF from "../assets/pdf/ks18.pdf";

import { useEffect, useState } from "react";
const products = [
  {
    img: KS18,
    title: "Subwoofer",
    model: "KS18",
    description:
      "The KS-18 is a high-performance bandpass ported enclosure designed as a passive subwoofer, equipped with a high-power European driver for exceptional sound quality and reliability . Constructed from birch plywood, it offers superior durability and rigidity for long-term use.Engineered to meet the demands of both installation and rental markets, the KS-18 is a reliable choice for professionals seeking high-performance audio solutions.",
    power: "1000W/4000W (Passive)",
    response: "35Hz-120Hz",
    Sensitivity: "98dB(1W/1m)",
    spl: "131dB",
    weight: "58Kg",
    maxSpl: "115 dB",
    impedance: "8Ω or 16Ω available",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: KS18PDF,
  },

  {
    img: subwooferImg,
    title: "Subwoofer",
    model: "KS218",
    description: '2x18" High Power Passive Subwoofer',
    power: "2000W/8000W (Passive)",
    response: "30Hz-120Hz",
    Sensitivity: "102dB(1W/1m)",
    spl: "138dB",
    weight: "88Kg",
    maxSpl: "115 dB",
    impedance: "8Ω or 16Ω available",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },

  {
    img: subwooferImg,
    title: "Subwoofer",
    model: "S18",
    description: '1x18" High Power Passive Subwoofer',
    power: "750W/3000W (Passive)",
    response: "38Hz-120Hz",
    Sensitivity: "96dB(1W/1m)",
    spl: "127dB",
    weight: "45Kg",
    maxSpl: "115 dB",
    impedance: "8Ω or 16Ω available",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },

  {
    img: subwooferImg,
    title: "Subwoofer",
    model: "S218",
    description: '2x18" High Power Passive Subwoofer',
    power: "1500W/6000W (Passive)",
    response: "35Hz-120Hz",
    Sensitivity: "102dB(1W/1m)",
    spl: "136dB",
    weight: "78Kg",
    maxSpl: "115 dB",
    impedance: "8Ω or 16Ω available",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.title} - {product.model}
            </h1>
            <p className="text-gray-600 text-md md:text-xl mt-2">
              {product.description}
            </p>
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
                className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-green-500 cursor-pointer text-white rounded-lg text-sm md:text-lg">
                Download PDF
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white rounded-lg cursor-pointer text-sm md:text-lg">
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
