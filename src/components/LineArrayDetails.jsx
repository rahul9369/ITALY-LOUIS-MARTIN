import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";

import Famous210N from "../assets/newpdf/Famous210New.pdf";
import Cox112 from "../assets/newpdf/COX12new.pdf";
import Q50a from "../assets/newpdf/Q50new.pdf";
import Q60a from "../assets/newpdf/Q60new.pdf";
import Q70a from "../assets/newpdf/Q70new.pdf";
import Q80a from "../assets/newpdf/Q80new.pdf";
import { Helmet } from "react-helmet";

///cox//
import coxb from "../assets/coximg/coxb.jpg";
import coxf from "../assets/coximg/coxf.jpg";
import coxs from "../assets/coximg/coxs.jpg";
import Coxunder from "../assets/coximg/coxunder.JPG";
import coxl from "../assets/coximg/coxl.jpg";
//famous//
import famous from "../assets/fam/famous.JPG";
import famouss from "../assets/fam/famouss.JPG";
import famouf from "../assets/fam/famouf.JPG";
import famouu from "../assets/fam/famouu.JPG";
import famoub from "../assets/fam/famoub.JPG";
//q50//
import qfront from "../assets/q50/qfront.JPG";
import qback from "../assets/q50/qback.JPG";
import qnos from "../assets/q50/qnos.JPG";
import qs from "../assets/q50/qs.JPG";
import qss from "../assets/q50/qss.JPG";
import q50layer from "../assets/q50/q50layer.jpg";
//q60//
import q60front from "../assets/q60/q60front.JPG";
import q60s from "../assets/q60/q60s.JPG";
import q60back from "../assets/q60/q60back.jpg";
import q60j from "../assets/q60/q60j.JPG";
import q60ss from "../assets/q60/q60ss.JPG";
import q60layer from "../assets/q60/q60layer.jpg";

//q70//
import q70front from "../assets/q70/q70front.JPG";
import q70j from "../assets/q70/q70j.JPG";
import q70s from "../assets/q70/q70s.JPG";
import q70ss from "../assets/q70/q70ss.JPG";
import q70back from "../assets/q70/q70back.JPG";
import q70layer from "../assets/q70/q70layer.jpg";
//q80//
import q80front from "../assets/q80/q80f.JPG";
import q80s from "../assets/q80/q80s.JPG";
import q80b from "../assets/q80/q80b.jpg";
import q80ss from "../assets/q80/q80ss.JPG";
import q80j from "../assets/q80/q80j.JPG";
import q80layer from "../assets/q80/q80layer.jpg";

import ft1002 from "../assets/tip1002/ft1002.jpg";
import ft300 from "../assets/tta300/ft300.jpg";
import ksf218 from "../assets/ks218/ksf218.JPG";
import sf218 from "../assets/s218/sf218.JPG";
import sf18 from "../assets/s18/sf18.JPG";
import ft800 from "../assets/tta300/ft800.jpg";

