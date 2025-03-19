import Devilred10 from "../assets/Devilred10.png";
import FAMOUS210N from "../assets/Famousmartin1.jpg";
import Subwoofer218 from "../assets/subwoofer218.png";
import AMPLIFIERSpl4 from "../assets/AMPLIFIERSpl4.jpg";
import PlasticDs5 from "../assets/plasticDs5.jpg";
import SpeakerF12 from "../assets/SpeakerF12.jpg";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Line Array",
      img: FAMOUS210N,
      path: "/lineararray",
    },
    {
      name: "Point Source",
      img: Devilred10,
      path: "/pointsource",
    },
    {
      name: "Stage Monitor",
      img: SpeakerF12,
      path: "/stagemonitor",
    },

    {
      name: "Subwoofer",
      img: Subwoofer218,
      path: "/subwoofer",
    },

    {
      name: "Column Loudspeaker",
      img: PlasticDs5,
      path: "/columsound",
    },
    {
      name: "Electronics",
      img: AMPLIFIERSpl4,
      path: "/electronics",
    },
  ];

  return (
    <div className="bg-white   flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full text-center max-w-7xl">
        <h2 className="text-5xl font-bold text-gray-900 flex items-center justify-center">
          <span className="w-1.5 h-6  mr-2"></span> Products
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[95%] mt-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-84 h-84 md:w-[100%] md:h-96 bg-white cursor-pointer hover:scale-95 rounded-md shadow-md flex items-center justify-center border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
              onClick={() => navigate(category.path)}>
              <img
                src={category.img}
                alt={category.name}
                className="w-[100%] h-full object-fit"
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
