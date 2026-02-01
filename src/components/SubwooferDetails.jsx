import { Link, useParams } from "react-router-dom";

import Footer from "./Footer";

// import S218 from "../assets/S218.png";

import KS18a from "../assets/newpdf/ks18new.pdf";
import S18a from "../assets/newpdf/S18new.pdf";
import KS218a from "../assets/newpdf/KS218new.pdf";
import S218a from "../assets/newpdf/S218new.pdf";
import S12a from "../assets/newpdf/S12new.pdf";

import { ChevronLeft, ChevronRight, Import } from "lucide-react";
//ks18//

import ksf18 from "../assets/ks18/ksf18.JPG";
import ksb18 from "../assets/ks18/ksb18.JPG";

import kstop18 from "../assets/ks18/kstop18.JPG";
import ks418 from "../assets/ks18/ks418.jpg";
import ksd18 from "../assets/ks18/ksd18.JPG";

//ks218//
import ksf218 from "../assets/ks218/ksf218.JPG";
import ksb218 from "../assets/ks218/ksb218.JPG";
import kss218 from "../assets/ks218/kss218.JPG";

import ks4218 from "../assets/ks218/ks4218.jpg";

//s18//
import sf18 from "../assets/s18/sf18.JPG";
import sb18 from "../assets/s18/sb18.JPG";
import ss18 from "../assets/s18/ss18.JPG";
import stop18 from "../assets/s18/stop18.JPG";
import s418 from "../assets/s18/s418.JPG";
import sop18 from "../assets/s18/sop18.JPG";

//s12//

import s1245 from "../assets/s12/s1245.JPG";
import fronts12 from "../assets/s12/fronts12.JPG";
import opens12 from "../assets/s12/opens12.JPG";
import backs12 from "../assets/s12/backs12.jpg";
import sides12 from "../assets/s12/sides12.jpg";
import tops12 from "../assets/s12/tops12.JPG";

//s218//

import sf218 from "../assets/s218/sf218.JPG";

import sb218 from "../assets/s218/sb218.JPG";
import ss218 from "../assets/s218/ss218.JPG";

import s4218 from "../assets/s218/s4218.JPG";
import sop218 from "../assets/s218/sop218.JPG";
import sdou218 from "../assets/s218/sdou218.JPG";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ft1002 from "../assets/tip1002/ft1002.jpg";
import redfront from "../assets/red10/redfront.JPG";

