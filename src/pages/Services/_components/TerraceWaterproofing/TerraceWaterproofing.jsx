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

export default function TerraceWaterproofing() {
  return (
    <div className="overflow-hidden py-8 sm:py-14 px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">
                Terrace Waterproofing
              </p>
              <p className="mt-6 text-lg/8 ">
                The roof is the most affected part of a building, directly
                impacted by rains. It is often the leakage through the terrace
                that causes severe dampness in the ceilings, thus spoiling the
                look of expensive interior paints. The best you can do is get
                roof waterproofing repairs for home done.
              </p>
              <dl className="mt-5 max-w-xl space-y-4 text-base/7  lg:max-w-none">
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
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://5.imimg.com/data5/SELLER/Default/2022/1/NQ/IT/WJ/138047063/roof-terrace-waterproofing-service.jpg"
            width={2432}
            height={1000}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[49rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
