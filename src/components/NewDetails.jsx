import { useParams, useNavigate } from "react-router-dom";
import { newsData } from "../components/NewsData";
import Footer from "./Footer";
import { useEffect } from "react";

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("console Id:", id);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const news = newsData.find(
    (item) => String(item.id).trim() === String(id).trim(),
  );

  console.log(" match :", news);
  if (!news) return <div className="p-20">News not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className=" mx-auto p-6">
        <img
          src={news.img}
          alt={news.title}
          className="w-full h-[420px] object-contain bg-white rounded-xl"
        />
        <p className="mt-4 text-gray-700">{news.date}</p>
        <h1 className="text-3xl font-extrabold mt-6">{news.title}</h1>

        <p className="mt-4 text-gray-700">{news.description}</p>

        {news.highlights && (
          <ul className="list-disc list-inside mt-6 space-y-2">
            {news.highlights.map((h, i) => (
              <li key={i}>{h.text}</li>
            ))}
          </ul>
        )}
        {news.quote && (
          <blockquote className="mt-6  pl-4 italic text-gray-700">
            “{news.quote}”
          </blockquote>
        )}

        {news.conclusion && (
          <p className="mt-6 text-gray-700">{news.conclusion}</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetails;
