import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
            { href: "https://facebook.com", icon: "facebook" },
            { href: "https://twitter.com", icon: "twitter" },
            { href: "https://google.com", icon: "google" },
            { href: "https://instagram.com", icon: "instagram" },
            { href: "https://linkedin.com", icon: "linkedin" },
            { href: "https://github.com", icon: "github" },
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
              <i className={`fab fa-${social.icon}`} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h6 className="uppercase font-semibold mb-4">Company Name</h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4">Products</h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Angular
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Vue
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Laravel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4">Useful Links</h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 text-center">Contact</h6>
            <ul className="space-y-2">
              <li className="">
                <i className="fas fa-home mr-3" /> New York, NY 10012, US
              </li>
              <li className="">
                <i className="fas fa-envelope mr-3" /> info@example.com
              </li>
              <li className="">
                <i className="fas fa-phone mr-3" /> +01 234 567 88
              </li>
              <li className="">
                <i className="fas fa-print mr-3" /> +01 234 567 89
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
          Rajkumar
        </a>
      </div>
    </footer>
  );
}
