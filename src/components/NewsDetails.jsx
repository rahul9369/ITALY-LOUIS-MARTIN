import { useParams } from "react-router-dom";
import Eavpl from "../assets/eavPl.png";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";
import Footer from "./Footer";

const newsData = [
  {
    id: "eminent-av",
    img: Eavpl,
    title: "Louis Martin Audio Appoints Eminent AV as India Distributor",
    date: "Jan 20, 2026",
    content: `
Louis Martin Audio has officially appointed Eminent Audio Visual Pvt Ltd
as its authorized distributor for India, Nepal, and Pakistan.

After extensive testing and evaluation, Eminent AV demonstrated strong
expertise in professional audio solutions.

This partnership marks a significant milestone in South Asia.
`,
  },
  {
    id: "asia-sales-president",
    img: update1,
    title: "Asia Sales President Appointed",
    date: "Feb 02, 2026",
    content: `
CUI brings over 20 years of experience in the professional audio industry.

This appointment strengthens Asian partnerships and accelerates growth.
`,
  },
  {
    id: "get-show-2023",
    img: update2,
    title: "GET SHOW 2023",
    date: "Mar 12, 2026",
    content: `
GET SHOW 2023 showcased next-generation professional audio technology.

The event featured live demos, innovation, and global networking.
`,
  },
];

const NewsDetails = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        News not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* CONTENT ONLY */}
      <main className="flex-1">
        <div className="w-full mx-auto ">
          <div className="bg-white  overflow-hidden">
            {/* Image */}
            <img
              src={news.img}
              alt={news.title}
              className="w-full h-[220px] sm:h-[320px] object-cover"
            />

            {/* Text Content */}
            <div className="p-6 sm:p-10">
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                {news.date}
              </p>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3">
                {news.title}
              </h1>

              <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full" />

              <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {news.content}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetails;
