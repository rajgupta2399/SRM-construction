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

export default function VermiculiteWaterproofing() {
  return (
    <div className="overflow-hidden py-8 sm:py-14 px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-4xl">
                Vermiculite Waterproofing
              </p>
              <p className="mt-6 text-lg/7">
                Vermiculite waterproofing is a highly effective method that
                combines the insulating properties of vermiculite with superior
                water resistance. At SRM, Waterproofing Contractor, we
                offer specialized vermiculite waterproofing services to protect
                your structures from water damage while enhancing thermal
                insulation. With over three decades of experience, our
                third-generation family business brings extensive expertise and
                cutting-edge techniques to deliver exceptional waterproofing
                solutions. Our vermiculite waterproofing services are ideal for
                roofs, terraces, and other areas requiring both waterproofing
                and insulation. Vermiculite, a naturally occurring mineral, is
                lightweight, fire-resistant, and possesses excellent thermal
                properties. When used in waterproofing, it creates a durable
                barrier that prevents water infiltration, reduces heat transfer,
                and contributes to energy efficiency.
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
            src="https://www.rajusinghbuildingwaterproofing.com/service-images/vermiculite-waterproofing-1.png"
            width={2432}
            height={1000}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[49rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
