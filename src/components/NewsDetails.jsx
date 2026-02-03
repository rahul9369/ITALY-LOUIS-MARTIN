import { useParams } from "react-router-dom";
import Footer from "./Footer";
import cox15 from "../assets/news/cox15.jpg";
import gril from "../assets/news/gril.jpg";
import factory from "../assets/news/factory.jpg";
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
    img: gril,
    title: "Q Series Line Array Gets a Sleek New Grill Design",
    date: "Comming Soon",
    description:
      "Louis Martin Audio is excited to announce a grill upgrade for the acclaimed Q Series line array, combining refined visual appeal with improved mechanical integrity.",
    highlights: [
      {
        text: "Modernized Appearance: Precision-cut hexagonal pattern, matte black finish",
      },
      {
        text: "Improved Structural Support: Reinforced grill architecture for reliability",
      },
      {
        text: "Brand Signature: Displays Louis Martin emblem, symbolizing engineering and acoustic precision",
      },
    ],
    quote:
      "The Q Series is trusted by audio professionals worldwide for its clarity, coverage, and power.",
    conclusion:
      "The new grill design is now standard on all Q Series models and available soon from new production only.",
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

            <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full" />

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
              <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic text-gray-700">
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
