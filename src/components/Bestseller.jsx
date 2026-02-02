import { Link } from "react-router-dom";
import Eavpl from "../assets/eavPl.png";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";

const newsData = [
  {
    id: "eminent-av",
    img: Eavpl,
    title: "Louis Martin Audio Appoints Eminent AV as India Distributor",
    shortDesc:
      "Eminent Audio Visual appointed as distributor for India, Nepal & Pakistan.",
  },
  {
    id: "asia-sales-president",
    img: update1,
    title: "Asia Sales President Appointed",
    shortDesc:
      "CUI brings 20+ years of audio industry experience to expand Asian markets.",
  },
  {
    id: "get-show-2023",
    img: update2,
    title: "GET SHOW 2023",
    shortDesc:
      "Live demos, professional networking, and next-gen audio technology.",
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
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
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
