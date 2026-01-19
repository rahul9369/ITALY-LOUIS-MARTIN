import { Link, useParams } from "react-router-dom";
import PlasticSpeaker from "../assets/plasticDs5.png";

import DS12 from "../assets/DS12.jpg";
import DS5PDF from "../assets/pdf/DS-5.pdf";
import DS8PDF from "../assets/pdf/DS-8.pdf";
import DS12PDF from "../assets/pdf/DS-12.pdf";
import DS15PDF from "../assets/pdf/DS-15.pdf";
import HwPDF from "../assets/pdf/Hw.pdf";
import TIP from "../assets/TIPA.jpg";
import TTA from "../assets/TTA.jpg";
import S218 from "../assets/S218.png";
import S18 from "../assets/S18.png";
import DT400 from "../assets/DT400.jpg";
import Hwfornt from "../assets/Hwfront.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
//ds5//
import dss5 from "../assets/ds5/dss5.JPG";
import dsb5 from "../assets/ds5/dsb5.JPG";
import dsf5 from "../assets/ds5/dsf5.jpg";
import dsup5 from "../assets/ds5/dsup5.JPG";
import dsopen5 from "../assets/ds5/dsopen5.JPG";
//ds8//
import dsf8 from "../assets/ds8/dsf8.JPG";
import dsb8 from "../assets/ds8/dsb8.JPG";
import dsop8 from "../assets/ds8/dsop8.JPG";
import dss8 from "../assets/ds8/dss8.JPG";
import dsup8 from "../assets/ds8/dsup8.JPG";
import d88 from "../assets/ds8/d88.jpg";
//ds12//
import dsf12 from "../assets/ds12/dsf12.JPG";
import dsb12 from "../assets/ds12/dsb12.JPG";
import dsop12 from "../assets/ds12/dsop12.JPG";
import dss12 from "../assets/ds12/dss12.JPG";
import dsup12 from "../assets/ds12/dsup12.JPG";
import ds412 from "../assets/ds12/ds412.JPG";
//ds15//
import dsf15 from "../assets/ds15/dsf15.JPG";
import dsb15 from "../assets/ds15/dsb15.JPG";
import dsop15 from "../assets/ds15/dsop15.JPG";
import dss15 from "../assets/ds15/dss15.JPG";
import dsup15 from "../assets/ds15/dsup15.JPG";
import ds415 from "../assets/ds15/ds415.JPG";
//AMP//
import df200 from "../assets/d200/df200.JPG";
import fd4200 from "../assets/d4200/fd4200.jpg";
import sf18 from "../assets/s18/sf18.JPG";
import fd4300 from "../assets/d4300/fd4300.jpg";

import ft1002 from "../assets/tip1002/ft1002.jpg";
import sf218 from "../assets/s218/sf218.JPG";
import ft300 from "../assets/tta300/ft300.jpg";

import hwside from "../assets/hw65/hwside.jpg";
import hwback from "../assets/hw65/hwback.jpg";

import tlfront5 from "../assets/tl55/tlfront5.png";

