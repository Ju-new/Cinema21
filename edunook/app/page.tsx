"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Components/Sidebar";
import Banner from "./Components/Banner";
import PopularStudySpots from "./Components/PopularStudySpots";
import Reviews from "./Components/Review";
import "./globals.css";
import Search from "./Components/Search";

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/places";

function App() {
  const [places, setPlaces] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterFacilities, setFilterFacilities] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllPlaces = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&fasilitas=${filterFacilities.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setPlaces(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllPlaces();
  }, [sort, filterFacilities, page, search]);

  return (
    <div className="flex bg-[#f3eaea] min-h-screen min-w-screen max-h-full max-w-full">
      <Sidebar />
      <div className="flex-1 p-5">
        <Search setSearch={(search) => setSearch(search)} />
        <div className="flex mt-2">
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
