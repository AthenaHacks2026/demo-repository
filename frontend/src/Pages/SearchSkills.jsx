import { Link } from "react-router-dom";
import LoggedInNavbar from "../Components2/LoggedInNavbar";
import UserCard from "../Components2/UserCard";
import profilePic from "../assets/image.png";
import "../styles/SearchSkills.css";

function SearchSkills() {
  const users = [1, 2, 3, 4, 5, 6];

  const skillTags = [
    { label: "Baking", className: "tag-baking" },
    { label: "Crochet", className: "tag-crochet" },
    { label: "Drawing", className: "tag-drawing" },
  ];

  return (
    <div className="search-page">
      <div className="search-shell">
        <LoggedInNavbar active="search" />

        <div className="search-header">
          <h1>Skills near You</h1>
          <p>View what swap you can make in your neighborhood.</p>

          <p className="small-text">Can’t find the skill you're looking for?</p>

          <Link to="/create-request" className="create-btn">
            Create a Post!
          </Link>
        </div>

        <div className="cards-grid">
          {users.map((user) => (
            <UserCard
              key={user}
              profilePic={profilePic}
              name="Kenia"
              description="I learned how to crochet when I was 18 and i can draw ur cat :D"
              skills={skillTags}
              lookingFor="Anything lmk :D"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSkills;