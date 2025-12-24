import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

import DT400 from "../assets/DT400.jpg";
import PL4 from "../assets/PL4.jpg";
import TTA from "../assets/TTA.jpg";
import TIP from "../assets/TIPA.jpg";
import DSeriesAmplifiers from "../assets/pdf/Dseries.pdf";
import PLSeriesAmplifiers from "../assets/pdf/PLseries.pdf";
import TIPPDF from "../assets/pdf/TIPseries.pdf";
import TTAPDF from "../assets/pdf/TTAseries.pdf";

//pl4//
import plf4 from "../assets/pl4/plf4.jpg";
import pls4 from "../assets/pl4/pls4.JPG";
import plss4 from "../assets/pl4/plss4.JPG";
import plt4 from "../assets/pl4/plt4.jpg";
import plup4 from "../assets/pl4/plup4.JPG";
import plb4 from "../assets/pl4/plb4.JPG";

//d200  d300//
import df200 from "../assets/d200/df200.JPG";
import db200 from "../assets/d200/db200.JPG";
import ds200 from "../assets/d200/ds200.JPG";
import dt200 from "../assets/d200/dt200.jpg";
import dup200 from "../assets/d200/dup200.JPG";
import dss200 from "../assets/d200/dss200.JPG";
//d4200//
import fd4200 from "../assets/d4200/fd4200.jpg";
import sd4200 from "../assets/d4200/sd4200.jpg";
import td4200 from "../assets/d4200/td4200.jpg";
import nd4200 from "../assets/d4200/nd4200.JPG";
import bs4200 from "../assets/d4200/bs4200.JPG";
import ssd4200 from "../assets/d4200/ssd4200.JPG";

//4300//
import fd4300 from "../assets/d4300/fd4300.jpg";
import sd4300 from "../assets/d4300/sd4300.jpg";
import td4300 from "../assets/d4300/td4300.jpg";
import nd4300 from "../assets/d4300/nd4300.JPG";
import bd4300 from "../assets/d4300/bd4300.JPG";
import ssd4300 from "../assets/d4300/ssd4300.JPG";

