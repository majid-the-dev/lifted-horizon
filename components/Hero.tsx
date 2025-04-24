import React from "react";
import Image from "next/image";
import Avatar1 from "@/public/assets/asset-01.jpg";
import Avatar2 from "@/public/assets/asset-01.jpg";
import Avatar3 from "@/public/assets/asset-01.jpg";
import BG from "@/public/assets/asset-04.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="md:h-[80vh] flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none space-y-7">
              <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-5xl/tight">
                Elevating Your Business <br /> Beyond Boundaries
              </h2>

              <p className="text-sm text-gray-700 font-medium">
                From tailored financial advice to cutting-edge IT solutions and
                seamless logistics, we partner with you every step of the way.
                Contact us today for a complimentary consultation.
              </p>
              <div className="flex items-center gap-2">
                <Button>Free consultation</Button>
                <Button className="bg-transparent text-gray-700 text-sm font-medium items-center shadow-none">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-3 mt-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Button>
              </div>
              <div className="flex items-center md:justify-start space-x-2">
                <div className="flex -space-x-2">
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={Avatar1}
                      alt="Expert 1"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={Avatar2}
                      alt="Expert 2"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={Avatar3}
                      alt="Expert 3"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-yellow-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-yellow-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-yellow-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-yellow-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Trusted by 50+ clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <Image
              src={BG}
              alt="Lifted Horizon"
              className="size-[100%] md:size-[78%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
