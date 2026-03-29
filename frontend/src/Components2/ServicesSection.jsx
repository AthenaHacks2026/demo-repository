import profilePic from "../assets/image.png";
import UserCard from "./UserCard";

function ServicesSection() {
  const users = [1, 2, 3, 4, 5, 6];

  const skillTags = [
    { label: "Baking", className: "tag-baking" },
    { label: "Crochet", className: "tag-crochet" },
    { label: "Drawing", className: "tag-drawing" },
  ];

  return (
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
        {users.map((user) => (
          <UserCard
            key={user}
            profilePic={profilePic}
            name="Kenia"
            description="I learned how to crochet when I was 18 and can draw or cut :D"
            skills={skillTags}
            lookingFor="Anything LMK :D"
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;