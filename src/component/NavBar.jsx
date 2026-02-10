import "./NavBar.css";
import "./Navbar.css";

export default function Navbar({ fetchLatestNews,loading,sport,tech,busi }) {
  return (
    <div className="navbar">
      <h2 className="logo">NewsApp</h2>

      <ul className="nav-links">
        <li onClick={fetchLatestNews}>{loading ? "Loading..." : "Latest"}</li>
        <li onClick={sport}>{loading?"loading":"sports"}</li>
        <li onClick={tech}>{loading?"loading":"Technology"}</li>
        <li onClick={busi}>{loading?"loading":"Business"}</li>
      </ul>
    </div>
  );
}
