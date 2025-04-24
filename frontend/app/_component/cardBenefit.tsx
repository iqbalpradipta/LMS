import React from "react";

const dataCard = [
  {
    title: "Learn from Anywhere",
    description:
      "You can learn anywhere without time and Easy access from anywhere",
  },
  {
    title: "Program built for newbie or people want switch career",
    description:
      "Stop wasting your time with problematic material, this course is built with good steps from newbie to advanced",
  },
  {
    title: "Cheap!",
    description: "This course is cheaper than any website!",
  },
];

function CardBenefit() {
  return (
    <>
      {dataCard.map((data, index) => (
        <div className="p-5" key={index}>
          <div className="flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img
              className="w-full h-auto rounded-t-xl"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Card Image"
            />
            <div className="p-4 md:p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-center text-gray-800 dark:text-white">
                {data.title}
              </h3>
              <p className="mt-1 text-gray-500 text-center flex-grow dark:text-neutral-400">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardBenefit;
