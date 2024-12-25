import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Membrane Method",
    description:
      "Protective layer applied to prevent water penetration into the structural components of terraces or roofs.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Chemical Coating Method",
    description:
      " popular and effective technique to create a seamless, water-resistant barrier on the surface.",
    icon: LockClosedIcon,
  },
  {
    name: "Brickbat Coba Method",
    description:
      " It involves creating a water-resistant layer by laying a combination of brickbats and waterproofing slurry to prevent water seepage and improve thermal insulation.",
    icon: ServerIcon,
  },
];

export default function ToiletAndKitchenWaterproofing() {
  return (
    <div className="overflow-hidden py-8 sm:py-14 px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-4xl">
                Toilet & Kitchen Waterproofing
              </p>
              <p className="mt-6 text-lg/7">
                Toilet and kitchen waterproofing is crucial to prevent water
                damage, mold growth, and structural issues in these frequently
                wet areas. At SRM, Waterproofing Contractor, we specialize in
                providing effective waterproofing solutions for toilets and
                kitchens to ensure these spaces remain safe, hygienic, and
                durable. With over three decades of experience, our
                third-generation family business combines extensive knowledge
                with advanced techniques to deliver superior results. Our toilet
                and kitchen waterproofing services are designed to address the
                unique challenges posed by constant exposure to water and
                moisture. We use high-quality materials and state-of-the-art
                waterproofing methods to create a robust barrier that prevents
                leaks and seepage. Proper waterproofing in toilets and kitchens
                helps maintain the structural integrity of your home and
                prevents costly repairs in the future.
              </p>
              {/* <dl className="mt-5 max-w-xl space-y-4 text-base/7  lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold ">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute left-1 top-1 size-5 text-indigo-600"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl> */}
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://www.rajusinghbuildingwaterproofing.com/service-images/kitchen-waterproofing.jpg"
            width={2432}
            height={1000}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
