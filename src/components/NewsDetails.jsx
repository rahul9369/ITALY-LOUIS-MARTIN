import { useParams, Link } from "react-router-dom";
import Eavpl from "../assets/eavPl.png";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";
import Navbar from "./Navbar";
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

  if (!news)
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-gray-500 text-lg">
        News not found
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}

      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full">
        <img
          src={news.img}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="absolute bottom-8 w-full">
          <div className="max-w-4xl mx-auto px-6 text-white">
            <Link
              to="/"
              className="inline-block text-sm text-gray-300 hover:text-white mb-2">
              ← Back to News
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mt-2">
              {news.title}
            </h1>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              {news.date}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {news.content}
            </p>
          </div>

          {/* RELATED NEWS / CTA (optional) */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Other News
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData
                .filter((item) => item.id !== news.id)
                .map((item) => (
                  <Link
                    to={`/news/${item.id}`}
                    key={item.id}
                    className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">{item.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetails;
