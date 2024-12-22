import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const firstRowImages = [
  {
    img: "/Image/web-logo.png",
  },
  {
    img: "/Image/fosroc.png",
  },
  {
    img: "/Image/asian-paints.png",
  },
  {
    img: "/Image/arda.png",
  },
  {
    img: "/Image/Pidilite.png",
  },
  {
    img: "/Image/arihant.png",
  },
  {
    img: "/Image/ats-allure-logo.png",
  },
  {
    img: "/Image/camellias.png",
  },
  {
    img: "/Image/gls-logo-1-1.png",
  },
  {
    img: "/Image/Paramount.png",
  },
  {
    img: "/Image/NCC.png",
  },
  {
    img: "/Image/signature-global-logo.png",
  },
];

const secondRowImages = [
  {
    img: "/Image/DLF.png",
  },
  {
    img: "/Image/NCC.png",
  },
  {
    img: "/Image/Shapoorji_Pallonji.png",
  },
  {
    img: "/Image/Orient_Electric.png",
  },
  {
    img : "/Image/niet.png"
  },
  
  { 
    img : "/Image/National_Thermal_Power.png"
  },
  {
    img : "/Image/Monsanto-Logo.png"
  },

  {
    img: "/Image/arihant.png",
  },
  {
    img: "/Image/ats-allure-logo.png",
  },
  {
    img: "/Image/camellias.png",
  },
  {
    img: "/Image/gls-logo-1-1.png",
  },
  {
    img: "/Image/Paramount.png",
  },
  {
    img: "/Image/signature-global-logo.png",
  }
];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="relative w-full h-auto overflow-hidden dark:border-gray-50/[.1] p-2">
        <img
          className="w-full h-full object-contain"
          alt="Partner Logo"
          src={img}
        />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[420px] w-full flex-col my-16 items-center justify-center overflow-hidden rounded-2xl bg-background md:shadow-sm py-0">
      <h1 className="font-semibold sm:text-4xl text-2xl mb-4">Our Partners & Clients</h1>
      {/* First Marquee */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRowImages.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      {/* Second Marquee */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRowImages.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
