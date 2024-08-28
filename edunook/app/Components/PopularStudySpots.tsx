"use client";
import React from "react";
import Box from "@/app/Components/Box";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const PopularStudySpots: React.FC = () => {
  const router = useRouter();

  // Fungsi untuk mengarahkan ke halaman Study Space
  const handleSeeAll = () => {
    router.push("/Pages/StudySpace"); // Sesuaikan dengan path halaman Study Space kamu
  };

  return (
    <div className="mb-5 bg-white p-5 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl font-bold">Popular Study Spots</h3>
        {/* Tombol See All */}
        <button onClick={handleSeeAll} className="text-[#6482AD] hover:underline cursor-pointer">
          See all
        </button>
      </div>
      <div className="pl-14 flex gap-24">
        {/* Item 1 */}
        <div className="flex flex-wrap gap-8">
          <Box placeName={"ITB - Korea Cyber Security R&D Center (KOICA)"} openingHours={"06:00-16:00"} imageUrl={"/koica.jpg"} />
        </div>
        {/* Item 2 */}
        <div className="flex flex-wrap gap-8">
          <Box placeName={"Warung Upnormal Sumur Bandung"} openingHours={"08:00-00:00"} imageUrl={"/Upnormal.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default PopularStudySpots;
