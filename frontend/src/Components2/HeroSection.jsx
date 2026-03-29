import { Link } from "react-router-dom";

function HeroSection() {
  const skills = [
    "✦ Baking",
    "✦ Knitting",
    "✦ Coding",
    "✦ Drawing",
    "✦ Sewing",
    "✦ Cooking",
    "✦ Budgeting",
    "✦ Design",
    "✦ Gaming",
    "✦ Nail Styling",
  ];

  return (
    <section className="hero">
      <div className="hero-image">
        <div className="hero-skills">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={skill === "✦ Dog Grooming" ? "hero-skill long" : "hero-skill"}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-text">
        <h1>Skill Swap</h1>
        <p>Bringing back bartering.</p>
        <p>Search and swap skills!</p>

        <div className="hero-buttons">

          <a href="#skills" className="search-btn">
            Search Services →
          </a>

          <Link to="/login" className="offer-btn">Offer Services →</Link>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;