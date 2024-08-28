import IMG from "@/app/Components/IMG";
import Sidebar from "@/app/Components/Sidebar";
import Topbar from "@/app/Components/Topbar";
import axios from "axios";
import {useEffect, useState} from "react";

const base_url = process.env.REACT_APP_API_URL;

function App() {
  const[obj, setObj] = useState({});
  const[sort, setSort] = useState({sort:""})
}

const SpaceDetail: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-[#f3eaea]">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex-1 flex-wrap flex flex-col max-w-7xl p-5">
                <Topbar /> {/* Topbar at the top */}
                
                {/* Add your content here */}
                <div className="flex flex-row fles-wrap gap-1 mt-5 bg-red-900">
                <IMG
                    imageUrl="/koica.jpg"
                    placeName="Koica"/>
                <IMG
                    imageUrl="/koica.jpg"
                    placeName="Koica"/>
                  <div className="">
                  </div>
                  <div className="flex-shrink"></div>
                </div>
            </div>
        </div>
    );
};

export default SpaceDetail;