//tta300//
import ft300 from "../assets/tta300/ft300.jpg";
import st300 from "../assets/tta300/st300.JPG";
import sst300 from "../assets/tta300/sst300.JPG";
import tot300 from "../assets/tta300/tot300.jpg";
import nt300 from "../assets/tta300/nt300.JPG";
import bt300 from "../assets/tta300/bt300.jpg";
//tip1002//
import ft1002 from "../assets/tip1002/ft1002.jpg";
import st1002 from "../assets/tip1002/st1002.JPG";
import sst1002 from "../assets/tip1002/sst1002.JPG";
import stt1002 from "../assets/tip1002/stt1002.jpg";
import nt1002 from "../assets/tip1002/nt1002.JPG";
import bt1002 from "../assets/tip1002/bt1002.jpg";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronLeft, ChevronRight } from "lucide-react";
const products = [
  {
    img: [df200, db200, ds200, dup200, dss200],
    title: "D ",
    model: "D 200",
    description:
      "The D Series amplifier is a multi-channel professional Class-D amplifier, meticulously engineered to deliver exceptional reliability and performance. Its high efficiency is achieved through a combination of automatic temperature control and unique limiting functions, ensuring the amplifier operates efficiently by minimizing power loss and heat generation. Designed for long-term use, the D Series amplifiers offer consistent performance and durability, making them a reliable choice for professional audio installations.",
    application: [
      "Clip limiters",
      " Over temperature protections",
      " Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: "250W×2 ",
    Stereo_4_Ohm_2_Channel: "400W×2 ",
    Bridge_8_Ohm_1_Channel: "700W×1 ",
    Bridge_4_Ohm_1_Channel: " 575W",
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
    relatedProducts: [
      {
        name: "D 300",
        path: "/electronics/d%20300",
        img: df200,
      },
      {
        name: "D 4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "D 4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
    ],
  },
  {
    img: [df200, db200, ds200, dup200, dss200],
    title: "D ",
    model: "D 300",
    description:
      "The D Series amplifier is a multi-channel professional Class-D amplifier, meticulously engineered to deliver exceptional reliability and performance. Its high efficiency is achieved through a combination of automatic temperature control and unique limiting functions, ensuring the amplifier operates efficiently by minimizing power loss and heat generation. Designed for long-term use, the D Series amplifiers offer consistent performance and durability, making them a reliable choice for professional audio installations.",
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
    Bridge_4_Ohm_1_Channel: "  690W",
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
    relatedProducts: [
      {
        name: "D 200",
        path: "/electronics/d%20200",
        img: df200,
      },
      {
        name: "D 4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "D 4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
    ],
  },
  {
    img: [fd4200, sd4200, nd4200, bs4200, ssd4200],
    title: "D ",
    model: "D 4200",
    description:
      "The D Series amplifier is a multi-channel professional Class-D amplifier, meticulously engineered to deliver exceptional reliability and performance. Its high efficiency is achieved through a combination of automatic temperature control and unique limiting functions, ensuring the amplifier operates efficiently by minimizing power loss and heat generation. Designed for long-term use, the D Series amplifiers offer consistent performance and durability, making them a reliable choice for professional audio installations.",
    application: [
      "Clip limiters",
      " Over temperature protections",
      " Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: " 200W×4 ",
    Stereo_4_Ohm_2_Channel: "350W×4",
    Bridge_8_Ohm_1_Channel: "650W×2 ",
    Bridge_4_Ohm_1_Channel: "  1035W",
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
    relatedProducts: [
      {
        name: "D 200",
        path: "/electronics/d%20200",
        img: df200,
      },
      {
        name: "D 300",
        path: "/electronics/d%20300",
        img: df200,
      },
      {
        name: "D 4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
    ],
  },
  {
    img: [fd4300, sd4300, nd4300, bd4300, ssd4300],
    title: "D ",
    model: "D 4300",
    description:
      "The D Series amplifier is a multi-channel professional Class-D amplifier, meticulously engineered to deliver exceptional reliability and performance. Its high efficiency is achieved through a combination of automatic temperature control and unique limiting functions, ensuring the amplifier operates efficiently by minimizing power loss and heat generation. Designed for long-term use, the D Series amplifiers offer consistent performance and durability, making them a reliable choice for professional audio installations.",
    application: [
      "Clip limiters",
      " Over temperature protections",
      " Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: "300W×4 ",
    Stereo_4_Ohm_2_Channel: "500W×4 ",
    Bridge_8_Ohm_1_Channel: "900W×2 ",
    Bridge_4_Ohm_1_Channel: "1150W",
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
    relatedProducts: [
      {
        name: "D 200",
        path: "/electronics/d%20200",
        img: df200,
      },
      {
        name: "D 300",
        path: "/electronics/d%20300",
        img: df200,
      },
      {
        name: "D 4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
    ],
  },
  {
    img: [plf4, plb4, pls4, plss4, plt4],
    title: "PL ",
    model: "PL 4.1",
    description:
      "The PL Series amplifier is multi-channel professional built-in Digital Signal Processor (DSP) Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. Thanks to the automatic temperature control and unique limiting functions that gives high efficiency to ensures that the PL series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts and live performances, entertainment venues, lounges, pubs, bars and auditorium installations with deep, resonant sound.",
    application: [
      " 64-bit Multimode DSP",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: " 1000W×4 ",
    Stereo_4_Ohm_2_Channel: " 1600W×4 ",
    Bridge_8_Ohm_1_Channel: " 3000W×2 ",
    Bridge_4_Ohm_1_Channel: " 1495W",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">98dB ",
    Damping_Factor: ">1000(1 kHz @ 8 Ω) ",
    Crosstalk: ">85dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ (Balanced) / 10kΩ (Unbalanced)",
    Size_mm: "482 x 330 x88 ",
    Weight: "10",
    pdf: PLSeriesAmplifiers,
    relatedProducts: [
      {
        name: "PL4.5",
        path: "/electronics/pl%204.5",
        img: plf4,
      },
      {
        name: "D 4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "D 4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
    ],
  },
  {
    img: [plf4, pls4, plss4, plt4],
    title: "PL ",
    model: "PL 4.5",
    description:
      "The PL Series amplifier is multi-channel professional built-in Digital Signal Processor (DSP) Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. Thanks to the automatic temperature control and unique limiting functions that gives high efficiency to ensures that the PL series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts and live performances, entertainment venues, lounges, pubs, bars and auditorium installations with deep, resonant sound.",
    application: [
      " 64-bit Multimode DSP",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: " 1500W×4 ",
    Stereo_4_Ohm_2_Channel: " 2500W×4 ",
    Bridge_8_Ohm_1_Channel: " 7500W×2 ",
    Bridge_4_Ohm_1_Channel: " 1725W",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">98dB ",
    Damping_Factor: ">1000(1 kHz @ 8 Ω) ",
    Crosstalk: ">85dB",
    Input_Sensitivity: "0.775V / 1.44V",
    Input_Impedance: "20kΩ / 10kΩ",
    Size_mm: "482 x 330 x88 ",
    Weight: "11",
    pdf: PLSeriesAmplifiers,
    relatedProducts: [
      {
        name: "PL4.1",
        path: "/electronics/pl%204.1",
        img: plf4,
      },
      {
        name: "D 4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "D 4300",
        path: "/electronics/d%204300",
        img: fd4300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, nt300, bt300],
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
    Bridge_4_Ohm_1_Channel: " 690W ",
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
    relatedProducts: [
      {
        name: "TTA-500",
        path: "/electronics/tta%20500",
        img: ft300,
      },
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: ft300,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },
      {
        name: "TTA-1000",
        path: "/electronics/tta%201000",
        img: ft300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, , nt300, bt300],
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
    Bridge_4_Ohm_1_Channel: " 920W",
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
    relatedProducts: [
      {
        name: "TTA-450",
        path: "/electronics/tta%20450",
        img: ft300,
      },
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: ft300,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },
      {
        name: "TTA-1000",
        path: "/electronics/tta%201000",
        img: ft300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, nt300, bt300],
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
    Bridge_4_Ohm_1_Channel: " 1035W",
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
    relatedProducts: [
      {
        name: "TTA-300",
        path: "/electronics/tta%20300",
        img: ft300,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },

      {
        name: "TTA-1000",
        path: "/electronics/tta%201000",
        img: ft300,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, nt300, bt300],
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
    Bridge_4_Ohm_1_Channel: " 1150W  ",
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
    relatedProducts: [
      {
        name: "TTA-450",
        path: "/electronics/tta%20450",
        img: ft300,
      },
      {
        name: "TTA-460",
        path: "/electronics/tta%20460",
        img: ft300,
      },

      {
        name: "TTA-1000",
        path: "/electronics/tta%201000",
        img: ft300,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, nt300, bt300],
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
    Bridge_4_Ohm_1_Channel: " 1265W  ",
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
    relatedProducts: [
      {
        name: "TTA-450",
        path: "/electronics/tta%20450",
        img: ft300,
      },
      {
        name: "TTA-460",
        path: "/electronics/tta%20460",
        img: ft300,
      },

      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, nt300, bt300],
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
    Bridge_4_Ohm_1_Channel: " 1380W  ",
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
    relatedProducts: [
      {
        name: "TTA-450",
        path: "/electronics/tta%20450",
        img: ft300,
      },
      {
        name: "TTA-460",
        path: "/electronics/tta%20460",
        img: ft300,
      },
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: ft300,
      },

      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, nt300, bt300],
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
    Stereo_4_Ohm_2_Channel: "750W×4 ",
    Bridge_8_Ohm_1_Channel: "(Not recommended)",
    Bridge_4_Ohm_1_Channel: " 1380W  ",
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
    relatedProducts: [
      {
        name: "TTA-460",
        path: "/electronics/tta%20460",
        img: ft300,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },

      {
        name: "TTA-1000",
        path: "/electronics/tta%201000",
        img: ft300,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft300,
      },
    ],
  },
  {
    img: [ft300, st300, sst300, nt300, bt300],
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
    Bridge_4_Ohm_1_Channel: " 1610W  ",
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
    relatedProducts: [
      {
        name: "TTA-450",
        path: "/electronics/tta%20450",
        img: ft300,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft300,
      },

      {
        name: "TTA-1000",
        path: "/electronics/tta%201000",
        img: ft300,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft300,
      },
    ],
  },
  {
    img: [ft1002, st1002, sst1002, nt1002, bt1002],
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
    Bridge_4_Ohm_1_Channel: "1150W",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞800(1 kHz @ 8 Ω)",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 5.8",
    pdf: TIPPDF,
    relatedProducts: [
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "TIP-1302",
        path: "/electronics/tip%201302",
        img: ft1002,
      },
      {
        name: "TIP-2402",
        path: "/electronics/tip%202402",
        img: ft1002,
      },
    ],
  },
  {
    img: [ft1002, st1002, sst1002, nt1002, bt1002],
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
    Stereo_4_Ohm_2_Channel: " 2600W×2 ",
    Bridge_8_Ohm_1_Channel: " 4800W",
    Bridge_4_Ohm_1_Channel: " 1610W",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞1000(1 kHz @ 8 Ω)",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 6.5",
    pdf: TIPPDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TIP-1302",
        path: "/electronics/tip%201302",
        img: ft1002,
      },
      {
        name: "TIP-2402",
        path: "/electronics/tip%202402",
        img: ft1002,
      },
    ],
  },
  {
    img: [ft1002, st1002, sst1002, nt1002, bt1002],
    title: "TIP ",
    model: "TIP 1302",
    description:
      "The TIP Series amplifier is multi-channel professional Class – D amplifier, meticulously designed to ensure outstanding reliability and performance. It has high efficiency due to combination of automatic temperature control and unique limiting functions ensures that the TIP series amplifiers operate efficiently, minimizing power loss and heat generation, and designed for long-term use, these amplifiers offer consistent performance and durability, making them a reliable choice for professional audio applications such as concerts.",
    application: [
      " Clip limiters",
      "Over temperature protections",
      "Short circuit protection",
      "Light weight and Portable",
    ],
    Stereo_8_Ohm_2_Channel: "1300W×2 ",
    Stereo_4_Ohm_2_Channel: "2000W×2",
    Bridge_8_Ohm_1_Channel: " 3800W",
    Bridge_4_Ohm_1_Channel: " 1380W",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞1000(1 kHz @ 8 Ω)",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 6.5",
    pdf: TIPPDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "TIP-2402",
        path: "/electronics/tip%202402",
        img: ft1002,
      },
    ],
  },
  {
    img: [ft1002, st1002, sst1002, nt1002, bt1002],
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
    Bridge_4_Ohm_1_Channel: " 1840W",
    Frequency_Response: "20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: "＞98dB (A-weighted)",
    Damping_Factor: "＞1000(1 kHz @ 8 Ω)",
    Crosstalk: "＞85dB",
    Input_Sensitivity: " 0.775V/1.44V",
    Input_Impedance: " 20KΩ/10KΩ",
    Size_mm: "482 x 360 x 88mm",
    Weight: " 7",
    pdf: TIPPDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "TIP-1302",
        path: "/electronics/tip%201302",
        img: ft1002,
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
            <h1 className="text-2xl md:text-3xl font-bold">{product.model}</h1>
            <div className="w-full ">
              <p className="text-gray-600 text-[12px] md:text-[15px]  mt-2 text-justify">
                {product.description}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Key Features :</h2>
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
                  ...([
                    "PL 4.1",
                    "PL 4.5",
                    "D 4200",
                    "D 4300",
                    "TTA 450",
                    "TTA 460",
                  ].includes(product?.model)
                    ? [
                        {
                          label: "Four Channel 8Ω ",
                          value: product.Stereo_8_Ohm_2_Channel,
                        },
                      ]
                    : [
                        {
                          label: "Stereo 8Ω (2 Channel)",
                          value: product.Stereo_8_Ohm_2_Channel,
                        },
                      ]),

                  ...([
                    "PL 4.1",
                    "PL 4.5",
                    "D 4200",
                    "D 4300",
                    "TTA 450",
                    "TTA 460",
                  ].includes(product?.model)
                    ? [
                        {
                          label: "Four Channel 4Ω ",
                          value: product.Stereo_4_Ohm_2_Channel,
                        },
                      ]
                    : [
                        {
                          label: "Stereo 4Ω (2 Channel)",
                          value: product.Stereo_4_Ohm_2_Channel,
                        },
                      ]),

                  {
                    label: "Bridge 8Ω/Channel",
                    value: product.Bridge_8_Ohm_1_Channel,
                  },
                  {
                    label: "Input Power Consumption",
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
                className="group w-60 block rounded-md p-2 text-center overflow-hidden">
                <div className="relative w-full h-60 overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-[95%] object-contain transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
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
            className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 text-white rounded-lg text-sm md:text-lg">
            Go Back
          </button>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
