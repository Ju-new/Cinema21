import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Banner from "./Components/Banner";
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

const PopularStudySpots = () => (
  <div className="mb-5 bg-white p-5 rounded-2xl">
    <h3 className="mb-5">Popular Study Spots</h3>
    <div className="flex gap-5">
      <div className="bg-white p-5 rounded-2xl shadow-lg flex-1">
        <h4 className="text-lg">Digital Library Gedung KOICA</h4>
        <p className="text-[#7d98c3] text-sm">Open 08.00 - 16.00</p>
        <button className="bg-transparent border-none text-[#5f5f5f] cursor-pointer p-0">See more information</button>
      </div>
      <div className="bg-white p-5 rounded-2xl shadow-lg flex-1">
        <h4 className="text-lg">Warunk Upnormal Sumur Bandung</h4>
        <p className="text-[#7d98c3] text-sm">Open 09.00 - 00.00</p>
        <button className="bg-transparent border-none text-[#5f5f5f] cursor-pointer p-0">See more information</button>
      </div>
    </div>
  </div>
);

const Reviews = () => (
  <div className="flex-1 pt-2 pr-5 pl-5 rounded-lg shadow-md max-w-[290px] mr-5 bg-white">
    <h3 className="mb-5 text-lg">Reviews</h3>
    <div className="mb-10 bg-[#7d98c3] rounded-lg p-3">
      <h4 className="text-lg text-white">Dewi Athena</h4>
      <p className="text-sm text-white">"Most students study here. The building is modern, equipped with Wi-Fi, and has air conditioning."</p>
    </div>
    <div className="mb-10 bg-[#7d98c3] rounded-lg p-3">
      <h4 className="text-lg text-white">Dewa Demeter</h4>
      <p className="text-sm text-white">"Very comfy, open 24 hours, and the perfect place for group discussions."</p>
    </div>
    <div className="mb-10 bg-[#7d98c3] rounded-lg p-3">
      <h4 className="text-lg text-white">Dewa Ares</h4>
      <p className="text-sm text-white">"This is where the top students study, and the food is delicious."</p>
    </div>
  </div>
);

export default App;
