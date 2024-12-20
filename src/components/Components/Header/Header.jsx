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
import { useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const [click, setClick] = useState(false);
  const { theme, setTheme } = useTheme();

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
          top: click ? "4.2rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/About" className="mx-2">
          About
        </Link>

        <Link href="/Services" className="mx-2">
          Services
        </Link>

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

        <Link href="/Services" className="mx-2">
          Services
        </Link>

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

      <div className="hidden sm:flex items-center">
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
      </div>
    </header>
  );
};

export default Header;
