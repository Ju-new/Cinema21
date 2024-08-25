import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import Bubble from "../../Components/Bubble";
import '../../Components/Styles.css'
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
            </div>
        </div>
    </div>
  );
}

export default StudySpace;
