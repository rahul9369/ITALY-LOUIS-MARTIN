import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

import DSeriesAmplifiers from "../assets/newpdf/Dseriesnew.pdf";
import PLSeriesAmplifiers from "../assets/newpdf/PLseriesnew.pdf";
import TIPPDF from "../assets/newpdf/TIPseriesnew.pdf";
import TTAPDF from "../assets/newpdf/TTAseriesnew.pdf";
import DSPPDF4 from "../assets/newpdf/DSP4seriesnew.pdf";
import DSPPDF2 from "../assets/newpdf/DSP2seriesnew.pdf";

//pl4//
import plf4 from "../assets/pl4/plf4.jpg";
import plss4 from "../assets/pl4/plss4.JPG";
import plt4 from "../assets/pl4/plt4.jpg";
import plb4 from "../assets/pl4/plb4.JPG";
import pl423 from "../assets/pl4/pl423.jpg";
import plf42 from "../assets/pl4/plf42.jpg";
import plf405 from "../assets/pl4/plf405.jpg";

import dsp26 from "../assets/dsp/dl2.jpg";
import dsp26b from "../assets/dsp/dl26b.JPG";
import dsp26bottom from "../assets/dsp/bottomdsp.JPG";
// import dsp26bottom from "../assets/dsp/dl26b.jpg";
// import dsp26b from "../assets/dsp/dl26b.jpg";

import dsp48 from "../assets/dsp/front.JPG";
import dsp48side from "../assets/dsp/dspside.JPG";
import dsp48back from "../assets/dsp/dl48back.JPG";
import dsp48top from "../assets/dsp/dsp48top.jpg";

//d200  d300//
import df200 from "../assets/d200/df200.JPG";
import db200 from "../assets/d200/db200.JPG";
import ds200 from "../assets/d200/ds200.JPG";
import dup200 from "../assets/d200/dup200.JPG";
import dss200 from "../assets/d200/dss200.JPG";
//d4200//
import fd4200 from "../assets/d4200/fd4200.jpg";
import sd4200 from "../assets/d4200/sd4200.jpg";
import nd4200 from "../assets/d4200/nd4200.JPG";
import bs4200 from "../assets/d4200/bs4200.JPG";
import ssd4200 from "../assets/d4200/ssd4200.JPG";

//4300//
import fd4300 from "../assets/d4300/fd4300.jpg";
import sd4300 from "../assets/d4300/sd4300.jpg";
import nd4300 from "../assets/d4300/nd4300.JPG";
import bd4300 from "../assets/d4300/bd4300.JPG";
import ssd4300 from "../assets/d4300/ssd4300.JPG";

//tta300//
import ft300 from "../assets/tta300/ft300.jpg";
import sst300 from "../assets/tta300/sst300.JPG";
import nt300 from "../assets/tta300/nt300.JPG";
import bt300 from "../assets/tta300/bt300.jpg";
import ft800 from "../assets/tta300/ft800.jpg";
import ft600 from "../assets/tta300/ft600.jpg";
import ft500 from "../assets/tta300/ft500.jpg";
import ft3001 from "../assets/tta300/ft3001.jpg";
import ft1000 from "../assets/tta300/ft1000.jpg";
import ft1300 from "../assets/tta300/ft1300.jpg";
import ttaf450 from "../assets/tta300/ttaf450.jpg";
import ft1002 from "../assets/tip1002/ft1002.jpg";
import st1002 from "../assets/tip1002/st1002.JPG";
import nt1002 from "../assets/tip1002/nt1002.JPG";
import bt1002 from "../assets/tip1002/bt1002.jpg";
import ft1003 from "../assets/tip1002/ft1003.jpg";
import ft1302 from "../assets/tip1002/ft1302.jpg";
import ft2402 from "../assets/tip1002/ft2402.jpg";
import df2001 from "../assets/d200/df2001.jpg";
import redfront from "../assets/red10/redfront.JPG";
import q80f from "../assets/q80/q80f.JPG";
import sf218 from "../assets/s218/sf218.JPG";

