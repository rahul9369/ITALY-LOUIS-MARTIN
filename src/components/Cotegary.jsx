import { useNavigate } from "react-router-dom";
import Devilred10 from "../assets/Devilred10.png";
import FAMOUS210N from "../assets/Famousmartin1.jpg";
import Subwoofer218 from "../assets/subwoofer218.png";
import AMPLIFIERSpl4 from "../assets/AMPLIFIERSpl4.jpg";
import plasticDs5 from "../assets/plasticDs5.png";
import Ds8 from "../assets/Ds8.png";
import SpeakerF12 from "../assets/columnImg.jpg";
import DS12 from "../assets/DS12.jpg";

const categories = [
  { name: "Line Array", img: FAMOUS210N, path: "/linearray" },
  { name: "Point Source", img: Devilred10, path: "/pointsource" },
  { name: "Column Speaker", img: SpeakerF12, path: "/columsound" },
  { name: "Commercial Speaker", img: DS12, path: "/stagemonitor" },
  { name: "Subwoofer", img: Subwoofer218, path: "/subwoofer" },
  { name: "Electronics", img: AMPLIFIERSpl4, path: "/electronics" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="w-full text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 flex items-center justify-center relative">
          <span className="h-6 w-6 bg-primary rounded-full mr-3"></span>
          Products
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(category.path)}
            className="cursor-pointer  bg-white  transition-all duration-300 overflow-hidden flex flex-col items-center">
            <div className="w-full rounded-2xl aspect-video sm:aspect-[5/6] md:aspect-[5/3] lg:aspect-[5/3]">
              <img
                src={category.img}
                alt={category.name}
                loading="lazy"
                className="w-full h-92 rounded-2xl hover:rounded-2xl   transition-transform duration-300 hover:scale-105 "
              />
            </div>
            <p className="text-center text-lg font-semibold text-gray-800 mt-4 mb-4">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
