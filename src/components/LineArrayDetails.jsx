import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";

import Q50 from "../assets/Q50.jpg";
import TIP from "../assets/TIPA.jpg";
import S218 from "../assets/S218.png";
import S18 from "../assets/S18.png";
import TTA from "../assets/TTA.jpg";
import subwooferImg from "../assets/subwoofer218.png";
import Famous210N from "../assets/pdf/Famous210N.pdf";
import Cox112 from "../assets/pdf/COX12.pdf";
import Q50a from "../assets/pdf/Q50a.pdf";
import Q60a from "../assets/pdf/Q60a.pdf";
import Q70a from "../assets/pdf/Q70a.pdf";
import Q80a from "../assets/pdf/Q80a.pdf";
import { Helmet } from "react-helmet";
import coxb from "../assets/coximg/coxb.jpg";
import coxf from "../assets/coximg/coxf.jpg";
import coxs from "../assets/coximg/coxs.jpg";
import Coxunder from "../assets/coximg/coxunder.jpg";
import coxl from "../assets/coximg/coxl.jpg";
import famous from "../assets/fam/famous.jpg";
import famouss from "../assets/fam/famouss.jpg";
import famouf from "../assets/fam/famouf.jpg";
import famouu from "../assets/fam/famouu.jpg";
import famoub from "../assets/fam/famoub.jpg";
import qfront from "../assets/q50/qfront.jpg";
import qback from "../assets/q50/qback.jpg";
import qnos from "../assets/q50/qnos.jpg";
import qs from "../assets/q50/qs.jpg";
import qss from "../assets/q50/qss.jpg";
import qtop from "../assets/q50/qtop.jpg";
import q60front from "../assets/q60/q60front.jpg";
import q60s from "../assets/q60/q60s.jpg";
import q60back from "../assets/q60/q60back.jpg"; 
import q60j from "../assets/q60/q60j.jpg";
import q60ss from "../assets/q60/q60ss.jpg";
import q60top from "../assets/q60/q60top.jpg"; 
import q70front from "../assets/q70/q70front.jpg";
import q70j from "../assets/q70/q70j.jpg";
import q70s from "../assets/q70/q70s.jpg";
import q70ss from "../assets/q70/q70ss.jpg";
import q70back from "../assets/q70/q70back.jpg";
import q70top from "../assets/q70/q70top.jpg";
import q80front from "../assets/q80/q80f.jpg";
import q80s from "../assets/q80/q80s.jpg";
import q80back from "../assets/q80/q80b.jpg";
import q80ss from "../assets/q80/q80ss.jpg";
import q80j from "../assets/q80/q80j.jpg";
import q80top from "../assets/q80/q80t.jpg";  
// import cox12 from "../assets/coximg/coxunder.jpg";
// import coxback1 from "../assets/coxback1.jpg";
// import coxback2 from "../assets/coxback2.jpg";
// import coxfront from "../assets/coxfront.jpg";
// import coxside from "../assets/coxside.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    img: [famouf,famous, famouss, famouu, famoub],
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
    Dispersion: "70° / 90° / 110° (H) x 10° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic & Birch Plywood",
    Size_mm: "330 x 1100 x 600 mm (H x W x D)",
    Weight: "50 / 110.2 ",
    pdf: Famous210N,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: TIP,
      },
      {
        name: "TTA-500",
        path: "/electronics/tta%20500",
        img: TTA,
      },
      {
        name: "KS-218",
        path: "/subwoofer/ks218",
        img: subwooferImg,
      },
      {
        name: "Q50",
        path: "/linearray/q%2050",
        img: Q50,
      },
    ],
  },
  {
    img: [ qfront,qnos, qback, qss,qs, qtop],
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
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "286 x 478 x 360mm (H x W x D)",
    Weight: "16.8/37 ",
    pdf: Q50a,
    relatedProducts: [
      {
        name: "TIP-1302",
        path: "/electronics/tip%201302",
        img: TIP,
      },
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
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
    ],
  },
  {
    img: [q60front,q60s,q60back,q60ss,q60j,q60top],
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
    RMS_Power: "650W (Passive) / LF:500W,HF:150W (Bi-Amp)",
    Program_Power: "1300W (Passive) / LF:1000W,HF:300W (Bi-Amp)",
    Peak_Power: "2600W (Passive) / LF:2000W,HF:600W (Bi-Amp)",
    Sensitivity: "102 dB ",
    Max_SPL: "133 dB  (Passive/Bi-Amp)",
    Max_SPL_Peak: "136 dB  (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "286 x 754 x 380mm (H x W x D)",
    Weight: "22.8/50.2 ",
    pdf: Q60a,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: TIP,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: " S218",
        path: "/subwoofer/s218",
        img: S218,
      },
      {
        name: "Q50",
        path: "/linearray/q%2050",
        img: Q50,
      },
    ],
  },
  {
    img: [q70front,q70j,q70s,q70back,q70ss,q70top],
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
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "348 x 600 x 422mm (H x W x D)",
    Weight: "22/48.5 ",
    pdf: Q70a,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: TIP,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: " S218",
        path: "/subwoofer/s218",
        img: S218,
      },
      {
        name: "KS218",
        path: "/subwoofer/ks218",
        img: subwooferImg,
      },
    ],
  },
  {
    img: [q80front,q80j,q80s,q80back,q80ss,q80top ],
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
    Dispersion: "100° (H) x 10° (V)",
    Cabinet_Material: "High density multi-layer birch plywood",
    Size_mm: "348 x 910 x 520mm (H x W x D)",
    Weight: "36.8/81.1 ",
    pdf: Q80a,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: TIP,
      },
      {
        name: " S218",
        path: "/subwoofer/s218",
        img: S218,
      },
      {
        name: "KS218",
        path: "/subwoofer/ks218",
        img: subwooferImg,
      },
      // {
      //   name: "F15",
      //   path: "/product/f15",
      //   img: Q50,
      // },
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
    Dispersion: "100°(H) x 10° (V)",
    Cabinet_Material: "High density multi-layer plywood",
    Size_mm: "350 x 500 x 450mm (H x W x D)",
    Weight: "22/48.5 ",
    pdf: Cox112,
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
        name: " S218",
        path: "/subwoofer/s218",
        img: S218,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 space-x-6">
          {/* <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          /> */}
          <div>
            <div className="relative ">
              {/* Main Image */}
              <img
                src={images[currentImgIndex]}
                alt={`${product.model} - ${currentImgIndex + 1}`}
                className="w-full h-[500px] object-contain rounded-lg cursor-pointer"
                 loading="lazy"
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
              <div className="w-full h-40 flex items-center justify-center bg-white">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentImgIndex(index)}
                    className={`w-28 h-20 object-cover rounded-md cursor-pointer border ${
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

          <div className="flex flex-wrap justify-center gap-8 mt-5">
            {product.relatedProducts.map((item, index) => (
              <Link
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                key={index}
                className="group w-60 block rounded-md p-2 text-center overflow-hidden">
                <div className="relative w-full h-60 overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-[95%] object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
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
