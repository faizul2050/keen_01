import React from "react";
import AppCard from "../ui/AppCard";

// Data fetch korar jonno function
const friendsPromise = async function () {

  const res = await fetch(
    "http://localhost:3000/friends.json", 
    {
      cache: "no-store", 
    }
  );

  if (!res.ok) {
    
    console.error("Failed to fetch friends.json. Make sure it is in the public folder.");
    return [];
  }

  const apps = await res.json();
  return apps;
};

const FriendsApps = async () => {
  const apps = await friendsPromise();


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