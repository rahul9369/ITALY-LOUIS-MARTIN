import { useParams } from "react-router-dom";
import Footer from "./Footer";
import AMPLIFIERSpl4 from "../assets/AMPLIFIERSpl4.jpg";
import DT400 from "../assets/DT400.jpg";
import PL4 from "../assets/PL4.jpg";
import TTA from "../assets/TTA.jpg";
import TIP from "../assets/TIPA.jpg";
import TIPPDF from "../assets/pdf/TIP.pdf";
import DSeriesAmplifiers from "../assets/pdf/DSeriesAmplifiers.pdf";
import PLSeriesAmplifiers from "../assets/pdf/PLSeriesAmplifiers.pdf";
import TIPSeriesAmplifiers from "../assets/pdf/TIPSeriesAmplifiers.pdf";

import TTAPDF from "../assets/pdf/TTAa.pdf";

import { useEffect, useState } from "react";
const products = [
  {
    img: DT400,
    title: "D ",
    model: "D 200",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    Stereo_8_Ohm_2_Channel: "250W×2 ",
    Stereo_4_Ohm_2_Channel: "400W×2 ",
    Bridge_8_Ohm_1_Channel: "700W×1 ",
    Bridge_4_Ohm_1_Channel: "1000W×1 (Not recommended)  1200W×1",
    Frequency_Response: "20Hz – 20kHz (±0.5dB)",
    THD_N: "<0.05% @ 8Ω 1kHz",
    SNR: ">98dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">80dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ/10kΩ",
    Size_mm: "482 x 220 x 48",
    Weight: " 2.5",
    pdf: DSeriesAmplifiers,
  },
  {
    img: DT400,
    title: "D ",
    model: "D 300",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    Stereo_8_Ohm_2_Channel: " 350W×2 ",
    Stereo_4_Ohm_2_Channel: " 600W×2",
    Bridge_8_Ohm_1_Channel: " 1000W×1 ",
    Bridge_4_Ohm_1_Channel: " 1000Wx1(Not recommended)1200Wx1",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: "<0.05%@8Ω 1KHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞500 (1 kHz @ 8 Ω)",
    Crosstalk: "＞80dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 220 x 48",
    Weight: "2.5",
    pdf: DSeriesAmplifiers,
  },
  {
    img: DT400,
    title: "D ",
    model: "D 4200",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    Stereo_8_Ohm_2_Channel: " 200W×4 ",
    Stereo_4_Ohm_2_Channel: "350W×4",
    Bridge_8_Ohm_1_Channel: "650W×2 ",
    Bridge_4_Ohm_1_Channel: " 900Wx2(Not recommended)1150Wx2",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: "<0.05%@8Ω 1KHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">80dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ",
    Size_mm: "482 x 350 x 44",
    Weight: "2 4.8",
    pdf: DSeriesAmplifiers,
  },
  {
    img: DT400,
    title: "D ",
    model: "D 4300",
    description:
      "The latest advanced design and technology from the Xcellence series is a relentless pursuit of sonic excellence...",
    application: [
      " Outdoor Events",
      "Concerts and Live Events",
      "Theaters and Auditoriums",
      "Night Club",
      "Places of worKship",
    ],
    Stereo_8_Ohm_2_Channel: "300W×4 ",
    Stereo_4_Ohm_2_Channel: "500W×4 ",
    Bridge_8_Ohm_1_Channel: "900W×2 ",
    Bridge_4_Ohm_1_Channel: "900Wx2 (Not recommended)1150Wx2",
    Frequency_Response: "20Hz – 20kHz (±0.5dB)",
    THD_N: "<0.05% @ 8Ω 1kHz",
    SNR: ">98dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">80dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ (Balanced) / 10kΩ (Unbalanced)",
    Size_mm: " 482 x 350 x 44",
    Weight: "5",
    pdf: DSeriesAmplifiers,
  },
  {
    img: PL4,
    title: "PL ",
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
    Stereo_8_Ohm_2_Channel: " 1000W×4 ",
    Stereo_4_Ohm_2_Channel: " 1600W×4 ",
    Bridge_8_Ohm_1_Channel: " 3000W×2 ",
    Bridge_4_Ohm_1_Channel: "1000W×1 (Not recommended)  1200W×1",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">98dB ",
    Damping_Factor: ">1000 ",
    Crosstalk: ">85dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ (Balanced) / 10kΩ (Unbalanced)",
    Size_mm: "482 x 330 x88 ",
    Weight: "10",
    pdf: PLSeriesAmplifiers,
  },
  {
    img: PL4,
    title: "PL ",
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
    Stereo_8_Ohm_2_Channel: " 1500W×4 ",
    Stereo_4_Ohm_2_Channel: " 2500W×4 ",
    Bridge_8_Ohm_1_Channel: " 7500W×2 ",
    Bridge_4_Ohm_1_Channel: "1000W×1 (Not recommended)  1200W×1",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">98dB ",
    Damping_Factor: ">1000 ",
    Crosstalk: ">85dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ",
    Size_mm: "482 x 330 x88 ",
    Weight: "11",
    pdf: PLSeriesAmplifiers,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 300",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: "350W×2 ",
    Stereo_4_Ohm_2_Channel: "465W×2 ",
    Bridge_8_Ohm_1_Channel: "930W×1 ",
    Bridge_4_Ohm_1_Channel: "1116W (Not recommended)  ",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">75dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ  / 10kΩ ",
    Size_mm: "483 x 442x88mm (H x W x D)",
    Weight: "15",
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 500",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: "450W×2 ",
    Stereo_4_Ohm_2_Channel: "750W×2 ",
    Bridge_8_Ohm_1_Channel: "1460W ",
    Bridge_4_Ohm_1_Channel: "1980W(Not recommended)",
    Frequency_Response: "  20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">75dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ ",
    Size_mm: "483 x 442x88mm",
    Weight: "17",
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 600",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: "650W×2 ",
    Stereo_4_Ohm_2_Channel: "930W×2 ",
    Bridge_8_Ohm_1_Channel: "1860W",
    Bridge_4_Ohm_1_Channel: "2604W(Not recommended)",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">75dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ",
    Size_mm: "483 x 442x88mm (H x W x D)",
    Weight: "18",
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 800",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: "850W×2 ",
    Stereo_4_Ohm_2_Channel: " 1250W×2 ",
    Bridge_8_Ohm_1_Channel: " 2500W ",
    Bridge_4_Ohm_1_Channel: "3300W (Not recommended)  ",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">70dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ",
    Size_mm: "483 x 442x88mm",
    Weight: "20",
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 1000",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: " 1000W×2 ",
    Stereo_4_Ohm_2_Channel: "1600W×2 ",
    Bridge_8_Ohm_1_Channel: "3200W ",
    Bridge_4_Ohm_1_Channel: "3800W (Not recommended)  ",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">70dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ",
    Size_mm: "(483 x 462 x 88) mm",
    Weight: "24",
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 1300",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: "1300W×2 ",
    Stereo_4_Ohm_2_Channel: "1950W×2 ",
    Bridge_8_Ohm_1_Channel: "3900W ",
    Bridge_4_Ohm_1_Channel: "4600W (Not recommended)  ",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">70dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ ",
    Size_mm: " (483 x 462 x 88) mm",
    Weight: "26",
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 450",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: " 450W×4 ",
    Stereo_4_Ohm_2_Channel: "750W×2 ",
    Bridge_8_Ohm_1_Channel: "(Not recommended)",
    Bridge_4_Ohm_1_Channel: "(Not recommended)  ",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">75dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ  / 10kΩ",
    Size_mm: "(483 x 462 x 88) mm",
    Weight: "23",
    pdf: TTAPDF,
  },
  {
    img: TTA,
    title: "TTA ",
    model: "TTA 460",
    description:
      "The TTA Series amplifier is multi-channel professional amplifier, based on Class TD that combine the efficiency of Class D amplifiers with the sonic purity of Class B amplifiers. It tracks the audio signal at all frequencies, providing the required rail voltage with additional headroom that reduces the heat emission and maintain flat response even with complex loads.",
    application: [
      "Indicators",
      "Clip limiters",
      "Over temperature protections",
      "DC & Outputs short circuit protection",
    ],
    Stereo_8_Ohm_2_Channel: " 650W×4 ",
    Stereo_4_Ohm_2_Channel: "930W×2 ",
    Bridge_8_Ohm_1_Channel: "(Not recommended) ",
    Bridge_4_Ohm_1_Channel: "(Not recommended)  ",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">95dB (A-weighted)",
    Damping_Factor: ">500 (1kHz @ 8Ω)",
    Crosstalk: ">75dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ/ 10kΩ",
    Size_mm: "(483 x 462 x 88) mm",
    Weight: "25",
    pdf: TTAPDF,
  },
  {
    img: TIP,
    title: "TIP ",
    model: "TIP 1002",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: "1000W×2 ",
    Stereo_4_Ohm_2_Channel: "1600W×2 ",
    Bridge_8_Ohm_1_Channel: "3000W",
    Bridge_4_Ohm_1_Channel: "3600W(Not recommended)",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞800",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 5.8",
    pdf: TIPPDF,
  },
  {
    img: TIP,
    title: "TIP ",
    model: "TIP 1602",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: "1600W×2 ",
    Stereo_4_Ohm_2_Channel: " 2600W× ",
    Bridge_8_Ohm_1_Channel: " 4800W",
    Bridge_4_Ohm_1_Channel: "5600W(Not recommended)",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞1000",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 6.5",
    pdf: TIPPDF,
  },
  {
    img: TIP,
    title: "TIP ",
    model: "TIP 2002",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: "2000W×2 ",
    Stereo_4_Ohm_2_Channel: "3200W×2",
    Bridge_8_Ohm_1_Channel: " 6000W",
    Bridge_4_Ohm_1_Channel: "7200W(Not recommended)",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞1000",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 6.8",
    pdf: TIPPDF,
  },
  {
    img: TIP,
    title: "TIP ",
    model: "TIP 2402",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: "2400W×2 ",
    Stereo_4_Ohm_2_Channel: " 4000W×2 ",
    Bridge_8_Ohm_1_Channel: "8000W",
    Bridge_4_Ohm_1_Channel: "9600W(Not recommended)",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞1000",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 7",
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
                  {
                    label: "Stereo 8Ω (2 Channel)",
                    value: product.Stereo_8_Ohm_2_Channel,
                  },
                  {
                    label: "Stereo 4Ω (2 Channel)",
                    value: product.Stereo_4_Ohm_2_Channel,
                  },
                  {
                    label: "Bridge 8Ω (1 Channel)",
                    value: product.Bridge_8_Ohm_1_Channel,
                  },
                  {
                    label: "Bridge 4Ω (1 Channel)",
                    value: product.Bridge_4_Ohm_1_Channel,
                  },
                  {
                    label: "Frequency Response",
                    value: product.Frequency_Response,
                  },
                  { label: "THD+N", value: product.THD_N },
                  { label: "S/N Ratio", value: product.SNR },
                  { label: "Damping Factor", value: product.Damping_Factor },
                  { label: "Crosstalk", value: product.Crosstalk },
                  {
                    label: "Input Sensitivity",
                    value: product.Input_Sensitivity,
                  },
                  { label: "Input Impedance", value: product.Input_Impedance },
                  { label: "Dimensions (HxWxD)", value: product.Size_mm },
                  { label: "Weight", value: `${product.Weight} Kg` },
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
              <p className="text-gray-600 text-sm md:text-md mb-2">
                Click below to view or download the specifications.
              </p>

              <a
                href={`/view-pdf?url=${encodeURIComponent(product.pdf)}&name=${
                  product.model
                }_specifications.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-lg text-sm md:text-lg mr-4">
                View PDF
              </a>
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
