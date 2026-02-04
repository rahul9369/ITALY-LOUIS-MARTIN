import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

import famouf from "../assets/fam/famouf.JPG";
import redfront from "../assets/red10/redfront.JPG";
import kff302 from "../assets/k302/kff302.jpg";
import ds415 from "../assets/ds15/ds415.JPG";
import ksf218 from "../assets/ks218/ksf218.JPG";
import ft1002 from "../assets/tip1002/ft1002.jpg";

const categories = [
  {
    name: "Line Array",
    img: famouf,
    description:
      "Crafted for perfection, delivering seamless coverage, refined clarity, and commanding power—the ultimate sound solution for unforgettable events and beyond!",
    path: "/linearray",
  },
  {
    name: "Point Source",
    img: redfront,
    description:
      "Unmatched clarity, Pure detail, Absolute audio perfection - Elevating audio into an art form, where engineering meets emotion.",
    path: "/pointsource",
  },
  {
    name: "Column Speaker",
    img: kff302,
    description:
      "Engineered for clarity and fidelity, with a sleek design. Perfect for spaces where intelligibility matters most.",
    path: "/columsound",
  },
  {
    name: "Commercial Speaker",
    img: ds415,
    description:
      "Engineered to endure. Designed to perform. Crystal‑clear sound for music, announcements, and large venues.",
    path: "/stagemonitor",
  },
  {
    name: "Subwoofer",
    img: ksf218,
    description:
      "Feel the difference: state‑of‑the‑art drivers, deep precision bass, and rugged durability. Built to perform, built to last.",
    path: "/subwoofer",
  },
  {
    name: "Electronics",
    img: ft1002,
    description:
      "Built with high‑quality components to ensure superior performance, sustainability, and long‑term endurance.",
    path: "/electronics",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  // ⭐ PAGE RELOAD → SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="w-full text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-red-900 flex items-center justify-center">
          <span className="h-6 w-6 bg-primary rounded-full mr-3"></span>
          Products
        </h2>
      </div>

      {/* PRODUCT SECTION */}
      <div className="w-[90%] space-y-20">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer flex flex-col md:flex-row items-center gap-12 transition-all duration-300 hover:scale-[1.01] ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}>
            {/* Image (Perfect Fit) */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full h-80 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 transition-all duration-300"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Animated Text */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{
                opacity: 0,
                x: index % 2 === 1 ? -70 : 70,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-red-900 mb-4">
                {item.name}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {item.description}.
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
