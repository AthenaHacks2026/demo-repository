import "../styles/Home.css";
import { Link } from "react-router-dom";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import profilePic from "../assets/image.png";

function Home() {
  return (
    <div className="page">
      <div className="top-section">
        <header className="navbar">
          <div className="logo-box">Logo Here</div>

          <nav className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/profile">Sign Up</Link>
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
              <Link to="/services" className="search-btn">
                Search Services →
              </Link>
              <button className="offer-btn">Offer Services →</button>
            </div>
          </div>
        </section>
      </div>

      <section className="about-section">
        <h2>Who we are</h2>

        <div className="cards-container">
          <div className="info-card mission-card">
            <div className="star">
              <img src={star3} alt="Mission icon" />
            </div>
            <h3>Mission</h3>
            <p>
              ✦ Dedicated to making skills accessible for your community for
              mutual benefit
            </p>
          </div>

          <div className="info-card goal-card">
            <div className="star">
              <img src={star2} alt="Goal icon" />
            </div>
            <h3>Goal</h3>
            <p>
              ✦ Dedicated to making skills accessible for your community for
              mutual benefit
            </p>
          </div>

          <div className="info-card vision-card">
            <div className="star">
              <img src={star1} alt="Vision icon" />
            </div>
            <h3>Vision</h3>
            <p>✦ Cute!</p>
            <p>✦ Blah Blah</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Skills near you</h2>

        <input
          type="text"
          className="zip-input"
          placeholder="Enter your zipcode"
        />

        <p className="zip-helper">
          Can’t find the skills you’re looking for? Login to create a request.
        </p>

        <button className="login-small">Login</button>

        <div className="cards-grid">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div className="user-card" key={card}>
              <div className="user-header">
                <img src={profilePic} alt="Profile" className="profile-img" />

                <div className="user-text">
                  <h3 className="user-name">Kenia</h3>
                  <p className="user-description">
                    I learned how to crochet when I was 18 and can draw or cut
                    :D
                  </p>
                </div>
              </div>

              <div className="skills-block">
                <p className="label">Skills</p>
                <div className="tags-row">
                  <span className="tag tag-baking">Baking</span>
                  <span className="tag tag-crochet">Crochet</span>
                  <span className="tag tag-drawing">Drawing</span>
                </div>
              </div>

              <div className="looking-block">
                <p className="label">Looking For</p>
                <p className="looking-text">Anything LMK :D</p>
              </div>

              <button className="request-btn">Send Swap Request</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;