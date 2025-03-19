import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId); // Prevent dropdown from closing immediately
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(null);
    }, 300); // Delay closing so user gets time to click
  };

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const closeDropdown = () => setDropdown(null);

  const menuItems = [
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      path: "/products",
      submenu: ["Protein", "Vitamins", "Accessories"],
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
          <span className="md:text-xl text-sm text-white ">
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
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-white text-[16px] hover:text-green-500"
                }>
                {item.name}
              </NavLink>

              {/* Dropdown Menu */}
              {item.submenu && dropdown === item.name && (
                <div
                  className="absolute left-0 mt-2 bg-white z-20 shadow-md w-40 text-left py-2 border rounded dropdown-menu"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}>
                  <ul>
                    {item.submenu.map((sub) => (
                      <li key={sub} className="py-2 hover:bg-gray-100">
                        <NavLink
                          to={`/${sub.toLowerCase()}`}
                          className="block text-gray-700"
                          onClick={closeDropdown} // Close on click
                        >
                          {sub}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
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
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-bold"
                      : "text-gray-700 hover:text-green-500"
                  }
                  onClick={() => setMobileMenu(false)}>
                  {item.name}
                </NavLink>

                {/* Mobile Dropdown */}
                {item.submenu && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {item.submenu.map((sub) => (
                      <li key={sub}>
                        <NavLink
                          to={`/${sub.toLowerCase()}`}
                          className="text-gray-600 hover:text-green-500"
                          onClick={() => {
                            setMobileMenu(false);
                            closeDropdown();
                          }}>
                          {sub}
                        </NavLink>
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
