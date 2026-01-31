import React from "react";
import Footer from "./Footer";
import Download from "../assets/Download.png";
import Famous210pdf from "../assets/newpdf/Famous210New.pdf";
import Q50pdf from "../assets/newpdf/Q50new.pdf";
import Q60pdf from "../assets/newpdf/Q60new.pdf";
import Q70pdf from "../assets/newpdf/Q70new.pdf";
import Q80pdf from "../assets/newpdf/Q80new.pdf";
import Coxpdf from "../assets/newpdf/COX12new.pdf";
import Red10pdf from "../assets/newpdf/Red10new.pdf";
import Red6pdf from "../assets/newpdf/Red5.5new.pdf";
import Red5pdf from "../assets/newpdf/Red5new.pdf";
import Red9pdf from "../assets/newpdf/Red9new.pdf";
import Red12pdf from "../assets/newpdf/Red12new.pdf";
import F8pdf from "../assets/newpdf/F8new.pdf";
import F10pdf from "../assets/newpdf/F10new.pdf";
import F12pdf from "../assets/newpdf/F12new.pdf";
import F15pdf from "../assets/newpdf/F15new.pdf";
import K302pdf from "../assets/newpdf/K302new.pdf";
import K304pdf from "../assets/newpdf/K302new.pdf";
import K306pdf from "../assets/newpdf/K302new.pdf";
import K308pdf from "../assets/newpdf/K302new.pdf";
import K312pdf from "../assets/newpdf/K302new.pdf";
import DS5pdf from "../assets/newpdf/DS-5new.pdf";
import DS8pdf from "../assets/newpdf/DS-8new.pdf";
import DS12pdf from "../assets/newpdf/DS-12new.pdf";
import DS15pdf from "../assets/newpdf/DS-15new.pdf";
import KS18pdf from "../assets/newpdf/ks18new.pdf";
import KS218pdf from "../assets/newpdf/KS218new.pdf";
import S18pdf from "../assets/newpdf/S18new.pdf";
import S218pdf from "../assets/newpdf/S218new.pdf";
import PLpdf from "../assets/newpdf/PLseriesnew.pdf";
import TIPpdf from "../assets/newpdf/TIPseriesnew.pdf";
import TTApdf from "../assets/newpdf/TTAseriesnew.pdf";
import Dpdf from "../assets/newpdf/Dseriesnew.pdf";

import { DownloadIcon } from "lucide-react";
import { Helmet } from "react-helmet";

