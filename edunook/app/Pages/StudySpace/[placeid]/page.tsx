'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "@/app/Components/Sidebar";
import Box from "@/app/Components/Box";
import { Place } from '@/app/Objects/Place';

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/places";

const Placedetail = () => {
  const router = useRouter();
  const { _id } = useParams();
  const [place, setPlace] = useState<Place | null>(null);


  useEffect(() => {
    if(_id) {
      const fetchPlace = async () => {
        try {
          const response = await axios.get(`${base_url}/${_id}`);
          setPlace(response.data);
        } catch(error) {
          console.error("Failed to fetch details", error);
        }
      }
      fetchPlace();
    }
  }, [_id]);
  if (!place) {
    return <div>Loading...</div>
  }
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold">{place.nama}</h1>
        <p>Location: {place.lokasi}</p>
        <p>Open: {place.buka}-{place.tutup}</p>
        <img src={place.img} alt={place.nama}/>
      </div>
    </div>
  )
}

export default Placedetail;