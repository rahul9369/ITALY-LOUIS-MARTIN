import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-5">
      <div className="w-[95%] mx-auto px-4 md:px-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 mb-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img src={Logo} className="w-24 h-24" alt="Logo" />
            </Link>
            <p className="mt-3 font-bold leading-relaxed text-center md:text-left">
              ITALY LOUIS MARTIN <br /> PROFESSIONAL AUDIO LIMITED
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 grid grid-cols-2 space-y-2 text-sm">
              {[
                { name: "Line Arrays", path: "/linearray" },
                { name: "Point Source", path: "/pointsource" },
                { name: "SubWoofer", path: "/subwoofer" },
                { name: "Column Speaker", path: "/columsound" },
                { name: "Commercial Speaker", path: "/stagemonitor" },
                { name: "Electronics", path: "/electronics" },
                { name: "Contact Us", path: "/contact" },
                { name: "About Us", path: "/about" },
                // { name: "Distributor", path: "/distributor" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="hover:text-green-500 transition-colors duration-200">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <p className="text-gray-400 flex justify-center sm:justify-normal items-center gap-1 text-sm">
              <MdOutlineMail style={20} />
              <span className="tetx-[15px]">: contact@louismartinaudio.it</span>
            </p>

            <p className="text-gray-400  flex justify-center sm:justify-normal items-center gap-1 text-sm">
              <FaPhoneVolume />
              <span>: +39 3242615626</span>
            </p>
            <div className="flex justify-center md:justify-start space-x-5 mt-3">
              {[
                {
                  href: "https://www.facebook.com/share/1EvAEusFN5/",
                  icon: "facebook",
                },
                { href: "https://instagram.com", icon: "instagram-new" },
                {
                  href: "https://linkedin.com/company/louismartinaudio/",
                  icon: "linkedin",
                },
              ].map(({ href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200">
                  <img
                    src={`https://img.icons8.com/ios-filled/50/ffffff/${icon}.png`}
                    alt={icon}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t w-full border-gray-700"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm mt-6 px-4">
          <p>
            © {new Date().getFullYear()} ITALY LOUIS MARTIN PROFESSIONAL AUDIO
            LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
