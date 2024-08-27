import Sidebar from "@/app/Components/Sidebar";
import Topbar from "@/app/Components/Topbar";
import Bubble from "@/app/Components/Bubble";
import Box from "@/app/Components/Box";

function StudySpace() {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Sidebar on the left */}

      <div className="flex-1 flex flex-col p-5"> {/* Main content area */}
        <Topbar /> {/* Topbar at the top */}
        
        {/* Bubble components */}
        <div className="flex gap-4 my-5 ml-6"> {/* Adjusted the margin-left */}
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
        </div>
      </div>
    </div>
  );
}

export default StudySpace;
