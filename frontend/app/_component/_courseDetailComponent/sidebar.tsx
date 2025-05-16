import React from "react";
import { ContentItem } from "@/app/interface/content";
import { IoReturnDownBackSharp } from "react-icons/io5";
import Link from "next/link";

const mocks = [
  {
    id: 1,
    title: "How to basic",
    description:
      "Learn about all about tools web developer to become Fullstack Developer",
  },
  {
    id: 2,
    title: "Learn How to using it",
    description:
      "Learn about all about tools web developer to become Fullstack Developer",
  },
  {
    id: 3,
    title: "Basic Tools",
    description:
      "Learn about all about tools web developer to become Fullstack Developer",
  },
];

interface SidebarProps {
    onSelectContent: (content: ContentItem) => void;
    selectedContent: ContentItem;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectContent, selectedContent }) => {
  return (
    <aside className="w-72 bg-white p-4 rounded-r-2xl shadow-md">
      <div>
        <Link href={'/dashboard'} type="button" className="flex items-center gap-2 text-xl font-bold">
           <IoReturnDownBackSharp />
           <span className="text-sm font-bold">Kembali ke Dashboard</span>  
        </Link>
        <div className="mt-8">
          <p className="font-semibold">Course</p>
          {mocks.map((data, index) => {
            const isSelected = data.title === selectedContent.title
            return (
              <div key={index}>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() => onSelectContent(data)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl ${
                      isSelected
                        ? "bg-blue-800 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {data.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
