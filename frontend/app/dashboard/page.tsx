import React from "react";
import CardCourse from "../_component/cardCourse";

function Dashboard() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center p-5">
        <div className="border-1 rounded-xl shadow-md w-300 h-auto">
          <h1 className="text-center font-bold">List Course</h1>
          <CardCourse />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
