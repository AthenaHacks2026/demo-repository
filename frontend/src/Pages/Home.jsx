import "../styles/Home.css";

function Home() {
  return (
    <div className="page">
      <div className="top-section">
        <header className="navbar">
          <div className="logo-box">Logo Here</div>

          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#signup">Sign Up</a>
            <button className="login-btn">Login</button>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-image"></div>

          <div className="hero-text">
            <h1>Skill Swap</h1>
            <p>Bringing back bartering.</p>
            <p>Search and swap skills!</p>

            <div className="hero-buttons">
              <button className="search-btn">Search Services</button>
              <button className="offer-btn">Offer Services</button>
            </div>
          </div>
        </section>
      </div>

      <section className="about-section">
        <h2>Who we are</h2>

        <div className="cards-container">
          <div className="info-card mission-card">
            <div className="star">⭐</div>
            <h3>Mission</h3>
            <p>
              Dedicated to making skills accessible for your community for
              mutual benefit.
            </p>
          </div>

          <div className="info-card goal-card">
            <div className="star">⭐</div>
            <h3>Goal</h3>
            <p>
              Dedicated to making skills accessible to your community for mutual
              benefit.
            </p>
          </div>

          <div className="info-card vision-card">
            <div className="star">⭐</div>
            <h3>Vision</h3>
            <p>
              Create a friendly place where people can share skills and help one
              another.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Services near you</h2>
      </section>
    </div>
  );
}

export default Home;