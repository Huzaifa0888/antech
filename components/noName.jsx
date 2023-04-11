import React from 'react'

function NoName() {
  return (
    <>
      <section className="py-10 sm:py-16  lg:pb-[110px] lg:pt-0 lg:mt-0">
        <div className="px-4 mx-auto max-w-[1150px] sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:h-[500px]  mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 ">
            <div className="md:px-4 lg:px-2 h-full w-full">
              <img className="- h-full w-[100%]" src="/portfolio3.jpg" alt="" />
            </div>
            <div className="md:px-4 lg:px-2  w-full">
              <img className="- h-full w-[100%]" src="/portfolio3.jpg" alt="" />
            </div>
            <div className="md:px-4 lg:px-2 h-full w-full">
              <img className="- h-full w-[100%]" src="/portfolio3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NoName
