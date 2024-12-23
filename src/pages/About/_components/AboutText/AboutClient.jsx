import React from "react";

const ListOfImages = [
  { img: "/Image/web-logo.png" },
  { img: "/Image/fosroc.png" },
  { img: "/Image/asian-paints.png" },
  { img: "/Image/arda.png" },
  { img: "/Image/Pidilite.png" },
  { img: "/Image/arihant.png" },
  { img: "/Image/camellias.png" },
  { img: "/Image/gls-logo-1-1.png" },
  { img: "/Image/Paramount.png" },
  { img: "/Image/NCC.png" },
  { img: "/Image/signature-global-logo.png" },
  { img: "/Image/DLF.png" },
  { img: "/Image/NCC.png" },
  { img: "/Image/Shapoorji_Pallonji.png" },
  { img: "/Image/Orient_Electric.png" },
  { img: "/Image/niet.png" },
  { img: "/Image/National_Thermal_Power.png" },
  { img: "/Image/Monsanto-Logo.png" },
  { img: "/Image/camellias.png" },
  { img: "/Image/Paramount.png" },
];

const AboutClient = () => {
  return (
    <div className="pb-10 sm:pt-0 pt-6">
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-7xl mx-auto text-center relative z-20 py-0 pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Our Partners & Clients
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-12">
        {ListOfImages.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 rounded-lg shadow-sm"
          >
            <img
              src={item.img}
              alt={`Client ${index + 1}`}
              className="max-w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutClient;
