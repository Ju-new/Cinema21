import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Banner from "./Components/Banner";
import PopularStudySpots from "./Components/PopularStudySpots";
import Reviews from "./Components/Review";
import "./globals.css";

function App() {
  return (
    <div className="flex bg-[#f3eaea] min-h-screen min-w-screen">
      <Sidebar />
      <div className="flex-1 p-5">
        <Topbar />
        <div className="flex mt-2">
          <div className="flex-2 mx-6">
            <Banner />
            <PopularStudySpots />
          </div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default App;
