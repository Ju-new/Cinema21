'use client';
import { useParams } from "next/navigation"; // To get the dynamic username
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // For redirection

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/auth";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>(null); 
  const router = useRouter();
  const { username } = useParams(); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${base_url}/profile/${username}`);
        setUser(response.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
        router.push("/login");
      }
    };
    fetchUserData(); 
  }, [username, router]); 

  if (!user) {
    return <h1 className="text-black">Loading Profile...</h1>;
  }

  return (
    <div>
      <h1 className="text-black">Welcome, {username}!</h1>
      <p>User Details: {JSON.stringify(user)}</p>
    </div>
  );
};

export default ProfilePage;
