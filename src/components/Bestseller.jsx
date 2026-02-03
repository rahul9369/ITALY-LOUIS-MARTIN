import { Link } from "react-router-dom";

import cox15 from "../assets/news/cox15.jpg";
import gril from "../assets/news/gril.jpg";
import factory from "../assets/news/factory.jpg";

const newsData = [
  {
    id: 1,
    img: cox15,
    title: "Product Launch: Introducing the COX15 Coaxial Line Array System",
    shortDesc:
      "The COX15 delivers exceptional clarity and dynamic range with a passive MF/HF configuration, combining advanced driver technology and optimized acoustic architecture.",
  },
  {
    id: 2,
    img: gril,
    title: "Q Series Line Array Gets a Sleek New Grill Design",
    shortDesc:
      "Louis Martin Audio is excited to announce a grill upgrade for the acclaimed Q Series line array, combining refined visual appeal with improved mechanical integrity.",
  },
  {
    id: 3,
    img: factory,
    title: "Louis Martin Audio Opens New Factory Facility",
    date: "26 November 2025",
    shortDesc:
      "Louis Martin Audio is proud to announce the opening of our new factory facility, effective November 26, 2025.",
  },
];

const CompanyNews = () => {
  return (
    <section className="bg-white py-16">
      <div className="w-[92%] lg:w-[90%] mx-auto mb-12">
        <h2 className="text-3xl text-center text-red-700 sm:text-5xl font-bold">
          Latest News
        </h2>
        <p className="text-gray-400 text-center mt-3">
          Latest announcements & company milestones
        </p>
      </div>

      {/* SAME ROW – SAME DESIGN */}
      <div className="w-[92%] lg:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="h-56 overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                alt={item.title}
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg group-hover:text-blue-500 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                {item.shortDesc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CompanyNews;
