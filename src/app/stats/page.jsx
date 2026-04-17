"use client";
import { KeenAppsContext } from "@/context/keen.context";
import { useContext, useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer, Cell } from "recharts";

const StatsPage = () => {
  const [apps, setApps] = useState([]);
  const { timeline } = useContext(KeenAppsContext);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch(
    "https://keen-keeper-a7-project.vercel.app/friends.json",
    {
      cache: "no-store",
    },
  );
        const data = await res.json();
        setApps(data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchFriends();
  }, []);


  const counts = (timeline || []).reduce((acc, item) => {
    const type = item.type.toLowerCase();
  
    if (type.includes("video")) acc["Video"] = (acc["Video"] || 0) + 1;
    else if (type.includes("text")) acc["Text"] = (acc["Text"] || 0) + 1;
    else if (type.includes("call")) acc["Calls"] = (acc["Calls"] || 0) + 1; 
    return acc;
  }, {});

  const data = [
    { name: "Calls", value: counts["Calls"] || 0, fill: "#163148" },
    { name: "Video", value: counts["Video"] || 0, fill: "#0088FE" },
    { name: "Text", value: counts["Text"] || 0, fill: "#FF8042" },
  ];

  return (
    <div className="container mx-auto  py-20">
      <h1 className="text-2xl font-bold py-4 text-center">
        Timeline entries: {timeline.length}
      </h1>

      <div className="w-full h-full" >
        <h2 className="font-semibold text-3xl mb-10 text-center">
          Friendship Analytics
        </h2>

       
        <ResponsiveContainer width="100%" height={300} >
          <PieChart>
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="90%"
              cornerRadius={10}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            >
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsPage;