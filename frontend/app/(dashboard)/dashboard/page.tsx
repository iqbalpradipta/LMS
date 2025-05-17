import React from "react";
import CardCourse from "../../_component/cardCourse";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="container mx-auto">

      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-500">
          Selamat Pagi, Iqbal Pradipta !
        </h1>
        <p className="text-sm text-gray-700 mt-1">
          Selamat datang di halaman utama LMS. Semua progress kamu tersimpan
          disini.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="p-5 border-1 rounded-lg h-auto shadow-lg shadow-gray-300 border-gray-300">
            <p className="text-2xl text-gray-500 text-center">Score</p>
            <div className="ml-auto mr-auto max-w-fit">
              <p className="text-xl text-gray-500">80</p>
            </div>
          </div>

          <div className="p-5 border-1 rounded-lg h-auto shadow-lg shadow-gray-300 border-gray-300">
            <p className="text-md text-gray-500">Diskusi Bersama Teman</p>
            <div>
              <Link
                href={"/chat"}
                type="button"
                className="py-3 px-4 inline-flex items-center bg-blue-500 text-white gap-x-2 text-sm font-medium rounded-lg border focus:outline-hidden dark:text-neutral-500 hover:bg-blue-800"
              >
                Ayo diskusi dengan teman dan guru! 
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p>Materi Pelajaran</p>
          <hr className="text-gray-200" />
          <CardCourse />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
