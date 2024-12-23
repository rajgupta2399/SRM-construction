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

export default function RccStructure() {
  return (
    <div className="overflow-hidden py-8 sm:py-12 px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-0 text-pretty text-4xl font-semibold capitalize tracking-tight  sm:text-5xl">
                RCC Structure
              </p>
              <p className="mt-6 text-lg/8 ">
                RCC (Reinforced Cement Concrete) structures are a combination of
                concrete and reinforcement (typically steel) designed to bear
                loads and resist stresses like compression, tension, and shear.
                RCC structures are the backbone of modern construction and are
                used extensively in buildings, bridges, dams, tunnels, and more.
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
            src="https://5.imimg.com/data5/ANDROID/Default/2022/9/FN/FT/CZ/134005219/product-jpeg-500x500.jpg"
            width={2432}
            height={1000}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
