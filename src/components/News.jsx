import React, { useState, useEffect } from "react";
import News from "../assets/News&update.png";
import update1 from "../assets/news/upadts4.jpg";
import update2 from "../assets/news/update.jpg";
import update3 from "../assets/news/update1.jpg";
import update4 from "../assets/news/upadate3.jpg";
import cox15 from "../assets/news/cox15.jpg";
import factory from "../assets/news/factory.jpg";
import gril from "../assets/news/gril.jpg";
import plam from "../assets/news/plam.jpg";
import prolight from "../assets/news/prolight.jpg";
import asian from "../assets/news/asian.png";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const newsData = [
  {
    id: 1,
    img: update1,
    title: "Louis Martin Appoints Eminent Audio Visual as India Distributor",
    date: "December 25, 2024",
    description:
      "Louis Martin Audio is proud to announce the appointment of Eminent Audio Visual as our exclusive distributor in India, effective December 25, 2024. This strategic partnership marks a significant milestone in our global expansion, reinforcing our commitment to delivering world-class professional audio solutions to one of the fastest-growing markets in South Asia.",
    highlights: [
      {
        // heading: "Enhanced Reach",
        text: "With Eminent Audio Visual’s strong distribution network and industry expertise, Louis Martin products will now be more accessible to integrators, rental companies, and end-users across India.",
      },
      {
        // heading: "Local Expertise",
        text: "Eminent Audio Visual brings deep knowledge of the Indian AV landscape, ensuring tailored solutions and responsive customer support.",
      },
      {
        // heading: "Growth Strategy",
        text: " This collaboration strengthens our brand presence in India, aligning with our vision to expand across Asia with trusted partners.",
      },
    ],
    quote:
      "India is a dynamic and rapidly evolving market for professional audio. Partnering with Eminent Audio Visual allows us to deliver our premium solutions with the local expertise and support that customers deserve, said Mr. Cui, Sales President” of Louis Martin.",

    conclusion:
      "Together with Eminent Audio Visual, we aim to set new benchmarks in sound reinforcement and audio innovation across India. This partnership reflects our dedication to excellence, reliability, and customer satisfaction worldwide.",
  },
  {
    id: 2,
    img: asian,
    title: "Leadership Announcement: Asia Sales President Appointed",
    date: "24 May 2023",
    description:
      "With over 20+ years of experience in professional audio sales and strategic market development, Mr. Cui brings deep industry insight and a proven track record of driving growth across diverse Asian markets. His leadership will play a pivotal role in expanding Louis Martin’s presence throughout the region, enhancing distributor relationships, and delivering premium audio solutions to new and existing clients.",
    highlights: [
      {
        // heading: "Leadership",
        text: "Regional Expansion: Strengthening our footprint in key markets including China, India, Southeast Asia, and the Middle East",
      },
      {
        // heading: "Market Strategy",
        text: "Client Engagement: Elevating service standards and responsiveness across all sales channels",
      },
      {
        text: "Brand Positioning: Reinforcing Louis Martin’s reputation for innovation, quality, and performance in professional audio",
      },
    ],
    quote:
      "This appointment marks a significant milestone in our global growth strategy. We are confident that Mr. Cui’s vision and expertise will accelerate our momentum and deepen our commitment to excellence in the Asian market.",
    // author: "Louis Martin Executive Team",
    conclusion:
      "Please join us in welcoming Mr. Cui to the Louis Martin leadership team.",
  },
  {
    id: 3,
    img: update3,
    title: "ITALY LOUIS MARTIN AUDIO AT GETSHOW 2023",
    date: "08 May 2023",
    description:
      "At Booth 4.2C67, we unveiled our latest innovations in high-performance audio systems, drawing attention from global distributors, sound engineers, and industry professionals. Our sleek, modern booth featured live demonstrations of our newest speaker designs and professional audio technology, emphasizing clarity, power, and precision.",
    highlights: [
      {
        // heading: "Exhibition Presence",
        text: "Live Product Demos: Visitors experienced the sonic excellence of our latest speaker systems in real-time.",
      },
      {
        // heading: "Networking",
        text: "Global Networking: We connected with partners and clients from across Asia, Europe, and the Americas.",
      },
      {
        text: "Brand Visibility: Our bold booth design and product showcases reinforced our commitment to premium audio engineering.",
      },
    ],
    quote:
      "GETshow 2023 was a powerful platform to share our vision for next-generation sound reinforcement and to explore new opportunities in the global market. We thank all attendees, partners, and organizers for making this event a resounding success.",
    // author: "Marketing Team, Louis Martin",
    conclusion:
      "Stay tuned for more updates as we continue to push the boundaries of professional audio.",
  },
  {
    id: 4,
    img: update4,
    title: "Louis Martin Audio at Prolight + Sound China 2017",
    date: "08 May 2023",
    description:
      "As one of Asia’s leading exhibitions for professional audio, lighting, and entertainment technology, the event provided a dynamic platform to present our latest innovations to a global audience.",
    highlights: [
      {
        // heading: "Exhibition Presence",
        text: "Product Showcase: Visitors experienced our signature Italian-engineered speaker systems, including high-performance line arrays and coaxial designs tailored for touring and installation.",
      },
      {
        // heading: "Networking",
        text: "Technical Engagement: Our team conducted live demonstrations and technical briefings, drawing interest from sound engineers, integrators, and distributors across Asia.",
      },
      {
        text: "Brand Visibility: The Louis Martin booth stood out for its sleek design and immersive audio experience, reinforcing our commitment to quality, precision, and aesthetic excellence.",
      },
      {
        text: "Global Networking: The show facilitated valuable connections with partners and clients from China, Southeast Asia, and beyond.",
      },
    ],
    quote:
      "Participation in Prolight + Sound China 2017 marked a key milestone in Louis Martin Audio’s expansion into the Asian market. The event underscored our dedication to delivering premium sound solutions backed by innovation, craftsmanship, and responsive support.",
    // author: "Marketing Team, Louis Martin",
    conclusion:
      "We thank all attendees and partners for their enthusiasm and look forward to building on this momentum in future exhibitions.",
  },
  {
    id: 5,
    img: gril,
    title: "Q Series Line Array Gets a Sleek New Grill Design",
    // date: "08 May 2023",
    description:
      "Louis Martin Audio is excited to announce a grill upgrade for the acclaimed Q Series line array, combining refined visual appeal with improved mechanical integrity. This update reflects our ongoing commitment to innovation, durability, and design excellence in professional sound reinforcement.",
    highlights: [
      {
        // heading: "Exhibition Presence",
        text: "Modernized Appearance: The new grill features a precision-cut hexagonal pattern with a matte black finish, delivering a sleek, contemporary look that complements any stage or venue.",
      },
      {
        // heading: "Networking",
        text: "Improved Structural Support: Reinforced grill architecture enhances rigidity and protection, ensuring long-term reliability in demanding touring and installation environments.",
      },
      {
        text: "Brand Signature: The grill proudly displays the Louis Martin emblem, symbolizing Italian engineering and acoustic precision.",
      },
    ],
    quote:
      "The Q Series is trusted by audio professionals worldwide for its clarity, coverage, and power. This grill update elevates the system’s visual identity while reinforcing its rugged performance standards—ideal for concerts, auditoriums, houses of worship, and outdoor events.",
    // author: "Marketing Team, Louis Martin",
    conclusion:
      "The new grill design is now standard on all Q Series models and available soon from new production only. ",
  },
  {
    id: 6,
    img: factory,
    title: "Louis Martin Audio Opens New Factory Facility",
    date: "26 November 2025",
    description:
      "Louis Martin Audio is proud to announce the opening of our new factory facility, effective November 26, 2025. Located in a modern industrial zone, the new site marks a significant step forward in our commitment to innovation, quality, and global scalability.",
    highlights: [
      {
        text: "Expanded Production Capacity: Designed to support growing global demand for our professional audio systems.",
      },
      {
        text: "Advanced Manufacturing: Equipped with precision tools and streamlined workflows for high-performance speaker systems.",
      },
      {
        text: "Sustainable Operations: Built with energy-efficient infrastructure and environmentally conscious practices.",
      },
      {
        text: "Enhanced Logistics: Improved access for international shipping and distributor coordination.",
      },
    ],
    quote:
      "This new facility strengthens our ability to deliver premium audio solutions with greater speed, consistency, and customization. It also reflects our long-term investment in engineering excellence and customer satisfaction.",
    conclusion:
      "We welcome partners, clients, and collaborators to visit and experience the future of sound manufacturing at Louis Martin.",
  },
  {
    id: 7,
    img: plam,
    title: "Louis Martin Showcases Innovation at PALM Expo 2025",
    date: "26 November 2025",
    description:
      "Presented by Eminent Audio Visual, our booth featured a dynamic showcase of high-performance speaker systems, customizable audio solutions, and next-generation sound reinforcement tools. Visitors experienced firsthand the clarity, depth, and precision that define the Louis Martin brand.",
    highlights: [
      {
        text: "Live Demonstrations: Real-time audio performance of our flagship systems drew strong interest from integrators, rental companies, and sound engineers.",
      },
      {
        text: "Multi-Color Customization: Our new design options offered aesthetic flexibility without compromising acoustic integrity.",
      },
      {
        text: "Industry Engagement: The booth became a hub for technical discussions, product evaluations, and strategic networking.",
      },
      {
        text: "Brand Synergy: The collaboration with Eminent Audio Visual reinforced our commitment to delivering premium audio solutions with local expertise and support.",
      },
    ],
    quote:
      "PALM Expo 2025 marked a significant step in Louis Martin’s expansion across South Asia. We thank all attendees, partners, and organizers for their enthusiasm and engagement. With Eminent Audio Visual as our trusted distributor, we look forward to deeper market penetration and continued innovation in the Indian professional audio landscape.",
  },
  {
    id: 8,
    img: prolight,
    title: "Louis Martin Audio to Exhibit at Prolight + Sound China 2025",
    // date: "Louis Martin Audio is proud to announce its participation in Prolight + Sound China 2025, taking place at the China Import and Export Fair Complex, Guangzhou, from May 23–26, 2025. ",
    description:
      "As one of Asia’s leading exhibitions for professional audio, lighting, and entertainment technology, the event offers a dynamic platform to showcase our latest innovations and connect with industry leaders from around the world.",
    highlights: [
      {
        text: "Live Demonstrations: Experience the clarity, power, and precision of our newest speaker systems and audio solutions.",
      },
      {
        text: "Product Launches: Be among the first to witness our next-generation sound reinforcement technologies.",
      },
      {
        text: "Expert Interaction: Meet our technical team and sales leadership to explore tailored solutions for your projects.",
      },
      {
        text: "Networking Opportunities: Engage with global distributors, integrators, and audio professionals in a collaborative setting.",
      },
    ],
    quote:
      "Prolight + Sound China is a key event in our global calendar, aligning with our mission to deliver premium audio performance and design excellence. Our presence at the show underscores our commitment to innovation, reliability, and customer-focused engineering.",
    conclusion:
      "We invite all attendees to visit the Louis Martin Audio booth and discover how we’re redefining the future of professional sound.",
  },
  {
    id: 9,
    img: cox15,
    title: "Product Launch: Introducing the COX15 Coaxial Line Array System",
    // date: "Louis Martin Audio proudly unveils the COX15, a next-generation bi-amped 3-way Coaxial line array system engineered for uncompromising sound reinforcement in touring, rental, and fixed installation environments in small box design.",
    description:
      "The COX15 delivers exceptional clarity and dynamic range with a passive MF/HF configuration, combining advanced driver technology and optimized acoustic architecture.",
    highlights: [
      {
        text: "Frequency Response: 54Hz–18kHz ±3dB (preset), -10dB @43Hz",
      },
      {
        text: "Drivers: LF: 15 (380mm) with 4 (100mm) coil neodymium driver MF: 1.4 exit / 4 coaxial HT polymer ring radiator HF: 1.4 coaxial HT polymer ring radiator",
      },
      {
        text: "Rated Power: LF: 800W AES / 3200W Peak	MF/HF: 110W AES / 440W Peak",
      },
      {
        text: "Maximum SPL: 129dB continuous / 135dB peak",
      },
      {
        text: "Impedance: 8 Ohms (LF and MF/HF)",
      },
      {
        text: "Dispersion: 100° horizontal / 10° vertical",
      },
      {
        text: "Crossover Points: 650Hz / 4.8kHz",
      },
    ],
    quote:
      "Whether deployed in Mid-scale venues or precision-focused installations, the COX15 offers wide horizontal coverage, tight vertical control, and high SPL output—making it ideal for mid format concerts, auditoriums, and high-performance AV environments.",
    conclusion:
      "The COX15 will be available through authorized Louis Martin Audio distributors worldwide. For technical documentation, demo scheduling, or dealer inquiries, please contact our sales team.",
  },
];

