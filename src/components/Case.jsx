import React from "react";
import Case from "../assets/case/Case.jpg";
import Case2 from "../assets/case/case2.jpg";
import Case3 from "../assets/case/case3.jpg";
import Case4 from "../assets/case/Case4.jpg";
import Main from "../assets/case/casemain.png";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const CaseSection = () => {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Case - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      {/* Main Image */}
      <img
        src={Main}
        alt="Main Case"
        className="w-full h-[90px] sm:h-[250px]"
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 w-[90%] mx-auto my-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Image Cards */}
        {[
          {
            img: Case,
            text: "Auto Show Line Array",
          },
          {
            img: Case2,
            text: "The opening ceremony",
          },
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
