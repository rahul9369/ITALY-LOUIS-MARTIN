import React, { useState, useEffect } from "react";
import CarausalImg1 from "../assets/carausalimg1.png";
import CarausalImg2 from "../assets/carausalimg2.png";
import CarausalImg3 from "../assets/carausalimg3.png";
import CarausalImg5 from "../assets/carausalimg5.png";

const Carousel = () => {
  const slides = [
    {
      image: CarausalImg1,
      // title: "Welcome to Our Platform",
      // description: "Discover amazing features and seamless experiences.",
    },
    {
      image: CarausalImg2,
      // title: "Connect With The World",
      // description: "Bring your ideas to life with a global audience.",
    },
    {
      image: CarausalImg3,
      // title: "Fast and Reliable",
      // description: "Experience unmatched performance and speed.",
    },
    {
      image: CarausalImg5,
      // title: "Secure & Scalable",
      //  / description: "Your data is protected with top-tier security.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full aspect-[11/4] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5] overflow-hidden">
      {/* Slide Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-[-5px] inset-[-20px 5px] w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain sm:object-cover"
            />
            {/* Text Overlay */}
            {index === currentIndex && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  bg-opacity-30 text-white text-center p-4">
                <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2 drop-shadow-md animate-fadeDown">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg max-w-[80%] drop-shadow">
                  {slide.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-green-500 scale-110" : "bg-gray-300"
            } transition-transform duration-300`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-opacity-70 transition"
        onClick={goToPrev}>
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-opacity-70 transition"
        onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
