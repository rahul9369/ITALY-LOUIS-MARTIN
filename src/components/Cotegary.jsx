import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Devilred10 from "../assets/Devilred10.png";
import FAMOUS210N from "../assets/Famousmartin1.jpg";
import Subwoofer218 from "../assets/subwoofer218.png";
import AMPLIFIERSpl4 from "../assets/AMPLIFIERSpl4.jpg";
import PlasticDs5 from "../assets/plasticDs5.jpg";
import SpeakerF12 from "../assets/columnImg.jpg";

const categories = [
  { name: "Line Array", img: FAMOUS210N, path: "/linearray" },
  { name: "Point Source", img: Devilred10, path: "/pointsource" },
  { name: "Column Speaker", img: SpeakerF12, path: "/columsound" },
  { name: "Plastic Speaker", img: PlasticDs5, path: "/stagemonitor" },
  { name: "Subwoofer", img: Subwoofer218, path: "/subwoofer" },
  { name: "Electronics", img: AMPLIFIERSpl4, path: "/electronics" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col items-center py-12">
      {/* Section Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center   mb-8">
        <h2 className="sm:text-5xl text-3xl font-bold text-gray-900 flex items-center justify-center relative">
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "1.5rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-6 bg-primary mr-3 rounded-full"></motion.span>
          Products
        </h2>
      </motion.div>

      {/* Categories Grid with Scroll Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[95%] mt-6">
        {categories.map((category, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center">
              <motion.div
                className="w-84 h-60 md:w-[100%] md:h-96 bg-white cursor-pointer rounded-lg shadow-md flex items-center justify-center border border-gray-200 hover:shadow-xl transition-all overflow-hidden"
                onClick={() => navigate(category.path)}>
                <motion.img
                  src={category.img}
                  alt={category.name}
                  loading="lazy"
                  className="w-full sm:h-full "
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.p
                className="text-lg font-medium text-gray-800 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}>
                {category.name}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
