import React from "react";
import { CiMail } from "react-icons/ci";

function Messages() {
  return (
    <div className="container mx-auto">
      <div className="border-1 shadow-md border-gray-100    p-5 bg-white w-full h-full">
        <p className="text-xl font-bold">Messages</p>
        <div className="justify-center content-center p-5">
          <div className="border-1 rounded-md shadow-xl p-3 grid grid-cols-3 mt-2 bg-gray-100 border-gray-200">
            <div className="mt-1 ms-5">
              <CiMail />
            </div>
            <div className="text-center">You Have Messages !</div>
            <div className="ms-75 text-red-500">•</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
