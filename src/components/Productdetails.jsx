import { Link, useParams } from "react-router-dom";

//red series images//

import Red10PDF from "../assets/newpdf/Red10new.pdf";
import Red5PDF from "../assets/newpdf/Red5new.pdf";
import Red6PDF from "../assets/newpdf/Red5.5new.pdf";
import Red9PDF from "../assets/newpdf/Red9new.pdf";
import Red12PDF from "../assets/newpdf/Red12new.pdf";
import Footer from "./Footer";
import F12 from "../assets/newpdf/F12new.pdf";
import F8 from "../assets/newpdf/F8new.pdf";
import F15PDF from "../assets/newpdf/F15new.pdf";
import F10 from "../assets/newpdf/F10new.pdf";
import F12AMPDF from "../assets/newpdf/F12AMnew.pdf";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronLeft, ChevronRight, Import } from "lucide-react";
import redfront from "../assets/red10/redfront.JPG";
import redback from "../assets/red10/redback.JPG";
import redn from "../assets/red10/redn.JPG";
import redside from "../assets/red10/redside.JPG";
import redu from "../assets/red10/redu.JPG";

import f12front from "../assets/f12am/45.jpg";
import f12down from "../assets/f12am/down.jpg";
import f12open from "../assets/f12am/open.jpg";
import f12side from "../assets/f12am/side.jpg";
import f12back from "../assets/f12am/back.jpg";
//red6//
import redb5 from "../assets/red6/redb5.JPG";
import redu5 from "../assets/red6/redu5.JPG";
import redf5 from "../assets/red6/redf5.JPG";
import reds5 from "../assets/red6/reds5.JPG";
import red5 from "../assets/red6/red5.JPG";
import redo5 from "../assets/red6/redo5.JPG";
//red5//
import redfront5 from "../assets/red5/redfront5.jpg";
import redside5 from "../assets/red5/redside5.JPG";
import redds5 from "../assets/red5/redds5.jpg";
import red5open from "../assets/red5/red5open.JPG";
import redback5 from "../assets/red5/redback5.jpg";
//red9//
import redff9 from "../assets/red9/redff9.JPG";
import red94 from "../assets/red9/red94.jpg";
import reds9 from "../assets/red9/reds9.JPG";
import redop9 from "../assets/red9/redop9.JPG";
import redback9 from "../assets/red9/redback9.jpg";
//red12//
import redf12 from "../assets/red12/redf12.JPG";
import redop12 from "../assets/red12/redop12.JPG";
import red412 from "../assets/red12/red412.jpg";
import redbb12 from "../assets/red12/redbb12.jpg";
import reds12 from "../assets/red12/reds12.JPG";
//f8//
import ffront8 from "../assets/f8/ffront8.jpg";
import fopen8 from "../assets/f8/fopen8.JPG";
import f458 from "../assets/f8/f458.jpg";
import fs8 from "../assets/f8/fs8.JPG";
import ftop8 from "../assets/f8/ftop8.JPG";

//f10//
import ff10 from "../assets/f10/ff10.jpg";
import fopen10 from "../assets/f10/fopen10.JPG";
import fs10 from "../assets/f10/fs10.jpg";
import f410 from "../assets/f10/f410.jpg";
import fdoun10 from "../assets/f10/fdoun10.JPG";

//f12 images//
import ff12 from "../assets/f12/ff12.jpg";
import fb12 from "../assets/f12/fb12.JPG";
import f412 from "../assets/f12/f412.jpg";
import fd12 from "../assets/f12/fd12.JPG";
import fopen12 from "../assets/f12/fopen12.JPG";
import fs12 from "../assets/f12/fs12.JPG";
import ftop12 from "../assets/f12/ftop12.JPG";

//f15 images//

import ff15 from "../assets/f15/ff15.jpg";
import fb15 from "../assets/f15/fb15.jpg";
import fd15 from "../assets/f15/fd15.JPG";
import fopen15 from "../assets/f15/fopen15.JPG";
import f415 from "../assets/f15/f415.jpg";

