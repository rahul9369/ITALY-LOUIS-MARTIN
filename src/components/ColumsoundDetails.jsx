import { Link, useParams } from "react-router-dom";

import Footer from "./Footer";
import K302PDF from "../assets/newpdf/K302new.pdf";
import K304PDF from "../assets/newpdf/K302new.pdf";
import K306PDF from "../assets/newpdf/K302new.pdf";
import K308PDF from "../assets/newpdf/K302new.pdf";
import K312PDF from "../assets/newpdf/K302new.pdf";

//k302 image //
import kff302 from "../assets/k302/kff302.jpg";
import kb302 from "../assets/k302/kb302.jpg";
import ks302 from "../assets/k302/ks302.jpg";
import kt302 from "../assets/k302/kt302.JPG";
//k304//
import kf304 from "../assets/k304/kf304.jpg";
import kb304 from "../assets/k304/kb304.jpg";
import ks304 from "../assets/k304/ks304.jpg";
import ktop304 from "../assets/k304/ktop304.JPG";
//k306//
import kf306 from "../assets/k306/kf306.jpg";
import kb306 from "../assets/k306/kb306.jpg";
import ks306 from "../assets/k306/ks306.jpg";
import ktop306 from "../assets/k306/ktop306.JPG";
//k308//
import kf308 from "../assets/k308/kf308.JPG";
import kb308 from "../assets/k308/kb308.JPG";
import ks308 from "../assets/k308/ks308.JPG";
import ktop308 from "../assets/k308/ktop308.JPG";
//k312//
import kf312 from "../assets/k312/kf312.jpg";
import kb312 from "../assets/k312/kb312.jpg";
import ks312 from "../assets/k312/ks312.jpg";
import ktop312 from "../assets/k312/ktop312.JPG";

