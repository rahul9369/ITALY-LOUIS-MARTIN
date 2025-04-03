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
import  F12 from "../assets/pdf/F12.pdf";
import  F8 from "../assets/pdf/F8.pdf";
import  F15 from "../assets/pdf/F15.pdf";
import  F10 from "../assets/pdf/F10.pdf";
import { useEffect, useState } from "react";
const products = [
  {
    img: Devilred10,
    title: "Point Source Series",
    model: "Red 10",
    description:
      "The Red - 10 has two powerful 10” (254 mm) low frequency driver and a 1.75” (44 mm) compression driver. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for live/install market applications, including nightclubs and operas. With a ruler-flat response, the cabinet offers uncoloured, transparent sound quality. Crafted from glass fiber reinforced plastic, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity,and minimal distortion without compromising transient response, making it adaptable to even the most challenging applications.",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: Red10PDF,
  },
  {
    img: red6,
    title: "Point Source Series",
    model: "Red 5.5",
    description:
      " The Red – 5.5 has two powerful 5.25” (133 mm)  coaxial driver and two 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including nightclub and premium home cinema installation. ",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: Red6PDF,
  },
  {
    img: red5,
    title: "Point Source Series",
    model: "Red 5",
    description:
      " The Red – 5 has one powerful 5.25” (133 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including hospitality segment and premium home cinema installation. With a ruler-flat response, the cabinet offers uncoloured, transparent sound quality. Crafted from glass fiber reinforced plastic, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: Red5PDF,
  },
  {
    img: red9,
    title: "Point Source Series",
    model: "Red 9",
    description:
      " The Red – 9 is a high-performance, versatile passive speaker system designed to deliver unmatched sound reinforcement. It features a powerful 10-inch (254 mm) coaxial driver paired with a 1.34-inch (34 mm) highfrequency driver. This two-way, full-range configuration, combined with a passive crossover, ensures exceptional audio quality.",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: Red9PDF,
  },
  {
    img: red12,
    title: "Point Source Series",
    model: "Red 12",
    description:
      " The Red – 12 is a high-performance, versatile passive speaker system designed to deliver unmatched sound reinforcement. It features a powerful 12-inch (304 mm) coaxial driver paired with a 1.34-inch (34 mm) highfrequency driver. This two-way, full-range configuration, combined with a passive crossover, ensures exceptional audio quality. Engineered for a wide range of installation market applications, the Red – 12 is ideal for nightclubs, restaurants, lounges, pubs, bars, and auditorium installations.",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: Red12PDF,
  },

  {
    img: Fseries,
    title: "Point Source Series",
    model: "F8",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
    pdf: F8,
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F10",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
    pdf: F10,
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F12",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
     pdf: F12,
  },
  {
    img: Fseries,
    title: "Point Source Series",
    model: "F15",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    power: "2000 W (LF) + 1000 W (MF) + 1000 W (HF)",
    impedance: "8Ω or 16Ω available",
    spl: "141 dB (musical program)",
    maxSpl: "115 dB",
    response: "42 Hz – 18 kHz",
    dimensions: "400 x 230 x 250 mm",
    weight: "64.6 kg",
    finish:
      "Multilayer birch plywood with high resistant black Polyurea® coating",
    grille: "1.5 mm powder-coated steel with black acoustic mesh",
    pdf: "/assets/famous_210_specs.pdf",
    pdf: F15,
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
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.title} - {product.model}
            </h1>
            <p className="text-gray-600 text-sm md:text-sm mt-2">
              {product.description}
            </p>
            <h1 className=" text-xl font-bold">Applications:</h1>
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
                  { label: "Program Power", value: product.power },
                  { label: "Impedance", value: product.impedance },
                  { label: "SPL (1W/1m)", value: product.spl },
                  { label: "Maximum SPL", value: product.maxSpl },
                  { label: "Frequency Response", value: product.response },
                  { label: "Dimensions (HxWxD)", value: product.dimensions },
                  { label: "Weight", value: product.weight },
                  { label: "Finish", value: product.finish },
                  { label: "Grille", value: product.grille },
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
