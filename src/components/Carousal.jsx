import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CarausalImg1 from "../assets/carausalimg1.jpg";
import CarausalImg2 from "../assets/carausalimg2.jpg";
import CarausalImg3 from "../assets/carausalimg3.jpg";
import CarausalImg5 from "../assets/carausalimg5.jpg";

const slides = [
  {
    image: CarausalImg1,
    title: "RED-SERIES",
    subtitle: "Object of Desire",
    text: "Read More",
    link: "/redseries",
  },
  {
    image: CarausalImg2,
    title: "Q-SERIES",
    subtitle: "High Performance Line Array",
    text: "Read More",
    link: "/qseries",
  },
  {
    image: CarausalImg3,
    title: "F-SERIES",
    subtitle: "Seamless Sound for Every Space",
    text: "Read More",
    link: "/fseries",
  },
  {
    image: CarausalImg5,
    title: "COX12",
    subtitle: "Engineered for Clarity Designed for Impact",
    text: "Read More",
    link: "/linearray/cox%2012",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  /* ✅ PRELOAD IMAGES (NO WHITE) */
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // animation time se thoda zyada
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden bg-black">
      {/* IMAGE WITH CENTER ZOOM-IN */}
      <div
        key={index} // 🔥 VERY IMPORTANT (animation reset)
        className="absolute inset-0 w-full bg-center bg-cover animate-zoom-in"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* DARK OVERLAY */}
      {/* <div className="absolute w-[90%] inset-0 bg-black/40 z-10" /> */}

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex flex-col items-center w-[90%] justify-center text-center ">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-2xl">
          {slide.title}
        </h1>

        <p className="mt-3 text-white text-sm sm:text-xl md:text-3xl">
          {slide.subtitle}
        </p>

        <Link
          to={slide.link}
          className="mt-6 bg-red-700 hover:bg-red-900 text-white px-6 py-3 rounded-xl
          font-semibold shadow-xl transition hover:scale-105">
          {slide.text}
        </Link>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-red-600 scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ONLY ZOOM-IN ANIMATION */}
      <style>{`
        @keyframes zoomInCenter {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.15);
          }
        }

        .animate-zoom-in {
          animation: zoomInCenter 6s ease-out forwards;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
