import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Crystalline Waterproofing Method",
    description:
      "A crystalline waterproofing compound is applied to concrete, which penetrates and forms insoluble crystals, blocking water pathways.Ideal for new construction or repairing leaking lift pits.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Injection Grouting Method",
    description:
      "Used to fill cracks or voids in existing lift pits.Involves injecting polyurethane or epoxy-based materials to stop active leaks.",
    icon: LockClosedIcon,
  },
];

export default function LiftPitWaterproofing() {
  return (
    <div className="overflow-hidden py-8 sm:py-14 px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold capitalize tracking-tight  sm:text-5xl">
                Lift Pit Waterproofing
              </p>
              <p className="mt-6 text-lg/8 ">
                Out of all the techniques most fool proof and commercially
                viable methods are injection grouting (if required) followed box
                type Kota Stone treatment with grouting and pressure guniting.
                Out of the two latter is more preffered considering factors like
                ease in application, cost incurred and easily reparable.
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
            src="https://www.danraegroup.com.au/wp-content/uploads/2021/08/Danrea-What-can-go-wrong.jpg"
            width={2432}
            height={1000}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
