import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterApp() {
  const { theme } = useTheme();

  return (
    <footer
      className={`text-center text-lg-start ${
        theme === "light" ? "bg-white text-gray-800" : "bg-[#1D232A] text-white"
      }`}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="mb-4 md:mb-0">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex space-x-4">
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
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h6 className="uppercase font-semibold mb-4">SRM Construction</h6>
            <p>
              SRM Construction is one of the best waterproofing in Delhi NCR. we
              deal in all kinds of waterproofing Like Chemical waterproofing,
              Guniting, Kota, etc. We are one of the best waterproofing
              contractors in the market with 25 years
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4">Services</h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Waterproofing
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  PU Injuction Grouting
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  RCC Structure Repairs
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Injuction Grouting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4">Useful Links</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  href={"/About"}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/Service"}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href={"/Service"}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href={"/Contact"}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 text-center">
              Contact
            </h6>
            <ul className="space-y-2">
              <li className="">
                <i className="fas fa-home mr-3" /> Mukundpur, Delhi, India
                110042
              </li>
              <li className="">
                <i className="fas fa-envelope mr-3" />{" "}
                <a href="mail:srmconstruction1998@gmail.com?body=">
                  srmconstruction1998@gmail.com
                </a>
              </li>
              <li className="">
                <i className="fas fa-phone mr-3" />{" "}
                <a href="tel:+91 9034499719"> +91 9034499719</a>
              </li>
              <li className="">
                <i className="fas fa-print mr-3" />{" "}
                <a href="tel:+91 9810449437"> +91 9810449437 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 bg-gray-100 dark:bg-[#252b32]">
        Made with ❤️ by{" "}
        <a
          className="font-bold text-blue-500 hover:underline"
          href="https://rajkumar2499.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rajkumar & Ashutosh
        </a>
      </div>
    </footer>
  );
}
