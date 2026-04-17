import FriendsToggleButton from "@/components/app/FriendsToggleButton";
import Image from "next/image";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";

// Data fetching function with no-store to ensure 12 items show up
const getFriendsData = async () => {
  const res = await fetch(
    "https://keen-keeper-a7-project.vercel.app/friends.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

const FriendsDetailPage = async ({ params }) => {
  const apps = await getFriendsData();
  const { id } = await params;
  
  // Finding the specific friend by ID
  const app = apps.find((item) => item.id == id);

  // If no friend is found, display a simple message
  if (!app) {
    return <div className="text-center py-20 text-red-500">Friend not found!</div>;
  }

  const statusColor = {
    overdue: "bg-red-400 text-white",
    "almost due": "bg-yellow-400 text-black",
    "on-track": "bg-green-400 text-white",
  };

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Friend Detail Page</h1>
        <p className="text-gray-500">Viewing details for Friend ID: {app.id}</p>
      </div>

      <div className="max-w-5xl mx-auto p-6 min-h-screen font-sans text-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="md:col-span-4 space-y-5">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-emerald-50">
                <Image
                  src={app.picture}
                  alt={app.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-emerald-800">{app.name}</h2>
              
              <div className="flex flex-wrap justify-center gap-2 py-4">
                {app.tags.map((tag, index) => (
                  <span key={index} className="badge badge-success badge-outline text-xs px-3">
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`font-bold px-6 py-1 rounded-full text-xs uppercase tracking-wider ${statusColor[app.status]}`}>
                {app.status}
              </div>

              <p className="text-gray-500 text-sm mt-4">{app.bio}</p>
              <p className="text-emerald-700 font-medium text-sm mt-2">{app.email}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-3 transition-all font-semibold text-slate-700">
                <LuBellRing /> Snooze 2 Weeks
              </button>
              <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-3 transition-all font-semibold text-slate-700">
                <IoIosArchive /> Archive
              </button>
              <button className="w-full bg-white hover:bg-red-50 border border-gray-100 rounded-lg py-3 flex items-center justify-center gap-3 transition-all font-semibold text-red-500">
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>

          {/* Right Column: Stats & Actions */}
          <div className="md:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-slate-700">{app.days_since_contact}</div>
                <div className="text-xs text-slate-400 mt-1 uppercase">Days Since Contact</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-slate-700">{app.goal}</div>
                <div className="text-xs text-slate-400 mt-1 uppercase">Goal (Days)</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-xl font-bold text-emerald-800">{app.next_due_date}</div>
                <div className="text-xs text-slate-400 mt-1 uppercase">Next Due</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-emerald-900">Relationship Goal</h3>
                <p className="text-slate-500">Connect every <span className="font-bold text-slate-800">{app.goal}</span> days</p>
              </div>
              <button className="btn btn-sm btn-ghost border-gray-200">Edit</button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-emerald-900 mb-6">Quick Check-In</h3>
              <FriendsToggleButton app={app} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailPage;