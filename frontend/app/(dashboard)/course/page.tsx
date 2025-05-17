'use client'

import React, { useState } from "react";
import CardCourse from "../../_component/cardCourse";

function Course() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleReset = () => {
    setSearchQuery("");
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-full p-6 bg-white shadow-md h-full">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Cari Pelajaran ...
        </h2>

        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="py-2 pl-10 pr-4 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Search..."
          />

          {searchQuery && (
            <button
              onClick={handleReset}
              className="ml-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        <div>
          <CardCourse />
        </div>
      </div>
    </div>
  );
}

export default Course;
