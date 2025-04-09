import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Linear from "../assets/Famousmartin1.jpg";
import Q50 from "../assets/Q50.jpg";
import Q60 from "../assets/Q60.jpg";
import Q70 from "../assets/Q70.jpg";
import Q80 from "../assets/Q80.jpg";
import Cox12 from "../assets/cox12.jpg";
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

const products = [
  {
    img: Linear,
    title: "Line array ",
    model: "Famous 210",
    description:
      " The Famous– 210N is meticulously engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified model features two 10-inch Neodymium drivers and two 1.75inch high-frequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    Type: "Two-way full range Bi-amplified passive Line array loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz (-10 dB)",
    LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "2 x 1.75” (44 mm) High Compression Driver",
    RMS_Power: "LF(600W) & HF(150W)",
    Program_Power: "LF(1200W) & HF(300W)",
    Peak_Power: "LF(2400W) & HF(600W)",
    Sensitivity: "LF:103 dB SPL (1W/1m) & HF:109 dB SPL (1W/1m)",
    Max_SPL: "LF:133 dB SPL & HF:133 dB SPL",
    Max_SPL_Peak: "LF:136 dB SPL & HF:136 dB SPL",
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
    img: Q50,
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
    Sensitivity: "101 dB SPL",
    Max_SPL: "131 dB SPL (Passive/Bi-Amp)",
    Max_SPL_Peak: "134 dB SPL (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Dispersion: "100° (H) x 10 o(V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "286 x 478 x 360mm (H x W x D)",
    Weight: "16.8/37 ",
    pdf: Q50a,
    relatedProducts: [
      {
        name: "TIP-2002",
        path: "/electronics/tip%201002",
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
    img: Q60,
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
    Sensitivity: "102 dB SPL",
    Max_SPL: "133 dB SPL (Passive/Bi-Amp)",
    Max_SPL_Peak: "136 dB SPL (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Dispersion: "100° (H) x 10 o(V)",
    Cabinet_Material: "Birch Plywood",
    Size_mm: "286 x 754 x 380mm (H x W x D)",
    Weight: "22.8/50.2 ",
    pdf: Q60a,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%202002",
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
    img: Q70,
    title: "Line array ",
    model: "Q 70",
    description:
      " The Q-70 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features one 12-inch neodymium drivers and one 1.75-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Places of worKship",
    ],
    Type: "Two-way full range Bi-amplified/passive switchable Line array loudspeaker",
    Frequency_Response: "60 Hz – 20 kHz",
    LF_Drivers: "1x 12” (304 mm) with a 3” Voice Coil",
    HF_Drivers: "1 x 1.75” (44 mm) High Compression Driver",
    RMS_Power: "550W (Passive) / LF:400W, HF:150W (Bi-Amp)",
    Program_Power: "1100W (Passive) / LF:800W, HF:300W (Bi-Amp)",
    Peak_Power: "2200W (Passive) / LF:1600W, HF:600W (Bi-Amp)",
    Sensitivity: "103 dB SPL",
    Max_SPL: "133 dB SPL (Passive/Bi-Amp)",
    Max_SPL_Peak: "136 dB SPL (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Dispersion: "100° (H) x 10 o(V)",
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
    img: Q80,
    title: "Line array ",
    model: "Q 80",
    description:
      " The Q-80 is carefully designed & engineered to meet the rigorous demands of touring performances, rental services, and fixed installations. This bi-amplified & passive switchable model features two 10-inch neodymium drivers and two 1.75-inch highfrequency compression drivers, ensuring exceptional sound quality and performance.",
    application: [
      " Outdoor Events",
      "Live Performance",
      "Theaters and Auditoriums",
      "Fixed Installations",
      // "Places of worKship",
    ],
    Type: "Two-way full range Bi-amplified/passive switchable Line array loudspeaker",
    Frequency_Response: "60 Hz – 20 kHz",
    LF_Drivers: "2x 12” (304 mm) with a 3” Voice Coil",
    HF_Drivers: "2 x 1.75” (44 mm) High Compression Driver",
    RMS_Power: "1000W (Passive) / LF:700W,HF:300W (Bi-Amp)",
    Program_Power: "2000W (Passive) / LF:1400W,HF:600W (Bi-Amp)",
    Peak_Power: "4000W (Passive) / LF:2800W,HF:600W (Bi-Amp)",
    Sensitivity: "103 dB SPL",
    Max_SPL: "136 dB SPL (Passive/Bi-Amp)",
    Max_SPL_Peak: "139 dB SPL (Passive/Bi-Amp)",
    Nominal_Impedance: "LF : 8 Ohms & HF : 8 Ohms",
    Crossover_Mode: "Passive/Bi-amplified Switchable",
    Dispersion: "100° (H) x 10 o(V)",
    Cabinet_Material: "Birch Plywood",
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
    img: Cox12,
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
    Peak_Power: "18000W",
    Sensitivity: "98 dB SPL",
    Max_SPL: "127 dB SPL",
    Max_SPL_Peak: "130 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "100o(H) x 10 o(V)",
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

  return (
    <>
      <div className="w-[90%] mx-auto p-6">
        {/* Product Image and Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 space-x-6">
          <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          />
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

          <div className="grid grid-cols-1 sm:grid-cols-4 sm:space-x-8 mt-5 justify-center">
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
