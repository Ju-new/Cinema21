"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/app/Components/Sidebar";
import Search from "@/app/Components/Search";
import Bubble from "@/app/Components/Bubble";
import Box from "@/app/Components/Box";
import { Place } from "@/app/Objects/Place";


// Base URL API
const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/places";

function StudySpace() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterFacilities, setFilterFacilities] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllPlaces = async () => {
      try {
        const url = `${base_url}?page=${page}&limit=18&sort=${sort.sort},${sort.order}&fasilitas=${filterFacilities.toString()}&search=${search}`;

        const { data } = await axios.get(url);
  
        console.log("Fetched places:", data.places); // Log the places array
  
        if (data && Array.isArray(data.places)) {
          setPlaces(data.places);
        } else {
          console.error("Data received is not an array:", data.places);
          setPlaces([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    getAllPlaces();
  }, [sort, filterFacilities, page, search]);
  

  return (
    <div className="flex min-h-4">
      <Sidebar />
      <div className="flex-1 flex flex-col p-5">
        {" "}
        <Search setSearch={(search) => setSearch(search)} />
        <div className="flex gap-4 my-5 ml-6">
          {" "}
          <Bubble placeholderText="near ITB Ganesha" />
          <Bubble placeholderText="near ITB Jatinangor" />
          <Bubble placeholderText="near ITB Cirebon" />
        </div>
        <div className="flex flex-wrap flex-row">
          {places.map((place) => (
            <Box 
            key={ place._id } 
            place={place}
            placeName={place.nama} 
            openingHours={`${place.buka} - ${place.tutup}`} 
            imageUrl={place.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudySpace;
