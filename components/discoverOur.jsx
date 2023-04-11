import React from "react";

function DiscoverOur() {
  return (
    <>
      <div className="">
        <section className="py-10 sm:py-16 lg:pt-[110px] lg:pb-0 w-full h-full ">
          <div className="px-4 mx-auto max-w-[1150px] sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h1 className=" text-4xl  font-normal text-blue-400  pb-5 lg:text-[30px]">
                  Discover Our Company
                </h1>
                <h1 className="text-4xl font-bold  text-black  lg:text-[40px]">
                  Bringing New IT Business Solutions And Ideas
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form, by
                  inject humour, or randomised words which
                </p>
                <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center lg:justify-start md:justify-start ju sm:space-y-0 md:space-x-20 lg:mt-10">
                  <div className="flex items-start ">
                    <img src="/icon.png" alt="" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-black">
                        14 Pages
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img src="/icon.png" alt="" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-black">
                        Easy Access
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button className="bg-blue-600 rounded-full py-4  text-white px-8 text-[1.1rem]">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-x-9 ">
                  <div className="gap-y-9 grid ">
                    <img className="w-full" src="/top.png" alt="" />
                    <img className="w-full" src="/bottom.png" alt="" />
                  </div>
                  <img className="w-full self-center" src="/right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DiscoverOur;
