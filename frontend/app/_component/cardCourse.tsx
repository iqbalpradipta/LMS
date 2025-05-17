import Link from "next/link";
import React from "react";

const mocks = [
  {
    id: 1,
    title: "Matematika",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus nemo inventore. Dignissimos natus voluptatem alias repellendus id, in odit amet sed possimus qui numquam quam facilis necessitatibus quos voluptate nobis commodi dolorem. Explicabo, qui?",
    totalCourse: "15",
  },
  {
    id: 2,
    title: "Fisika",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis quis assumenda, fugiat maxime quos! Sequi maiores libero ratione earum, dolorem sed quis blanditiis officia, omnis soluta consequatur odit illum ab ea dignissimos. Ea repellat, maiores consequatur magni ab nesciunt perferendis molestiae facere rem tempora ipsam iste tenetur quo adipisci.",
    totalCourse: "15",
  },
  {
    id: 3,
    title: "Bahasa Indonesia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto tempore laboriosam provident iure aliquam dicta aliquid, blanditiis ipsam aut excepturi, sunt beatae necessitatibus corporis! Pariatur ea non quos nobis.",
    totalCourse: "15",
  },
];

function CardCourse() {
  return (
    <div className="grid grid-cols-3 gap-4 relative mt-2">
      {mocks.map((data, index) => (
        <div
          key={index}
          className="flex flex-col w-80 h-auto border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <img
            className="w-full h-auto rounded-t-xl"
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            alt="Card Image"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {data.title}
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              {data.description}
            </p>
            <p className="mt-5 mb-3 text-xs text-gray-500 dark:text-neutral-500">
              Total Course: {data.totalCourse} Course
            </p>
            <button
              type="button"
              className="mt-2 text-sm w-20 h-10 bg-blue-500 text-white border-1 rounded-xl shadow-md focus:outline-hidden dark:text-neutral-500 hover:bg-blue-800"
            >
              <Link href={`/course/${data.id}`}>Click Here!</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardCourse;