import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const products = [
  {
    img: [dss5, dsb5, dsf5, dsup5, dsopen5],
    title: "Plastic Speaker",
    model: "DS5",
    description:
      " The DS – 5 has one powerful 5.25” (133 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications, including hospitality, education segment. Made of plastic & IP54 makes it use for weatherproof applications. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response. ",
    application: [
      "Outdoor applications",
      "Background Music",
      "Terrace",
      // "Theme Park",
      "Classrooms",
    ],
    Type: "Two-way Coaxial full range plastic IP54 loudspeaker",
    Frequency_Response: "65 Hz – 19 kHz",
    LF_Drivers: "1x 5.25” (133 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "100W",
    Program_Power: "200W",
    Peak_Power: "400W",
    Sensitivity: "93 dB ",
    Max_SPL: "115 dB ",
    Max_SPL_Peak: "118 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "115° (H) x 115° (V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "328 x 192 x 160mm (H x W x D)",
    Weight: "5/11.02 ",
    pdf: DS5PDF,
    relatedProducts: [
      {
        name: "D-200",
        path: "/electronics/d%20200",
        img: df200,
      },
      {
        name: "D-4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "DS12",
        path: "/plastic/ds12",
        img: dsf12,
      },
    ],
  },
  {
    img: [dsf8, dsb8, dsop8, dss8, dsup8],
    title: "Plastic Speaker",
    model: "DS8",
    description:
      " The DS – 8 has one powerful 8” (203 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications, including hospitality, education segment. Made of plastic & IP54 makes it use for weatherproof applications. The cabinet`s design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Outdoor applications",
      " Background Music",
      // "Terrace ",
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
    Sensitivity: "95 dB ",
    Max_SPL: "118 dB ",
    Max_SPL_Peak: "121 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "470 x 230 x 260mm (H x W x D)",
    Weight: "8/17.6 ",
    pdf: DS8PDF,
    relatedProducts: [
      {
        name: "D-300",
        path: "/electronics/d%20300",
        img: df200,
      },
      {
        name: "D-4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "DS5",
        path: "/plastic/ds5",
        img: dsf15,
      },
    ],
  },
  {
    img: [dsf12, dsb12, ds412, dss12, dsop12],
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
    Sensitivity: "99 dB ",
    Max_SPL: "128 dB ",
    Max_SPL_Peak: "131 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "425 x 415 x 435mm (H x W x D)",
    Weight: "17/37.4 ",
    pdf: DS12PDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "DS5",
        path: "/plastic/ds5",
        img: dsf5,
      },
    ],
  },
  {
    img: [dsf15, dsop15, dsb15, ds415, dss15],
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
    Sensitivity: "102 dB ",
    Max_SPL: "132 dB ",
    Max_SPL_Peak: "135 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: "IP 54 Weatherproof",
    Size_mm: "490 x 490 x 520mm (H x W x D)",
    Weight: "25/55.1",
    pdf: DS15PDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TIP-1300",
        path: "/electronics/tip%201302",
        img: ft1002,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
    ],
  },

  {
    img: [Hwfornt,hwback,hwside],
    title: "Plastic Speaker",
    model: "Hw 6.5",
    description:
      " The HW 6.5 has one 6.5” Woofer with 1” HF. It is designed for the commercial applications; It has built in transformer taping for high impedance uses environment. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications,including hospitality, education segment. Made of plastic & IP65 makes it use for weatherproof applications. The cabinet's design sleek & compact, look elegant and has good vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      " Outdoor applications ",
      "  Background Music",
      " Theme Park ",
      "Classrooms",
      " Terrace ",
    ],
    Type: "Two-way full range plastic IP 65 Weatherproof loudspeaker",
    Frequency_Response: " 65 Hz – 18 kHz",
    LF_Drivers: " 1x 6.5” (166 mm) LF Driver",
    HF_Drivers: " 1 x 1” (25 mm) Silk dome HF Driver",
    RMS_Power: " 40W / 80W @8 ohms ",
    Program_Power: "80W @ 8 ohms",
    Peak_Power: "160W",
    Sensitivity: " 88 dB ",
    Max_SPL: " 109 dB ",
    Max_SPL_Peak: " 112 dB ",
    Nominal_Impedance: " 8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Plastic materials",
    IP_Rating: " IP 65 Weatherproof",
    Size_mm: " 328 x 205 x 182mm (H x W x D)",
    Weight: " 3.2 / 7.05",
    pdf: HwPDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TIP-1300",
        path: "/electronics/tip%201302",
        img: ft1002,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
    ],
  },
   {
    img: [tlfront5],
    title: "Plastic Speaker",
    model: "TL5.5",
    description:
      " The HW 6.5 has one 6.5” Woofer with 1” HF. It is designed for the commercial applications; It has built in transformer taping for high impedance uses environment. Featuring a passive crossover, two-way full-range configuration, it is ideal for outdoor/indoor install market applications,including hospitality, education segment. Made of plastic & IP65 makes it use for weatherproof applications. The cabinet's design sleek & compact, look elegant and has good vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      " Outdoor applications ",
      "  Background Music",
      " Theme Park ",
      "Classrooms",
      " Terrace ",
    ],
    Type: "Two-way full range ceiling loudspeaker",
    Frequency_Response: " 65 Hz – 19 kHz",
    LF_Drivers: "1 x 5.5” Polypropylene cone woofer Driver",
    HF_Drivers: "1 x 1” (25 mm) HF Driver",
    RMS_Power: "30W ",
    Program_Power: "60W",
    Peak_Power: "120W",
    Sensitivity: " 88 dB ",
    Max_SPL: " 109 dB ",
    Max_SPL_Peak: " 112 dB ",
    Nominal_Impedance: " 8 Ohms  (typical)",
    Crossover_Mode: "Passive, optimized for linearity",
    Dispersion: "115°(H) x 90°(V) ",
    Cabinet_Material: "Plastic materials",
    // IP_Rating: " IP 65 Weatherproof",
    Size_mm: " 220 x 220 x 160 mm (H x W x D)",
    Weight: "2.5/5.51",
    pdf: HwPDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TIP-1300",
        path: "/electronics/tip%201302",
        img: ft1002,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
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
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = Array.isArray(product.img) ? product.img : [product.img];

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>{product.model} - Louis Martin Audio</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <div className="w-[90%] mx-auto p-6">
        {/* Product Image and Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] lg:h-[400px] object-cover rounded-lg"
          /> */}
          <div>
            <div className="relative ">
              {/* Main Image */}
              <img
                src={images[currentImgIndex]}
                alt={`${product.model} - ${currentImgIndex + 1}`}
                className="w-full h-[300px] object-contain rounded-lg cursor-pointer"
                loading="eager"
                decoding="async"
                onClick={() => setIsModalOpen(true)}
              />

              {/* Left Button */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-[-50px] transform -translate-y-1/2  cursor-pointer bg-opacity-50 text-white px-3 py-3 rounded-full hover:bg-opacity-80">
                  <ChevronLeft className="text-black" size={40} />
                </button>
              )}

              {/* Right Button */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 cursor-pointer  bg-opacity-50 text-white px-3 py-3 rounded-full hover:bg-opacity-80">
                  <ChevronRight className="text-black" size={40} />
                </button>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentImgIndex(index)}
                    className={`w-28 h-20 object-contain rounded-md cursor-pointer border ${
                      index === currentImgIndex
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {isModalOpen && (
            <div className="fixed w-full inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <div className="relative  w-full p-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400">
                  &times;
                </button>
                <img
                  src={images[currentImgIndex]}
                  alt="Enlarged"
                  className="w-full max-h-[90vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
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
              <h2 className="text-2xl font-bold">Applications</h2>
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
                  { label: "Sensitivity（1W/1m)", value: product.Sensitivity },
                  {
                    label: "Max SPL (Continuous/1m) ",
                    value: product.Max_SPL,
                  },

                  {
                    label: "Max SPL (Peak/1m)",
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

          <div className="grid grid-cols-1 sm:grid-cols-4 sm:space-x-8 mt-5 sm:justify-center">
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
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white cursor-pointer rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
