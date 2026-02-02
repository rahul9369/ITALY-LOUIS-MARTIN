import React, { useState, useEffect } from "react";
import News from "../assets/News&update.png";
import updates from "../assets/news/upadts4.jpg";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";
import update3 from "../assets/news/upadate3.jpg";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const newsData = [
  {
    id: 1,
    img: updates,
    title:
      "Authorised Distributor for India Market: Eminent Audio Visual Pvt Ltd",
    date: "25 Dec 2024",
    description:
      "After more than a year of understanding and communication, Eminent Audio Visual Pvt Ltd has conducted rigorous testing on our company's products and achieved satisfactory results. Both parties have decided that Eminent Audio Visual Pvt Ltd will become the Louis Martin Audio Authorized Distributor for India Market.",
  },
  {
    id: 2,
    img: update1,
    title: "Asia Sales President",
    date: "24 May 2023",
    description:
      "In order to develop its business in the Asian region, the company has specially appointed CUI as the Sales President of the Asian region.",
  },
  {
    id: 3,
    img: update2,
    title: "GET SHOW 2023",
    date: "08 May 2023",
    description:
      "We participated in the GET SHOW to expand into Chinese and Asian markets.",
  },
  {
    id: 4,
    img: update3,
    title: "PROLight+ Sound Guangzhou 2017",
    date: "30 May 2017",
    description:
      "We participated in the 15th Guangzhou International Lighting and Sound Exhibition.",
  },
];

const CompanyNews = () => {
  const [activeNews, setActiveNews] = useState(null);

  // Auto scroll top on detail open
  useEffect(() => {
    if (activeNews) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeNews]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>Company News | Louis Martin</title>
      </Helmet>

      {/* HEADER */}
      {/* HEADER (only list view) */}
      {!activeNews && (
        <img
          src={News}
          alt="News"
          className="w-full h-[120px] sm:h-[260px] object-cover"
        />
      )}

      {/* ================= DETAIL VIEW ================= */}
      {activeNews ? (
        <div className="w-full mx-auto ">
          {/* Back Button */}

          {/* Card */}
          <article className="bg-white   overflow-hidden">
            {/* Image */}
            <img
              src={activeNews.img}
              alt={activeNews.title}
              className="w-full h-[220px] sm:h-[320px] lg:h-[420px] object-cover"
            />

            {/* Content */}
            <div className="p-5 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Company Update • {activeNews.date}
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
                {activeNews.title}
              </h1>

              <div className="mt-5 h-1 w-16 bg-blue-600 rounded-full" />

              <p className="mt-6 sm:mt-8 text-gray-700 text-base sm:text-lg leading-relaxed">
                {activeNews.description}
              </p>
            </div>
          </article>
        </div>
      ) : (
        /* ================= GRID LIST VIEW ================= */
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newsData.map((news) => (
              <div
                key={news.id}
                onClick={() => setActiveNews(news)}
                className="group cursor-pointer bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
                {/* IMAGE */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 h-[220px] flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      {news.date}
                    </p>

                    <h3 className="text-lg font-bold text-gray-900 mt-2 line-clamp-2 group-hover:text-blue-600 transition">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                      {news.description}
                    </p>
                  </div>

                  <span className="text-blue-600 font-semibold text-sm">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CompanyNews;
