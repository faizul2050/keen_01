import React from "react";
import AppCard from "../ui/AppCard";

// Data fetch korar jonno function
const friendsPromise = async function () {
  // Ekhane absolute URL-er poriborte local path use kora hoyeche
  const res = await fetch(
    "http://localhost:3000/friends.json", // Local host theke data nibbe
    {
      cache: "no-store", // Jate protibar fresh data ase
    }
  );

  if (!res.ok) {
    // Jodi file khuje na pay tahole error handle korbe
    console.error("Failed to fetch friends.json. Make sure it is in the public folder.");
    return [];
  }

  const apps = await res.json();
  return apps;
};

const FriendsApps = async () => {
  const apps = await friendsPromise();

  // Console-e check korun apnar local data asche kina
  console.log("Friends data loaded from local:", apps);

  return (
    <div className="container mx-auto px-5 py-10">
      <h5 className="text-balance font-medium py-2">
        Your Friends Apps ({apps?.length || 0})
      </h5>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
        {apps && apps.length > 0 ? (
          apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))
        ) : (
          <p>No data found in friends.json</p>
        )}
      </div>
    </div>
  );
};

export default FriendsApps;