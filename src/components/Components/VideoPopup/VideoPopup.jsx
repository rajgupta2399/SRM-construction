"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Hook to detect theme

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Detects current theme

  // Show the popup automatically when the page loads
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
          <div className="bg-white p-2 rounded-xl shadow-2xl w-full max-w-xl relative z-50">
            {/* Close Button */}
            <button
              className={`absolute -top-4 sm:-right-1 -right-2 text-md font-bold p-2 rounded-2xl transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-200 text-black hover:bg-gray-300"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Video Player */}
            <video
              className="w-full rounded-xl max-h-[80vh] sm:max-h-[60vh]"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src="/SRM.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
