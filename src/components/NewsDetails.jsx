import { useParams } from "react-router-dom";
import Footer from "./Footer";
import cox15 from "../assets/news/cox15.jpg";
import gril from "../assets/news/gril.jpg";
import factory from "../assets/news/factory.jpg";
import raipur from "../assets/news/raipur.jpg";
import { useEffect } from "react";

const newsData = [
  {
    id: 1,
    img: cox15,
    title: "Product Launch: Introducing the COX15 Coaxial Line Array System",
    date: "Comming Soon",
    description:
      "The COX15 delivers exceptional clarity and dynamic range with a passive MF/HF configuration, combining advanced driver technology and optimized acoustic architecture.",
    highlights: [
      { text: "Frequency Response: 54Hz–18kHz ±3dB (preset), -10dB @43Hz" },
      {
        text: "Drivers: LF: 15 (380mm) with 4 (100mm) coil neodymium driver MF: 1.4 exit / 4 coaxial HT polymer ring radiator HF: 1.4 coaxial HT polymer ring radiator",
      },
      {
        text: "Rated Power: LF: 800W AES / 3200W Peak MF/HF: 110W AES / 440W Peak",
      },
      { text: "Maximum SPL: 129dB continuous / 135dB peak" },
      { text: "Impedance: 8 Ohms (LF and MF/HF)" },
      { text: "Dispersion: 100° horizontal / 10° vertical" },
      { text: "Crossover Points: 650Hz / 4.8kHz" },
    ],
    quote:
      "Whether deployed in Mid-scale venues or precision-focused installations, the COX15 offers wide horizontal coverage, tight vertical control, and high SPL output—making it ideal for mid format concerts, auditoriums, and high-performance AV environments.",
    conclusion:
      "The COX15 will be available through authorized Louis Martin Audio distributors worldwide. For technical documentation, demo scheduling, or dealer inquiries, please contact our sales team.",
  },
  {
      id: 2,
      img: raipur,
      title: " Red Series Installed at Romeo Lane, Raipur, India.",
      date: "December 2025",
      description:
        "The project was successfully implemented by Eminent Audio Visual, Louis Martin’s trusted distributor in India. Their expertise ensured seamless integration of the Red Series into Romeo Lane’s outdoor terrace, aligning perfectly with the venue’s upscale ambiance and commitment to world-class sound.",
      highlights: [
        {
          text: "Guests have already praised the immersive audio environment, noting how the Red Series enhances the atmosphere and makes Romeo Lane stand out as a premier destination in Raipur. The Red 12 provides commanding power and wide dispersion, while the Red 5 adds precision and balance, together creating a seamless sonic experience across the terrace.",
        },
        {
          text: "The Red Series brings unmatched energy and precision to Romeo Lane’s outdoor terrace, ensuring every event resonates with impact and style, said a representative from Eminent Audio Visual.",
        },
      ],
      quote:
        "With the Red Series now installed by Eminent Audio Visual, Romeo Lane Raipur sets a new benchmark for premium venue sound, combining cutting-edge audio technology with an unforgettable lifestyle experience.",
      conclusion:
        "Eminent Audio Visual is a leading distributor of professional audio solutions in India, specializing in delivering world-class sound systems and installations. Their expertise and commitment to excellence make them a trusted partner for venues seeking premium audio experiences.",
    },
  {
    id: 3,
    img: factory,
    title: "Louis Martin Audio Opens New Factory Facility",
    date: "26 November 2025",
    description:
      "Louis Martin Audio is proud to announce the opening of our new factory facility, effective November 26, 2025.",
    highlights: [
      { text: "Expanded Production Capacity: Supports growing global demand" },
      {
        text: "Advanced Manufacturing: Precision tools and streamlined workflows",
      },
      { text: "Sustainable Operations: Energy-efficient infrastructure" },
      {
        text: "Enhanced Logistics: Improved access for international shipping",
      },
    ],
    quote:
      "This new facility strengthens our ability to deliver premium audio solutions with greater speed, consistency, and customization.",
    conclusion:
      "We welcome partners, clients, and collaborators to visit and experience the future of sound manufacturing at Louis Martin.",
  },
];

const NewsDetails = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === Number(id));
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        News not found
      </div>
    );
  }

  return (
    <div className=" min-h-screen flex flex-col">
      {/* Back Button */}
      <div className=" mx-auto ">
        <article className="bg-white  overflow-hidden">
          <img
            src={news.img}
            alt={news.title}
            className="w-full h-[320px] py-2 sm:h-[420px] object-contain"
          />

          <div className="w-full p-6 sm:p-10">
            {news.date && (
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Company Update • {news.date}
              </p>
            )}

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              {news.title}
            </h1>

            {/* <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full" /> */}

            <p className="mt-6 text-gray-700 text-base sm:text-lg">
              {news.description}
            </p>

            {news.highlights && (
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">Highlights</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {news.highlights.map((hl, idx) => (
                    <li key={idx}>{hl.text}</li>
                  ))}
                </ul>
              </div>
            )}

            {news.quote && (
              <blockquote className="mt-6  border-blue-600 pl-4 italic text-gray-700">
                “{news.quote}”
              </blockquote>
            )}

            {news.conclusion && (
              <p className="mt-6 text-gray-700">{news.conclusion}</p>
            )}
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetails;
