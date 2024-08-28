import Sidebar from "@/app/Components/Sidebar";
import Topbar from "@/app/Components/Topbar";
import Bubble from "@/app/Components/Bubble";
import Box from "@/app/Components/Box";

function StudySpace() {
  return (
    <div className="flex min-h-screen bg-[#f3eaea] mr-0">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex-wrap flex flex-col max-w-7xl p-5 ml-0">
        <Topbar /> {/* Topbar at the top */}
        
        {/* Bubble components */}
        <div className="flex gap-4 my-5">
          <Bubble placeholderText="near ITB Ganesha" />
          <Bubble placeholderText="near ITB Jatinangor" />
          <Bubble placeholderText="near ITB Cirebon" />
        </div>
        
        {/* Box components */}
        <div className="flex flex-wrap gap-8">
          <Box 
            placeName={"ITB - Korea Cyber Security R&D Center (KOICA)"} 
            openingHours={"06:00-16:00"} 
            imageUrl={"/koica.jpg"}
          />
          <Box 
            placeName={"ITB - Korea Cyber Security R&D Center (KOICA)"} 
            openingHours={"06:00-16:00"} 
            imageUrl={"/koica.jpg"}
          />
          <Box 
            placeName={"ITB - Korea Cyber Security R&D Center (KOICA)"} 
            openingHours={"06:00-16:00"} 
            imageUrl={"/koica.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default StudySpace;
