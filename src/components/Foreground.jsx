import React, { useRef } from "react";
import Card from "./Card";

export default function Foreground() {
  const ref = useRef(null);

  const data = [
  {
    desc: "React JS Basics.pdf",
    fileSize: "1.2mb",
    close: false,
    progress: 45,
    fileUrl: "/React JS Basics.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Progress",
      tagColor: "blue",
    },
  },
  {
    desc: "Financial Report Q1 2025",
    fileSize: "2.3mb",
    close: false,
    progress: 75,
    fileUrl: "/Financial Report - Q1 2025.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Review",
      tagColor: "yellow",
    },
  },
 {
    desc: "Financial Report Q1 2024",
    fileSize: "2.3mb",
    close: false,
    progress: 75,
    fileUrl: "/Financial Report - Q1 2025.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Review",
      tagColor: "yellow",
    },
  },
  {
    desc: "Product Roadmap 2025",
    fileSize: "1.7mb",
    close: false,
    progress: 100,
    fileUrl: "/Product Roadmap 2025.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Completed",
      tagColor: "green",
    },
  },
  
];

  return (
    <div ref={ref} className="w-full p-5 h-full bg-amber-200/10 fixed z-20 top-0 left-0 flex justify-center gap-5 flex-wrap">
      {data.map((item) => (
        <Card key={item.id} data={item} reference={ref}/>
      ))}
    </div>
  );
}
