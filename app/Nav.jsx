"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isSticky ? "bg-white shadow-lg" : "bg-transparent border-b border-gray-400"}`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-[12%] py-4 md:py-6">
        {/* Logo */}
        <Link
          href="/"
          className={`text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage logo whitespace-nowrap
            ${isSticky ? "text-black" : "text-white"}`}
        >
          Living<span className="text-orange-500 font-bricolage">Lines</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm xl:text-base font-medium transition-all px-3 py-2 rounded whitespace-nowrap
                             ${
                               pathname === link.href
                                 ? "text-black bg-gray-200"
                                 : `${isSticky ? "text-black hover:bg-gray-200" : "text-white hover:bg-white hover:bg-opacity-20"}`
                             }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a
            href="#"
            className={`transition-all ${isSticky ? "text-black hover:text-orange-500" : "text-white hover:text-orange-300"}`}
          >
            <i className="bi bi-facebook text-lg xl:text-xl"></i>
          </a>
          <a
            href="#"
            className={`transition-all ${isSticky ? "text-black hover:text-orange-500" : "text-white hover:text-orange-300"}`}
          >
            <i className="bi bi-instagram text-lg xl:text-xl"></i>
          </a>
        </div>

        {/* Mobile menu Button */}
        <button
          className={`lg:hidden text-2xl focus:outline-none cursor-pointer transition-all
              ${isSticky ? "text-black" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i
            className={`ri-menu-2-fill transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-black p-4 sm:p-6 slide-menu fixed top-[70px] left-0 right-0 z-40 max-h-96 overflow-y-auto">
          <ul className="space-y-2 sm:space-y-3 menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 text-sm sm:text-base font-medium transition-all rounded
                             ${
                               pathname === link.href
                                 ? "text-black bg-gray-200"
                                 : "text-black hover:bg-gray-100"
                             }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-200 flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-orange-500 transition-all py-3"
              >
                <i className="bi bi-facebook text-lg"></i>
              </a>
              <a
                href="#"
                className="text-black hover:text-orange-500 transition-all py-3"
              >
                <i className="bi bi-instagram text-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
