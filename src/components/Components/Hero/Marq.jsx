import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const firstRowImages = [
  {
    img: "https://www.drfixit.co.in/web/images/web-logo.png",
  },
  {
    img: "https://ab-ham.com/wp-content/uploads/2022/05/LOGO-768x541.png",
  },
  {
    img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/05/asian-paints_logo-freelogovectors.net_.png",
  },
  {
    img: "https://ardaindia.in/wp-content/uploads/2022/03/ARDA-India-Logo-1.png",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Pidilite_logo.svg/1200px-Pidilite_logo.svg.png",
  },
  {
    img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/05/asian-paints_logo-freelogovectors.net_.png",
  },
  
];

const secondRowImages = [
  {
    img: "https://seeklogo.com/images/D/DLF-logo-7E2CBA06DC-seeklogo.com.png",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Shapoorji_Pallonji_Group_logo.svg/1200px-Shapoorji_Pallonji_Group_logo.svg.png",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Orient_Electric_logo.svg/1200px-Orient_Electric_logo.svg.png",
  },
  {
    img : "https://www.niet.co.in/images/new-logo.png"
  },
  { 
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Thermal_Power_logo.svg/1200px-National_Thermal_Power_logo.svg.png"
  },
  {
    img : "https://download.logo.wine/logo/Monsanto/Monsanto-Logo.wine.png"
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
