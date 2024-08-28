"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/app/Components/Sidebar";
import Search from "@/app/Components/Search";
import Bubble from "@/app/Components/Bubble";
import Box from "@/app/Components/Box";

const base_url = process.env.DB;

function StudySpace() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterFacilities, setFilterFacilities] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllPlaces = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&fasilitas=${filterFacilities.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllPlaces();
  }, [sort, filterFacilities, page, search]);

  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="flex-1 flex flex-col p-5">
        {" "}
        {/* Main content area */}
        <Search setSearch={(search) => setSearch(search)} /> {/* Topbar at the top */}
        {/* Bubble components */}
        <div className="flex gap-4 my-5 ml-6">
          {" "}
          {/* Adjusted the margin-left */}
          <Bubble placeholderText="near ITB Ganesha" />
          <Bubble placeholderText="near ITB Jatinangor" />
          <Bubble placeholderText="near ITB Cirebon" />
        </div>
        {/* Box components */}
        <div className="flex flex-wrap gap-8">
          <Box placeName={"ITB - Korea Cyber Security R&D Center (KOICA)"} openingHours={"06:00-16:00"} imageUrl={"/koica.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default StudySpace;
