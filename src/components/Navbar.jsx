import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

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
                { name: "DSP Series", path: "/dspseries" },
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
    <nav className="w-full shadow-md bg-gray-500 opacity-95 relative  z-50">
      <div className="w-full flex justify-between items-center py-2 px-6 md:px-10">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-16 h-16" />
          </Link>
          <span className="md:text-xl text-[12px] text-white">
            ITALY LOUIS MARTIN AUDIO
          </span>
        </div>

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}>
              <NavLink
                to={item.path === "#" ? "/" : item.path}
                className={({ isActive }) =>
                  `text-[16px] hover:text-yellow-400 ${
                    isActive ? "text-yellow-400 font-semibold" : "text-white"
                  }`
                }>
                {item.name}
              </NavLink>

              {item.submenu && dropdown === item.name && (
                <div className="absolute left-0 mt-2 bg-white z-20 shadow-md w-60 text-left py-2 border rounded-lg">
                  {item.submenu.map((sub, subIndex) => (
                    <div key={subIndex} className="px-4 py-2 relative">
                      <ul>
                        {sub.links.map((link, index) => (
                          <li
                            key={index}
                            className="relative py-1 px-2 hover:bg-gray-100"
                            onMouseEnter={() => handleSubMenuEnter(link.name)}
                            onMouseLeave={handleSubMenuLeave}>
                            <NavLink
                              to={link.path}
                              className={({ isActive }) =>
                                `block cursor-pointer ${
                                  isActive
                                    ? "text-yellow-400 font-medium"
                                    : "text-gray-700"
                                }`
                              }>
                              {link.name}
                            </NavLink>

                            {subDropdown === link.name && (
                              <div className="absolute left-full top-0 mt-[-5px] bg-white shadow-md w-48 text-left py-2 border rounded-lg">
                                {link.sublinks.map((sublink, subIdx) => (
                                  <NavLink
                                    key={subIdx}
                                    to={sublink.path}
                                    className={({ isActive }) =>
                                      `block px-4 py-2 hover:bg-gray-100 ${
                                        isActive
                                          ? "text-yellow-400 font-medium"
                                          : "text-gray-700"
                                      }`
                                    }>
                                    {sublink.name}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-gray-600 py-4 px-6 w-full">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <div className="flex justify-between items-center">
                  <NavLink
                    to={item.path === "#" ? "/" : item.path}
                    className={({ isActive }) =>
                      `text-[16px] hover:text-yellow-400 ${
                        isActive
                          ? "text-yellow-400 font-semibold"
                          : "text-white"
                      }`
                    }>
                    {item.name}
                  </NavLink>

                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="text-white">
                      {expandedMenus[item.name] ? <FaMinus /> : <FaPlus />}
                    </button>
                  )}
                </div>
                {item.submenu && expandedMenus[item.name] && (
                  <div className="ml-4 mt-2  p-2 rounded">
                    {item.submenu.map((sub, subIndex) => (
                      <ul key={subIndex}>
                        {sub.links.map((link, index) => (
                          <li key={index} className="py-1">
                            <div className="flex justify-between items-center">
                              <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                  `block cursor-pointer ${
                                    isActive
                                      ? "text-yellow-500 font-medium"
                                      : "text-gray-100"
                                  }`
                                }>
                                {link.name}
                              </NavLink>
                              {link.sublinks && (
                                <button
                                  onClick={() => toggleSubmenu(link.name)}
                                  className="text-white">
                                  {expandedMenus[link.name] ? (
                                    <FaMinus />
                                  ) : (
                                    <FaPlus />
                                  )}
                                </button>
                              )}
                            </div>
                            {expandedMenus[link.name] && (
                              <ul className="ml-4 mt-2   rounded">
                                {link.sublinks.map((sublink, subIdx) => (
                                  <li key={subIdx} className="py-1">
                                    <NavLink
                                      key={subIdx}
                                      to={sublink.path}
                                      className={({ isActive }) =>
                                        `block  hover:bg-gray-100 ${
                                          isActive
                                            ? "text-yellow-400 font-medium"
                                            : "text-gray-100"
                                        }`
                                      }>
                                      {sublink.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
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