import df200 from "../assets/d200/df200.JPG";
import fd4200 from "../assets/d4200/fd4200.jpg";
import sf18 from "../assets/s18/sf18.JPG";
import fd4300 from "../assets/d4300/fd4300.jpg";
import fronts12 from "../assets/s12/fronts12.JPG";
import ft300 from "../assets/tta300/ft300.jpg";
import df2001 from "../assets/d200/df2001.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const products = [
  {
    img: [kff302, kb302, ks302, kt302],
    title: "Column Speaker",
    model: "K302",
    description:
      " The K – 302 has two full range 3” (76 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinet`s design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full Range Column Speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "2x 3” (76 mm) Full range driver",
    RMS_Power: "40W",
    Program_Power: "80W",
    Peak_Power: "160W",
    Sensitivity: "91 dB ",
    Max_SPL: "110 dB ",
    Max_SPL_Peak: "113 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "114 x 101 x 110mm (H x W x D)",
    Weight: "2.2/4.85 ",
    pdf: K302PDF,
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
        name: "S12",
        path: "/subwoofer/s12",
        img: fronts12,
      },
      {
        name: "K304",
        path: "/column/k304",
        img: kf304,
      },
    ],
  },
  {
    img: [kf304, kb304, ks304, ktop304],
    title: "Column Speaker",
    model: "K304",
    description:
      "The K – 304 has four full range 3” (76 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full Range Column Speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "4 x 3” (76 mm) Full range driver",
    RMS_Power: "80W",
    Program_Power: "160W",
    Peak_Power: "320W",
    Sensitivity: "93 dB ",
    Max_SPL: "115 dB ",
    Max_SPL_Peak: "118 dB",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 50° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "439 x 101 x 110mm (H x W x D)",
    Weight: "4.1/9.03 ",
    pdf: K304PDF,
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
        name: "S12",
        path: "/subwoofer/s12",
        img: fronts12,
      },
      {
        name: "K302",
        path: "/column/k302",
        img: kff302,
      },
    ],
  },
  {
    img: [kf306, kb306, ks306, ktop306],
    title: "Column Speaker",
    model: "K306",
    description:
      " The K – 306 has six full range 3” (76 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinets design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full Range Column Speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "6 x 3” (76 mm) Full range driver",
    RMS_Power: "120W",
    Program_Power: "240W",
    Peak_Power: "480W",
    Sensitivity: "95 dB ",
    Max_SPL: "118 dB ",
    Max_SPL_Peak: "121 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 40° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "649 x 101 x 110mm (H x W x D)",
    Weight: "5.9/13.0 ",
    pdf: K306PDF,
    relatedProducts: [
      {
        name: "D200",
        path: "/electronics/d%20200",
        img: df2001,
      },
      {
        name: "D4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
      {
        name: "S12",
        path: "/subwoofer/s12",
        img: fronts12,
      },
      {
        name: "K302",
        path: "/column/k302",
        img: kff302,
      },
    ],
  },
  {
    img: [kf308, kb308, ks308, ktop308],
    title: "Column Speaker",
    model: "K308",
    description:
      " The K – 308 has eight full range 3” (76 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinets design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full Range Column Speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "8 x 3” (76 mm) Full range driver",
    RMS_Power: "160W",
    Program_Power: "320W",
    Peak_Power: "640W",
    Sensitivity: "97 dB ",
    Max_SPL: "121 dB ",
    Max_SPL_Peak: "124 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 30° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "859 x 101 x 110mm (H x W x D)",
    Weight: "7.8/17.2 ",
    pdf: K308PDF,
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
        name: "S12",
        path: "/subwoofer/s12",
        img: fronts12,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
    ],
  },
  {
    img: [kf312, kb312, ks312, ktop312],
    title: "Column Speaker",
    model: "K312",
    description:
      "The K – 312 has twelve full range 3” (76 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinet design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full Range Column Speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "12 x 3” (76 mm) Full range driver",
    RMS_Power: "240W",
    Program_Power: "480W",
    Peak_Power: "960W",
    Sensitivity: "99 dB ",
    Max_SPL: "125 dB ",
    Max_SPL_Peak: "128 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 20° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "1120 x 101 x 110mm (H x W x D)",
    Weight: "10.6/23.3 ",
    pdf: K312PDF,
    relatedProducts: [
      {
        name: "D-4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
      {
        name: "TTA-300",
        path: "/electronics/tta%20300",
        img: ft300,
      },
      {
        name: "S12",
        path: "/subwoofer/s12",
        img: fronts12,
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
      <div className="w-[90%] mx-auto mt-4">
        <h1 className="md:hidden  block  text-2xl md:text-3xl font-bold">
          {product.title} - {product.model}
        </h1>
        {/* Product Image and Title */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        <div className="grid grid-cols-1 mx-auto md:mx-0 md:grid-cols-[65%_35%] gap-12 mt-4 w-[90%] ">
          {/* <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          /> */}
          <div className="bg-white w-full ">
            {/* Image Viewer */}
            <div className="relative w-full  rounded-xl flex items-center justify-center h-[350px] sm:h-[360px] overflow-hidden">
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
                  className="
                  cursor-pointer
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
                  cursor-pointer
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
                      className="w-10 h-12 sm:w-18 sm:h-18 md:w-20 md:h-20 
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
                className="fixed cursor-pointer top-4 right-4 z-[999] text-white text-4xl font-bold hover:text-red-400">
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
            <h1 className="hidden md:block text-2xl md:text-3xl font-bold">
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
                  { label: "Drivers", value: product.Drivers },
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

          <div className="grid grid-cols-1 sm:grid-cols-4 sm:space-x-8 mt-5 justify-center">
            {product.relatedProducts.map((item, index) => (
              <Link
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                key={index}
                className="group block  rounded-md  p-2 text-center overflow-hidden">
                <div className="relative w-full h-40 sm:h-60 overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-[90%] object-contain transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>

                <p className="sm:mt-2 hover:text-orange-400 text-md font-medium">
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
