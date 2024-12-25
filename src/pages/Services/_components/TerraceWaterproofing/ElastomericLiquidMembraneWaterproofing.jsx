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

export default function ElastomericLiquidMembraneWaterproofing() {
  return (
    <div className="overflow-hidden py-8 sm:py-14 px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-4xl">
                Elastomeric Liquid Membrane Waterproofing
              </p>
              <p className="mt-6 text-lg/7">
                Elastomeric liquid membrane waterproofing is a state-of-the-art
                solution designed to provide flexible and durable protection
                against water infiltration. At SRM, Waterproofing
                Contractor, we specialize in elastomeric liquid membrane
                waterproofing to ensure your structures remain watertight and
                resilient. With over three decades of experience, our
                third-generation family business leverages extensive expertise
                and advanced techniques to deliver superior waterproofing
                services. Our elastomeric liquid membrane waterproofing services
                are ideal for a variety of surfaces, including roofs, terraces,
                balconies, and foundations. This waterproofing method involves
                applying a liquid membrane that cures to form a seamless,
                elastic layer, which can accommodate structural movements and
                resist environmental stresses. The result is a highly effective
                barrier that prevents leaks and water damage, ensuring long-term
                protection.
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
            src="https://www.rajusinghbuildingwaterproofing.com/service-images/elastomeric-1.jpg"
            width={2432}
            height={1000}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[52rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
