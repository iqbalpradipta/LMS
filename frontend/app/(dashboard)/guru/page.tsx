import React from "react";

let mocks = [
    {
        id: 1,
        name: "Alifia",
        kelas: "Kelas 1",
        Nilai: 80,
        image: "https://yt3.ggpht.com/JIBs02-aKcwQNIArFarmn0grSFL4pxLz-ZsM5orQ2U54ho91LJrN_Q0wHRRp5K6jlkKnyNTs=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
        id: 2,
        name: "Iqbal",
        kelas: "Kelas 2",
        Nilai: 60,
        image: "https://yt3.ggpht.com/JIBs02-aKcwQNIArFarmn0grSFL4pxLz-ZsM5orQ2U54ho91LJrN_Q0wHRRp5K6jlkKnyNTs=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
        id: 3,
        name: "Salim",
        kelas: "Kelas 3",
        Nilai: 50,
        image: "https://yt3.ggpht.com/JIBs02-aKcwQNIArFarmn0grSFL4pxLz-ZsM5orQ2U54ho91LJrN_Q0wHRRp5K6jlkKnyNTs=s176-c-k-c0x00ffffff-no-rj-mo",
    },
]

function Guru() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-md">
      <p className="text-lg font-bold">Welcome to Guru Area</p>
      <div className="border-2 border-gray-300 rounded-lg p-4 mt-4">
        <p className="mb-2">Ingin menambahkan materi ?</p>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Tambahkan Materi
        </button>
      </div>
      <p className="text-sm font-bold mt-3">Daftar Siswa</p>
      <div className="border-2 border-gray-300 rounded-lg p-4">
        {mocks.map((guru) => (
            <div
                key={guru.id}
                className="flex items-center justify-between border-b border-gray-200 py-2"
            >
                <div className="flex items-center">
                <img
                    src={guru.image}
                    alt={guru.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <p className="text-sm font-semibold">{guru.name}</p>
                    <p className="text-xs text-gray-500">{guru.kelas}</p>
                </div>
                </div>
                <p className="text-sm font-semibold">Nilai: {guru.Nilai}</p>
            </div>
        ))}
      </div>
      <p className="text-sm font-bold mt-3">Daftar Materi</p>
      <div>
        <div className="border-2 border-gray-300 rounded-lg p-4">
          <p className="text-sm font-semibold">Fisika</p>
          <p className="text-xs text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius similique modi quas impedit eos magni iusto qui quasi, deleniti quisquam?</p>
        </div>
        <div className="border-2 border-gray-300 rounded-lg p-4 mt-2">
          <p className="text-sm font-semibold">Matematika</p>
          <p className="text-xs text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, inventore necessitatibus harum odit cupiditate ab deserunt cumque! Pariatur, voluptatum quibusdam.</p>
        </div>
      </div>
    </div>
  );
}

export default Guru;
