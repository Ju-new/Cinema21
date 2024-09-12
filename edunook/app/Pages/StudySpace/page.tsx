"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/app/Components/Sidebar";
import Search from "@/app/Components/Search";
import Bubble from "@/app/Components/Bubble";
import Box from "@/app/Components/Box";
import Fasilitas from "@/app/Components/Fasilitas";
import { Place } from "@/app/Objects/Place";

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/places";

function StudySpace() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterFacilities, setFilterFacilities] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null); // State baru untuk kampus

  useEffect(() => {
    const getAllPlaces = async () => {
      try {
        // Tambahkan filter kampus ke URL jika selectedCampus ada nilainya
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&fasilitas=${filterFacilities.toString()}&search=${search}${selectedCampus ? `&kampus=${selectedCampus}` : ""}`;
        const { data } = await axios.get(url);

        console.log("Fetched places:", data.places);

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
  }, [sort, filterFacilities, page, search, selectedCampus]); // Tambahkan selectedCampus ke dependency array

  const allFacilities = Array.from(new Set(places.flatMap((place) => place.fasilitas || [])));

  const filteredPlaces = filterFacilities.length === 0 ? places : places.filter((place) => filterFacilities.every((facility) => place.fasilitas?.includes(facility)));

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col p-5">
        <Search setSearch={(search) => setSearch(search)} />

        <div className="flex gap-4 my-5 ml-6">
          <Bubble placeholderText="near ITB Ganesha" onClick={() => setSelectedCampus("ganesha")} />
          <Bubble placeholderText="near ITB Jatinangor" onClick={() => setSelectedCampus("jatinangor")} />
          <Bubble placeholderText="near ITB Cirebon" onClick={() => setSelectedCampus("cirebon")} />
        </div>

        <div className="flex gap-8 mt-5">
          <div className="flex-1 w-77/100">
            <div className="flex flex-wrap gap-4">
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((place) => <Box key={place._id} place={place} placeName={place.nama} openingHours={`${place.buka} - ${place.tutup}`} imageUrl={place.img} />)
              ) : (
                <p className="text-3xl font-bold">No places match the selected facilities..</p>
              )}
            </div>
          </div>

          <div className="w-23/100">
            <Fasilitas fasilitas={allFacilities} filterFacilities={filterFacilities} setFilterFacilities={setFilterFacilities} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudySpace;
