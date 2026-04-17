import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen
     bg-linear-to-br from-slate-900 to-slate-700 text-white px-4">
      {/* Icon */}
      <div className="text-6xl text-yellow-400 animate-bounce mb-4">
        <FaExclamationTriangle />
      </div>

      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold tracking-widest">404</h1>

      {/* Subtitle */}
      <h2 className="text-2xl mt-2 text-slate-300">Page Not Found</h2>

      {/* Description */}
      <p className="text-slate-400 mt-2 mb-6 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="bg-linear-to-r from-blue-500
         to-cyan-400 px-6 py-3 rounded-xl font-semibold
          shadow-lg hover:scale-105 transition-transform duration-300"
      >
        🚀 Go Back Home
      </Link>

      {/* Extra decoration */}
      <div className="absolute bottom-10 text-slate-500 text-sm">
        Lost in space? 🌌
      </div>
    </div>
  );
};

export default NotFoundPage;
