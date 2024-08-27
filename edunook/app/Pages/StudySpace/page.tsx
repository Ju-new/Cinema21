import Sidebar from "@/app/Components/Sidebar";
import Topbar from "@/app/Components/Topbar";
import Bubble from "@/app/Components/Bubble";
import Box from "@/app/Components/Box";
function StudySpace() {
  return (
    <div className="containerSS">
        <div className="main-contentSS">
            <Sidebar />
            <div className="flex flex-col">
                <Topbar />
            
            <div className="content-wrapperSS">
                <div className="bubbles">
                    <Bubble placeholderText="near ITB Ganesha"/>
                    <Bubble placeholderText="near ITB Jatinangor"/>
                    <Bubble placeholderText="near ITB Cirebon"/>
                </div>
                <div className="boxSS">
                    <Box 
                    placeName={"ITB - Korea Cyber Security R&D Center (KOICA)"} 
                    openingHours={"06:00-16:00"} 
                    imageUrl={"/koica.jpg"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default StudySpace;
