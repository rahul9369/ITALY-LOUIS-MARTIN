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
    { name: "News & Updates", path: "/news" },
    // { name: "Case", path: "/case" },
    { name: "Download", path: "/download" },
    { name: "Distributor", path: "/distributor" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-black/90 backdrop-blur shadow-md sm:fixed relative z-50">
      <div className="w-full flex justify-between items-center px-6 md:px-20 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="w-14 h-14 object-contain" />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => setDropdown(item.name)}>
              <NavLink
                to={item.path === "#" ? "/" : item.path}
                className="text-gray-300 text-[16px] font-medium hover:text-red-500 transition">
                {item.name}
              </NavLink>

              {/* ===== DESKTOP MEGA MENU ===== */}
              {item.submenu && dropdown === item.name && (
                <div
                  onMouseEnter={() => setDropdown(item.name)}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[900px] bg-white shadow-xl rounded-lg border z-50">
                  <div className="grid grid-cols-6 gap-8 px-10 py-8">
                    {item.submenu[0].links.map((link, i) => (
                      <div key={i}>
                        <NavLink
                          to={link.path}
                          onClick={() => setDropdown(null)}
                          className="block font-semibold text-gray-900 mb-3 hover:text-red-600">
                          {link.name}
                        </NavLink>

                        <ul className="space-y-2">
                          {link.sublinks.map((s, j) => (
                            <li key={j}>
                              <NavLink
                                to={s.path}
                                onClick={() => setDropdown(null)}
                                className="text-sm text-gray-700 hover:text-red-500">
                                {s.name}
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

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white text-3xl">
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden bg-black text-white px-6 pb-6 space-y-4">
          {menuItems.map((item) => (
            <div key={item.name}>
              {!item.submenu ? (
                <NavLink
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className="block py-2 border-b border-gray-700 text-gray-200">
                  {item.name}
                </NavLink>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setExpandedMenus((prev) => ({
                        ...prev,
                        [item.name]: !prev[item.name],
                      }))
                    }
                    className="w-full flex justify-between items-center py-2 border-b border-gray-700 text-gray-200">
                    {item.name}
                    {expandedMenus[item.name] ? <FaMinus /> : <FaPlus />}
                  </button>

                  {expandedMenus[item.name] && (
                    <div className="pl-4 mt-2 space-y-3">
                      {item.submenu[0].links.map((link, i) => (
                        <div key={i}>
                          <NavLink
                            to={link.path}
                            onClick={() => setMobileMenu(false)}
                            className="block font-semibold text-gray-300">
                            {link.name}
                          </NavLink>

                          <ul className="pl-4 mt-1 space-y-1">
                            {link.sublinks.map((s, j) => (
                              <li key={j}>
                                <NavLink
                                  to={s.path}
                                  onClick={() => setMobileMenu(false)}
                                  className="text-sm text-gray-400">
                                  {s.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
