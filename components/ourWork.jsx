import React from 'react'

function OurWork() {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24 bg-white hidden lg:block">
        <div className="px-4 mx-auto max-w-[1150px] sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl text-center font-normal text-blue-400   pb-5 lg:text-[30px]">
              How We Work
            </h1>
            <h1 className="text-4xl font-bold text-center text-black   lg:text-[40px]">
              Our Works Process
            </h1>
          </div>
          <section className=" ">
            <div className="px-4  ">
              <div className="grid max-w-xl  grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-0 xl:gap-x-12 gap-y-20">
                <div className="bg-sec h-[340px] w-full ">
                  <div className="overflow-hidden h-[280px] w-[280px] mt-8 ml-8 items-center rounded-full shadow shadow-gray-400">
                    <div className="px-10 py-20  ">
                      <p className="text-2xl text-black font-semibold pb-4">
                        Create a Plan
                      </p>

                      <p className="mt-1 text-base text-gray-600  text-center">
                        There are many variation of passages of Lorem Ips
                        available, but them
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-sec lg:h-full lg:w-full ">
                  <div className="overflow-hidden h-[280px] w-[280px] mt-8 ml-8 items-center rounded-full shadow shadow-gray-400">
                    <div className="px-10 py-20  ">
                      <p className="text-2xl text-black font-semibold pb-4">
                        Create a Plan
                      </p>

                      <p className="mt-1 text-base text-gray-600  text-center">
                        There are many variation of passages of Lorem Ips
                        available, but them
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-sec h-full w-full">
                  <div className="overflow-hidden h-[280px] w-[280px] mt-8 ml-8 items-center rounded-full shadow shadow-gray-400">
                    <div className="px-10 py-20  ">
                      <p className="text-2xl text-black font-semibold pb-4">
                        Create a Plan
                      </p>

                      <p className="mt-1 text-base text-gray-600  text-center">
                        There are many variation of passages of Lorem Ips
                        available, but them
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default OurWork
