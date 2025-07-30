import "./homePage.scss";
import photo from "../../photo/hero.png"
import SearchBar from "@/components/searchbar/SearchBar";

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover your dream home</h1>
       
          {/* <div className="hero-actions">
            <button className="btn-primary">Start Searching</button>
            <button className="btn-secondary">Learn More</button>
          </div> */}
          <div className="search-bar"><SearchBar /></div>
          
        </div>

      </section>
    </div>
  );
}

export default HomePage;
