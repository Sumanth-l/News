import { useEffect, useState } from "react";
import "./News.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [Home,setHome]=useState(false);
  const [savedLinks, setSavedLinks] = useState([]);
  


const apiKey = import.meta.env.VITE_API_KEY;

const navigate = useNavigate();


const handleSave=(item)=>{
  
  const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
  const alreadySaved=savedNews.some((n)=>n.link===item.link);
 
  if(alreadySaved){
    alert("News already saved!");
    return;
  }

   savedNews.push(item);
  localStorage.setItem("savedNews", JSON.stringify(savedNews));
  setSavedLinks([...savedLinks, item.link]);
}

const goHome = () => {
  fecthedNews();
  setHome(false);
};


useEffect(() => {
  if (darkMode) {
    document.body.style.backgroundColor = "#121212";
  } else {
    document.body.style.backgroundColor = "white";
  }
}, [darkMode]);

const toggle=()=>{
    setDarkMode(!darkMode);
}

   const fecthedNews=async()=>{
    setLoading(true);
    setCategory("latest");
   const res=await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en`)
   const data= await res.json()
   setNews(data.results || []);
   setLoading(false);
   setCategory("");

   }

    const fecthedbussiness=async()=>{
    setLoading(true);
    setCategory("business");
   const res=await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&category=business&language=en`)
   const data= await res.json()
   setNews(data.results || []);
   setLoading(false);
   setCategory("");

   }

   const fetchSports=async()=>{
    setLoading(true);
    setCategory("sports");
    const res=await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&category=sports&language=en`)
    const data= await res.json()
    setNews(data.results || []);
    setLoading(false);
    setCategory("");
   }

   const fetchTechnology=async()=>{
   setLoading(true);
   setCategory("technology");
   const res=await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&category=technology&language=en`)  
   const data= await res.json()
   setNews(data.results || []);
   setLoading(false); 
   setCategory("");
}

   
  async function searchNews() {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${search}`
    );
    const data = await res.json();
    setNews(data.results);
  }

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=apple`)
      .then((res)=> res.json())
      .then((data)=> setNews(data.results));
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


  };

  const showBookmarks = () => {
  const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
  setNews(savedNews);
  setHome(true);
};

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signin");
  }

  return (
    <div className={darkMode ? "news-container dark" : "news-container"}>
        <NavBar fetchLatestNews={fecthedNews} loading={loading} sport={fetchSports} tech={fetchTechnology} busi={fecthedbussiness} cat={category} log={handleLogout} toggle={toggle} darkMode={darkMode} showSearch={showSearch}  setShowSearch={setShowSearch} sb={showBookmarks} page="news" home={Home} goHome={goHome}/>
 <div className="bookmark-btns">
</div>

      {showSearch && (
  <div className="search-box">
    <input
      type="text"
      placeholder="Search news..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button onClick={searchNews}>Search</button>
  </div>
)}

      <div className="news-grid">
  {news.length > 0 &&
    news.map((item, id) => (
      <div className="news-card" key={id}>
        <div>
          <img src={item.image_url} alt={item.title} />
        </div>

        {!Home && (
          <button
            className={savedLinks.includes(item.link) ? "save-btn saved" : "save-btn"}
            onClick={() => handleSave(item)}
          >
            ★
          </button>
        )}

        <div className="news-desc">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
</div>


     
      {showButton && (
        <button className="top-btn" onClick={scrollToTop}>
          ⬆ Top
        </button>
      )}
    </div>
  );
}