import redfront from "../assets/red10/redfront.JPG";
import ft1003 from "../assets/tip1002/ft1003.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    img: [famouf, famous, famouss, famouu, famoub],
    title: "Line array ",
    model: "Famous 210",
    description:
      " The Famous– 210N is meticulously engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified model features two 10-inch Neodymium drivers and two 1.75inch high-frequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worship",
    ],
    Type: "Two-way full range Bi-amplified passive Line array loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz (-10 dB)",
    LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "2 x 1.75” (44 mm) High Compression Driver",
    RMS_Power: "LF(600W) & HF(150W)",
    Program_Power: "LF(1200W) & HF(300W)",
    Peak_Power: "LF(2400W) & HF(600W)",
    Sensitivity: "LF:103 dB SPL (1W/1m) & HF:109 dB SPL (1W/1m)",
    Max_SPL: "LF:133 dB & HF:133 dB ",
    Max_SPL_Peak: "LF:136 dB  & HF:136 dB ",
    Nominal_Impedance: "LF:4 Ohms & HF:4 Ohms",
    Crossover_Mode: "Active, Bi-amplified",
    Crossover_Point_Biamp_Mode: "LF : 70 Hz – 2 kHz | HF : 2 kHz – 19 kHz",
    Dispersion: "70° / 90° / 110° (H) x 10° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic & Birch Plywood",
    Size_mm: "330 x 1100 x 600 mm (H x W x D)",
    Weight: "50 / 110.2 ",
    pdf: Famous210N,
    relatedProducts: [
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "TTA-300",
        path: "/electronics/tta%20300",
        img: ft300,
      },
      {
        name: "KS-218",
        path: "/subwoofer/ks218",
        img: ksf218,
      },
      {
        name: "Red-10",
        path: "/product/red%2010",
        img: redfront,
      },
    ],
  },
  {
    img: [qfront, qnos, qback, qss, qs, q50layer],
    title: "Line Array ",
    model: "Q 50",
    description:
      " The Q-50 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features one 10-inch neodymium drivers and two 1.4-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      "Outdoor Events",
      "Fixed Installations",
      "Theaters and Auditoriums",
      "Places of worship",
    ],
    Type: "Two-way full range Bi-amplified/passive switchable Line array loudspeaker",
    Frequency_Response: "65 Hz – 20 kHz (-10 dB)",
    LF_Drivers: "1 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "2 x 1.4” (35 mm) High Compression Driver",
    RMS_Power: "500W (Passive) / LF:350W, HF:150W (Bi-Amp)",
    Program_Power: "1000W (Passive) / LF:700W, HF:300W (Bi-Amp))",
    Peak_Power: "2000W (Passive) / LF:1400W, HF:600W (Bi-Amp)",
    Sensitivity: "101 dB ",
    Max_SPL: "131 dB  (Passive/Bi-Amp)",
    Max_SPL_Peak: "134 dB  (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Crossover_Point_Biamp_Mode: "LF : 65 Hz – 2.2 kHz | HF : 2.2 kHz – 20 kHz",
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "286 x 478 x 360mm (H x W x D)",
    Weight: "16.8/37 ",
    pdf: Q50a,
    relatedProducts: [
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1003,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
    ],
  },
  {
    img: [q60front, q60s, q60back, q60j, q60layer],
    title: "Line array ",
    model: "Q 60",
    description:
      " The Q-60 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features two 10-inch neodymium drivers and two 1.4-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      "Outdoor Events",
      "Live Performance",
      "Fixed Installations",
      "Theaters and Auditoriums",
      "Places of worship",
    ],
    Type: "Two-way full range Bi-amplified/passive switchable Line array loudspeaker",
    Frequency_Response: "60 Hz – 20 kHz",
    LF_Drivers: "2x 10” (254 mm) with a 2.5” Voice Coil",
    HF_Drivers: "2 x 1.4” (35 mm) High Compression Driver",
    RMS_Power: "750W (Passive) / LF:500W,HF:150W (Bi-Amp)",
    Program_Power: "1500W (Passive) / LF:1000W,HF:300W (Bi-Amp)",
    Peak_Power: "2600W (Passive) / LF:2000W,HF:600W (Bi-Amp)",
    Sensitivity: "102 dB ",
    Max_SPL: "133 dB  (Passive/Bi-Amp)",
    Max_SPL_Peak: "136 dB  (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Crossover_Point_Biamp_Mode: "LF : 60 Hz – 2.2 kHz | HF : 2.2 kHz – 20 kHz",
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "286 x 754 x 380mm (H x W x D)",
    Weight: "22.8/50.2 ",
    pdf: Q60a,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1003,
      },
      // {
      //   name: "S18",
      //   path: "/subwoofer/s18",
      //   img: sf18,
      // },
      {
        name: " S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "COX-12",
        path: "/linearray/cox%2012",
        img: coxf,
      },
    ],
  },
  {
    img: [q70front, q70j, q70back, q70ss, q70layer],
    title: "Line array ",
    model: "Q 70",
    description:
      " The Q-70 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features one 12-inch neodymium drivers and one 1.75-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Places of worship",
    ],
    Type: "Two-way full range Bi-amplified/passive switchable Line array loudspeaker",
    Frequency_Response: "60 Hz – 20 kHz",
    LF_Drivers: "1x 12” (304 mm) with a 3” Voice Coil",
    HF_Drivers: "1 x 1.75” (44 mm) High Compression Driver",
    RMS_Power: "550W (Passive) / LF:400W, HF:150W (Bi-Amp)",
    Program_Power: "1100W (Passive) / LF:800W, HF:300W (Bi-Amp)",
    Peak_Power: "2200W (Passive) / LF:1600W, HF:600W (Bi-Amp)",
    Sensitivity: "103 dB ",
    Max_SPL: "133 dB  (Passive/Bi-Amp)",
    Max_SPL_Peak: "136 dB  (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Crossover_Point_Biamp_Mode: "LF : 60 Hz – 2.2 kHz | HF : 2.2 kHz – 20 kHz",
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "348 x 600 x 422mm (H x W x D)",
    Weight: "22/48.5 ",
    pdf: Q70a,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1003,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: " S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "COX-12",
        path: "/linearray/cox%2012",
        img: coxf,
      },
    ],
  },
  {
    img: [q80front, q80j, q80s, q80b, q80layer],
    title: "Line array ",
    model: "Q 80",
    description:
      " The Q-80 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features two 12-inch neodymium drivers and two 3-inch high frequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Live Performance",
      "Theaters and Auditoriums",
      "Fixed Installations",
      // "Places of worKship",
    ],
    Type: "Two-way full range Bi-amplified/passive switchable Line array loudspeaker",
    Frequency_Response: "60 Hz – 20 kHz",
    LF_Drivers: " 2 x 12” (304 mm) Neodymium driver with 3” voice coil",
    HF_Drivers: "2 x 3” (75mm) HF Compression Driver with 1.5” Exit",
    RMS_Power: "1000W (Passive) / LF:850W,HF:150W (Bi-Amp)",
    Program_Power: "2000W (Passive) / LF:1700W,HF:300W (Bi-Amp)",
    Peak_Power: "4000W (Passive) / LF:3400W,HF:600W (Bi-Amp)",
    Sensitivity: "103 dB ",
    Max_SPL: "136 dB  (Passive/Bi-Amp)",
    Max_SPL_Peak: "139 dB  (Passive/Bi-Amp)",
    Nominal_Impedance: " 8 Ohms (Passive/Bi-Amp)",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Crossover_Point_Biamp_Mode: "LF : 60 Hz – 1.8 kHz | HF : 1.8 kHz – 20 kHz",
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "High density multi-layer birch plywood",
    Size_mm: "348 x 910 x 520mm (H x W x D)",
    Weight: "36.8/81.1 ",
    pdf: Q80a,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: " S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      // {
      //   name: "KS218",
      //   path: "/subwoofer/ks218",
      //   img: ksf218,
      // },
      {
        name: "COX-12",
        path: "/linearray/cox%2012",
        img: coxf,
      },
    ],
  },
  {
    // img: Cox12,
    img: [coxf, coxb, coxs, Coxunder, coxl],
    title: "Line array ",
    model: "Cox 12",
    description:
      " The Cox – 12 has one powerful 12” (304 mm)  coaxial driver with 1.5” (38 mm) HF. It is a high-performance, versatile, passive line array speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for rental market for small to medium format application along with high end install applications, including night clubs, auditorium, multipurpose hall etc.",
    application: [
      "Live Events",
      "Auditorium & Theaters",
      "Convention Centers",
      "Stadium & Sport Complex",
      // "House of worKship",
    ],
    Type: "Two-way Coaxial full range passive line array speaker",
    Frequency_Response: "60 Hz – 19 kHz",
    LF_Drivers: "1x 12” (304 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.5” (38 mm) HF Compression Driver",
    RMS_Power: "450W",
    Program_Power: "900W",
    Peak_Power: "1800W",
    Sensitivity: "98 dB ",
    Max_SPL: "127 dB ",
    Max_SPL_Peak: "130 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Crossover_Point_Biamp_Mode: "LF : 65 Hz – 3 kHz | HF : 3 kHz – 19 kHz",
    Dispersion: "100°(H) x 10° (V)",
    Cabinet_Material: "High density multi-layer plywood",
    Size_mm: "350 x 500 x 450mm (H x W x D)",
    Weight: "22/48.5 ",
    pdf: Cox112,
    relatedProducts: [
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: " S218",
        path: "/subwoofer/s218",
        img: sf218,
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
      <div className="w-[90%] mx-auto mt-4 ">
        <h1 className="md:hidden  block  text-2xl md:text-3xl font-bold">
          {product.title} - {product.model}
        </h1>
        {/* Product Image and Title */}
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-12 mx-auto md:mx-0 mt-4 w-[90%] ">
          {/* <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          /> */}
          <div className="bg-white  w-full ">
            {/* Image Viewer */}
            <div className="relative   rounded-xl flex items-center justify-center h-[280px] sm:h-[360px] overflow-hidden">
              {/* Main Image */}
              <img
                src={images[currentImgIndex]}
                alt={`${product.model} - ${currentImgIndex + 1}`}
                className=" w-[85%] max-h-[350px] object-contain cursor-zoom-in transition-transform duration-300 hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              />

              {/* Left Arrow */}
              {/* Left Arrow */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="
      absolute left-1 md:left-3
      top-1/2 -translate-y-1/2
      bg-white shadow-md rounded-full
      p-1 md:p-2
      hover:bg-gray-100
      transition
    ">
                  <ChevronLeft
                    size={20}
                    className="md:w-[26px] md:h-[26px] text-gray-700"
                  />
                </button>
              )}

              {/* Right Arrow */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="
      absolute right-1 md:right-3
      top-1/2 -translate-y-1/2
      bg-white shadow-md rounded-full
      p-1 md:p-2
      hover:bg-gray-100
      transition
    ">
                  <ChevronRight
                    size={20}
                    className="md:w-[26px] md:h-[26px] text-gray-700"
                  />
                </button>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex justify-center gap-4 mt-5 flex-wrap">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImgIndex(index)}
                    className={`cursor-pointer p-1 rounded-lg transition-all ${
                      index === currentImgIndex
                        ? "ring-2 ring-blue-500"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}>
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-8 h-12 sm:w-18 sm:h-18 md:w-20 md:h-20 
                     object-contain bg-gray-50 rounded-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              {/* Close Button - Always Top Right */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="fixed top-4 right-4 z-[999] text-white text-4xl font-bold hover:text-red-400">
                &times;
              </button>

              {/* Image Container */}
              <div className="relative w-full max-w-5xl p-4 flex justify-center">
                <img
                  src={images[currentImgIndex]}
                  alt="Enlarged"
                  className="w-full max-h-[90vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
          <div className="">
            <h1 className="hidden md:block  text-2xl md:text-3xl font-bold">
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
                  { label: "HF Drivers", value: product.HF_Drivers },
                  { label: "RMS Power ", value: product.RMS_Power },

                  {
                    label: "Program Power",
                    value: product.Program_Power,
                  },
                  { label: "Peak Power", value: product.Peak_Power },
                  { label: "Sensitivity（1W/1m) ", value: product.Sensitivity },
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
                  {
                    label: "Crossover Point (Bi-amp Mode)",
                    value: product.Crossover_Point_Biamp_Mode,
                  },
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
                <p className="text-gray-700 text-lg font-bold">Datasheet</p>
                <a
                  href={`/view-pdf?url=${encodeURIComponent(
                    product.pdf,
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

          <div
            className="
      grid 
      w-[90%] 
      mx-auto
      grid-cols-[repeat(auto-fit,minmax(160px,1fr))]
      gap-6
      justify-items-center
    ">
            {product.relatedProducts.map((item, index) => (
              <Link
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                key={index}
                className="
          group 
          w-[160px] 
          sm:w-[220px] 
          text-center 
          rounded-md 
          p-2 
          overflow-hidden
        ">
                {/* Image */}
                <div className="relative w-full  h-28 sm:h-40 overflow-hidden rounded-sm  flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="
              max-w-full 
              max-h-full 
              object-contain 
              transition 
              duration-300 
              group-hover:scale-105
            "
                  />
                </div>

                {/* Title */}
                <p className=" text-sm sm:text-base text-center font-medium hover:text-orange-400">
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
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 cursor-pointer text-white rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
