import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import Bubble from "../../Components/Bubble";
import '../../Components/Styles.css'
import Box from "../../Components/Box";
function StudySpace() {
  return (
    <div className="containerSS">
        <Topbar />
        <div className="main-contentSS">
            <Sidebar />
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
  );
}

export default StudySpace;
