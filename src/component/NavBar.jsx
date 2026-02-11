    import "./NavBar.css";
    

    export default function Navbar({ fetchLatestNews,loading,sport,tech,busi,cat,log,toggle,darkMode,showSearch,setShowSearch,page,sb,home,goHome }) {
    return (
        <div className="navbar">
        <h2 className="logo">NewsApp</h2>

       {page==="news" &&  (<><ul className="nav-links">
            <li onClick={fetchLatestNews}>{loading && cat=="latest" ? "Loading..." : "Latest"}</li>
            <li onClick={sport}>{loading && cat=="sports"?"loading":"sports"}</li>
            <li onClick={tech}>{loading && cat=="technology"?"loading":"Technology"}</li>
            <li onClick={busi}>{loading && cat=="business"?"loading":"Business"}</li>
        </ul>
        <div className="nav-buttons">
        <button className="search-btn" onClick={() => setShowSearch(!showSearch)}>
    🔍 Search
</button>
           <button className="dark-btn" onClick={toggle}>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
  
</button>
 {home ? (
        <button onClick={goHome}>🏠 Home</button>
      ) : (
        <button onClick={sb}>📌 Bookmarks</button>
      )}
        <button className="logout-btn" onClick={log}>
  Logout
</button>

      
        </div>
        </> )}
        </div>
    );
    }
