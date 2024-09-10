"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Components/Sidebar";
import Banner from "./Components/Banner";
import PopularStudySpots from "./Components/PopularStudySpots";
import Reviews from "./Components/Review";
import "./globals.css";
import Search from "./Components/Search";
import Box from "./Components/Box";
import { Place } from './Objects/Place'

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/places";

function App() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterFacilities, setFilterFacilities] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getAllPlaces = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&fasilitas=${filterFacilities.toString()}&search=${search}`;
        const { data } = await axios.get(url)

        console.log("Respons dari backend:", data.places);

        if (data && Array.isArray(data.places)) {
          setPlaces(data.places);
        } else {
          console.error("Data yang diterima bukan array:", data.places);
          setPlaces([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getAllPlaces();
  }, [sort, filterFacilities, page, search]);
  const handleSearchChange = (searchValue: string) => {
    setSearch(searchValue);
    setIsVisible(searchValue.trim() !== "");
  };


  return (
    <div className="flex bg-[#f3eaea] min-h-screen min-w-screen max-h-full max-w-full">
      <Sidebar />
      <div className="flex-1 p-5">
        <Search setSearch={handleSearchChange} />

        {isVisible && (
          <>
          <div className="flex gap-4 my-5 ml-6"/>
            <div className="flex flex-wrap gap-8 z-10 ">
              {places.map((place) => (
                <Box 
                  key={place._id} 
                  place={ place }
                  placeName={place.nama} 
                  openingHours={`${place.buka} - ${place.tutup}`} 
                  imageUrl={place.img} />
                  )
                )
              }
            </div>
            </>
        )}
        <div className="flex mt-2 z-0">
          <div className="flex-2 mx-2 mt-5">
            <Banner />
            <PopularStudySpots />
          </div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default App;
