import React from "react";
import Case from "../assets/case/case.jpg";
import Case2 from "../assets/case/case2.jpg";
import Case3 from "../assets/case/case3.jpg";
import Case4 from "../assets/case/case4.jpg";
import Main from "../assets/case/casemain.jpg";
import Footer from "./Footer";

const CaseSection = () => {
  return (
    <div className="fade-in">
      {/* Main Image */}
      <img src={Main} alt="Main Case" className="w-full fade-in" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 w-[90%] mx-auto my-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Image Cards */}
        {[
          {
            img: Case,
            text: "Auto Show Line Array",
          },
          // {
          //   img: Case2,
          //   text: "The opening ceremony",
          // },
          {
            img: Case3,
            text: "Analyze the plan together",
          },
          {
            img: Case4,
            text: "On site testing of Linear Array",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group fade-in">
            {/* Text in the Center of Image */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold  bg-opacity-50 px-3 py-1 rounded-md z-10 transition-opacity duration-500 group-hover:opacity-100">
              {item.text}
            </div>

            {/* Image with Hover Effect */}
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100"
              onLoad={(e) => e.target.classList.add("opacity-100")}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CaseSection;
