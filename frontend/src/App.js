import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <div className="main-section">
            <Banner />
            <PopularStudySpots />
          </div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}

//sidebar
const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li>Dashboard</li>
      <li>Maps</li>
      <li>Study Space</li>
      <li>Review</li>
      <li className="settings">Settings</li>
    </ul>
  </div>
);

//topbar
const Topbar = () => (
  <div className="topbar">
    <input type="text" placeholder="Cari lokasi belajar" />
    <div className="profile">
      <p>Dewa Zeus</p>
    </div>
  </div>
);

//banner
const Banner = () => (
  <div className="banner">
    <h2>Find the nearest Study Space near you or your campus</h2>
    <button>See Maps</button>
  </div>
);

// PopularStudySpots
const PopularStudySpots = () => (
  <div className="popular-spots">
    <h3>Popular Study Spots</h3>
    <div className="spot-list">
      <div className="spot-item">
        {/* <img src="#" alt="Spot 1"></img> */}
        <h4>Digital Library Gedung KOICA</h4>
        <p>Open 08.00 - 16.00</p>
        <button>See more information</button>
      </div>
      <div className="spot-item">
        {/* <img src="#" alt="Spot 2"></img> */}
        <h4>Warunk Upnormal Sumur Bandung</h4>
        <p>Open 09.00 - 00.00</p>
        <button>See more information</button>
      </div>
    </div>
  </div>
);

//reviews
const Reviews = () => (
  <div className="reviews">
    <h3>Reviews</h3>
    <div className="review-item">
      <h4>Dewi Athena</h4>
      <p>"Most students study here. The building is modern, equipped with Wi-Fi, and has air conditioning."</p>
    </div>
    <div className="review-item">
      <h4>Dewa Demeter</h4>
      <p>"Very comfy, open 24 hours, and the perfect place for group discussions."</p>
    </div>
    <div className="review-item">
      <h4>Dewa Ares</h4>
      <p>"This is where the top students study, and the food is delicious."</p>
    </div>
  </div>
);

export default App;
