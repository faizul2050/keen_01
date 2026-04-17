"use client";


import FilterCard from "@/components/app/FilterCard/FilterCard";
import { KeenAppsContext } from "@/context/keen.context";
import { useContext } from "react";
import  CheckCard  from '@/components/app/CheckCard';


const TimelinePage = () => {
  const { timeline , sortingType } = useContext(KeenAppsContext);

  console.log(timeline, " timeline text");

  return (
    <div className="container mx-auto py-10">
      <div
        className="bg-white border border-gray-200 
      rounded-lg shadow-sm px-10"
      >
        <h1 className="text-2xl font-bold py-4">
          Timeline pages {timeline.length}
        </h1>
        <FilterCard/>
        {/* Timeline items */}
        <CheckCard/>
        {/* Timeline items */}
      </div>
    </div>
  );
};

export default TimelinePage;
