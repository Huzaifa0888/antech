import React from 'react'

function HeroSection() {
  return (
    <>
      <div className="bg-hero h-full  max-w-7xl w-[1150px] mt-12  ">
        <section className="py-10 sm:py-16 lg:pt-[110px] lg:pb-[110px] ">
          <div className="px-4 mx-auto max-w-[1150px] sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-normal text-blue-400  pb-5 lg:text-[40px]">
                  IT services Agency
                </h1>
                <h1 className="text-4xl font-bold text-black leading-none lg:text-[60px]">
                  Awesome IT Services for Your Business
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button className="bg-blue-600 rounded-full py-4  text-white px-8 text-[1.1rem]">
                    Learn More
                  </button>

                  <a
                    href="#"
                    title=""
                    className=" items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80 hidden lg:block"
                  >
                    <svg
                      className="w-14 h-14 mr-3 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#42A5F5"
                        stroke="#42A5F5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <img className="w-full" src="/pic.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection
