import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import CarausalImg1 from "../assets/carausalimg1.jpg";
import CarausalImg2 from "../assets/carausalimg2.jpg";
import CarausalImg3 from "../assets/carausalimg3.jpg";
import CarausalImg5 from "../assets/carausalimg5.jpg";

const Carousel = () => {
  const slides = [
    {
      image: CarausalImg1,
      text: "Read More",
      link: "/redseries",
      title: "RED-SERIES",
      subtitle: "Object of Desire",
    },
    {
      image: CarausalImg2,
      text: "Read More",
      link: "/qseries",
      title: "Q-SERIES",
      subtitle: "High Performance Line Array",
    },
    {
      image: CarausalImg3,
      text: "Read More",
      link: "/fseries",
      title: "F-SERIES",
      subtitle: "Seamless Sound for Every Space",
    },
    {
      image: CarausalImg5,
      text: "Read More",
      link: "/linearray/cox%2012",
      title: "COX12",
      subtitle: "Engineered for Clarity Designed for Impact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  return (
    <div
      className="relative w-full overflow-hidden min-h-[50px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {/* IMAGE */}
      <img
        key={currentIndex}
        src={slides[currentIndex].image}
        className=" h-full object-cover animate-zoomOnly"
        alt="carousel"
      />

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 
          bg-black/50 text-white p-2 sm:p-3 rounded-full shadow-lg
          hover:bg-red-800 hover:scale-110 transition-transform duration-300">
        ❮
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 
          bg-black/50 text-white p-2 sm:p-3 rounded-full shadow-lg
          hover:bg-red-800 hover:scale-110 transition-transform duration-300">
        ❯
      </button>

      {/* TEXT AREA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 sm:gap-4 px-4 text-center w-[90%] sm:w-[80%]">
        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0  rounded-lg pointer-events-none"></div>

        {/* TITLE */}
        <div className="relative text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
          {slides[currentIndex].title}
        </div>

        {/* SUBTITLE */}
        <div className="relative text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold drop-shadow-xl">
          {slides[currentIndex].subtitle}
        </div>

        {/* BUTTON */}
        <Link
          to={slides[currentIndex].link}
          className="relative mt-2 sm:mt-4 md:mt-6
            bg-red-700/80 backdrop-blur-md
            border border-red-600
            text-white font-semibold tracking-wide
            px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 sm:text-sm md:text-base lg:text-lg
            rounded-xl shadow-lg
            transition-all duration-500 ease-out
            hover:bg-red-900 hover:shadow-red-500/50 hover:scale-105">
          {slides[currentIndex].text}
        </Link>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 shadow-lg ${
              index === currentIndex
                ? "bg-red-600 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
