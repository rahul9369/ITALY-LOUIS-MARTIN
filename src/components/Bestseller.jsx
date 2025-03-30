import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Eavpl from "../assets/eavPl.png";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";
import update3 from "../assets/news/upadate3.jpg";

const BestSeller = () => {
  const products = [
    {
      img: Eavpl,
      title:
        "Authorised Distributor for India Market: Emident Audio Visual Pvt Ltd",
      desc: "After more than a year of understanding and communication, Emident Audio Visual Pvt Ltd has conducted rigorous testing on our company's products and achieved satisfactory results. Both parties have decided that Emident Audio Visual Pvt Ltd will become the Louis Martin Audio Authorized Distributor for India Market, covering regions such as Nepal and Pakistan.",
    },
    {
      img: update1,
      title: "ASIA SALES PRESIDENT",
      desc: "In order to develop its business in the Asian region, the company has specially appointed CUI as the Sales President of the Asian region. CUI has been engaged in the audio industry for 20 years and has a good understanding of the Asian market. We hope that under his leadership, we can better serve customers in the Asian market and achieve better sales results.",
    },
    {
      img: update2,
      title: "GET SHOW 2023",
      desc: "Join us at the upcoming International Sound Expo for live demos and networking",
    },
    {
      img: Eavpl,
      title:
        "Authorised Distributor for India Market: Emident Audio Visual Pvt Ltd",
      desc: "After more than a year of understanding and communication, Emident Audio Visual Pvt Ltd has conducted rigorous testing on our company's products and achieved satisfactory results. Both parties have decided that Emident Audio Visual Pvt Ltd will become the Louis Martin Audio Authorized Distributor for India Market, covering regions such as Nepal and Pakistan.",
    },
    {
      img: update1,
      title: "ASIA SALES PRESIDENT",
      desc: "In order to develop its business in the Asian region, the company has specially appointed CUI as the Sales President of the Asian region. CUI has been engaged in the audio industry for 20 years and has a good understanding of the Asian market. We hope that under his leadership, we can better serve customers in the Asian market and achieve better sales results.",
    },
    {
      img: update2,
      title: "GET SHOW 2023",
      desc: "Join us at the upcoming International Sound Expo for live demos and networking",
    },
  ];

  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null); // Tracks which product is expanded

  // Auto-scroll effect
  // useEffect(() => {
  //   if (!isAutoScrolling) return;

  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       carouselRef.current.scrollBy({ left: 1, behavior: "smooth" });

  //       // Reset to start when reaching the end
  //       if (
  //         carouselRef.current.scrollLeft >=
  //         carouselRef.current.scrollWidth / 2
  //       ) {
  //         carouselRef.current.scrollLeft = 0;
  //       }
  //     }
  //   }, 1); // Smooth scrolling speed

  //   return () => clearInterval(interval);
  // }, [isAutoScrolling]);

  // Manual scrolling
  const scrollLeft = () => {
    setIsAutoScrolling(false);
    carouselRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    carouselRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  return (
    <div className="py-12 px-6 w-full bg-gray-50 flex flex-col items-center relative">
      {/* Section Title */}
      <div className="w-[90%] text-center">
        <h2 className="text-5xl font-bold text-gray-900 flex items-center justify-center">
          <span className="w-1.5 h-6 mr-2"></span> Company Latest News
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden mt-6">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md z-10">
          <FaChevronLeft size={20} />
        </button>

        {/* Carousel Track */}
        <div
          ref={carouselRef}
          className="overflow-hidden whitespace-nowrap flex">
          {[...products, ...products].map((product, index) => {
            const isExpanded = expandedIndex === index;
            const words = product.desc.split(" ");
            const shortText = words.slice(0, 20).join(" ");

            return (
              <div
                key={index}
                className="text-center shadow-md m-2 p-6 w-full rounded-lg border border-gray-200 hover:shadow-lg transition-all flex flex-col items-center">
                {/* Product Image */}
                <img
                  src={product.img}
                  alt="Company News Image"
                  className="w-full h-60 object-fit bg-gray-800 rounded-md"
                />
                <p className="text-black font-bold h-10 mt-4 text-center break-words whitespace-normal w-[350px] inline">
                  {product.title}
                </p>
                <p className="text-black mt-4 text-justify break-words whitespace-normal w-[350px] mx-auto">
                  {isExpanded ? product.desc : `${shortText}...`}
                  <span
                    className="text-blue-500 font-semibold ml-1 cursor-pointer"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}>
                    {isExpanded ? "Less" : "More"}
                  </span>
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md z-10">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
