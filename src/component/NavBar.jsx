import "./NavBar.css";
import "./Navbar.css";

export default function Navbar({ fetchLatestNews }) {
  return (
    <div className="navbar">
      <h2 className="logo">NewsApp</h2>

      <ul className="nav-links">
        <li onClick={fetchLatestNews}>Latest</li>
        <li>Sports</li>
        <li>Technology</li>
        <li>Business</li>
      </ul>
    </div>
  );
}
