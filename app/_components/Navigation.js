"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "@/app/_components/Logo"; // Import logo

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Desktop Nav */}
      <nav className="hidden lg:block z-10 text-base xl:text-xl">
        <ul className="flex gap-6 xl:gap-10 items-center">
          <li>
            <Link
              href="https://github.com/SanniAbdulmuiz"
              className="flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaGithub size={22} />
              <span>Github</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/Abdulmuiz_sanni"
              className="flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaTwitter size={22} />
              <span>X</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/sanni-abdulmuiz"
              className="flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:ayomideabdulmuiz565@gmail.com"
              className="flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaEnvelope size={22} />
              <span>Email</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-30 flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 rounded transition-transform duration-300"
        >
          <div
            className={`transition-transform duration-300 ${
              menuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-[75vh] bg-gray-900 p-6 transform ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all duration-500 ease-in-out z-30 lg:hidden shadow-lg rounded-b-2xl`}
      >
        {/* Top Row: Logo + Close */}
        <div className="flex justify-between items-center">
          <Logo />
          <button
            onClick={closeMenu}
            className="text-white hover:text-fuchsia-500 transition-colors duration-300"
          >
            <HiX size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 mt-6">
          <li>
            <Link
              href="https://github.com/SanniAbdulmuiz"
              onClick={closeMenu}
              className="flex items-center gap-3 text-lg font-medium text-white hover:text-fuchsia-500 transition-colors"
            >
              <FaGithub size={22} />
              <span>Github</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/Abdulmuiz_sanni"
              onClick={closeMenu}
              className="flex items-center gap-3 text-lg font-medium text-white hover:text-fuchsia-500 transition-colors"
            >
              <FaTwitter size={22} />
              <span>X</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/sanni-abdulmuiz"
              onClick={closeMenu}
              className="flex items-center gap-3 text-lg font-medium text-white hover:text-fuchsia-500 transition-colors"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:ayomideabdulmuiz565@gmail.com"
              onClick={closeMenu}
              className="flex items-center gap-3 text-lg font-medium text-white hover:text-fuchsia-500 transition-colors"
            >
              <FaEnvelope size={22} />
              <span>Email</span>
            </Link>
          </li>
        </ul>

        {/* Centered Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="/resume.pdf"
            download="Abdulmuiz_Resume.pdf"
            onClick={closeMenu}
            className="w-full max-w-xs text-center bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-fuchsia-500/50 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <a
          href="/resume.pdf"
          download="Abdulmuiz_Resume.pdf"
          className="inline-block bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold 
                 py-2.5 px-6 text-lg rounded-lg shadow-md hover:shadow-fuchsia-500/50 
                 transition duration-300 whitespace-nowrap"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Navigation;
