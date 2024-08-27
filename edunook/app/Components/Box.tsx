"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook

interface BoxProps {
  placeName: string;
  openingHours: string;
  imageUrl: string;
}

const Box: React.FC<BoxProps> = ({ placeName, openingHours, imageUrl }) => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleClick = () => {
    router.push(`/study-space/${encodeURIComponent(placeName)}`); // Navigate to the detail page
  };

  return (
    <button
      className="flex flex-col p-8 border-none overflow-hidden h-full w-72 cursor-pointer items-center transition-colors duration-300 rounded-2xl bg-transparent hover:bg-gray-200"
      onClick={handleClick} // Add onClick handler
    >
      <img src={imageUrl} alt={placeName} className="w-full h-52 object-cover rounded-2xl shadow-md" />
      <div className="p-4 flex flex-col items-center">
        <div className="text-xl font-bold mb-2 text-black text-center">{placeName}</div>
        <div className="text-sm text-blue-400 text-center">{openingHours}</div>
      </div>
    </button>
  );
};

export default Box;
