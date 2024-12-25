import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Cast-in-Situ Construction Method",
    description:
      "In this method, concrete is mixed, poured, and cured directly at the construction site.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Precast Construction Method",
    description:
      "Concrete components are cast and cured in a controlled factory environment and transported to the site for assembly.",
    icon: LockClosedIcon,
  },
];

export default function SwimmingWaterproofing() {
  return (
    <div className="overflow-hidden py-8 sm:py-12 px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-0 text-pretty text-4xl font-semibold capitalize tracking-tight  sm:text-4xl">
                Swimmingpool Waterproofing
              </p>
              <p className="mt-6 text-lg/7 ">
                Swimming pool waterproofing is essential to maintain the
                structural integrity and functionality of your pool, preventing
                leaks and water loss. At SRM construction Waterproofing Contractor, we
                offer expert swimming pool waterproofing solutions to ensure
                your pool remains watertight and durable. With over three
                decades of experience, our third-generation family business
                combines extensive knowledge with advanced techniques to deliver
                exceptional results. Our swimming pool waterproofing services
                are designed to tackle the specific challenges associated with
                pools, such as constant exposure to water and varying pressure.
                We use high-quality materials and the latest waterproofing
                methods to create a reliable barrier against leaks and seepage.
                Proper waterproofing not only enhances the longevity of your
                pool but also helps in maintaining water quality and preventing
                damage to surrounding structures.
              </p>
             
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://5.imimg.com/data5/SELLER/Default/2021/6/JC/CU/YW/2429074/liquid-waterproofing-membrane.jpg"
            width={2432}
            height={1000}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[55rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
