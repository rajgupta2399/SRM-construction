import React from "react";

const Testimonial = () => {
  return (
    <section className="py-6 sm:py-16 lg:py-5">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-0 text-3xl font-bold sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {/* Testimonial Card 1 */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-xl lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-8 text-black">
                      <p className="text-lg leading-relaxed font-pj ">
                        “One of the best waterproofing firm in delhi ncr, good
                        knowledge and expert in all waterproofing work. I always
                        must recommend them for waterproofing work.”
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                      alt=""
                    />
                    <div className="ml-4 text-black">
                      <p className="text-base font-bold font-pj">
                        Harshit Dubey
                      </p>
                      {/* <p className="mt-0.5 text-sm font-pj">
                        Freelance React Developer
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat Testimonial Card for other clients */}
              {/* Card 2 */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-xl lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-8 text-black">
                      <p className="text-lg leading-relaxed font-pj">
                        “SRM water proofing contractor is one of finest water
                        proofing contractor i have ever came up cross with,
                        their work is surely give assurance of quality and
                        professionalism, their quick response to customer call
                        out for action is also appreciable.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                      alt=""
                    />
                    <div className="ml-4 text-black">
                      <p className="text-base font-bold font-pj">Tushar</p>
                      {/* <p className="mt-0.5 text-sm font-pj">UI/UX Designer</p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-xl lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-8 text-black">
                      <p className="text-lg leading-relaxed font-pj">
                        “Very professional work done by them at my home all
                        workers are polite and skilled, I must recommend them
                        for waterproofing work, very knowledgeable.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                      alt=""
                    />
                    <div className="ml-4 text-black">
                      <p className="text-base font-bold font-pj">Shalini</p>
                      {/* <p className="mt-0.5 text-sm font-pj">UI/UX Designer</p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Add additional cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
