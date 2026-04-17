"use client ";
import React, { createContext, useState } from "react";



export const KeenAppsContext = createContext();

const KeenAppsProvider = ({ children }) => {

  const [timeline, setTimeline] = useState([]);

  const [sortingType,setSortingType] = useState("all");

  const data = {
    timeline,
    setTimeline,
    sortingType,
    setSortingType,
  };

  return (
    <KeenAppsContext.Provider value={data}>
        {children}
    </KeenAppsContext.Provider>
  );
};

export default KeenAppsProvider;
