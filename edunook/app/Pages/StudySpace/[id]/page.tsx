'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "@/app/Components/Sidebar";
import { Place } from '@/app/Objects/Place';

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/places";

const Placedetail = () => {
  const { id } = useParams(); // use 'id' here
  const [place, setPlace] = useState<Place | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPlace = async () => {
        try {
          const response = await axios.get(`${base_url}/${id}`);
          console.log("Response data:", response.data); // Log the response data
          setPlace(response.data);
        } catch (error) {
          console.error("Failed to fetch details", error);
        }
      };
      fetchPlace();
    }
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold">{place.nama}</h1>
        <p>Location: {place.lokasi}</p>
        <p>Open: {place.buka}-{place.tutup}</p>
        <img src={place.img} alt={place.nama} />
      </div>
    </div>
  );
}

export default Placedetail;
