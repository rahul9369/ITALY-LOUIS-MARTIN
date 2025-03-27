import { useParams } from "react-router-dom";
import PlasticSpeaker from "../assets/plasticDs5.jpg";
import Footer from "./Footer";
import { useState } from "react";
const products = [
  {
    img: PlasticSpeaker,
    title: "Plastic Speaker",
    model: "DS5",
    description: '1x5" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "100W/400W (Passive)",
    response: "65Hz-19KHz",
    spl: "93dB",
    weight: "5Kg",

    impedance: "8Ω or 16Ω available",
    maxSpl: "115 dB",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: PlasticSpeaker,
    title: "Plastic Speaker",
    model: "DS8",
    description: '1x8" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "150W/300W (Passive)",
    response: "60Hz-19KHz",
    spl: "95dB",
    weight: "8Kg",

    impedance: "8Ω or 16Ω available",
    maxSpl: "115 dB",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: PlasticSpeaker,
    title: "Plastic Speaker",
    model: "DS12",
    description: '1x8" Two-Way Passive Full-Range High Power Loudspeaker',
    power: "400W/800W (Passive)",
    response: "70Hz-19KHz",
    spl: "99dB",
    weight: "17Kg",

    impedance: "8Ω or 16Ω available",
    maxSpl: "115 dB",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
];

const ProductDetail = () => {
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
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg flex-1 ${
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
                className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-green-500 text-white rounded-lg text-sm md:text-lg">
                Download PDF
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
