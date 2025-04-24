import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-lg font-bold" href="/">
              <span className="sr-only">Home</span>
              Lifted Horizon.
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-sm font-semibold">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 transition hover:text-gray-700"
                  >
                    {" "}
                    Company{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 transition hover:text-gray-700"
                  >
                    {" "}
                    Subsidiaries{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 transition hover:text-gray-500/75"
                  >
                    {" "}
                    Partners{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 transition hover:text-gray-500/75"
                  >
                    {" "}
                    Careers{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button>Contact sales</Button>
            <div className="block md:hidden">
              <button className="rounded-sm p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
