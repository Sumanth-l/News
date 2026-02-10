    import "./NavBar.css";
    import "./Navbar.css";

    export default function Navbar({ fetchLatestNews,loading,sport,tech,busi,cat }) {
    return (
        <div className="navbar">
        <h2 className="logo">NewsApp</h2>

        <ul className="nav-links">
            <li onClick={fetchLatestNews}>{loading && cat=="latest" ? "Loading..." : "Latest"}</li>
            <li onClick={sport}>{loading && cat=="sports"?"loading":"sports"}</li>
            <li onClick={tech}>{loading && cat=="technology"?"loading":"Technology"}</li>
            <li onClick={busi}>{loading && cat=="business"?"loading":"Business"}</li>
        </ul>
        </div>
    );
    }