const CompanyNews = () => {
  const [activeNews, setActiveNews] = useState(null);

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

      {!activeNews && (
        <img
          src={News}
          alt="News"
          className="w-full h-[120px] sm:h-[260px] object-cover"
        />
      )}

      {/* ================= DETAIL VIEW ================= */}
      {activeNews ? (
        <div className=" mx-auto my-2 ">
          <article className="bg-white overflow-hidden ">
            <img
              src={activeNews.img}
              alt={activeNews.title}
              className="w-full h-[320px] sm:h-[420px] object-contain"
            />

            <div className="p-6 sm:p-10">
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

              {activeNews.highlights && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Highlights</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {activeNews.highlights.map((hl, idx) => (
                      <li key={idx}>
                        {/* <span className="font-semibold"></span>{" "} */}
                        {hl.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeNews.quote && (
                <blockquote className="mt-8  pl-4 italic text-gray-700">
                  “{activeNews.quote}”
                </blockquote>
              )}

              {activeNews.conclusion && (
                <p className="mt-8 text-gray-700">{activeNews.conclusion}</p>
              )}
            </div>
          </article>
        </div>
      ) : (
        /* ================= GRID LIST VIEW ================= */
        <div className=" mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div
                key={news.id}
                onClick={() => setActiveNews(news)}
                className="group cursor-pointer bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full p-2 object-contain group-hover:scale-105 transition duration-700"
                  />
                </div>

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
