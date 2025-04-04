import { useParams } from "react-router-dom";
import K302 from "../assets/K302.png";
import K304 from "../assets/K304.png";
import K306 from "../assets/K306.jpg";
import K308 from "../assets/K308.jpg";
import K312 from "../assets/K312.png";
import Footer from "./Footer";
import { useEffect, useState } from "react";
const products = [
  {
    img: K302,
    title: "Column Speaker",
    model: "K302",
    description: '2x1.75" Passive Full Range Column Speaker',
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    power: "40W/160W (Passive)",
    response: "150Hz-18KHz",
    Sensitivity: "91dB(1W/1m)",
    spl: "110dB",
    weight: "2.2Kg",
    impedance: "8Ω or 16Ω available",
    maxSpl: "115 dB",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: K304,
    title: "Column Speaker",
    model: "K304",
    description: '4x1.75" Passive Full Range Column Speaker',
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    power: "80W/320W (Passive)",
    response: "150Hz-18KHz",
    Sensitivity: "91dB(1W/1m)",
    spl: "113dB",
    weight: "4.1Kg",
    impedance: "8Ω or 16Ω available",
    maxSpl: "115 dB",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: K306,
    title: "Column Speaker",
    model: "K306",
    description: '4x1.75" Passive Full Range Column Speaker',
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    power: "80W/320W (Passive)",
    response: "150Hz-18KHz",
    Sensitivity: "91dB(1W/1m)",
    spl: "113dB",
    weight: "4.1Kg",
    impedance: "8Ω or 16Ω available",
    maxSpl: "115 dB",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: K308,
    title: "Column Speaker",
    model: "K308",
    description: '8x1.75" Passive Full Range Column Speaker',
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    power: "160W/640W (Passive)",
    response: "150Hz-18KHz",
    Sensitivity: "91dB(1W/1m)",
    spl: "116dB",
    weight: "7.8Kg",
    impedance: "8Ω or 16Ω available",
    maxSpl: "115 dB",
    dimensions: "400 x 230 x 250 mm",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
  },
  {
    img: K312,
    title: "Column Speaker",
    model: "K312",
    description: '12x1.75" Passive Full Range Column Speaker',
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    power: "220W/880W (Passive)",
    response: "150Hz-18KHz",
    Sensitivity: "91dB(1W/1m)",
    spl: "117dB",
    weight: "10.6Kg",
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
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const { model } = useParams();
  console.log(model);
  const product = products.find((p) => p.model.toLowerCase() === model);
  console.log(product);
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
            className="w-full h-auto md:h-[400px] object-fit rounded-lg"
          />
          <div>
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
            className="px-4 py-2 md:px-6 md:py-2 cursor-pointer bg-gray-500 text-white rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
