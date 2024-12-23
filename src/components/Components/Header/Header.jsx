"use client";
import Link from "next/link";
import Logo from "../Icons/Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MoonIcon,
  SunIcon,
} from "../Icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const [click, setClick] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown

  const toggle = () => {
    setClick(!click);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const spanBgColor = theme === "light" ? "#1D232A" : "#ffffff";

  return (
    <header
      className={`w-full p-4 px-5 sm:px-10 flex items-center justify-between ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      } transition-all duration-300`}
    >
      <Logo />

      <button
        className="inline-block sm:hidden z-50 mr-4"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 rounded transition-all ease duration-200"
              style={{
                backgroundColor: spanBgColor,
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 rounded transition-all ease duration-200"
              style={{
                backgroundColor: spanBgColor,
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 rounded transition-all ease duration-200"
              style={{
                backgroundColor: spanBgColor,
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className={`w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300 ${
          theme === "light"
            ? "border-black"
            : "bg-light text-white border-white"
        }`}
        style={{
          top: click ? "5.10rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/About" className="mx-2">
          About
        </Link>

        <div
          className="relative mx-2"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link href="/Services" className="">
            Services
          </Link>
          {dropdownOpen && (
            <div
              className={`absolute top-7 left-[-100px] mt-2 w-[240px] border rounded-2xl backdrop-blur-4 ${
                theme === "light"
                  ? "bg-[#fffafb] border-black"
                  : " text-black bg-[#fffafb]"
              }`}
            >
              <Link href="/Services" className="block px-4 py-2 ">
                Water Proofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Terrace Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Swimmin Pool Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Tin Shed Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Toilet & Kitchen Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                PU Coating
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Shortcreeting
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                APP Membrane
              </Link>
            </div>
          )}
        </div>

        <Link href="/Contact" className="mx-2">
          Contact
        </Link>

        <button
          className={`w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 ${
            theme === "light" ? "bg-[#1b1b1b] text-white" : " text-black"
          }`}
          aria-label="theme-switcher"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <MoonIcon className="h-6 w-6 #1D232A" />
          ) : (
            <SunIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      <nav
        className={`w-max py-3 px-8 border border-solid rounded-full font-medium capitalize items-center hidden sm:flex
  fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 ${
    theme === "light" ? "border-black" : "bg-light text-white border-white"
  }`}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/About" className="mx-2">
          About
        </Link>

        <div
          className="relative mx-2"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link href="/Services" className="">
            Services
          </Link>
          {dropdownOpen && (
            <div
              className={`absolute top-7 left-[-100px] mt-2 w-[240px] border rounded-2xl backdrop-blur-4 ${
                theme === "light"
                  ? "bg-[#fffafb] border-black"
                  : " text-black bg-[#fffafb]"
              }`}
            >
              <Link href="/Services" className="block px-4 py-2 ">
                Water Proofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Terrace Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Swimmin Pool Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Tin Shed Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Toilet & Kitchen Waterproofing
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                PU Coating
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                Shortcreeting
              </Link>
              <Link href="/Services" className="block px-4 py-2 ">
                APP Membrane
              </Link>
            </div>
          )}
        </div>

        <Link href="/Contact" className="mx-2">
          Contact
        </Link>
        <button
          className={`w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 ${
            theme === "light"
              ? "bg-[#1b1b1b] text-white"
              : "text-black bg-[#1D232A]"
          }`}
          aria-label="theme-switcher"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <MoonIcon className="h-6 w-6 #1D232A" />
          ) : (
            <SunIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      <div className="sm:flex space-x-4 hidden">
        {[
          {
            href: "https://www.facebook.com/profile.php?id=100064188390347",
            icon: faFacebook,
          },
          {
            href: "https://www.youtube.com/@srmconstruction7539",
            icon: faYoutube,
          },
          { href: "https://instagram.com", icon: faInstagram },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={social.icon} />
          </motion.a>
        ))}
      </div>

      {/* <div className="hidden sm:flex items-center">
        <a
          href=""
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href=""
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href=""
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href=""
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div> */}
    </header>
  );
};

export default Header;
