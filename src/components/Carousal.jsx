import React, { useState, useEffect } from "react";
import CarausalImg1 from "../assets/carausalimg1.png";
import CarausalImg2 from "../assets/carausalimg2.png";
import CarausalImg3 from "../assets/carausalimg3.png";
// import CarausalImg4 from "../assets/carausalimg4.jpg";
import CarausalImg5 from "../assets/carausalimg5.png";

const Carousel = () => {
  const images = [
    CarausalImg1,
    CarausalImg2,
    CarausalImg3,
    // CarausalImg4,
    CarausalImg5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-green-500 scale-110" : "bg-gray-300"
            } transition-transform duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-opacity-70 transition"
        onClick={goToPrev}
        aria-label="Previous slide">
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-opacity-70 transition"
        onClick={goToNext}
        aria-label="Next slide">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
