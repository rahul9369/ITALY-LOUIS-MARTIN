import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa"; // Import icons
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({}); // Track expanded submenus in mobile view

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
      [name]: !prev[name], // Toggle the submenu open/close state
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
            { name: "Line Arrays", path: "/linearray", sublinks: ["Q Series"] },
            {
              name: "Point Source",
              path: "/pointsource",
              sublinks: ["Red Series"],
            },
            { name: "Sub Woofer", path: "/subwoofer", sublinks: ["F Series"] },
            {
              name: "Commercial Speaker",
              path: "/columsound",
              sublinks: ["Plastic Speaker"],
            },
            {
              name: "Electronics",
              path: "/electronics",
              sublinks: ["TTA Series"],
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
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </Link>
          <span className="md:text-xl text-sm text-white">
            ITALY LOUIS MARTIN AUDIO
          </span>
        </div>

        {/* Desktop Navigation (Restored Hover Dropdown) */}
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
                      <ul>
                        {sub.links.map((link, index) => (
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
                                    to={link.path} // Redirects to main category path
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    {sublink}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}>
          {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Kept the Expandable + Icon) */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-2">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className="flex flex-col">
                <div className="flex justify-between items-center">
                  <NavLink
                    to={item.path}
                    className="text-gray-700 hover:text-green-500"
                    onClick={() => setMobileMenu(false)}>
                    {item.name}
                  </NavLink>

                  {/* Toggle button for expandable menus */}
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="text-gray-700">
                      {expandedMenus[item.name] ? <FaMinus /> : <FaPlus />}
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.submenu && expandedMenus[item.name] && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <ul className="space-y-1">
                          {sub.links.map((link, index) => (
                            <li key={index}>
                              <div className="flex justify-between items-center">
                                <NavLink
                                  to={link.path}
                                  className="text-gray-600 hover:text-green-500"
                                  onClick={() => setMobileMenu(false)}>
                                  {link.name}
                                </NavLink>

                                {link.sublinks && (
                                  <button
                                    onClick={() => toggleSubmenu(link.name)}
                                    className="text-gray-700 ">
                                    {expandedMenus[link.name] ? (
                                      <FaMinus className="text-sm" />
                                    ) : (
                                      <FaPlus className="text-sm" />
                                    )}
                                  </button>
                                )}
                              </div>

                              {link.sublinks && expandedMenus[link.name] && (
                                <ul className="pl-4 mt-1 space-y-1">
                                  {link.sublinks.map((sublink, subIdx) => (
                                    <li key={subIdx}>
                                      <NavLink
                                        to={link.path} // Redirects to main category path
                                        className="text-gray-500 hover:text-green-500">
                                        {sublink}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
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
