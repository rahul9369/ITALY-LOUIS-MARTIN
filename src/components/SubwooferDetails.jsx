import { Link, useParams } from "react-router-dom";
import SpeakerF12 from "../assets/SpeakerF12.jpg";
import Footer from "./Footer";
import KS18 from "../assets/ks18.jpg";
import subwooferImg from "../assets/subwoofer218.png";
import F12 from "../assets/F12.jpg";
import Devilred10 from "../assets/Devilred10.png";
// import S218 from "../assets/S218.png";
import S218IMG from "../assets/S218.png";
// import KS18a from "../assets/pdf/KS18A.pdf";
import KS18a from "../assets/pdf/KS18a.pdf";
import S218 from "../assets/S218.png";
import S18 from "../assets/S18.png";
import TIP from "../assets/TIPA.jpg";
import S18a from "../assets/pdf/S18a.pdf";
import KS218a from "../assets/pdf/KS218a.pdf";
import S218a from "../assets/pdf/S218a.pdf";
import F15 from "../assets/F15.png";
import Linear from "../assets/Famousmartin1.jpg";

import { useEffect, useState } from "react";
const products = [
  {
    img: KS18,
    title: "Subwoofer",
    model: "KS18",
    description:
      "The KS-18 is a high-performance bandpass ported enclosure designed as a passive subwoofer, equipped with a high-power European driver for exceptional sound quality and reliability. Constructed from birch plywood, it offers superior durability and rigidity for long-term use. Engineered to meet the demands of both installation and rental markets, the KS-18 is a reliable choice for professionals seeking high-performance audio solutions.",
    application: [
      "Live Events",
      "Auditoriums",
      "Multi-functional Hall",
      "Night Club",
      "Stadiums & Sport Complex",
    ],
    Type: "Passive Subwoofer Speaker",
    Frequency_Response: "35 Hz – 120 Hz",
    LF_Drivers: "1x 18” High performance driver",
    RMS_Power: "1000W",
    Program_Power: "2000W",
    Peak_Power: "4000W",
    Sensitivity: "98 dB SPL",
    Max_SPL: "131 dB SPL",
    Max_SPL_Peak: "134 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "910 x 610 x710mm (H x W x D)",
    Weight: "58/127.8",
    pdf: KS18a,

    // ✅ Related Products Section
    relatedProducts: [
      {
        name: "TIP-1302",
        path: "/electronics/tip%201302",
        img: TIP,
      },
      {
        name: "RED 10",
        path: "/product/red%2010",
        img: Devilred10,
      },
      {
        name: "F 12",
        path: "/product/f12",
        img: F12,
      },
      {
        name: "F 15",
        path: "/product/f15",
        img: F15,
      },
    ],
  },

  {
    img: subwooferImg,
    title: "Subwoofer",
    model: "KS218",
    description:
      " The KS – 218 is a high-performance, bandpass ported enclosure designed passive subwoofer, equipped with a high-power European driver, it provides exceptional sound quality and reliability. The birch plywood construction gives the robust,  rigidness & perfect acoustics to the long term uses. The KS – 218 is engineered to meet the demands of the installation and rental market, making it a reliable choice for professionals seeking highperformance audio solutions.",
    application: [
      "Live Events",
      "Auditoriums",
      "Multi-functional Hall",
      "Night Club",
      "Stadiums & Sport Complex",
    ],
    Type: "Passive Subwoofer Speaker",
    Frequency_Response: "30 Hz – 120 Hz",
    LF_Drivers: "2 x 18” High performance driver",
    // HF_Drivers: "1 x 1.75” (44 mm) HF Driver",
    RMS_Power: "2000W",
    Program_Power: "4000W",
    Peak_Power: "8000W",
    Sensitivity: "102 dB SPL",
    Max_SPL: "138 dB SPL",
    Max_SPL_Peak: "141 dB SPL",
    Nominal_Impedance: "4 Ohms",
    // Crossover_Mode: "Passive",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "580 x 1160 x890mm (H x W x D)",
    Weight: "88/194.0",
    pdf: KS218a,
    relatedProducts: [
      {
        name: "TIP-2402",
        path: "/electronics/tip%202002",
        img: TIP,
      },
      {
        name: "RED10",
        path: "/product/red%2010",
        img: Devilred10,
      },
      {
        name: "Famous 210",
        path: "/linearray/famous%20210",
        img: Linear,
      },
      {
        name: "F15",
        path: "/product/f15",
        img: F15,
      },
    ],
  },

  {
    img: S18,
    title: "Subwoofer",
    model: "S18",
    description:
      " The S-18 is a high-performance, front loaded enclosure designed passive subwoofer, equipped with a high-power European driver, it provides exceptional sound quality and reliability. The multi-layer high density plywood construction gives the robust,  rigidness & perfect acoustics to the long term uses. The S -18 is engineered to meet the demands of the installation and rental market, making it a reliable choice for professionals seeking high-performance audio solutions.",
    application: [
      "Live Events",
      "Auditoriums",
      "Multi-functional Hall",
      "Night Club",
      "Stadiums & Sport Complex",
    ],
    Type: "Passive Subwoofer Speaker",
    Frequency_Response: "38 Hz – 120 Hz",
    LF_Drivers: "1x 18” High performance driver",
    // HF_Drivers: "1 x 1.75” (44 mm) HF Driver",
    RMS_Power: "750W",
    Program_Power: "1500W",
    Peak_Power: "3000W",
    Sensitivity: "96 dB SPL",
    Max_SPL: "127 dB SPL",
    Max_SPL_Peak: "130 dB SPL",
    Nominal_Impedance: "8 Ohms",
    // Crossover_Mode: "Passive",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "690 x 560 x 595mm (H x W x D)",
    Weight: "45/99.2 ",
    pdf: S18a,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: TIP,
      },
      {
        name: "RED10",
        path: "/product/red%2010",
        img: Devilred10,
      },
      {
        name: "F12",
        path: "/product/f12",
        img: F12,
      },
      {
        name: "F15",
        path: "/product/f15",
        img: F15,
      },
    ],
  },

  {
    img: S218,
    title: "Subwoofer",
    model: "S218",
    description:
      " The S – 218 is a high-performance, front loaded enclosure designed passive subwoofer, equipped with a high-power European driver, it provides exceptional sound quality and reliability. The multi-layer high density plywood construction gives the robust,  rigidness & perfect acoustics to the long term uses. The S – 218 is engineered to meet the demands of the installation and rental market, making it a reliable choice for professionals seeking highperformance audio solutions.",
    application: [
      "Live Events",
      "Auditoriums",
      "Multi-functional Hall",
      "Night Club",
      "Stadiums & Sport Complex",
    ],
    Type: "Passive Subwoofer Speaker",
    Frequency_Response: "35 Hz – 120 Hz",
    LF_Drivers: "2 x 18” High performance driver",
    // HF_Drivers: "1 x 1.75” (44 mm) HF Driver",
    RMS_Power: "1500W",
    Program_Power: "3000W",
    Peak_Power: "6000W",
    Sensitivity: "102 dB SPL",
    Max_SPL: "136 dB SPL",
    Max_SPL_Peak: "139 dB SPL",
    Nominal_Impedance: "4 Ohms",
    // Crossover_Mode: "Passive",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Multi-layer high density plywood",
    Size_mm: "580 x 1160 x890mm (H x W x D)",
    Weight: "78/171.9 ",
    pdf: S218a,
    relatedProducts: [
      {
        name: "TIP-1302",
        path: "/electronics/tip%201302",
        img: TIP,
      },
      {
        name: "RED10",
        path: "/product/red%2010",
        img: Devilred10,
      },
      {
        name: "F12",
        path: "/product/f12",
        img: F12,
      },
      {
        name: "F15",
        path: "/product/f15",
        img: F15,
      },
    ],
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
            className="w-full h-auto md:h-[400px] lg:h-[400px] object-cover rounded-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.title} - {product.model}
            </h1>
            <div className="w-full ">
              <p className="text-gray-600 text-[12px] md:text-[15px]  mt-2 text-justify">
                {product.description}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Applications </h2>
              <ul className="list-disc list-inside  text-gray-600 mt-4">
                {product.application.map((app, index) => (
                  <li className="text-[12px] md:text-[15px]  my-2" key={index}>
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
                  { label: "Type", value: product.Type },
                  {
                    label: "Frequency Response",
                    value: product.Frequency_Response,
                  },
                  { label: "LF Drivers", value: product.LF_Drivers },

                  { label: "RMS Power ", value: product.RMS_Power },

                  {
                    label: "Program Power",
                    value: product.Program_Power,
                  },
                  { label: "Peak Power", value: product.Peak_Power },
                  { label: "Sensitivity", value: product.Sensitivity },
                  {
                    label: "Max SPL (Continuous) ",
                    value: product.Max_SPL,
                  },
                  {
                    label: "Max SPL (Peak)",
                    value: product.Max_SPL_Peak,
                  },
                  {
                    label: "Nominal Impedance",
                    value: product.Nominal_Impedance,
                  },
                  //  { label: "Crossover Mode", value: product.Crossover_Mode },
                  { label: "Dispersion", value: product.Dispersion },
                  {
                    label: "Cabinet Material",
                    value: product.Cabinet_Material,
                  },
                  { label: "Dimensions (HxWxD)", value: product.Size_mm },
                  { label: "Weight(Kg)/Lbs", value: product.Weight },
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
            <div className="mt-4 w-[100%]">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700 text-lg font-bold">Data Sheet</p>
                <a
                  href={`/view-pdf?url=${encodeURIComponent(
                    product.pdf
                  )}&name=${product.model}_specifications.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm md:text-base hover:bg-blue-700 transition-colors">
                  View PDF
                </a>
              </div>

              <hr className="border-t border-gray-300" />
            </div>
          )}
        </div>
        <div className="w-full mx-auto mb-5">
          <h1 className="text-3xl font-bold my-10 text-center">
            Related Product
          </h1>

          <div className=" grid grid-cols-1 sm:grid-cols-4 sm:space-x-8 w-full mx-auto mt-5">
            {product.relatedProducts.map((item, index) => (
              <Link
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                key={index}
                className="group block  rounded-md  p-2 text-center overflow-hidden">
                <div className="relative w-full h-60 overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-[90%] object-contain transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>

                <p className="mt-2 hover:text-orange-400 text-md font-medium">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* Buttons */}
        {/* <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white rounded-lg cursor-pointer text-sm md:text-lg">
            Go Back
          </button>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