import q60front from "../assets/q60/q60front.JPG";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronLeft, ChevronRight } from "lucide-react";
const products = [
  {
    img: [df2001, db200, dup200, dss200],
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
        name: "D300",
        path: "/electronics/d%20300",
        img: df200,
      },
      {
        name: "D4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "D4300",
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
        name: "TTA300",
        path: "/electronics/tta%20300",
        img: ft300,
      },
      {
        name: "D 4200",
        path: "/electronics/d%204200",
        img: fd4200,
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
    Weight: "4.8",
    pdf: DSeriesAmplifiers,
    relatedProducts: [
      {
        name: "PL 1004 ",
        path: "/electronics/d%20200",
        img: df200,
      },
      {
        name: "PL 1504",
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
    img: [pl423, plb4, plss4],
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
        name: "PL 1004",
        path: "/electronics/pl%201004",
        img: plf42,
      },
      {
        name: "PL 1504",
        path: "/electronics/pl%201504",
        img: plf405,
      },
    ],
  },

  {
    img: [plf4, plss4, plb4],
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
        name: "PL1504",
        path: "/electronics/pl%201504",
        img: plf405,
      },
      {
        name: "PL 1004",
        path: "/electronics/pl%201004",
        img: plf42,
      },
    ],
  },
  {
    img: [plf42, plss4, plt4],
    title: "PL ",
    model: "PL 1004",
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
    Bridge_8_Ohm_1_Channel: " 3000W x2 ",
    Bridge_4_Ohm_1_Channel: " 1495W",
    Frequency_Response: " 20HZ~20KHZ(0.5dB/-0.5dB)",
    THD_N: " <0.05%@8Ω 1kHz",
    SNR: ">98dB ",
    Damping_Factor: ">3000(1 kHz @ 8 Ω) ",
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
        name: "PL 4.5",
        path: "/electronics/pl%204.5",
        img: plf4,
      },
      {
        name: "TTA 300",
        path: "/electronics/tta%20300",
        img: ft3001,
      },
    ],
  },
  {
    img: [plf42, plss4, plt4],
    title: "PL ",
    model: "PL 1504",
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
    Damping_Factor: ">3000(1 kHz @ 8 Ω) ",
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
        name: "PL 4.5",
        path: "/electronics/pl%204.5",
        img: plf4,
      },
      {
        name: "PL 1004",
        path: "/electronics/pl%201004",
        img: plf42,
      },
    ],
  },
  {
    img: [ft3001, sst300, nt300, bt300],
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
        img: ft500,
      },
      {
        name: "TTA-600",
        path: "/electronics/tta%20600",
        img: ft600,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "TTA-1000",
        path: "/electronics/tta%201000",
        img: ft1000,
      },
    ],
  },
  {
    img: [ft500, sst300, nt300, bt300],
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
        img: ft600,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "TTA-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
    ],
  },
  {
    img: [ft600, sst300, nt300, bt300],
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
        name: "TIP 1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },

      {
        name: "TIP 1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft1300,
      },
    ],
  },
  {
    img: [ft800, sst300, nt300, bt300],
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
        name: "TIP 1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "TIP 1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },

      {
        name: "TTA-2402",
        path: "/electronics/tip%202402",
        img: ft2402,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft1300,
      },
    ],
  },
  {
    img: [ft1000, sst300, nt300, bt300],
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
        name: "TTA 1300",
        path: "/electronics/tta%201300",
        img: ft1300,
      },
      {
        name: "TTA 500",
        path: "/electronics/tta%20500",
        img: ft500,
      },

      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft1300,
      },
    ],
  },
  {
    img: [ft1300, sst300, nt300, bt300],
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
        name: "TIP 1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "TI 1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },

      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
    ],
  },
  {
    img: [ttaf450],
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
        name: "PL 1004",
        path: "/electronics/pl%201004",
        img: plf42,
      },

      {
        name: "PL 1504",
        path: "/electronics/pl%201504",
        img: plf42,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft300,
      },
    ],
  },
  {
    img: [ttaf450],
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
        name: "PL 1004 ",
        path: "/electronics/pl%201004",
        img: plf42,
      },

      {
        name: "PL 1504",
        path: "/electronics/pl%201504",
        img: plf42,
      },
      {
        name: "TTA-1300",
        path: "/electronics/tta%201300",
        img: ft300,
      },
    ],
  },
  {
    img: [ft1003, st1002, nt1002, bt1002],
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
    img: [ft1002, st1002, nt1002, bt1002],
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
    Weight: " 6.8",
    pdf: TIPPDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "PL 1004",
        path: "/electronics/pl%201004",
        img: plf42,
      },
      {
        name: "TIP-2402",
        path: "/electronics/tip%202402",
        img: ft1002,
      },
    ],
  },
  {
    img: [ft1302, st1002, nt1002, bt1002],
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
    img: [ft2402, st1002, nt1002, bt1002],
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
        name: "PL 1504",
        path: "/electronics/pl%201504",
        img: plf42,
      },
      {
        name: "TIP-1602",
        path: "/electronics/tip%201602",
        img: ft1002,
      },
      {
        name: "PL 4.5",
        path: "/electronics/pl%204.5",
        img: plf42,
      },
    ],
  },
  {
    img: [dsp26, dsp26b, dsp48side, dsp26bottom],
    title: "DSP ",
    model: "DL 2.6",
    description:
      "The DL 2.6 digital loudspeaker management system is a powerful and easy-to-operate processor. It adopts a switching power supply design and automatically adjusts to external input voltages from 95V to 250V, making it suitable for worldwide use without any manual adjustment. The digital signal processor uses a high-precision DSP chip with 48-bit internal data processing, delivering an extremely high dynamic range and excellent sound quality. It is a 2-in / 6-out processor with multiple preset multi-way crossover modes, including 2 × 2 + 2-way, 2 × 3-way, 4 × 2 + 2-way, 5 + 1-way, and 6-way configurations. The signal source of each output channel can be freely selected. Each channel includes gain, a 5-band parametric equalizer, crossover, delay, phase, and limiter.",
    application: [
      "48-bit DSP Processing",
      "8-band parametric EQs for each output",
      "Remote control software for PC Windows only",
      "Memory storage for 20 presets",
    ],
    input: "2 Channel electronically balanced ",
    output: " 6 Channel electronically balanced ",
    maximum: "+15 dBm",
    range: " >100 dB (20 Hz – 20 kHz)",
    delay: "500 milliseconds",
    step: " 0.021 milliseconds",
    gain: "+12 dB ≈ -40 dB, step 0.1 dB",
    parametric: "9 bands on Inputs & 8 bands on Outputs",
    frequency: "20 Hz – 22 kHz (±0.2 dB)",
    signal: " 110 dB typical (a weighted)",
    distortion: "<0.0029% @1K;0 dBu",
    audio: "XLR Connector",
    control: "RS232 DB-9; USB type – B",
    power: "95~250V AC, 50/60Hz adaptive",
    Size_mm: "483mm x 160mm x 45mm (H x W x D)",
    Weight: " 2.5",
    pdf: DSPPDF2,
    relatedProducts: [
      {
        name: "DL 4.8",
        path: "/electronics/dl%204.8",
        img: dsp48,
      },
      {
        name: "Q 60",
        path: "/linearray/q%2060",
        img: q60front,
      },
      {
        name: "RED10",
        path: "/electronics/tta%20800",
        img: redfront,
      },
      {
        name: "PL-1004",
        path: "/electronics/pl%201004",
        img: ft1002,
      },
    ],
  },
  {
    img: [dsp48, dsp48side, dsp48back],
    title: "DSP ",
    model: "DL 4.8",
    description:
      "The DL 4.8 digital loudspeaker management system is a powerful and easy-to-operate processor. It adopts a switching power supply design and automatically adjusts to external input voltages from 90V to 250V, making it suitable for worldwide use without any manual adjustment. The digital signal processor uses a high-precision DSP chip with 64-bit internal data processing, delivering an extremely high dynamic range and excellent sound quality. It is a 4-in / 8-out matrix processor with multiple presets. The signal source of each output channel can be freely selected. Each channel includes gain, a 10-band parametric equalizer, crossover, delay, phase, and limiter.",
    application: [
      " 800 FIR taps per output",
      "64-bit DSP Processing / 96 kHz sample rate ",
      "Dual channel AES/EBU Input",
      "Memory storage for 250 presets",
    ],
    input:
      "4 Channel electronically balanced XLR + AES3 1 & 2 Phoenix Connector ",
    output: "8 Channel electronically balanced XLR Connector",
    maximum: "0 dBu / +24 dBu",
    range: " >120 dB (20 Hz – 20 kHz) (A-Weighted)",
    display: "2 x 20 Character Backlit LCD",
    analog: " High Performance 24-bit",
    gain: "+12 dB ≈ -40 dB, step 0.1 dB",
    parametric: "10 bands on Inputs & Outputs",
    frequency: "20 Hz – 22 kHz (±0.2 dB)",
    signal: " 110 dB typical (a weighted)",
    distortion: "<0.004% @1K;+4dBu",
    audio: "XLR Connector / Phoenix Connector",
    control: "Ethernet with Link Output",
    fir: "800 FIR taps per output",
    crossover: "2 Crossover Filter per Input/Output",
    dail: "Embedded Wheel on front panel",
    power: "90~250V AC, 50/60Hz adaptive",
    Size_mm: "485mm x 255mm x 44mm (H x W x D)",
    Weight: " 2.8",
    pdf: DSPPDF4,
    relatedProducts: [
      {
        name: "DL 2.6",
        path: "/electronics/dl%202.6",
        img: dsp26,
      },
      {
        name: "Q 80",
        path: "/linearray/q%2080",
        img: q80f,
      },
      {
        name: "S218",
        path: "/electronics/tta%20800",
        img: sf218,
      },
      {
        name: "PL-1004",
        path: "/electronics/pl%201004",
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
      <div className="w-[90%] mx-auto smp-6">
        <h1 className="md:hidden block text-2xl md:text-3xl font-bold">
          {product?.title === "DSP "
            ? `DSP - ${product.model}`
            : `Amplifier - ${product.model}`}
        </h1>

        {/* Product Image and Title */}
        <div className="grid grid-cols-1 mx-auto md:mx-0 md:grid-cols-[65%_35%] gap-12 mt-4 w-[95%] ">
          {/* <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          /> */}
          <div className="bg-white w-full ">
            {/* Image Viewer */}
            <div className="relative w-full  rounded-xl flex items-center justify-center h-[200px] sm:h-[360px] overflow-hidden">
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
              {product?.title === "DSP "
                ? `DSP - ${product.model}`
                : `Amplifier - ${product.model}`}
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
                {(product?.title === "DSP "
                  ? [
                      { label: "Input", value: product.input },
                      { label: "Output", value: product.output },
                      {
                        label:
                          product?.model === "DL 4.8"
                            ? "Input Level (Nominal/Max)"
                            : "Maximum Level",
                        value: product.maximum,
                      },
                      { label: "Dynamic Range", value: product.range },

                      ...(product?.model === "DL 2.6"
                        ? [
                            {
                              label: "Maximum Delay",
                              value: product.delay,
                            },
                            {
                              label: "Minimum Step",
                              value: product.step,
                            },
                          ]
                        : []),

                      {
                        label: "Gain",
                        value: product.gain,
                      },
                      {
                        label: "Parametric Equalizer",
                        value: product.parametric,
                      },
                      {
                        label: "Frequency Response",
                        value: product.frequency,
                      },
                      {
                        label: "Signal to Noise Ratio",
                        value: product.signal,
                      },
                      {
                        label: "Distortion",
                        value: product.distortion,
                      },
                      ...(product?.model === "DL 4.8"
                        ? [
                            {
                              label: "Analog Converters",
                              value: product.analog,
                            },
                            { label: "Display", value: product.display },
                            { label: "FIR Filter", value: product.fir },
                            {
                              label: "Crossover  Filter",
                              value: product.crossover,
                            },
                            { label: "Dial Encoder", value: product.dail },
                          ]
                        : []),
                      { label: "Audio Interface", value: product.audio },
                      {
                        label: "Control Interface",
                        value: product.control,
                      },
                      { label: "working Power Supply", value: product.power },
                      { label: "Dimensions", value: product.Size_mm },
                      { label: "Weight", value: `${product.Weight} Kg` },
                    ]
                  : [
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
                              label: "Four Channel 8Ω",
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
                              label: "Four Channel 4Ω",
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
                      {
                        label: "Damping Factor",
                        value: product.Damping_Factor,
                      },
                      { label: "Crosstalk", value: product.Crosstalk },
                      {
                        label: "Input Sensitivity",
                        value: product.Input_Sensitivity,
                      },
                      {
                        label: "Input Impedance",
                        value: product.Input_Impedance,
                      },
                      { label: "Dimensions (HxWxD)", value: product.Size_mm },
                      { label: "Weight", value: `${product.Weight} Kg` },
                    ]
                ).map((spec, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-2 md:px-4 py-2 font-semibold">
                      {spec.label}
                    </td>
                    <td className="px-2 md:px-4 py-2">{spec.value || "-"}</td>
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
              {product?.title?.trim() === "DSP" && (
                <div className="flex justify-between my-2 items-center">
                  <p className="text-gray-700 text-lg font-bold">
                    Control Software
                  </p>

                  {/* DL26 */}
                  {product?.model === "DL 2.6" && (
                    <a
                      href="/dl26.zip"
                      download
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm md:text-base hover:bg-green-700 transition-colors">
                      Download
                    </a>
                  )}

                  {/* DL48 */}
                  {product?.model === "DL 4.8" && (
                    <a
                      href="https://drive.google.com/uc?export=download&id=1e5mTuRSdj8c5FA5Udfs3NZpAPSRtrqRa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg">
                      Download
                    </a>
                  )}
                </div>
              )}
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
                <p className=" text-sm sm:text-base text-center font-medium hover:text-red-900">
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
