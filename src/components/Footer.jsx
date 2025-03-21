import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5">
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
            <ul className="mt-3 space-y-2 text-sm">
              {["Products", "Contact Us", "About Us", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-green-500 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <p className="text-gray-400 text-sm">Email: eminent@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone: +32 - 486586008</p>
            <div className="flex justify-center md:justify-start space-x-5 mt-3">
              {[
                { href: "https://facebook.com", icon: "facebook" },
                { href: "https://twitter.com", icon: "twitter" },
                { href: "https://instagram.com", icon: "instagram-new" },
                { href: "https://linkedin.com", icon: "linkedin" },
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
        <div className="border-t w-full border-gray-700  "></div>

        {/* Copyright Section */}
        <div className="text-center text-sm mt-6 px-4">
          <p>
            © {new Date().getFullYear()} ITALY LOUIS MARTIN AUDIO. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
