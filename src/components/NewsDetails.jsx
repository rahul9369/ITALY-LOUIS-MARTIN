import { useParams, Link } from "react-router-dom";
import Eavpl from "../assets/eavPl.png";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";

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

  if (!news) return <div className="p-20">News not found</div>;

  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="relative h-[55vh] w-full">
        <img
          src={news.img}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 w-full">
          <div className="w-[92%] lg:w-[70%] mx-auto text-white">
            <Link to="/" className="text-sm text-gray-300 hover:text-white">
              ← Back to News
            </Link>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-4">
              {news.title}
            </h1>

            <p className="mt-3 text-gray-300 text-sm">{news.date}</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-[92%] lg:w-[70%] mx-auto py-16">
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
          {news.content}
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
