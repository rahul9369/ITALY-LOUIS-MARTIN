import React from "react";
import News from "../assets/News&update.png";
import updates from "../assets/news/upadts4.jpg";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";
import update3 from "../assets/news/upadate3.jpg";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const newsData = [
  {
    img: updates, // Replace with actual image path
    title:
      "Authorised Distributor for India Market: Eminent Audio Visual Pvt Ltd",
    date: "2024-12-25",
    description:
      "After more than a year of understanding and communication, Emident Audio Visual Pvt Ltd has conducted rigorous testing on our company's products and achieved satisfactory results. Both parties have decided that Emident Audio Visual Pvt Ltd will become the Louis Martin Audio Authorized Distributor for India Market, covering regions such as Nepal and Pakistan.",
  },
  {
    img: update1, // Replace with actual image path
    title: "Asia Sales President",
    date: "2023-05-24",
    description:
      "In order to develop its business in the Asian region, the company has specially appointed CUI as the Sales President of the Asian region. CUI has been engaged in the audio industry for 20 years and has a good understanding of the Asian market. We hope that under his leadership, we can better serve customers in the Asian market and achieve better sales results.",
  },
  {
    img: update2, // Replace with actual image path
    title: "GET SHOW 2023",
    date: "2023-05-08",
    description:
      "In order to expand into the Chinese and Asian markets, we participated in the GET SHOW. Our strong lineup and full range of products have won recognition from our customers.",
  },
  {
    img: update3, // Replace with actual image path
    title: "PROLight+ Sound Guangzhou 2017",
    date: "2017-05-30",
    description:
      "In order to expand into the Chinese and Asian markets, we participated in the 15th Guangzhou International Lighting and Sound Exhibition.",
  },
];

const CompanyNews = () => {
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>News - Louis Martin</title>
        <meta
          name="description"
          content="Discover the journey of Louis Martin — a passionate innovator, strategist, and creator. From pioneering digital solutions to driving impactful transformations, Louis blends creativity with technology to shape meaningful experiences."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      {/* Header Image */}
      <img src={News} alt="About Us" className="w-full h-[90px] sm:h-[250px]" />

      {/* News Section */}
      <div className="space-y-8 my-8 w-[90%] mx-auto">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-gray-100 rounded-lg p-6 shadow-lg min-h-[200px]">
            {/* Image */}
            <img
              src={news.img}
              alt={news.title}
              className="w-full md:w-80 h-48 object-cover rounded-md"
            />
            {/* Text Content */}
            <div className="md:ml-8 flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {news.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{news.date}</p>
              <p className="text-gray-700 mt-4">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CompanyNews;
