import "./homePage.scss";
import photo from "../../photo/hero.png"

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MiCasa</h1>
          <p className="hero-subtitle">
            Find your perfect home with our comprehensive real estate platform
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Start Searching</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

      </section>
    </div>
  );
}

export default HomePage;
