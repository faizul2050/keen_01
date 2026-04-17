"use client";

import { KeenAppsContext } from "@/context/keen.context";
import { useContext } from "react";
import { BsChatText } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

const FriendsToggleButton = ({ app }) => {
  const { timeline, setTimeline } = useContext(KeenAppsContext);
  const handleAction = ({ type, name, icon, date }) => {
    setTimeline([...timeline, { type, name, icon, date }]);
    toast.success(`${type} is added to timeline!`);
  };

  // console.log(setTimeline, "setTimeLine");
  // console.log(timeline, "timeline");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* call btn */}
      <button
        onClick={() =>
          handleAction({
            type: "calls",
            name: app.name,
            icon: <IoCall />,
            date: app.next_due_date,
          })
        }
        className="flex items-center gap-2 justify-center p-6
         bg-gray-50 hover:bg-emerald-50 rounded-xl border border-gray-100 
          transition-all group"
      >
        <IoCall />
        <span
          className="text-slate-600 font-medium
         group-hover:text-emerald-700"
        >
          Call
        </span>
      </button>
      {/* text btn */}
      <button
        onClick={() =>
          handleAction({
            type: "text",
            name: app.name,
            icon: <BsChatText />,
            date: app.next_due_date,
          })
        }
        className="flex gap-2 items-center justify-center p-6 bg-gray-50
         hover:bg-emerald-50 rounded-xl border border-gray-100 
                  transition-all group"
      >
        <BsChatText />
        <span
          className="text-slate-600 font-medium
              group-hover:text-emerald-700"
        >
          Text
        </span>
      </button>
      {/* video btn */}
      <button
        onClick={() =>
          handleAction({
            type: "video",
            name: app.name,
            icon: <FaVideo />,
            date: app.next_due_date,
          })
        }
        className="flex gap-2 items-center justify-center p-6
         bg-gray-50 hover:bg-emerald-50 rounded-xl border
          border-gray-100 transition-all group"
      >
        <FaVideo />
        <span
          className="text-slate-600 font-medium
                   group-hover:text-emerald-700"
        >
          Video
        </span>
      </button>
    </div>
  );
};

export default FriendsToggleButton;
