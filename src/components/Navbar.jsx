import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null); // State for "Line Arrays" submenu
  const [mobileMenu, setMobileMenu] = useState(false);

  let timeoutId = null;

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId);
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(null);
      setSubDropdown(null);
    }, 300);
  };

  const handleSubMenuEnter = (submenu) => setSubDropdown(submenu);
  const handleSubMenuLeave = () => setSubDropdown(null);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
  const closeDropdown = () => setDropdown(null);

  const menuItems = [
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      path: "#",
      submenu: [
        {
          // title: "Product Types",
          links: [
            {
              name: "Line Arrays",
              path: "/line-arrays",
              sublinks: ["Q Series", "Famous", "Cox Series"], // Submenu for "Line Arrays"
            },
            {
              name: "Point source ",
              path: "/point-source",
              sublinks: ["Red series", "F series"], // Submenu for "Line Arrays"
            },
            {
              name: "Sub Woofer ",
              path: "/Sub-woofer",
              sublinks: ["F series", "KS series"], // Submenu for "Line Arrays"
            },
            {
              name: "Commercial Speaker ",
              path: "/commercial-speaker",
              sublinks: ["Plastic speaker", "celling Speaker"], // Submenu for "Line Arrays"
            },
            {
              name: "Electronics ",
              path: "/eletronics",
              sublinks: ["TTA series", "TFP series", "D series", "PL series"], // Submenu for "Line Arrays"
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
    <nav className="shadow-md bg-gray-500 opacity-95 relative z-50">
      <div className="w-full flex justify-between items-center py-4 px-10">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </Link>
          <span className="md:text-xl text-sm text-white">
            ITALY LOUIS MARTIN AUDIO
          </span>
        </div>

        {/* Desktop Navigation (Right Side) */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}>
              <NavLink
                to={item.path === "#" ? "/" : item.path}
                className="text-white text-[16px] hover:text-yellow-400">
                {item.name}
              </NavLink>

              {/* Main Dropdown Menu */}
              {item.submenu && dropdown === item.name && (
                <div className="absolute left-0 mt-2 bg-white z-20 shadow-md w-60 text-left py-2 border rounded-lg">
                  {item.submenu.map((sub, subIndex) => (
                    <div key={subIndex} className="px-4 py-2 relative">
                      <h3 className="text-lg font-semibold mb-1">
                        {sub.title}
                      </h3>
                      <ul>
                        {sub.links.map((link, index) =>
                          typeof link === "string" ? (
                            <li
                              key={index}
                              className="py-1 hover:bg-gray-100 px-2">
                              <NavLink
                                to={`/${link
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block text-gray-700">
                                {link}
                              </NavLink>
                            </li>
                          ) : (
                            // If the link has sublinks (Like Line Arrays)
                            <li
                              key={index}
                              className="relative py-1 px-2 hover:bg-gray-100"
                              onMouseEnter={() => handleSubMenuEnter(link.name)}
                              onMouseLeave={handleSubMenuLeave}>
                              <span className="block text-gray-700 cursor-pointer">
                                {link.name}
                              </span>

                              {/* Submenu for Line Arrays */}
                              {subDropdown === link.name && (
                                <div className="absolute left-full top-0 mt-[-5px] bg-white shadow-md w-48 text-left py-2 border rounded-lg">
                                  {link.sublinks.map((sublink, subIdx) => (
                                    <NavLink
                                      key={subIdx}
                                      to={`/${sublink
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                      {sublink}
                                    </NavLink>
                                  ))}
                                </div>
                              )}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Right Side) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}>
          {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-2">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className="text-gray-700 hover:text-green-500"
                  onClick={() => setMobileMenu(false)}>
                  {item.name}
                </NavLink>

                {/* Mobile Dropdown */}
                {item.submenu && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <h3 className="text-md font-semibold">{sub.title}</h3>
                        <ul className="space-y-1">
                          {sub.links.map((link, index) =>
                            typeof link === "string" ? (
                              <li key={index}>
                                <NavLink
                                  to={`/${link
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="text-gray-600 hover:text-green-500"
                                  onClick={() => setMobileMenu(false)}>
                                  {link}
                                </NavLink>
                              </li>
                            ) : (
                              <li key={index}>
                                <span className="block text-gray-600 font-semibold">
                                  {link.name}
                                </span>
                                <ul className="pl-4">
                                  {link.sublinks.map((sublink, subIdx) => (
                                    <li key={subIdx}>
                                      <NavLink
                                        to={`/${sublink
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                        className="text-gray-600 hover:text-green-500">
                                        {sublink}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
