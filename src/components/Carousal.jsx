import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import CarausalImg1 from "../assets/carausalimg1.png";
import CarausalImg2 from "../assets/carausalimg2.png";
import CarausalImg3 from "../assets/carausalimg3.png";
import CarausalImg5 from "../assets/carausalimg5.png";

const Carousel = () => {
  const originalSlides = [
    { image: CarausalImg1 },
    { image: CarausalImg2 },
    { image: CarausalImg3 },
    { image: CarausalImg5 },
  ];

  // Clone slides for infinite scrolling
  const slides = [
    originalSlides[originalSlides.length - 1],
    ...originalSlides,
    originalSlides[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef(null);

  // Auto slide every 3s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  // Infinite loop logic
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 650);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(slides.length - 2);
      }, 650);
    }

    const t = setTimeout(() => setTransition(true), 50);
    return () => clearTimeout(t);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden 
      aspect-[10/5] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]">

      {/* SLIDER WRAPPER */}
      <div
        className={`flex w-full h-full ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">

            {/* IMAGE */}
            <img src={slide.image} className="w-full h-full object-cover" />

            {/* RESPONSIVE MOVING BUTTON */}
            <Link
              to="/fseries"
              className="
                absolute top-1/2 -translate-y-1/2 
                right-2 sm:right-4 md:right-6 
                bg-gray-800 text-white 
                px-3 py-1.5 text-xs 
                sm:px-4 sm:py-2 sm:text-sm 
                md:px-6 md:py-3 md:text-base 
                rounded-lg sm:rounded-xl md:rounded-2xl 
                shadow-lg hover:bg-yellow-600 transition 
                z-30
              "
            >
              F-Series
            </Link>

          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {originalSlides.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`rounded-full cursor-pointer transition
              ${currentIndex - 1 === dotIndex 
                ? "bg-green-500 scale-110" 
                : "bg-gray-300"
              }
              w-2 h-2 sm:w-3 sm:h-3
            `}
            onClick={() => setCurrentIndex(dotIndex + 1)}
          />
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 
          bg-black bg-opacity-40 text-white 
          p-1.5 sm:p-2 md:p-3 
          rounded-full z-20"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* RIGHT ARROW */}
      <button
        className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 
          bg-black bg-opacity-40 text-white 
          p-1.5 sm:p-2 md:p-3 
          rounded-full z-20"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;













