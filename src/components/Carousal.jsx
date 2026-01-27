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
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
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
      className="relative w-full overflow-hidden 
      min-h-[300px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* IMAGE */}
      <img
        key={currentIndex}
        src={slides[currentIndex].image}
        className="w-full h-full object-cover animate-zoomOnly"
        alt="carousel"
      />

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 
        bg-black/40 text-white px-3 py-2 rounded-full 
        hover:bg-red-800 transition"
      >
        ❮
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 
        bg-black/40 text-white px-3 py-2 rounded-full 
        hover:bg-red-800 transition"
      >
        ❯
      </button>

      {/* TEXT AREA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30 flex flex-col items-center gap-4">

        {/* TITLE */}
        <div className="text-red-800 text-3xl sm:text-7xl md:text-7xl font-bold drop-shadow-lg">
          {slides[currentIndex].title}
        </div>

        {/* SUBTITLE */}
        <div className="text-red-800 text-2xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg">
          {slides[currentIndex].subtitle}
        </div>

        {/* BUTTON */}
        <Link
          to={slides[currentIndex].link}
          className="
             mt-6 sm:mt-8 md:mt-10
    bg-white/10 backdrop-blur-md
    border border-white/20
    text-white font-semibold tracking-wide
    px-6 py-3 text-base sm:px-7 sm:py-3.5 sm:text-lg
    rounded-xl
    shadow-lg
    transition-all duration-500 ease-out
    hover:bg-red-900 hover:shadow-red-500/50 hover:scale-105
  "
        >
          {slides[currentIndex].text}
        </Link>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
