'use client';
import { useParams } from "next/navigation";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/auth";

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<any>(null)
    const router = useRouter();
    
    useEffect(() =>{
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            console.log(user)
        } else {
            router.push("/login")
        }
    }, [router]);
}
