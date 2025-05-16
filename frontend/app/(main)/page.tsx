import React from "react";
import CardBenefit from "../_component/cardBenefit";
import Link from "next/link";

function Page() {
  return (
    <div className="container mx-auto">
      {/* HERO SECTION */}
      <div className="grid grid-cols-2 p-10 bg-blue-200 border border-blue-200 rounded-b-xl">
        <div className="grid grid-row-2">
          <h1 className="mt-10 text-4xl dark:text-white">
            <strong>Transform Your Learning Experience</strong>
          </h1>
          <p className="mx-auto mb-20 text-lg dark:text-white">
            Empower your educational journey with our comprehensive learning
            management system. Experience interactive courses, real-time
            collaboration, and personalized learning paths.
          </p>
        </div>
        <img
          className="w-150 h-80 rounded-2xl shadow-lg"
          src="https://www.inkling.com/wp-content/uploads/2022/01/li_learning_beyond_1.png"
          alt="studying.img"
        />
      </div>
      <div className="grid grid-cols-2 w-95 gap-5 max-w-auto relative bottom-20 left-10">
        <button
          type="button"
          className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Start Learning Now
        </button>
        <Link
          href={"/dashboard"}
          type="button"
          className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
        >
          Watch Demo
        </Link>
      </div>

      {/* CONTENT SECTION */}
      <div className="grid grid-cols-3 gap-4">
        <h1 className="col-span-3 text-center text-3xl dark:text-white">
          <strong>Services</strong>
        </h1>
        <p className="col-span-3 text-center dark:text-white">
          What Benefit you will get?
        </p>
        <CardBenefit />
      </div>

      {/* Call To Action */}
      <div className="text-center mt-10 bg-blue-200 border border-blue-200 rounded-xl">
        <h1 className=" text-3xl dark:text-white">
          <strong>Ready to Transform Your Learning?</strong>
        </h1>
        <button
          type="button"
          className="py-2 px-10 mt-4 mb-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-blue-500 text-white hover:bg-blue-800 focus:outline-hidden focus:bg-blue-700"
        >
          <Link href="/dashboard">Get Started</Link>
        </button>
      </div>
    </div>
  );
}

export default Page;
