import { useParams } from "react-router-dom";
import PlasticSpeaker from "../assets/plasticDs5.jpg";
import DS12 from "../assets/DS12.jpg";
import DS5PDF from "../assets/pdf/DS-5.pdf";
import DS8PDF from "../assets/pdf/DS-8.pdf";
import DS12PDF from "../assets/pdf/DS-12.pdf";
import DS15PDF from "../assets/pdf/DS-15.pdf";
import Footer from "./Footer";
import { useEffect, useState } from "react";
const products = [
  {
    img: PlasticSpeaker,
    title: "Plastic Speaker",
    model: "DS5",
    description:
      " The DS – 5 has one powerful 5.25” (133 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications, including hospitality, education segment. Made of plastic & IP54 makes it use for weatherproof applications. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response. ",
    application: [
      "Outdoor applications",
      "Background Music",
      "Terrace",
      "Theme Park",
      "Classrooms",
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
    pdf: DS5PDF,
  },
  {
    img: PlasticSpeaker,
    title: "Plastic Speaker",
    model: "DS8",
    description:
      " The DS – 8 has one powerful 8” (203 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications, including hospitality, education segment. Made of plastic & IP54 makes it use for weatherproof applications. The cabinet`s design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Outdoor applications",
      " Background Music",
      "Terrace ",
      " Theme Park",
      " Classrooms",
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
    pdf: DS8PDF,
  },
  {
    img: DS12,
    title: "Plastic Speaker",
    model: "DS12",
    description:
      " The DS – 12 has one powerful 12” (304 mm)  coaxial driver with 1.45” (37 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications, including stadium, sport complex, pared ground, hospitality, theme park, museum. Made of plastic & IP54 makes it use for weatherproof applications. The cabinet,s design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Theme park",
      "Stadium & Sport Complex",
      "Museum",
      "High power outdoor applications",
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
    pdf: DS12PDF,
  },
  {
    img: DS12,
    title: "Plastic Speaker",
    model: "DS15",
    description:
      " The DS – 15 has one powerful 15” (381 mm)  coaxial driver with 1.75” (44 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications, including stadium, sport complex, pared ground, hospitality, theme park, museum. Made of plastic & IP54 makes it use for weatherproof applications. The cabinet`s design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Theme park",
      " Stadium & Sport Complex",
      "Museum",
      "High power outdoor applications",
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
    pdf: DS15PDF,
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
            className="w-full h-auto md:h-[500px] object-cover rounded-lg"
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
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg flex-1 cursor-pointer ${
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
                  { label: "HF Drivers", value: product.HF_Drivers },
                  { label: "RMS Power LF", value: product.RMS_Power_LF },
                  { label: "RMS Power HF", value: product.RMS_Power_HF },
                  {
                    label: "Program Power LF",
                    value: product.Program_Power_LF,
                  },
                  {
                    label: "Program Power HF",
                    value: product.Program_Power_HF,
                  },
                  { label: "Peak Power LF", value: product.Peak_Power_LF },
                  { label: "Peak Power HF", value: product.Peak_Power_HF },
                  { label: "Sensitivity LF", value: product.Sensitivity_LF },
                  { label: "Sensitivity HF", value: product.Sensitivity_HF },
                  {
                    label: "Max SPL (Continuous) LF",
                    value: product.Max_SPL_Continuous_LF,
                  },
                  {
                    label: "Max SPL (Continuous) HF",
                    value: product.Max_SPL_Continuous_HF,
                  },
                  {
                    label: "Max SPL (Peak) LF",
                    value: product.Max_SPL_Peak_LF,
                  },
                  {
                    label: "Max SPL (Peak) HF",
                    value: product.Max_SPL_Peak_HF,
                  },
                  {
                    label: "Nominal Impedance LF",
                    value: product.Nominal_Impedance_LF,
                  },
                  {
                    label: "Nominal Impedance HF",
                    value: product.Nominal_Impedance_HF,
                  },
                  { label: "Crossover Mode", value: product.Crossover_Mode },
                  { label: "Dispersion", value: product.Dispersion },
                  {
                    label: "Cabinet Material",
                    value: product.Cabinet_Material,
                  },
                  { label: "Dimensions (HxWxD)", value: product.Size_mm },
                  { label: "Weight", value: product.Weight },
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
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white cursor-pointer rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
