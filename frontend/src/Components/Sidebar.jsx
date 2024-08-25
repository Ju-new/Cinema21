import "../App.css";

const Sidebar = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleNavigation('/dashboard')}>Dashboard</li>
        <li onClick={() => handleNavigation('/maps')}>Maps</li>
        <li onClick={() => handleNavigation('/Pages/Study-Space/StudySpace')}>
          Study Space
        </li>
        <li onClick={() => handleNavigation('/review')}>Review</li>
        <li onClick={() => handleNavigation('/settings')} className="settings">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
