import React from "react";
import datasheet from "../assets/Linearray.pdf"; // Ensure the PDF is placed correctly
import Footer from "./Footer";
import Download from "../assets/Download.png";
const DownloadPage = () => {
  return (
    <div className="h-full bg-gray-100  ">
      <img src={Download} alt="" className="w-full h-[90px]  sm:h-[250px]" />
      <div className="w-full  bg-white shadow-lg rounded-lg p-6">
        {/* Section Header */}
        <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800">
          {/* Downloads */}
        </h2>

        {/* Datasheet Row */}
        <div className="flex justify-between items-center py-4 border-b">
          <span className="text-gray-700 text-lg font-medium">Data Sheet</span>

          <a
            href={datasheet}
            download="Linearray-Datasheet.pdf"
            className="px-5 py-2 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition font-medium">
            Download
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DownloadPage;
