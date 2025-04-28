import React from "react";
import CardCourse from "../_component/cardCourse";

function Dashboard() {
  return (
    <div className="container mx-auto">
      <main className="flex-1 p-10 space-y-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">UI Design Basics</h2>
          <p className="text-gray-500 max-w-2xl">
            Introduction to UI design principles, usability, visuals, and
            interaction design.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-700">Progress</h3>
            <span className="text-sm text-gray-500">58% Complete</span>
          </div>
          <div className="w-full bg-gray-100 h-4 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all"
              style={{ width: "58%" }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-700">
            Course Modules
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between group hover:bg-gray-100 p-3 rounded-md transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-500 p-2 rounded-md">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">
                    Understanding UI Design Principles
                  </p>
                  <p className="text-xs text-gray-400">30:25</p>
                </div>
              </div>
              <span className="text-green-500 text-lg font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between group hover:bg-gray-100 p-3 rounded-md transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-500 p-2 rounded-md">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Applying UI Design Principles</p>
                  <p className="text-xs text-gray-400">47:21</p>
                </div>
              </div>
              <span className="text-green-500 text-lg font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between group hover:bg-gray-100 p-3 rounded-md transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-500 p-2 rounded-md">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Design Critique and Analysis</p>
                  <p className="text-xs text-gray-400">24:34</p>
                </div>
              </div>
              <span className="text-blue-400 text-lg font-bold">•</span>
            </li>
          </ul>

          <div className="mt-8 text-right">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-md transition text-sm">
              Rate this course
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
