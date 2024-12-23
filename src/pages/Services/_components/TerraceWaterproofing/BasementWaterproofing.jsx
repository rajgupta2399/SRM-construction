export default function BasementWaterproofing() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-8 sm:px-12 sm:py-10 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Basement Waterproofing
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              The most fool proof method of basement waterproofing post
              construction in residential and commercial buildings is using
              pressure Guniting. Post Surface preparation and cleaning, MS
              Welded wire mesh is firmly anchored to the concrete surface by
              suitable means. Then a layer of dense gunite (concrete) admixed
              with waterproofing compound is sprayed using high air pressure on
              that existing structure including floor & walls to make the
              structure completely water tight
            </p>
          </div>
          <div className="relative mt-16 h-80 lg:mt-0">
            <img
              alt="App screenshot"
              src="https://constrofacilitator.com/wp-content/uploads/2021/05/basement-waterproofing.jpg"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[52rem] max-w-none object-contain rounded-xl bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}