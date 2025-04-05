import { useParams } from "react-router-dom";
import Footer from "./Footer";
import AMPLIFIERSpl4 from "../assets/AMPLIFIERSpl4.jpg";
import DT400 from "../assets/DT400.jpg";
import PL4 from "../assets/PL4.jpg";
import TTA from "../assets/TTA.jpg";
import TIP from "../assets/TIPA.jpg";
import TIPPDF from "../assets/pdf/TIP.pdf";
import TTAPDF from "../assets/pdf/TTAa.pdf";

import { useEffect, useState } from "react";
const products = [
  {
    img: DT400,
    title: "D Series",
    model: "D 400",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
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
  },
  {
    img: PL4,
    title: "PL Series",
    model: "PL 4.1",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    power: "2000 W (LF) + 1000 W (MF) + 1000 W ",
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
  },
  {
    img: PL4,
    title: "PL Series",
    model: "PL 4.5",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    power: "2000 W (LF) + 1000 W (MF) + 1000 W ",
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
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA300",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA500",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA600",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA800",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA1000",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA1300",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA450",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA Series",
    model: "TTA460",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
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
    pdf: TTAPDF,
  },
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP1002",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
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
    pdf: TIPPDF,
  },
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP1602",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
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
    pdf: TIPPDF,
  },
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP2000",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
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
    pdf: TIPPDF,
  },
  {
    img: TIP,
    title: "TIP Series",
    model: "TIP2400",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
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
    pdf: TIPPDF,
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
            <p className="text-gray-600 text-md md:text-xl mt-2">
              {product.description}
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Key Features :</h2>
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
        <div className="mt-6 border-b border-gray-300 flex flex-wrap">
          {["Specifications", "Downloads"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg flex-1 ${
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
                className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-green-500 text-white rounded-lg text-sm md:text-lg">
                Download PDF
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
