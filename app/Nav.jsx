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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all 
        ${isSticky ? "bg-white shadow-md" : "bg-transparent border-b border-gray-400"}`}
    >
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-6">
        <Link
          href="/"
          className={`text-5xl font-bold font-bricolage logo 
            ${isSticky ? " text-black" : " text-white"}`}
        >
          Living<span className="text-orange-500 font-bricolage">Lines</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black
                             relative px-3 py-2 rounded
                            ${pathname === link.href ? "text-black bg-gray-200 active-link" : isSticky ? "text-black" : "text-white"}
                            `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className=" hidden lg:flex space-x-4">
          <a href="#">
            <i
              className={`bi bi-facebook text-xl 
                ${isSticky ? " text-black" : " text-white"}`}
            ></i>
          </a>
          <a href="#">
            <i
              className={`bi bi-instagram text-xl 
                ${isSticky ? " text-black" : " text-white"}`}
            ></i>
          </a>
        </div>

        {/* Mobile menu Button */}
        <button
          className={`lg:hidden text-2xl focus:outline-none cursor-pointer 
              ${isSticky ? " text-black" : " text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-2-fill"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white text-black p-6 slide-menu">
          <ul className=" space-y-4 menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-base font-medium transition-all hover:text-black
                             ${pathname === link.href ? "text-black bg-gray-200 active-link" : "text-black"}
                            `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
