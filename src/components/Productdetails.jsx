import { useParams } from "react-router-dom";
import Devilred10 from "../assets/Devilred10.png";
import red6 from "../assets/red5.5.jpg";
import red5 from "../assets/red5.jpg";
import red9 from "../assets/red9.jpg";
import red12 from "../assets/red12.jpg";
import Fseries from "../assets/SpeakerF12.jpg";
import Red10PDF from "../assets/pdf/Red10.pdf";
import Red5PDF from "../assets/pdf/Red5.pdf";
import Red6PDF from "../assets/pdf/Red5.5.pdf";
import Red9PDF from "../assets/pdf/Red9.pdf";
import Red12PDF from "../assets/pdf/Red12.pdf";
import Footer from "./Footer";
import F12 from "../assets/pdf/F12.pdf";
import F8 from "../assets/pdf/F8.pdf";
import F15PDF from "../assets/pdf/F15.pdf";
import F10 from "../assets/pdf/F10.pdf";
import { useEffect, useState } from "react";
const products = [
  {
    img: Devilred10,
    title: "Point Source Series",
    model: "Red 10",
    description:
      "The Red - 10 has two powerful 10” (254 mm) low frequency driver and a 1.75” (44 mm) compression driver. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for live/install market applications, including nightclubs and operas. ",
    application: [
      "Live Performances",
      "Concerts and Live Events",
      "Main FoH",
      "Night Club",
      "Places of worKship",
      "Auditoriums",
      "Multi-functional room",
      "Pub/Bar",
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
    pdf: Red10PDF,
  },
  {
    img: red6,
    title: "Point Source Series",
    model: "Red 5.5",
    description:
      " The Red – 5.5 has two powerful 5.25” (133 mm)  coaxial driver and two 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including nightclub and premium home cinema installation. With a ruler-flat response, the cabinet offers uncoloured, transparent sound quality. Crafted from glass fiber reinforced plastic, it is suitable for both installation and portable use. ",
    application: [
      "Pub/Bar ",
      "Delay/Fill",
      "Multi-functional room",
      "Night Club",
      "Places of worKship",
      "High-end Home Cinema Installation",
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
    pdf: Red6PDF,
  },
  {
    img: red5,
    title: "Point Source Series",
    model: "Red 5",
    description:
      " The Red – 5 has one powerful 5.25” (133 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including hospitality segment and premium home cinema installation. With a ruler-flat response, the cabinet offers uncoloured, transparent sound quality. Crafted from glass fiber reinforced plastic, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response",
    application: [
      "Lounge ",
      "Pub/Bar",
      "Delay/Fill",
      "Multi-functional room",
      "High-end Home Cinema Installation",
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
    pdf: Red5PDF,
  },
  {
    img: red9,
    title: "Point Source Series",
    model: "Red 9",
    description:
      " The Red – 9 is a high-performance, versatile passive speaker system designed to deliver unmatched sound reinforcement. It features a powerful 10-inch (254 mm) coaxial driver paired with a 1.34-inch (34 mm) highfrequency driver. This two-way, full-range configuration, combined with a passive crossover, ensures exceptional audio quality.",
    application: [
      "Lounge",
      "Pub/Bar",
      "Night Clubs",
      "Delay/Fill",
      "Multi-functional room",
      "Stadiums",
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
    pdf: Red9PDF,
  },
  {
    img: red12,
    title: "Point Source Series",
    model: "Red 12",
    description:
      " The Red – 12 is a high-performance, versatile passive speaker system designed to deliver unmatched sound reinforcement. It features a powerful 12-inch (304 mm) coaxial driver paired with a 1.34-inch (34 mm) highfrequency driver. This two-way, full-range configuration, combined with a passive crossover, ensures exceptional audio quality. Engineered for a wide range of installation market applications, the Red – 12 is ideal for nightclubs, restaurants, lounges, pubs, bars, and auditorium installations.",
    application: [
      "Lounge",
      "Pub/Bar",
      "Night Clubs",
      "Delay/Fill",
      "Multi-functional room",
      "Stadiums",
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
    pdf: Red12PDF,
  },

  {
    img: Fseries,
    title: "Point Source Series",
    model: "F8",
    description:
      " The F-8 has one powerful 8” (203 mm)  LF driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including foreground music, restaurant, lounges. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use.The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response. ",
    application: [
      "Lounge ",
      "Pub/Bar",
      "Gym/Fitness Center",
      "Multi-functional room",
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
    pdf: F8,
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F10",
    description:
      " The F-10 has one powerful 10” (254 mm)  LF driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including foreground music, restaurant, lounges. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Lounge ",
      "Pub/Bar",
      "Gym/Fitness Center",
      "Multi-functional Room",
      "Delay/Fill",
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
    pdf: F10,
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F12",
    description:
      " The F-12 has one powerful 12” (304 mm)  LF driver with 1.45” (37 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install & portable use including Main FoH, Night Clubs, lounges, Multipurpose Hall, Live Setup etc. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      " Lounge  ",
      "Pub/Bar ",
      "Main FoH",
      "Multi-functional Room",
      "Live portable setup",
      "Night Clubs",
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
    pdf: F12,
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F15",
    description:
      " The F-12 has one powerful 15” (381 mm)  LF driver with 1.45” (44 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install & portable use including Main FoH, Night Clubs, lounges, Multipurpose Hall, Live Setup etc. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      " Lounge  ",
      "Pub/Bar ",
      "Main FoH",
      "Multi-functional Room",
      "Live portable setup",
      "Night Clubs",
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
    pdf: F15PDF,
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
            className="w-full h-auto md:h-[500px] object-contain rounded-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.title} - {product.model}
            </h1>
            <p className="text-gray-600 text-sm sm:text-lg mt-2">
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
        <div className="mt-6 border-b  border-gray-300 flex flex-wrap">
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
