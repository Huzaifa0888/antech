import React from "react";

function OurSkill() {
  return (
    <>
      <div className="">
        <section className="py-10 sm:py-16 lg:pt-[110px] lg:pb-[110px]">
          <div className="px-4 mx-auto max-w-7xl w-[1150px] sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-x-9 ">
                <div className="gap-y-9 grid ">
                  <img className="w-full" src="/topp.png" alt="" />
                  <img className="w-full" src="/bottom.png" alt="" />
                </div>
                <img className="w-full self-center" src="/right.png" alt="" />
              </div>
              <div>
                <h1 className="text-4xl  font-normal text-blue-400   pb-5 lg:text-[30px]">
                  Our Skill
                </h1>
                <h1 className="text-4xl font-bold  text-black   lg:text-[40px]">
                  We Are Increasing Business Success With Technology
                </h1>
                <div>
                  <div className="flex justify-between pt-8">
                    <p>Software Development</p>
                    <p>45%</p>
                  </div>

                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div class="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between pt-8">
                    <p>Software Development</p>
                    <p>55%</p>
                  </div>

                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div class="bg-blue-600 h-2.5 rounded-full w-[55%]"></div>
                  </div>
                </div>{" "}
                <div>
                  <div className="flex justify-between pt-8">
                    <p>Software Development</p>
                    <p>75%</p>
                  </div>

                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div class="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurSkill;
