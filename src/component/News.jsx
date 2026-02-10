import { useEffect, useState } from "react";
import "./News.css";
import NavBar from "./NavBar";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

const apiKey = import.meta.env.VITE_API_KEY;


   const fecthedNews=async()=>{
    setLoading(true);
   const res=await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en`)
   const data= await res.json()
   setNews(data.results || []);
   setLoading(false);

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
      .then((res) => res.json())
      .then((data) => setNews(data.results));
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

  return (
    <div className="news-container">
        <NavBar news={fecthedNews}/>


      <div className="search-box">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchNews}>Search</button>
      </div>

      {news.length > 0 &&
        news.map((item, id) => (
          <div className="news-card" key={id}>
            <div>
              <img src={item.image_url} alt={item.title} />
            </div>

            <div className="news-desc">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}

     
      {showButton && (
        <button className="top-btn" onClick={scrollToTop}>
          ⬆ Top
        </button>
      )}
    </div>
  );
}
