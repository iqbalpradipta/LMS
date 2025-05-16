"use client";

import Content from "@/app/_component/_courseDetailComponent/content";
import Sidebar from "@/app/_component/_courseDetailComponent/sidebar";
import { ContentItem } from "@/app/interface/content";
import React, { useState } from "react";

function CourseDetail() {
  const [selectedContent, setSelectedContent] = useState<ContentItem>({
    id: 1,
    title: "How to basic",
    description:
      "Learn about all about tools web developer to become Fullstack Developer",
  });

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900 font-sans">
      <div className="flex h-screen bg-gray-50">
        <Sidebar onSelectContent={setSelectedContent} selectedContent={selectedContent}/>
      </div>
      <Content data={selectedContent} />
    </div>
  );
}

export default CourseDetail;
