import React, { useState, useEffect } from "react";
import CarausalImg1 from "../assets/carausalimg1.jpg";
import CarausalImg2 from "../assets/carausalimg2.jpg";
import CarausalImg3 from "../assets/carausalimg3.jpg";
// import CarausalImg4 from "../assets/carausalimg4.jpg";
import CarausalImg5 from "../assets/carausalimg5.jpg";

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
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
              index === currentIndex ? "bg-green-500 scale-110" : "bg-gray-400"
            } transition-transform duration-200`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 cursor-pointer text-white p-2 md:p-3 rounded-full z-20 hover:bg-opacity-75 transition"
        onClick={goToPrev}
        aria-label="Previous slide">
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white cursor-pointer p-2 md:p-3 rounded-full z-20 hover:bg-opacity-75 transition"
        onClick={goToNext}
        aria-label="Next slide">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import CarausalImg1 from "../assets/carausalimg1.jpg";
// import CarausalImg2 from "../assets/carausalimg2.jpg";
// import CarausalImg3 from "../assets/carausalimg3.jpg";
// import CarausalImg5 from "../assets/carausalimg5.jpg";

// const Carousel = () => {
//   const slides = [
//     {
//       img: CarausalImg1,
//       title: "Innovate with Confidence",
//       desc: "Explore cutting-edge technology and take your business to the next level.",
//     },
//     {
//       img: CarausalImg2,
//       title: "Unmatched Quality & Design",
//       desc: "Our products are crafted to perfection with quality you can trust.",
//     },
//     {
//       img: CarausalImg3,
//       title: "Global Reach, Local Touch",
//       desc: "We deliver top-notch services worldwide while staying connected locally.",
//     },
//     {
//       img: CarausalImg5,
//       title: "Join the Revolution",
//       desc: "Step into the future with our latest innovations and technology solutions.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden">
//       {/* Image Slider */}
//       <div className="relative w-full h-full">
//         <AnimatePresence>
//           {slides.map(
//             (slide, index) =>
//               index === currentIndex && (
//                 <motion.div
//                   key={index}
//                   className="absolute w-full h-full"
//                   initial={{ opacity: 0, scale: 1.1 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 1.1 }}
//                   transition={{ duration: 1 }}>
//                   {/* Background Image */}
//                   <img
//                     src={slide.img}
//                     alt="Slide Image"
//                     className="w-full h-full object-cover"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

//                   {/* Animated Text */}
//                   <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 md:p-12">
//                     <motion.h2
//                       className="text-3xl md:text-5xl font-bold mb-4"
//                       initial={{ y: 100, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ duration: 1, delay: 0.5 }}>
//                       {slide.title}
//                     </motion.h2>
//                     <motion.p
//                       className="text-lg md:text-xl max-w-2xl"
//                       initial={{ y: 50, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ duration: 1, delay: 0.8 }}>
//                       {slide.desc}
//                     </motion.p>
//                   </div>
//                 </motion.div>
//               )
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-green-500 scale-150" : "bg-gray-400"
//             } transition-all duration-300`}
//           />
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 md:p-4 rounded-full z-20 hover:bg-opacity-75 transition"
//         onClick={goToPrev}>
//         <FaChevronLeft size={20} />
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 md:p-4 rounded-full z-20 hover:bg-opacity-75 transition"
//         onClick={goToNext}>
//         <FaChevronRight size={20} />
//       </button>
//     </div>
//   );
// };

// export default Carousel;
