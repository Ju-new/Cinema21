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
                    placeName={"Koica"} 
                    openingHours={"06:00-16:00"} 
                    imageUrl={"/koica.jpg"}/>
                    <Box 
                    placeName={"Koica"} 
                    openingHours={"06:00-16:00"} 
                    imageUrl={"../public/logo512.png"}/>
                    <Box 
                    placeName={"Koica"} 
                    openingHours={"06:00-16:00"} 
                    imageUrl={"../public/logo512.png"}/>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default StudySpace;