import ft1002 from "../assets/tip1002/ft1002.jpg";
import sf18 from "../assets/s18/sf18.JPG";
import sf218 from "../assets/s218/sf218.JPG";
import fd4200 from "../assets/d4200/fd4200.jpg";
import df200 from "../assets/d200/df200.JPG";
import ft300 from "../assets/tta300/ft300.jpg";
import ksf18 from "../assets/ks18/ksf18.JPG";
import ksf218 from "../assets/ks218/ksf218.JPG";

import ft800 from "../assets/tta300/ft800.jpg";
import fronts12 from "../assets/s12/fronts12.JPG";
import ft500 from "../assets/tta300/ft500.jpg";

const products = [
  {
    img: [redfront, redback, redn, redside, redu],
    title: "Point Source ",
    model: "Red 10",
    description:
      "The Red - 10 has two powerful 10” (254 mm) low frequency driver and a 1.75” (44 mm) compression driver. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for live/install market applications, including nightclubs and operas. ",
    application: [
      "Live Performances",
      "Concerts and Live Events",
      "Main FoH",
      "Night Club",
      "Places of worship",
      "Auditoriums",
      // "Multi-functional room",
      // "Pub/Bar",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "65 Hz – 18 kHz",
    LF_Drivers: "2 x 10” (254 mm) with a 2.5” (64 mm) Voice Coil",
    HF_Drivers: "1 x 1.75” (44 mm) Compression Driver",
    RMS_Power: "600W",
    Program_Power: "1200W",
    Peak_Power: "2400W",
    Sensitivity: "101 dB ",
    Max_SPL: "131 dB ",
    Max_SPL_Peak: "134 dB ",
    Nominal_Impedance: "4 Ohms",
    Crossover_Mode: "Passive, optimized for linearity",
    Dispersion: "90° (H) x 50° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "300 x 800 x 350mm (H x W x D)",
    Weight: "25/55.1 ",
    pdf: Red10PDF,
    relatedProducts: [
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "KS18",
        path: "/subwoofer/ks18",
        img: ksf18,
      },
      {
        name: "K218",
        path: "/subwoofer/ks218",
        img: ksf218,
      },
      {
        name: "RED-12",
        path: "/product/red%2012",
        img: redf12,
      },
    ],
  },
  {
    img: [redf5, red5, redo5, redb5, redu5],
    title: "Point Source",
    model: "Red 5.5",
    description:
      " The Red – 5.5 has two powerful 5.25” (133 mm)  coaxial driver and two 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including nightclub and premium home cinema installation. With a ruler-flat response, the cabinet offers uncoloured, transparent sound quality. Crafted from glass fiber reinforced plastic, it is suitable for both installation and portable use. ",
    application: [
      "Pub/Bar ",
      // "Delay/Fill",
      "Multi-functional room",
      "Night Club",
      "Places of worship",
      "High-end Home Cinema Installation",
    ],
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "80 Hz – 19 kHz",
    LF_Drivers: "2 x 5.25” (133 mm) Coaxial Driver",
    HF_Drivers: "2 x 1.34” (34 mm) HF Driver",
    RMS_Power: "200W",
    Program_Power: "400W",
    Peak_Power: "800W",
    Sensitivity: "96 dB ",
    Max_SPL: "121 dB ",
    Max_SPL_Peak: "124 dB ",
    Nominal_Impedance: "4 Ohms (typical)",
    Crossover_Mode: "Passive, optimized for linearity",
    Dispersion: "115° (H) x 70° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "200 x320 x 200mm (H x W x D)",
    Weight: "9/19.8",
    pdf: Red6PDF,
    relatedProducts: [
      {
        name: "TTA-300",
        path: "/electronics/tta%20300",
        img: ft300,
      },
      {
        name: "D-4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "KS18",
        path: "/subwoofer/ks18",
        img: ksf18,
      },
      {
        name: "RED 5",
        path: "/product/red%205",
        img: redfront5,
      },
    ],
  },
  {
    img: [redfront5, redside5, redds5, red5open, redback5],
    title: "Point Source ",
    model: "Red 5",
    description:
      " The Red – 5 has one powerful 5.25” (133 mm)  coaxial driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including hospitality segment and premium home cinema installation. With a ruler-flat response, the cabinet offers uncoloured, transparent sound quality. Crafted from glass fiber reinforced plastic, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response",
    application: [
      "Lounge ",
      "Pub/Bar",
      // "Delay/Fill",
      "Multi-functional room",
      "High-end Home Cinema Installation",
    ],
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "90 Hz – 19 kHz",
    LF_Drivers: "1x 5.25” (133 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "100W",
    Program_Power: "200W",
    Peak_Power: "400W",
    Sensitivity: "93 dB ",
    Max_SPL: "115 dB ",
    Max_SPL_Peak: "118 dB ",
    Nominal_Impedance: "8 Ohms (typical)",
    Crossover_Mode: "Passive, optimized for linearity",
    Dispersion: "90° (H) x 90° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "200 x 200 x 200mm (H x W x D)",
    Weight: "6/13.2",
    pdf: Red5PDF,
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
        name: "RED-12",
        path: "/product/red%2012",
        img: redf12,
      },
    ],
  },
  {
    img: [redff9, red94, reds9, redop9, redback9],
    title: "Point Source ",
    model: "Red 9",
    description:
      " The Red – 9 is a high-performance, versatile passive speaker system designed to deliver unmatched sound reinforcement. It features a powerful 10-inch (254 mm) coaxial driver paired with a 1.34-inch (34 mm) highfrequency driver. This two-way, full-range configuration, combined with a passive crossover, ensures exceptional audio quality.",
    application: [
      "Lounge",
      "Pub/Bar",
      "Night Clubs",
      // "Delay/Fill",
      "Multi-functional room",
      "Stadiums",
    ],
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "75 Hz – 19 kHz",
    LF_Drivers: "1x 10” (254 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "200W",
    Program_Power: "400W",
    Peak_Power: "800W",
    Sensitivity: "96 dB ",
    Max_SPL: "121 dB ",
    Max_SPL_Peak: "124 dB ",
    Nominal_Impedance: "8 Ohms(typical)",
    Crossover_Mode: "Passive, optimized for linearity",
    Dispersion: "70° (H) x 70° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "310 x 320 x 310mm (H x W x D)",
    Weight: "15/33.06 ",
    pdf: Red9PDF,
    relatedProducts: [
      {
        name: "TTA-500",
        path: "/electronics/tta%20500",
        img: ft500,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "RED-5.5",
        path: "/product/red%205.5",
        img: redf5,
      },
      {
        name: "RED-5",
        path: "/product/red%205",
        img: redfront5,
      },
    ],
  },
  {
    img: [redf12, red412, reds12, redop12, redbb12],
    title: "Point Source ",
    model: "Red 12",
    description:
      " The Red – 12 is a high-performance, versatile passive speaker system designed to deliver unmatched sound reinforcement. It features a powerful 12-inch (304 mm) coaxial driver paired with a 1.34-inch (34 mm) highfrequency driver. This two-way, full-range configuration, combined with a passive crossover, ensures exceptional audio quality. Engineered for a wide range of installation market applications, the Red – 12 is ideal for nightclubs, restaurants, lounges, pubs, bars, and auditorium installations.",
    application: [
      "Lounge",
      "Pub/Bar",
      "Night Clubs",
      // "Delay/Fill",
      "Multi-functional room",
      "Stadiums",
    ],
    Type: "Two-way Coaxial full range passive loudspeaker",
    Frequency_Response: "75 Hz – 19 kHz",
    LF_Drivers: "1x 12” (304 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "250W",
    Program_Power: "500W",
    Peak_Power: "1000W",
    Sensitivity: "97 dB ",
    Max_SPL: "123 dB ",
    Max_SPL_Peak: "126 dB ",
    Nominal_Impedance: "8 Ohms (typical)",
    Crossover_Mode: "Passive, optimized for linearity",
    Dispersion: "70° (H) x 70° (V)",
    Cabinet_Material: "Glass Fiber Reinforced Plastic with Car Paint Coating",
    Size_mm: "350 x 350 x 330mm (H x W x D)",
    Weight: "18/39.6 ",
    pdf: Red12PDF,
    relatedProducts: [
      {
        name: "TTA-500",
        path: "/electronics/tta%20500",
        img: ft500,
      },
      {
        name: "KS18",
        path: "/subwoofer/ks18",
        img: ksf18,
      },
      {
        name: "RED-5",
        path: "/product/red%205",
        img: redfront5,
      },
      {
        name: "RED-5.5",
        path: "/product/red%205.5",
        img: redf5,
      },
    ],
  },

  {
    img: [ffront8, fopen8, f458, fs8, ftop8],
    title: "Point Source ",
    model: "F8",
    description:
      " The F-8 has one powerful 8” (203 mm)  LF driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including foreground music, restaurant, lounges. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use.The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response. ",
    application: [
      "Lounge ",
      // "Pub/Bar",
      "Gym/Fitness Center",
      "Multi-functional room",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "70 Hz – 19 kHz",
    LF_Drivers: "1x 8” (203 mm) LF Driver",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "100W",
    Program_Power: "200W",
    Peak_Power: "400W",
    Sensitivity: "93 dB ",
    Max_SPL: "115 dB ",
    Max_SPL_Peak: "118 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 50° (V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "435 x 299 x 269mm (H x W x D)",
    Weight: "12/26.4 ",
    pdf: F8,
    relatedProducts: [
      {
        name: "TTA-300",
        path: "/electronics/tta%20300",
        img: ft300,
      },
      {
        name: "D-4200",
        path: "/electronics/d%204200",
        img: fd4200,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "F10",
        path: "/product/f10",
        img: ff10,
      },
    ],
  },
  {
    img: [ff10, fopen10, fs10, f410, fdoun10],
    title: "Point Source ",
    model: "F10",
    description:
      " The F-10 has one powerful 10” (254 mm)  LF driver with 1.34” (34 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install market applications, including foreground music, restaurant, lounges. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      "Lounge ",
      "Pub/Bar",
      "Gym/Fitness Center",
      "Multi-functional Room",
      // "Delay/Fill",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "60 Hz – 19 kHz",
    LF_Drivers: "1x 10” (254 mm) LF Driver with 2.5” Voice coil",
    HF_Drivers: "1 x 1.34” (34 mm) HF Driver",
    RMS_Power: "300W",
    Program_Power: "600W",
    Peak_Power: "1200W",
    Sensitivity: "96 dB ",
    Max_SPL: "123 dB ",
    Max_SPL_Peak: "126 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 50° (V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "500 x 351 x 317mm (H x W x D)",
    Weight: "17/37.4",
    pdf: F10,
    relatedProducts: [
      {
        name: "TTA-500",
        path: "/electronics/tta%20500",
        img: ft500,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "F-8",
        path: "/product/f8",
        img: ffront8,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
    ],
  },
  {
    img: [ff12, fb12, f412, fd12, fopen12],
    title: "Point Source ",
    model: "F12",
    description:
      " The F-12 has one powerful 12” (304 mm)  LF driver with 1.45” (37 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install & portable use including Main FoH, Night Clubs, lounges, Multipurpose Hall, Live Setup etc. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      // " Lounge  ",
      // "Pub/Bar ",
      // "Main FoH",
      "Multi-functional Room",
      "Live portable setup",
      "Night Clubs",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "55 Hz – 19 kHz",
    LF_Drivers: "1x 12” (304 mm) LF Driver with 3” Voice coil",
    HF_Drivers: "1 x 1.45” (37 mm) HF Driver",
    RMS_Power: "400W",
    Program_Power: "800W",
    Peak_Power: "1600W",
    Sensitivity: "97 dB ",
    Max_SPL: "126 dB ",
    Max_SPL_Peak: "129 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 50° (V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "600 x 398 x 365mm (H x W x D)",
    Weight: "25/55.1",
    pdf: F12,
    relatedProducts: [
      {
        name: "TTA-800",
        path: "/electronics/tta%20800",
        img: ft800,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "F-8",
        path: "/product/f8",
        img: ffront8,
      },
    ],
  },
  {
    img: [ff15, fb15, f415, fd15, fopen15],
    title: "Point Source ",
    model: "F15",
    description:
      " The F-15 has one powerful 15” (381 mm)  LF driver with 1.45” (44 mm) HF. It is a high-performance, versatile, passive speaker system designed for unmatched sound reinforcement. Featuring a passive crossover, two-way full-range configuration, it is ideal for install & portable use including Main FoH, Night Clubs, lounges, Multipurpose Hall, Live Setup etc. With flat frequency response, the cabinet offers uncoloured, transparent sound quality. Crafted from high density plywood, it is suitable for both installation and portable use. The cabinet's design emphasizes vocal clarity, fidelity, and minimal distortion without compromising transient response.",
    application: [
      // " Lounge  ",
      // "Pub/Bar ",
      "Main FoH",
      // "Multi-functional Room",
      "Live portable setup",
      "Night Clubs",
    ],
    Type: "Two-way full range passive loudspeaker",
    Frequency_Response: "50 Hz – 19 kHz",
    LF_Drivers: "1x 15” (381 mm) LF Driver with 3” Voice coil",
    HF_Drivers: "1 x 1.75” (44 mm) HF Driver",
    RMS_Power: "500W",
    Program_Power: "1000W",
    Peak_Power: "2000W",
    Sensitivity: "99 dB ",
    Max_SPL: "129 dB ",
    Max_SPL_Peak: "132 dB ",
    Nominal_Impedance: "8 Ohms",
    Crossover_Mode: "Passive",
    Dispersion: "90° (H) x 50° (V)",
    Cabinet_Material: "High density plywood",
    Size_mm: "690 x 470 x 443mm (H x W x D)",
    Weight: "30/66.1 ",
    pdf: F15PDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "F10",
        path: "/product/f10",
        img: ff10,
      },
    ],
  },
  {
    img: [f12front, f12back, f12side, f12open, f12down],
    title: "Stage Monitor ",
    model: "F12 AM",
    description:
      "The F12AM is engineered for clarity, power, and versatility, this Powered Active Stage Monitor is your go-to solution for any live stage performance environments and small Main PA applications. With a robust coaxial design featuring a 12″ LF driver and 1.5″ HF driver, it delivers full-range audio from 55 Hz to 19 kHz with wide, even coverage - 90° horizontal and 90° vertical.Whether you're performing, presenting, or monitoring, the system adapts instantly with three onboard DSP presets: Music, Monitor, and Flat Mode. Its powerful amplifier delivers 600 W continuous and up to 1200 W peak output, ensuring your sound is always clean and commanding.",
    application: [
      // " Lounge  ",
      // "Pub/Bar ",
      "Main FoH",
      // "Multi-functional Room",
      "Live portable setup",
      "Stage Monitor",
    ],
    Type: "Two-way Coaxial full range Active loudspeaker",
    Frequency_Response: "55 Hz – 19 kHz",
    LF_Drivers: "1x 12” (304 mm) Coaxial Driver",
    HF_Drivers: "1 x 1.5” (38 mm) HF Driver",
    RMS_Power:
      "Integrated DSP Control with Factory presets/User defined presets",
    Program_Power: "600W",
    Peak_Power: "1200W",
    Sensitivity: "Stage Monitors/ Main PA/ Fix Installation ",
    Max_SPL: "122 dB ",
    Max_SPL_Peak: "128 dB ",
    Nominal_Impedance:
      "2 x XLR/TRS Combo Jack Input | 1 x Stereo RCA Input | 1 x XLR Mix Output",
    Crossover_Mode: "USB Type A for Input | USB Type B for Software Control",
    Dispersion: "90°(H) x 90°(V) ",
    Cabinet_Material: "HHigh density multi-layer plywood",
    Size_mm: "525 x 410 x 385mm (H x W x D)",
    Weight: "21.5/47.4 ",
    pdf: F12AMPDF,
    relatedProducts: [
      {
        name: "TIP-1002",
        path: "/electronics/tip%201002",
        img: ft1002,
      },
      {
        name: "S18",
        path: "/subwoofer/s18",
        img: sf18,
      },
      {
        name: "S218",
        path: "/subwoofer/s218",
        img: sf218,
      },
      {
        name: "F10",
        path: "/product/f10",
        img: ff10,
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
  useEffect(() => {
    if (!images || !images[currentImgIndex]) return;

    const img = new Image();
    img.src = images[currentImgIndex];
  }, [currentImgIndex, images]);

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
        <h1 className="md:hidden  block  text-2xl md:text-3xl font-bold">
          {product.title} - {product.model}
        </h1>
        {/* Product Image and Title */}
        <div className="grid grid-cols-1 mx-auto md:mx-0 md:grid-cols-[65%_35%] gap-12 mt-4 w-[90%] ">
          {/* <img
            src={product.img}
            alt={product.model}
            className="w-full h-auto md:h-[400px] object-cover rounded-lg"
          /> */}
          <div className="bg-white w-full ">
            {/* Image Viewer */}
            <div className="relative  w-full  rounded-xl flex items-center justify-center h-[300px] sm:h-[360px] overflow-hidden">
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
                      className="w-6 h-12 sm:w-18 sm:h-18 md:w-20 md:h-20 
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
                className="fixed top-4 right-4 z-[999] text-white text-4xl font-bold hover:text-red-400">
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
                  { label: "Type", value: product.Type },
                  {
                    label: "Frequency Response(-10dB)",
                    value: product.Frequency_Response,
                  },
                  { label: "LF Drivers", value: product.LF_Drivers },
                  { label: "HF Drivers", value: product.HF_Drivers },

                  {
                    label:
                      product?.model === "F12 AM"
                        ? "DSP Control"
                        : "RMS Power ",
                    value: product.RMS_Power,
                  },

                  {
                    label:
                      product?.model === "F12 AM"
                        ? "Amplifier Continuous Power"
                        : "Program Power",
                    value: product.Program_Power,
                  },
                  {
                    label:
                      product?.model === "F12 AM"
                        ? "Amplifier Peak Power"
                        : "Peak Power",
                    value: product.Peak_Power,
                  },
                  {
                    label:
                      product?.model === "F12 AM"
                        ? "Applications"
                        : "Sensitivity（1W/1m)",
                    value: product.Sensitivity,
                  },
                  {
                    label: "Max SPL (Continuous/1m) ",
                    value: product.Max_SPL,
                  },
                  {
                    label: "Max SPL (Peak/1m)",
                    value: product.Max_SPL_Peak,
                  },
                  {
                    label:
                      product?.model === "F12 AM"
                        ? "Connectors"
                        : "Nominal Impedance",
                    value: product.Nominal_Impedance,
                  },
                  {
                    label:
                      product?.model === "F12 AM"
                        ? "USB Interface"
                        : "Crossover Mode",
                    value: product.Crossover_Mode,
                  },
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
                <div className="relative w-full h-36 sm:h-60  overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-[110%] sm:h-[95%] object-contain transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
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
