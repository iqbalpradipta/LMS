import React from "react";
import { LuUpload } from "react-icons/lu";

function Profile() {
  return (
    <div className="container mx-auto">
      <div className="border-1 shadow-md border-gray-100 p-5 bg-white h-full">
        <div className="mb-10">
          <h1 className="text-xl font-bold">Profile</h1>
          <span className="text-sm text-gray-400">
            Manage your name, password and account settings.
          </span>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4 ms-12">
          <div className="row-span-2 text-sm font-medium text-gray-700 pt-2">Avatar</div>
          <img
            className="col-span-2 ms-25 inline-block size-15.5 rounded-full"
            src="https://yt3.ggpht.com/JIBs02-aKcwQNIArFarmn0grSFL4pxLz-ZsM5orQ2U54ho91LJrN_Q0wHRRp5K6jlkKnyNTs=s176-c-k-c0x00ffffff-no-rj-mo"
            alt="Avatar"
          />
          <div className="grid grid-cols-12 gap-2 ms-25 w-80 h-10">
            <button
              type="button"
              className="py-3 px-4 gap-2 col-span-6 inline-flex items-center text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <LuUpload />
              Upload Photo
            </button>
            <button
              type="button"
              className="w-20 py-3 px-4 col-span-6 inline-flex items-center text-sm font-medium rounded-lg border border-red-200 text-red-300 hover:text-black hover:border-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-white" />

        <div className="mt-5">
          <h1 className="row-span-2 text-md text-gray-700 font-bold">
            Personal Info
          </h1>
          <form className="w-full max-w-4xl mx-auto space-y-6 mt-5">
            <div className="grid grid-cols-3 gap-4 items-start">
              <label className="text-sm font-medium text-gray-700 pt-2">
                Name
              </label>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Enter your full name, or a display name you are comfortable
                  with.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-start">
              <label className="text-sm font-medium text-gray-700 pt-2">
                Username
              </label>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Enter username"
                  className="block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Enter your display name in Preline public forums.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-start">
              <label className="text-sm font-medium text-gray-700 pt-2">
                Email
              </label>
              <div className="col-span-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Enter the email address you want to use to log in with
                  Preline.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-start">
              <label className="text-sm font-medium text-gray-700 pt-2">
                Location
              </label>
              <div className="col-span-2">
                <select className="block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 px-3 py-2">
                  <option>Country</option>
                  <option>Indonesia</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>Japan</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700"
              >
                Save changes
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
