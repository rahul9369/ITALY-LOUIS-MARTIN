import Eavpl from "../assets/eavPl.png";
import update1 from "../assets/news/update.jpg";
import update2 from "../assets/news/update1.jpg";

const CompanyNews = () => {
  const featured = {
    img: Eavpl,
    title: "Louis Martin Audio Appoints Eminent AV as India Distributor",
    desc: "After extensive testing and long-term evaluation, Eminent Audio Visual Pvt Ltd has been officially appointed as the authorized distributor for India, Nepal, and Pakistan.",
  };

  const news = [
    {
      img: update1,
      title: "Asia Sales President Appointed",
      desc: "CUI brings 20+ years of audio industry experience to expand Asian markets.",
    },
    {
      img: update2,
      title: "GET SHOW 2023",
      desc: "Live demos, professional networking, and next-gen audio technology.",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-4">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Company News
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl">
          Latest announcements, global presence & company milestones
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Featured News */}
        <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden">
          <img
            src={featured.img}
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 p-8">
            <span className="text-sm uppercase tracking-widest text-gray-300">
              Featured
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-3">
              {featured.title}
            </h3>
            <p className="text-gray-300 mt-4 max-w-xl leading-relaxed">
              {featured.desc}
            </p>
          </div>
        </div>

        {/* Side News */}
        <div className="flex flex-col gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 items-start border-b border-white/10 pb-6">
              <img
                src={item.img}
                className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition"
                alt=""
              />

              <div>
                <h4 className="font-semibold text-lg leading-snug group-hover:text-blue-400 transition">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyNews;
