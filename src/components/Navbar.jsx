import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const closeMobileMenu = () => {
    setTimeout(() => {
      setMobileMenu(false);
    }, 50);
  };

  let timeoutId = null;

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId);
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
  const toggleSubmenu = (name) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const menuItems = [
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      path: "#",
      submenu: [
        {
          links: [
            {
              name: "Line Arrays",
              path: "/linearray",
              sublinks: [
                { name: "Famous series", path: "/famousseries" },
                { name: "Q Series", path: "/qseries" },
                { name: "Cox series", path: "/coxseries" },
              ],
            },
            {
              name: "Point Source",
              path: "/pointsource",
              sublinks: [
                { name: "Red Series", path: "/redseries" },
                { name: "F series", path: "/fseries" },
              ],
            },
            {
              name: "Column Speaker",
              path: "/columsound",
              sublinks: [{ name: "K series", path: "/kseries" }],
            },
            {
              name: "Commercial Speaker",
              path: "/stagemonitor",
              sublinks: [{ name: "DS Series", path: "/dsseries" }],
            },
            {
              name: "Subwoofer",
              path: "/subwoofer",
              sublinks: [
                { name: "KS series", path: "/ksseries" },
                { name: "S Series", path: "/sseries" },
              ],
            },
            {
              name: "Electronics",
              path: "/electronics",
              sublinks: [
                { name: "D Series", path: "/dseries" },
                { name: "PL Series", path: "/plseries" },
                { name: "TIP Series", path: "/tipseries" },
                { name: "TTA Series", path: "/ttaseries" },
                { name: "DSP ", path: "/dspseries" },
              ],
            },
          ],
        },
      ],
    },
    { name: "News", path: "/news" },
    { name: "Case", path: "/case" },
    { name: "Download", path: "/download" },
    { name: "Distributor", path: "/distributor" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full shadow-md bg-black opacity-90 relative z-50">
      <div className="w-full flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-16 h-16" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path === "#" ? "/" : item.path}
                className="text-[18px] text-gray-300 hover:text-red-600"
              >
                {item.name}
              </NavLink>

              {/* ===== MEGA MENU ONLY FOR PRODUCTS ===== */}
              {item.submenu && dropdown === item.name && (
                <div className="absolute left-1/2 top-full w-screen w-[90%] max-w-[950px] mx-auto -translate-x-1/2 bg-white shadow-xl border-t z-50 animate-fadeDown">
                  <div className="max-w-6xl mx-auto px-12 py-10 grid grid-cols-6 gap-10">
                    {item.submenu[0].links.map((link, index) => (
                      <div key={index}>
                        <NavLink
                          to={link.path}
                          className="block font-bold text-gray-900 mb-3 hover:text-red-700"
                        >
                          {link.name}
                        </NavLink>

                        <ul className="space-y-2">
                          {link.sublinks.map((sublink, subIdx) => (
                            <li key={subIdx}>
                              <NavLink
                                to={sublink.path}
                                className=" font-semibold text-gray-800 text-sm hover:text-red-600"
                              >
                                {sublink.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
