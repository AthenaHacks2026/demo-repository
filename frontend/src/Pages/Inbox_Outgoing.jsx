import { Link } from "react-router-dom";
import Login_Header from "../Components/Login_Header";
import UserCard from "../Components2/UserCard";
import profilePic from "../assets/randy.png";
import "../styles/SearchSkills.css";
import Inbox_Navigation from "../Components/Inbox_Navigation";
import Card_AcceptedRequest from "../Components2/Card_AcceptedRequest";

function Inbox_Outgoing() {
  const users = [1, 2, 3, 4];

  const skillTags = [
    { label: "Baking", className: "tag-baking" },
  ];

  return (
    <div className="search-page">
      <div className="search-shell">
        <Login_Header active="inbox-outgoing" />

        <div className="search-header">
          <h1>Inbox</h1>
          <p>All your outgoing requests.</p>

          <Inbox_Navigation active="inbox-outgoing" />
        </div>

        <div className="cards-grid">
          {users.map((user) => (
            <Card_AcceptedRequest
              key={user}
              profilePic={profilePic}
              name="Randy"
              description="I learned how to crochet when I was 18 and i can draw ur cat :D"
              skills={skillTags}
              lookingFor="Anything lmk :D"
              tradeDescription="I’ve been craving a cake! I am willing to trade a 15 minute photo session??"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inbox_Outgoing;