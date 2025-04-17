import { Link, useParams } from "react-router-dom";
import K302 from "../assets/k302.png";
import K304 from "../assets/K304.png";
import K306 from "../assets/k306.png";
import K308 from "../assets/K308.png";
import K312 from "../assets/K312.png";
import DT400 from "../assets/DT400.jpg";
import TIP from "../assets/TIPA.jpg";
import S18 from "../assets/S18.png";
import S218 from "../assets/S218.png";
import Footer from "./Footer";
import K302PDF from "../assets/pdf/K302.pdf";
import K304PDF from "../assets/pdf/K304.pdf";
import K306PDF from "../assets/pdf/K306.pdf";
import K308PDF from "../assets/pdf/K308.pdf";
import K312PDF from "../assets/pdf/K312.pdf";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const products = [
  {
    img: K302,
    title: "Column Speaker",
    model: "K302",
    description:
      " The K – 302 has two full range 1.75” (44 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinet`s design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full range column speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "2x 1.75” (44 mm) Full range driver",
    RMS_Power: "40W",
    Program_Power: "80W",
    Peak_Power: "160W",
    Sensitivity: "91 dB SPL",
    Max_SPL: "110 dB SPL",
    Max_SPL_Peak: "113 dB SPL",
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
        name: "K304",
        path: "/column/k304",
        img: K304,
      },
    ],
  },
  {
    img: K304,
    title: "Column Speaker",
    model: "K304",
    description:
      "The K – 304 has four full range 1.75” (44 mm)  Faital pr driver. Designed from high quality aluminium alloy tha give delivering extraordinary clarity and detailed sound slim design. Suitable for install market applications including public address systems, airports, railway stations, lecture theaters, churches, and other larg venues. The cabinets design emphasizes vocal clarity fidelity, and minimal distortion without compromisin transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full range column speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "4 x 1.75” (44 mm) Full range driver",
    RMS_Power: "80W",
    Program_Power: "160W",
    Peak_Power: "320W",
    Sensitivity: "91 dB SPL",
    Max_SPL: "113 dB SPL",
    Max_SPL_Peak: "116 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "439 x 101 x 110mm (H x W x D)",
    Weight: "4.1/9.03 ",
    pdf: K304PDF,
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
        name: "K302",
        path: "/column/k302",
        img: K302,
      },
    ],
  },
  {
    img: K306,
    title: "Column Speaker",
    model: "K306",
    description:
      " The K – 306 has six full range 1.75” (44 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinets design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full range column speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "6 x 1.75” (44 mm) Full range driver",
    RMS_Power: "120W",
    Program_Power: "240W",
    Peak_Power: "480W",
    Sensitivity: "91 dB SPL",
    Max_SPL: "114 dB SPL",
    Max_SPL_Peak: "117 dB SPLL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "649 x 101 x 110mm (H x W x D)",
    Weight: "5.9/13.0 ",
    pdf: K306PDF,
    relatedProducts: [
      {
        name: "D300",
        path: "/electronics/d%20300",
        img: DT400,
      },
      {
        name: "D4300",
        path: "/electronics/d%204300",
        img: DT400,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: S18,
      },
      {
        name: "K302",
        path: "/column/k302",
        img: K302,
      },
    ],
  },
  {
    img: K308,
    title: "Column Speaker",
    model: "K308",
    description:
      " The K – 308 has eight full range 1.75” (44 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinets design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full range column speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "8 x 1.75” (44 mm) Full range driver",
    RMS_Power: "160W",
    Program_Power: "320W",
    Peak_Power: "640W",
    Sensitivity: "91 dB SPL",
    Max_SPL: "116 dB SPL",
    Max_SPL_Peak: "119 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "859 x 101 x 110mm (H x W x D)",
    Weight: "7.8/17.2 ",
    pdf: K308PDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%202002",
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
        name: "K304",
        path: "/column/k304",
        img: K304,
      },
    ],
  },
  {
    img: K312,
    title: "Column Speaker",
    model: "K312",
    description:
      "The K – 312 has twelve full range 1.75” (44 mm)  Faital pro driver. Designed from high quality aluminium alloy that give delivering extraordinary clarity and detailed sound, slim design. Suitable for install market applications, including public address systems, airports, railway stations, lecture theaters, churches, and other large venues. The cabinet`21QAAAs design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Public address systems",
      "Lecture theatres",
      "Church",
      "Classrooms",
    ],
    Type: "Full range column speaker",
    Frequency_Response: "150 Hz – 18 kHz",
    Drivers: "12 x 1.75” (44 mm) Full range driver",
    RMS_Power: "220W",
    Program_Power: "440W",
    Peak_Power: "880W",
    Sensitivity: "91 dB SPLL",
    Max_SPL: "117 dB SPL",
    Max_SPL_Peak: "120 dB SPL",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Full range driver",
    Dispersion: "90° (H) x 60° (V)",
    Cabinet_Material: "Aluminium alloy",
    Size_mm: "1120 x 101 x 110mm (H x W x D)",
    Weight: "10.6/23.3 ",
    pdf: K312PDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%202002",
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
        name: "K304",
        path: "/column/k304",
        img: K304,
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
          <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-fit rounded-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.title} - {product.model}
            </h1>
            <div className="w-full ">
              <p className="text-gray-600 text-[12px] md:text-[15px] mt-2 text-justify">
                {product.description}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Applications</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {product.application.map((app, index) => (
                  <li className="text-[12px] lg:text-[15px] my-2" key={index}>
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
