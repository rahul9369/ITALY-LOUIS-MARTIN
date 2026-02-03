import { Link } from "react-router-dom";
import { newsData } from "../components/NewsData";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import News from "../assets/News&update.png";

const CompanyNews = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Company News | Louis Martin</title>
      </Helmet>
      <img
        src={News}
        alt="News"
        className="w-full h-[120px] sm:h-[260px] object-cover"
      />

      <div className="px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <Link
            key={news.id}
            to={`/company-news/${news.id}`}
            className="group bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden">
            <div className="h-60">
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg text-gray-600">
                {news.date}
              </h3>
              <h3 className="font-bold text-lg group-hover:text-blue-600">
                {news.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                {news.description}
              </p>
              <span className="text-blue-600 font-semibold text-sm mt-4 inline-block">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CompanyNews;