const pdfList = [
  {
    title: "Famous_210_Linearray",
    path: Famous210pdf,
    filename: "Famous_210_Linearray_Datasheet.pdf",
  },
  {
    title: "Q50_Linearray",
    path: Q50pdf,
    filename: "Q50_Linearray_Datasheet.pdf",
  },
  {
    title: "Q60_Linearray",
    path: Q60pdf,
    filename: "Q60_Linearray_Datasheet.pdf",
  },

  {
    title: "Q70_Linearray",
    path: Q70pdf,
    filename: "Q70_Linearray_Datasheet.pdf",
  },
  {
    title: "Q80_Linearray",
    path: Q80pdf,
    filename: "Q80_Linearray_Datasheet.pdf",
  },
  {
    title: "COX12_Linearray",
    path: Coxpdf,
    filename: "COX12_Linearray_Datasheet.pdf",
  },
  {
    title: "Red10_Loudspeaker",
    path: Red10pdf,
    filename: "Red10_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "Red5.5_Loudspeaker",
    path: Red6pdf,
    filename: "Red5.5_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "Red5_Loudspeaker",
    path: Red5pdf,
    filename: "Red5_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "Red9_Loudspeaker",
    path: Red9pdf,
    filename: "Red9_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "Red12_Loudspeaker",
    path: Red12pdf,
    filename: "Red12_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "F8_Loudspeaker",
    path: F8pdf,
    filename: "F8_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "F10_Loudspeaker",
    path: F10pdf,
    filename: "F10_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "F12_Loudspeaker",
    path: F12pdf,
    filename: "F12_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "F15_Loudspeaker",
    path: F15pdf,
    filename: "F15_Loudspeaker_Datasheet.pdf",
  },
  {
    title: "K302_Column_Speaker",
    path: K302pdf,
    filename: "K302_Column_Speaker_Datasheet.pdf",
  },
  {
    title: "K304_Column_Speaker",
    path: K304pdf,
    filename: "K304_Column_Speaker_Datasheet.pdf",
  },
  {
    title: "K306_Column_Speaker",
    path: K306pdf,
    filename: "K306_Column_Speaker_Datasheet.pdf",
  },
  {
    title: "K308_Column_Speaker",
    path: K308pdf,
    filename: "K308_Column_Speaker_Datasheet.pdf",
  },
  {
    title: "K312_Column_Speaker",
    path: K312pdf,
    filename: "K312_Column_Speaker_Datasheet.pdf",
  },
  {
    title: "DS5_Speaker",
    path: DS5pdf,
    filename: "DS5_Speaker_Datasheet.pdf",
  },
  {
    title: "DS8_Speaker",
    path: DS8pdf,
    filename: "DS8_Speaker_Datasheet.pdf",
  },
  {
    title: "DS12_Speaker",
    path: DS12pdf,
    filename: "DS12_Speaker_Datasheet.pdf",
  },
  {
    title: "DS15_Speaker",
    path: DS15pdf,
    filename: "DS15_Speaker_Datasheet.pdf",
  },
  {
    title: "DS15_Speaker",
    path: DS15pdf,
    filename: "DS15_Speaker_Datasheet.pdf",
  },
  {
    title: "KS18_Subwoofer",
    path: KS18pdf,
    filename: "KS18_Subwoofer_Datasheet.pdf",
  },
  {
    title: "S18_Subwoofer",
    path: S18pdf,
    filename: "S18_Subwoofer_Datasheet.pdf",
  },
  {
    title: "KS218_Subwoofer",
    path: KS218pdf,
    filename: "KS218_Subwoofer_Datasheet.pdf",
  },
  {
    title: "S218_Subwoofer",
    path: S218pdf,
    filename: "S218_Subwoofer_Datasheet.pdf",
  },
  {
    title: "PL_Series_Amplifier",
    path: PLpdf,
    filename: "PL__Series_Amplifier_Datasheet.pdf",
  },
  {
    title: "D_Series_Amplifier  ",
    path: Dpdf,
    filename: "D_Series_Amplifier_Datasheet.pdf",
  },
  {
    title: "TIP_Series_Amplifier",
    path: TIPpdf,
    filename: "TIP_Series_Amplifier_Datasheet.pdf",
  },
  {
    title: "TTA_Series_Amplifier",
    path: TTApdf,
    filename: "TTA_Series_Amplifier_Datasheet.pdf",
  },
];

const DownloadPage = () => {
  return (
    <div className="h-full ">
      <Helmet>
        <title>Download - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <img
        src={Download}
        alt="Download Banner"
        className="w-full h-[90px] sm:h-[250px]"
      />

      <div className="w-full mx-auto  shadow-lg rounded-lg p-6">
        <h1 className="text-2xl  text-center font-semibold border-b pb-2 text-gray-800">
          {/* Data Sheet */}
          Technical Datasheet
        </h1>

        {pdfList.map((pdf, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:flex-row sm:justify-between justify-center  sm:items-center w-[90%] mx-auto py-4 border-b last:border-b-0 transition duration-200 hover:bg-gray-50 px-2 rounded-md">
            {/* Title Section */}
            <div className="text-gray-800  font-medium  sm:text-lg mb-2 sm:mb-0">
              {pdf.title}
            </div>

            {/* Button Section */}
            <a
              href={`/view-pdf?url=${encodeURIComponent(pdf.path)}&name=${
                pdf.filename
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-md text-sm sm:text-base shadow hover:shadow-lg transition">
              <DownloadIcon className="w-5 h-5" />
              <span className="text-[12px]"> Download</span>
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default DownloadPage;
