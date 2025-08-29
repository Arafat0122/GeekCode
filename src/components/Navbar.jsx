import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <nav className="py-2 px-3 md:px-6 rounded-xl bg-black/30 backdrop-blur-md shadow-lg flex items-center justify-between transition-all duration-300 mx-auto md:w-[90vw] max-w-[1280px]">

        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
          <img
            className="w-[140px] md:w-[180px] rounded-lg object-cover"
            src="/assets/logo.png"
            alt="PixoraNest Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 text-base font-medium transition-all duration-300 rounded-lg
          ${isActive
                    ? "text-white bg-gradient-to-r from-blue-500/20 to-sky-500/20 after:scale-x-100"
                    : "text-gray-300 hover:text-white"
                  }
          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-blue-400 after:to-sky-500 after:rounded-full after:transition-transform after:duration-300 after:scale-x-0
          hover:after:scale-x-100`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="blue-gradient hidden md:flex group items-center gap-1 rounded px-3 py-2 text-white shadow-xl"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden mr-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              viewBox="0 0 32 32"
              className={`w-9 h-9 transition-transform duration-500`}
            >
              <path
                className={`line ${isMobileMenuOpen
                    ? "!stroke-dasharray-[20_300] !stroke-dashoffset-[-32.42]"
                    : ""
                  }`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6..."
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-dark-bg text-white h-screen p-6 transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link to="/" onClick={toggleMobileMenu}>
            <img
              className="w-[150px] rounded-lg object-cover"
              src="/assets/logo.png"
              alt="PixoraNest Logo"
            />
          </Link>
          <X
            onClick={toggleMobileMenu}
            className="w-[32px] h-[32px] cursor-pointer"
          />
        </div>

        <ul className="flex flex-col gap-5 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `relative duration-200 ${isActive ? "text-white font-semibold" : "text-gray-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className="blue-gradient w-fit text-white flex items-center gap-1 rounded px-4 py-2"
            >
              Get in touch
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