import ff15 from "../assets/f15/ff15.jpg";
import famouf from "../assets/fam/famouf.JPG";
import redo5 from "../assets/red6/redo5.JPG";
import redff9 from "../assets/red9/redff9.JPG";
import ft800 from "../assets/tta300/ft800.jpg";
import ff10 from "../assets/f10/ff10.jpg";
import ft2402 from "../assets/tip1002/ft2402.jpg";
import q60front from "../assets/q60/q60front.JPG";
import q80f from "../assets/q80/q80f.JPG";
import redfront5 from "../assets/red5/redfront5.jpg";
const products = [
  {
    img: [ksf18, ksb18, kstop18, ks418, ksd18],
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
    Sensitivity: "98 dB ",
    Max_SPL: "131 dB ",
    Max_SPL_Peak: "134 dB ",
    Nominal_Impedance: "8 Ohms",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood with Polyurea Paint",
    Size_mm: "910 x 610 x710mm (H x W x D)",
    Weight: "58/127.8",
    pdf: KS18a,

    // ✅ Related Products Section
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "RED 10",
        path: "/product/red%2010",
        img: redfront,
      },
      {
        name: "RED5.5",
        path: "/product/red%205.5",
        img: redo5,
      },
      // {
      //   name: "F 15",
      //   path: "/product/f15",
      //   img: ff15,
      // },
    ],
  },

  {
    img: [ksf218, ksb218, kss218, ks4218],
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
    Sensitivity: "102 dB ",
    Max_SPL: "138 dB ",
    Max_SPL_Peak: "141 dB ",
    Nominal_Impedance: "4 Ohms",
    // Crossover_Mode: "Passive",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood with Polyurea Paint",
    Size_mm: "580 x 1160 x890mm (H x W x D)",
    Weight: "88/194.0",
    pdf: KS218a,
    relatedProducts: [
      {
        name: "TIP-2402",
        path: "/electronics/tip%202402",
        img: ft1002,
      },
      {
        name: "RED10",
        path: "/product/red%2010",
        img: redfront,
      },
      {
        name: "Famous 210",
        path: "/linearray/famous%20210",
        img: famouf,
      },
      // {
      //   name: "F15",
      //   path: "/product/f15",
      //   img: ff15,
      // },
    ],
  },
  {
    img: [fronts12, s1245, opens12, backs12, tops12, sides12],
    title: "Subwoofer",
    model: "S12",
    description:
      "The S-12 has single 12” driver with 3” voice coil and high-performance, front-loaded passive subwoofer engineered for exceptional sound quality and reliability. Powered by a premium European driver, it delivers deep, impactful low-frequency reproduction with precision and consistency. Crafted from multi-layer birch plywood, the enclosure offers outstanding rigidity and acoustical integrity, ensuring durability and long-term performance. Designed to meet the rigorous demands of both installation and rental markets, the S-12 stands as a robust and dependable solution for audio professionals seeking uncompromising performance.",
    application: [
      "Multipurpose Hall,",
      " Café",
      "Restaurants",
      " Gyms & Fitness ",
      ,
    ],
    Type: "Passive Subwoofer Speaker",
    Frequency_Response: "35 Hz – 120 Hz",
    LF_Drivers: "1x 12” High performance driver",
    // HF_Drivers: "1 x 1.75” (44 mm) HF Driver",
    RMS_Power: "450W",
    Program_Power: "900W",
    Peak_Power: "1800W",
    Sensitivity: "96 dB ",
    Max_SPL: "123 dB ",
    Max_SPL_Peak: "126 dB ",
    Nominal_Impedance: "8 Ohms",
    // Crossover_Mode: "Passive",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood with Polyurea Paint",
    Size_mm: "360x 421x 500mm (H x W x D)",
    Weight: "20/44.1",
    pdf: S12a,
    relatedProducts: [
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "F10",
        path: "/product/f10",
        img: ff10,
      },
      {
        name: "RED 5",
        path: "/product/red%205",
        img: redfront5,
      },
      {
        name: "RED 9",
        path: "/product/red%209",
        img: redff9,
      },
    ],
  },

  {
    img: [sf18, sb18, ss18, stop18, s418, sop18],
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
    Frequency_Response: "35 Hz – 120 Hz",
    LF_Drivers: "1x 18” High performance driver",
    // HF_Drivers: "1 x 1.75” (44 mm) HF Driver",
    RMS_Power: "1000W",
    Program_Power: "2000W",
    Peak_Power: "4000W",
    Sensitivity: "97 dB ",
    Max_SPL: "130 dB ",
    Max_SPL_Peak: "133 dB ",
    Nominal_Impedance: "8 Ohms",
    // Crossover_Mode: "Passive",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood with Polyurea Paint",
    Size_mm: "690 x 560 x 595mm (H x W x D)",
    Weight: "48/105.8",
    pdf: S18a,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "F15",
        path: "/product/f15",
        img: ff15,
      },
      // {
      //   name: "DS8",
      //   path: "/plastic/ds8",
      //   img: dsf8,
      // },
      // {
      //   name: "COX12",
      //   path: "/linearray/cox%2012",
      //   img: coxf,
      // },
    ],
  },

  {
    img: [sf218, sb218, ss218, s4218, sop218, sdou218],
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
    RMS_Power: "2000W",
    Program_Power: "4000W",
    Peak_Power: "8000W",
    Sensitivity: " 99 dB ",
    Max_SPL: "136 dB ",
    Max_SPL_Peak: "139 dB ",
    Nominal_Impedance: "4 Ohms",
    // Crossover_Mode: "Passive",
    Dispersion: "Omnidirectional",
    Cabinet_Material: "Birch Plywood with Polyurea Paint",
    Size_mm: "580 x 1160 x890mm (H x W x D)",
    Weight: "78/171.9 ",
    pdf: S218a,
    relatedProducts: [
      {
        name: "TIP-2402",
        path: "/electronics/tip%202402",
        img: ft2402,
      },
      {
        name: "Q60",
        path: "/linearray/q%2060",
        img: q60front,
      },
      {
        name: "Q80",
        path: "/linearray/q%2080",
        img: q80f,
      },
      // {
      //   name: "COX12",
      //   path: "/linearray/cox%2012",
      //   img: coxf,
      // },
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
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-12 mt-4 w-[90%] ">
          {/* <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          /> */}
          <div className="bg-white w-full ">
            {/* Image Viewer */}
            <div className="relative bg-gray-50 rounded-xl flex items-center justify-center h-[360px] overflow-hidden">
              {/* Main Image */}
              <img
                src={images[currentImgIndex]}
                alt={`${product.model} - ${currentImgIndex + 1}`}
                className="w-[85%] max-h-[350px] object-contain cursor-zoom-in transition-transform duration-300 hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              />

              {/* Left Arrow */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition">
                  <ChevronLeft size={26} className="text-gray-700" />
                </button>
              )}

              {/* Right Arrow */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition">
                  <ChevronRight size={26} className="text-gray-700" />
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
                      className="w-20 h-20 object-contain bg-gray-50 rounded-md"
                    />
                  </div>
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

          <div className="">
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
