import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="">
            <h1 className="text-2xl/tight font-extrabold text-gray-900 sm:text-3xl/tight text-center md:text-left">
              Your Partners in Growth <br /> and Excellence
            </h1>
          </div>
          <div className="text-sm/normal text-gray-700 font-medium text-center md:text-left line-clamp-3 mt-4">
            At Lifted Horizon Nigeria Limited, we believe that true success is
            built on expertise, ethics and enduring relationships. Founded with
            the vision to support Nigerian and international businesses, we
            combine deep industry knowledge with a global perspective. We roll
            up our sleeves and work hard to deliver innovative, top-tier
            solutions.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-16 md:mt-20">
          <div className="rounded-lg bg-gray-100 border border-gray-200/70 p-4">
            <h1 className="text-base font-bold">Journey</h1>
            <p className="text-gray-700 text-sm mt-2 mb-3 line-clamp-3">
              A multidisciplinary professional-services firm with three
              dedicated divisions—Advisory, Solutions and Logistics—designed to
              meet every need.
            </p>
            <p className="md:flex items-center text-gray-700 text-[13px] gap-1.5 font-bold cursor-pointer hidden">
              See more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-[18px] mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 border border-gray-200/70 p-4">
            <h1 className="text-base font-bold">Mission</h1>
            <p className="text-gray-700 text-sm mt-2 mb-3 line-clamp-3">
              To empower clients through proactive guidance and innovative
              solutions that drive growth, mitigate risk, and ensure full
              compliance.
            </p>
            <p className="md:flex items-center text-gray-700 text-[13px] gap-1.5 font-bold cursor-pointer hidden">
              See more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-[18px] mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 border border-gray-200/70 p-4">
            <h1 className="text-base font-bold">Vision</h1>
            <p className="text-gray-700 text-sm mt-2 mb-3 line-clamp-3">
              A future where every business, large or small, achieves its
              fullest potential underpinned by integrity and excellence.
            </p>
            <p className="md:flex items-center text-gray-700 text-[13px] gap-1.5 font-bold cursor-pointer hidden">
              See more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-[18px] mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </p>
          </div>
          {/* <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 space-y-2.5">
            <h3 className="text-lg font-bold">Journey</h3>
            <p className="text-sm text-gray-700 mt-2">
              A multidisciplinary professional-services firm with three
              dedicated divisions—Advisory, Solutions and Logistics—designed to
              meet every need.
            </p>
          </div> */}
          {/* <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 space-y-2.5">
            <h3 className="text-lg font-bold">Mission</h3>
            <p className="text-sm text-gray-700 mt-2">
              To empower clients through proactive guidance and innovative
              solutions that drive growth, mitigate risk, and ensure full
              compliance.
            </p>
          </div> */}
          {/* <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 space-y-2.5">
            <h3 className="text-lg font-bold">Vision</h3>
            <p className="text-sm text-gray-700 mt-2">
              A future where every business, large or small, achieves its
              fullest potential underpinned by integrity and excellence.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
