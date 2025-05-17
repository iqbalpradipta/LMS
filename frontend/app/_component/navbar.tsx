import Link from "next/link";
import React from "react";

function Navbar() {
  return (
      <aside className="w-64 bg-blue-500 p-6 flex flex-col justify-between border-r border-gray-200">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-white">LMS</h1>
          <nav className="space-y-6 text-sm">
            <Link
              href="/dashboard"
              className="block text-gray-300 hover:text-black transition"
            >
              Dashboard
            </Link>
            <Link
              href="/course"
              className="block text-gray-300 hover:text-black transition"
            >
              Courses
            </Link>
            <Link
              href="/messages"
              className="block text-gray-300 hover:text-black transition"
            >
              Messages
            </Link>
            <Link
              href="/chat"
              className="block text-gray-300 hover:text-black transition"
            >
              Discussion Area
            </Link>
            <Link
              href="/profile"
              className="block text-gray-300 hover:text-black transition"
            >
              Profile
            </Link>
          </nav>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <img
              src="https://yt3.ggpht.com/JIBs02-aKcwQNIArFarmn0grSFL4pxLz-ZsM5orQ2U54ho91LJrN_Q0wHRRp5K6jlkKnyNTs=s176-c-k-c0x00ffffff-no-rj-mo"
              alt="profile"
              className="inline-block size-15.5 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-300">Klerr ...</p>
            </div>
          </div>
        </div>
      </aside>
  );
}

export default Navbar;

{
  /* 
  <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
    <a className="font-medium text-white focus:outline-hidden" href="/" aria-current="page">Home</a>
    <a className="font-medium text-gray-300 hover:text-black focus:outline-hidden focus:text-black dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/e-learning">Dashboard</a>
    <a className="font-medium text-gray-300 hover:text-black focus:outline-hidden focus:text-black dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/about">About</a>
    <a className="font-medium text-gray-300 hover:text-black focus:outline-hidden focus:text-black dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Blog</a>
  </div> 
  */
}
