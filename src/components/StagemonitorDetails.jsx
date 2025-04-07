import { useParams } from "react-router-dom";
import PlasticSpeaker from "../assets/plasticDs5.png";
import Ds8 from "../assets/Ds8.png";
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
    Type: "Two-way Coaxial full range plastic IP54 loudspeaker",
    Frequency_Response: "65 Hz – 19 kHz",
    LF_Drivers: "1x 5.25” (133 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "100W",
    Program_Power: "200W",
    Peak_Power: "400W",
    Sensitivity: "93 dB SPL",
    Max_SPL: "115 dB SPL",
    Max_SPL_Peak: "118 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "115º(H) x 115 º(V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "328 x 192 x 160mm (H x W x D)",
    Weight: "5/11.02 ",
    pdf: DS5PDF,
  },
  {
    img: Ds8,
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
    Type: "Two-way Coaxial full range plastic IP54 loudspeaker",
    Frequency_Response: "60 Hz – 19 kHz",
    LF_Drivers: "1x 8” (203 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "150W",
    Program_Power: "300W",
    Peak_Power: "600W",
    Sensitivity: "95 dB SPL",
    Max_SPL: "118 dB SPL",
    Max_SPL_Peak: "121 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90º(H) x 60 º(V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "470 x 230 x 260mm (H x W x D)",
    Weight: "8/17.6 ",
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
    Type: "Two-way Coaxial full range plastic IP54 loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz",
    LF_Drivers: "1x 12” (304 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.45” (37 mm) HF Driver",
    RMS_Power: "400W",
    Program_Power: "800W",
    Peak_Power: "1600W",
    Sensitivity: "99 dB SPL",
    Max_SPL: "128 dB SPL",
    Max_SPL_Peak: "131 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90º(H) x 60 º(V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "425 x 415 x 435mm (H x W x D)",
    Weight: "17/37.4 ",
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
    Type: "Two-way Coaxial full range plastic IP54 loudspeaker",
    Frequency_Response: "65 Hz – 19 kHz",
    LF_Drivers: "1x15” (381 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.75” (44 mm) HF Driver (Neo)",
    RMS_Power: "500W",
    Program_Power: "1000W",
    Peak_Power: "2000W",
    Sensitivity: "102 dB SPL",
    Max_SPL: "132 dB SPL",
    Max_SPL_Peak: "135 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90º(H) x 60 º(V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "490 x 490 x 520mm (H x W x D)",
    Weight: "25/55.1",
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
                  ,
                  { label: "Crossover Mode", value: product.Crossover_Mode },
                  { label: "Dispersion", value: product.Dispersion },
                  {
                    label: "Cabinet Material",
                    value: product.Cabinet_Material,
                  },
                  {
                    label: "IP Rating",
                    value: product.IP_Rating,
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
            <div className="mt-4">
              <p className="text-gray-600 text-sm md:text-md mb-2">
                Click below to view or download the specifications.
              </p>

              <a
                href={`/view-pdf?url=${encodeURIComponent(product.pdf)}&name=${
                  product.model
                }_specifications.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-lg text-sm md:text-lg mr-4">
                View PDF
              </a>
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
