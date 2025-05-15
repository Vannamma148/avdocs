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
    fileUrl: "/files/financial-report-q1.pdf",
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
    fileUrl: "/files/product-roadmap.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Completed",
      tagColor: "green",
    },
  },
  {
    desc: "User Personas - Product Launch",
    fileSize: "0.6mb",
    close: false,
    progress: 60,
    fileUrl: "/files/user-personas.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Review",
      tagColor: "blue",
    },
  },
  {
    desc: "Content Plan - Q2 2025",
    fileSize: "1.0mb",
    close: false,
    progress: 90,
    fileUrl: "/files/content-plan.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Review",
      tagColor: "green",
    },
  },
  {
    desc: "Monthly Budget Report - April",
    fileSize: "1.8mb",
    close: true,
    progress: 0,
    fileUrl: "/files/monthly-budget.pdf",
    tag: {
      isOpen: false,
      tagTitle: "Archived",
      tagColor: "gray",
    },
  },
  {
    desc: "New Hire Onboarding Guide",
    fileSize: "0.4mb",
    close: false,
    progress: 30,
    fileUrl: "/files/onboarding-guide.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Draft",
      tagColor: "yellow",
    },
  },
  {
    desc: "Sales Pitch Deck - Q2",
    fileSize: "2.5mb",
    close: false,
    progress: 50,
    fileUrl: "/files/sales-pitch.pdf",
    tag: {
      isOpen: true,
      tagTitle: "Progress",
      tagColor: "blue",
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
