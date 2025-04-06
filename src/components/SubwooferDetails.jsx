import { useParams } from "react-router-dom";
import SpeakerF12 from "../assets/SpeakerF12.jpg";
import Footer from "./Footer";
import KS18 from "../assets/ks18.jpg";
import subwooferImg from "../assets/subwoofer218.png";
// import KS18a from "../assets/pdf/KS18A.pdf";
import KS18a from "../assets/pdf/KS18a.pdf";

import S18a from "../assets/pdf/S18a.pdf";
import KS218a from "../assets/pdf/KS218a.pdf";
import S218a from "../assets/pdf/S218a.pdf";

import { useEffect, useState } from "react";
const products = [
  {
    img: KS18,
    title: "Subwoofer",
    model: "KS18",
    description:
      "The KS-18 is a high-performance bandpass ported enclosure designed as a passive subwoofer, equipped with a high-power European driver for exceptional sound quality and reliability . Constructed from birch plywood, it offers superior durability and rigidity for long-term use.Engineered to meet the demands of both installation and rental markets, the KS-18 is a reliable choice for professionals seeking high-performance audio solutions.",
    application: [
      "Live Events",
      "Auditoriums",
      "Multi-functional Hall",
      "Night Club",
      "Stadiums & Sport Complex",
    ],
    Type: "Two-way full range Bi-amplified passive Line array loudspeaker",
  Frequency_Response: "70 Hz – 19 kHz (-10 dB)",
  LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
  HF_Drivers: "2 x 1.75” (44 mm) High Compression Driver",
  RMS_Power_LF: "600W",
  RMS_Power_HF: "150W",
  Program_Power_LF: "1200W",
  Program_Power_HF: "300W",
  Peak_Power_LF: "2400W",
  Peak_Power_HF: "600W",
  Sensitivity_LF: "103 dB SPL (1W/1m)",
  Sensitivity_HF: "109 dB SPL (1W/1m)",
  Max_SPL_Continuous_LF: "133 dB SPL",
  Max_SPL_Continuous_HF: "133 dB SPL",
  Max_SPL_Peak_LF: "136 dB SPL",
  Max_SPL_Peak_HF: "136 dB SPL",
  Nominal_Impedance_LF: "4 Ohms",
  Nominal_Impedance_HF: "4 Ohms",
  Crossover_Mode: "Active, Bi-amplified",
  Dispersion: "70° / 90° / 110° (H) x 10° (V)",
  Cabinet_Material: "Glass Fiber Reinforced Plastic & Birch Plywood",
  Size_mm: "330 x 1100 x 600 mm (H x W x D)",
  Weight: "50 Kg / 110.2 lbs",
    pdf: KS18a,
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
    Type: "Two-way full range Bi-amplified passive Line array loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz (-10 dB)",
    LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "2 x 1.75” (44 mm) High Compression Driver",
    RMS_Power_LF: "600W",
    RMS_Power_HF: "150W",
    Program_Power_LF: "1200W",
    Program_Power_HF: "300W",
    Peak_Power_LF: "2400W",
    Peak_Power_HF: "600W",
    Sensitivity_LF: "103 dB SPL (1W/1m)",
    Sensitivity_HF: "109 dB SPL (1W/1m)",
    Max_SPL_Continuous_LF: "133 dB SPL",
    Max_SPL_Continuous_HF: "133 dB SPL",
    Max_SPL_Peak_LF: "136 dB SPL",
    Max_SPL_Peak_HF: "136 dB SPL",
    Nominal_Impedance_LF: "4 Ohms",
    Nominal_Impedance_HF: "4 Ohms",
    Crossover_Mode: "Active, Bi-amplified",
    Dispersion: "70° / 90° / 110° (H) x 10° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic & Birch Plywood",
    Size_mm: "330 x 1100 x 600 mm (H x W x D)",
    Weight: "50 Kg / 110.2 lbs",
    pdf: KS218a,
  },

  {
    img: subwooferImg,
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
    Type: "Two-way full range Bi-amplified passive Line array loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz (-10 dB)",
    LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "2 x 1.75” (44 mm) High Compression Driver",
    RMS_Power_LF: "600W",
    RMS_Power_HF: "150W",
    Program_Power_LF: "1200W",
    Program_Power_HF: "300W",
    Peak_Power_LF: "2400W",
    Peak_Power_HF: "600W",
    Sensitivity_LF: "103 dB SPL (1W/1m)",
    Sensitivity_HF: "109 dB SPL (1W/1m)",
    Max_SPL_Continuous_LF: "133 dB SPL",
    Max_SPL_Continuous_HF: "133 dB SPL",
    Max_SPL_Peak_LF: "136 dB SPL",
    Max_SPL_Peak_HF: "136 dB SPL",
    Nominal_Impedance_LF: "4 Ohms",
    Nominal_Impedance_HF: "4 Ohms",
    Crossover_Mode: "Active, Bi-amplified",
    Dispersion: "70° / 90° / 110° (H) x 10° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic & Birch Plywood",
    Size_mm: "330 x 1100 x 600 mm (H x W x D)",
    Weight: "50 Kg / 110.2 lbs",
    pdf: S18a,
  },

  {
    img: subwooferImg,
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
    Type: "Two-way full range Bi-amplified passive Line array loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz (-10 dB)",
    LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "2 x 1.75” (44 mm) High Compression Driver",
    RMS_Power_LF: "600W",
    RMS_Power_HF: "150W",
    Program_Power_LF: "1200W",
    Program_Power_HF: "300W",
    Peak_Power_LF: "2400W",
    Peak_Power_HF: "600W",
    Sensitivity_LF: "103 dB SPL (1W/1m)",
    Sensitivity_HF: "109 dB SPL (1W/1m)",
    Max_SPL_Continuous_LF: "133 dB SPL",
    Max_SPL_Continuous_HF: "133 dB SPL",
    Max_SPL_Peak_LF: "136 dB SPL",
    Max_SPL_Peak_HF: "136 dB SPL",
    Nominal_Impedance_LF: "4 Ohms",
    Nominal_Impedance_HF: "4 Ohms",
    Crossover_Mode: "Active, Bi-amplified",
    Dispersion: "70° / 90° / 110° (H) x 10° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic & Birch Plywood",
    Size_mm: "330 x 1100 x 600 mm (H x W x D)",
    Weight: "50 Kg / 110.2 lbs",
    pdf: S218a,
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
                  { label: "Type", value: product.Type },
                  { label: "Frequency Response", value: product.Frequency_Response },
                  { label: "LF Drivers", value: product.LF_Drivers },
                  { label: "HF Drivers", value: product.HF_Drivers },
                  { label: "RMS Power LF", value: product.RMS_Power_LF },
                  { label: "RMS Power HF", value: product.RMS_Power_HF },
                  { label: "Program Power LF", value: product.Program_Power_LF },
                  { label: "Program Power HF", value: product.Program_Power_HF },
                  { label: "Peak Power LF", value: product.Peak_Power_LF },
                  { label: "Peak Power HF", value: product.Peak_Power_HF },
                  { label: "Sensitivity LF", value: product.Sensitivity_LF },
                  { label: "Sensitivity HF", value: product.Sensitivity_HF },
                  { label: "Max SPL (Continuous) LF", value: product.Max_SPL_Continuous_LF },
                  { label: "Max SPL (Continuous) HF", value: product.Max_SPL_Continuous_HF },
                  { label: "Max SPL (Peak) LF", value: product.Max_SPL_Peak_LF },
                  { label: "Max SPL (Peak) HF", value: product.Max_SPL_Peak_HF },
                  { label: "Nominal Impedance LF", value: product.Nominal_Impedance_LF },
                  { label: "Nominal Impedance HF", value: product.Nominal_Impedance_HF },
                  { label: "Crossover Mode", value: product.Crossover_Mode },
                  { label: "Dispersion", value: product.Dispersion },
                  { label: "Cabinet Material", value: product.Cabinet_Material },
                  { label: "Dimensions (HxWxD)", value: product.Size_mm },
                  { label: "Weight", value: product.Weight }
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
