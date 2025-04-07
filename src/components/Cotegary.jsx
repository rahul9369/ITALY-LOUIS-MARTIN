import { useNavigate } from "react-router-dom";
import Devilred10 from "../assets/Devilred10.png";
import FAMOUS210N from "../assets/Famousmartin1.jpg";
import Subwoofer218 from "../assets/subwoofer218.png";
import AMPLIFIERSpl4 from "../assets/AMPLIFIERSpl4.jpg";
import PlasticDs5 from "../assets/plasticDs5.jpg";
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
    <div className="bg-white flex flex-col items-center py-12">
      {/* Section Title */}
      <div className="w-full text-center mb-8">
        <h2 className="sm:text-5xl text-3xl font-bold text-gray-900 flex items-center justify-center relative">
          <span className="h-6 bg-primary mr-3 rounded-full w-6"></span>
          Products
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[95%] mt-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-84 h-60 md:w-[100%] md:h-auto bg-white cursor-pointer rounded-lg shadow-md flex items-center justify-center border border-gray-200 hover:shadow-xl transition-all overflow-hidden"
              onClick={() => navigate(category.path)}>
              <img
                src={category.img}
                alt={category.name}
                loading="lazy"
                className="w-full object-fill sm:h-full"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 mt-3">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
