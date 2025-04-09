import { Link, useParams } from "react-router-dom";
import Devilred10 from "../assets/Devilred10.png";
import red6 from "../assets/red5.5.jpg";
import red5 from "../assets/red5.jpg";
import red9 from "../assets/red9.png";
import F8IMG from "../assets/F8.png";

import red12 from "../assets/red12.png";
import TIP from "../assets/TIPA.jpg";
import S218 from "../assets/S218.png";
import S18 from "../assets/S18.png";
import DT400 from "../assets/DT400.jpg";
import Fseries from "../assets/SpeakerF12.jpg";
import TTA from "../assets/TTA.jpg";
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
    title: "Point Source ",
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
      // "Multi-functional room",
      "Pub/Bar",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "65 Hz – 18 kHz",
    LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "1 x 1.75” (44 mm) Compression Driver",
    RMS_Power: "600W",
    Program_Power: "1200W",
    Peak_Power: "2400W",
    Sensitivity: "101 dB SPL",
    Max_SPL: "131 dB SPL",
    Max_SPL_Peak: "134 dB SPL",
    Nominal_Impedance: "4 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90o(H) x 50 o(V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "300 x 800 x 350mm (H x W x D)",
    Weight: "25/55.1 ",
    pdf: Red10PDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: TIP,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: S218,
      },
      {
        name: "RED-5.5",
        path: "/product/red%205.5",
        img: red6,
      },
    ],
  },
  {
    img: red6,
    title: "Point Source",
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
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "80 Hz – 19 kHz",
    LF_Drivers: "2 x 5.25” (133 mm) Coaxial Driver",
    HF_Drivers: "2 x 1.34” (34 mm) HF Driver",
    RMS_Power: "200W",
    Program_Power: "400W",
    Peak_Power: "800W",
    Sensitivity: "96 dB SPL",
    Max_SPL: "121 dB SPL",
    Max_SPL_Peak: "124 dB SPL",
    Nominal_Impedance: "4 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "70o(H) x 70 o(V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "200 x320 x 200mm (H x W x D)",
    Weight: "9/19.8",
    pdf: Red6PDF,
    relatedProducts: [
      {
        name: "D-200",
        path: "/electronics/tip%202002",
        img: DT400,
      },
      {
        name: "D-4200",
        path: "/product/red%2010",
        img: DT400,
      },
      {
        name: "D-4300",
        path: "/product/f12",
        img: DT400,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
    ],
  },
  {
    img: red5,
    title: "Point Source ",
    model: "Red 5",
    description:
      " The Red – 5 has one powerful 5.25” (133 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including hospitality segment and premium home cinema installation. With a ruler-flat response, the cabinet offers uncoloured, transparent sound quality. Crafted from glass fiber reinforced plastic, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response",
    application: [
      "Lounge ",
      "Pub/Bar",
      // "Delay/Fill",
      "Multi-functional room",
      "High-end Home Cinema Installation",
    ],
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "90 Hz – 19 kHz",
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
    Dispersion: "70o(H) x 70 o(V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "200 x 200 x 200mm (H x W x D)",
    Weight: "6/13.2",
    pdf: Red5PDF,
    relatedProducts: [
      {
        name: "D-200",
        path: "/electronics/d%20200",
        img: DT400,
      },
      {
        name: "D-4200",
        path: "/electronics/d%204200",
        img: DT400,
      },
      {
        name: "RED-9",
        path: "/product/red%209",
        img: red9,
      },
      {
        name: "RED-12",
        path: "/product/red%2012",
        img: red12,
      },
    ],
  },
  {
    img: red9,
    title: "Point Source ",
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
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "75 Hz – 19 kHz",
    LF_Drivers: "1x 10” (254 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "200W",
    Program_Power: "400W",
    Peak_Power: "800W",
    Sensitivity: "96 dB SPL",
    Max_SPL: "121 dB SPL",
    Max_SPL_Peak: "124 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "70o(H) x 70 o(V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "310 x 320 x 310mm (H x W x D)",
    Weight: "15/33.06 ",
    pdf: Red9PDF,
    relatedProducts: [
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: TTA,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "RED-5",
        path: "/product/red%205",
        img: red5,
      },
      {
        name: "RED-5.5",
        path: "/product/red%205.5",
        img: red6,
      },
    ],
  },
  {
    img: red12,
    title: "Point Source ",
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
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "75 Hz – 19 kHz",
    LF_Drivers: "1x 12” (304 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "250W",
    Program_Power: "500W",
    Peak_Power: "1000W",
    Sensitivity: "97 dB SPL",
    Max_SPL: "123 dB SPL",
    Max_SPL_Peak: "126 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "70o(H) x 70 o(V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "350 x 350 x 330mm (H x W x D)",
    Weight: "18/39.6 ",
    pdf: Red12PDF,
    relatedProducts: [
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: TTA,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "RED-5",
        path: "/product/red%205",
        img: red5,
      },
      {
        name: "RED-5.5",
        path: "/product/red%205.5",
        img: red6,
      },
    ],
  },

  {
    img: F8IMG,
    title: "Point Source ",
    model: "F8",
    description:
      " The F-8 has one powerful 8” (203 mm)  LF driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including foreground music, restaurant, lounges. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use.The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response. ",
    application: [
      "Lounge ",
      // "Pub/Bar",
      "Gym/Fitness Center",
      "Multi-functional room",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz",
    LF_Drivers: "1x 8” (203 mm) LF Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "100W",
    Program_Power: "200W",
    Peak_Power: "400W",
    Sensitivity: "93 dB SPL",
    Max_SPL: "115 dB SPL",
    Max_SPL_Peak: "118 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90o(H) x 50 o(V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "435 x 299 x 269mm (H x W x D)",
    Weight: "12/26.4 ",
    pdf: F8,
    relatedProducts: [
      {
        name: "D-200",
        path: "/electronics/d%20200",
        img: DT400,
      },
      {
        name: "D-4200",
        path: "/electronics/d%204200",
        img: DT400,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "F10",
        path: "/product/f10",
        img: Fseries,
      },
    ],
  },
  {
    img: Fseries,
    title: "Point Source ",
    model: "F10",
    description:
      " The F-10 has one powerful 10” (254 mm)  LF driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including foreground music, restaurant, lounges. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Lounge ",
      "Pub/Bar",
      "Gym/Fitness Center",
      "Multi-functional Room",
      // "Delay/Fill",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "60 Hz – 19 kHz",
    LF_Drivers: "1x 10” (254 mm) LF Driver with 2.5” Voice coil",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "300W",
    Program_Power: "600W",
    Peak_Power: "1200W",
    Sensitivity: "96 dB SPL",
    Max_SPL: "123 dB SPL",
    Max_SPL_Peak: "126 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90o(H) x 50 o(V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "500 x 351 x 317mm (H x W x D)",
    Weight: "17/37.4",
    pdf: F10,
    relatedProducts: [
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: TTA,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "F-8",
        path: "/product/f8",
        img: Fseries,
      },
      {
        name: "F12",
        path: "/product/f12",
        img: Fseries,
      },
    ],
  },
  {
    img: Fseries,
    title: "Point Source ",
    model: "F12",
    description:
      " The F-12 has one powerful 12” (304 mm)  LF driver with 1.45” (37 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install & portable use including Main FoH, Night Clubs, lounges, Multipurpose Hall, Live Setup etc. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      " Lounge  ",
      // "Pub/Bar ",
      // "Main FoH",
      "Multi-functional Room",
      "Live portable setup",
      "Night Clubs",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "55 Hz – 19 kHz",
    LF_Drivers: "1x 12” (304 mm) LF Driver with 3” Voice coil",
    HF_Drivers: "1 x 1.45” (37 mm) HF Driver",
    RMS_Power: "400W",
    Program_Power: "800W",
    Peak_Power: "1600W",
    Sensitivity: "97 dB SPL",
    Max_SPL: "126 dB SPL",
    Max_SPL_Peak: "129 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90o(H) x 50 o(V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "600 x 398 x 365mm (H x W x D)",
    Weight: "25/55.1",
    pdf: F12,
    relatedProducts: [
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: TTA,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: S218,
      },
      {
        name: "F-8",
        path: "/product/f8",
        img: Fseries,
      },
    ],
  },
  {
    img: Fseries,
    title: "Point Source ",
    model: "F15",
    description:
      " The F-15 has one powerful 15” (381 mm)  LF driver with 1.45” (44 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install & portable use including Main FoH, Night Clubs, lounges, Multipurpose Hall, Live Setup etc. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      " Lounge  ",
      // "Pub/Bar ",
      "Main FoH",
      // "Multi-functional Room",
      "Live portable setup",
      "Night Clubs",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "50 Hz – 19 kHz",
    LF_Drivers: "1x 15” (381 mm) LF Driver with 3” Voice coil",
    HF_Drivers: "1 x 1.75” (44 mm) HF Driver",
    RMS_Power: "500W",
    Program_Power: "1000W",
    Peak_Power: "2000W",
    Sensitivity: "99 dB SPL",
    Max_SPL: "129 dB SPL",
    Max_SPL_Peak: "132 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90o(H) x 50 o(V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "690 x 470 x 443mm (H x W x D)",
    Weight: "30/66.1 ",
    pdf: F15PDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: TIP,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: S218,
      },
      {
        name: "F10",
        path: "/product/f10",
        img: Fseries,
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
            className="w-full h-auto md:h-[500px] object-cover rounded-lg"
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
              <h2 className="text-xl font-bold">Applications</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
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
                  { label: "Crossover Mode", value: product.Crossover_Mode },
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
        <div className="mb-5">
          <h1 className="text-3xl font-bold my-10 text-center">
            Related Product
          </h1>

          <div className="flex space-x-8 mt-5 justify-center">
            {product.relatedProducts.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="group block  rounded-md  p-2 text-center overflow-hidden">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-60 h-auto object-cover transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-90"
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
            className="px-4 py-2 md:px-6 md:py-2 cursor-pointer bg-gray-500 text-white rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
