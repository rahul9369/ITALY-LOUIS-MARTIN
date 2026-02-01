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
    <section className="bg-white text-black py-14 sm:py-20 w-full">
      {/* Heading */}
      <div className="w-[92%] sm:w-[90%] lg:w-[85%] mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Company News
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl text-sm sm:text-base">
          Latest announcements, global presence & company milestones
        </p>
      </div>

      {/* Layout */}
      <div className="w-[92%] sm:w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Featured News */}
        <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden">
          <img
            src={featured.img}
            className="w-full h-[260px] sm:h-[360px] lg:h-[420px]
            object-cover transition-transform duration-700 group-hover:scale-105"
            alt="featured"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 p-5 sm:p-8">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
              Featured
            </span>

            <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold mt-2 sm:mt-3 text-white">
              {featured.title}
            </h3>

            <p className="text-gray-300 mt-3 sm:mt-4 max-w-xl leading-relaxed text-sm sm:text-base line-clamp-4">
              {featured.desc}
            </p>
          </div>
        </div>

        {/* Side News */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 items-start border-b border-gray-200 pb-5 last:border-none">
              <img
                src={item.img}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg
                transition-transform duration-300 group-hover:scale-105"
                alt="news"
              />

              <div>
                <h4 className="font-semibold text-base sm:text-lg leading-snug group-hover:text-blue-500 transition">
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
