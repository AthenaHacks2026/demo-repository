import LoggedInNavbar from "../Components2/LoggedInNavbar";
import OpenRequestCard from "../Components2/OpenRequestCard";
import profilePic from "../assets/image.png";
import "../styles/OpenRequests.css";

function OpenRequests() {
  const requests = [1, 2, 3, 4, 5, 6];

  const skillTags = [
    { label: "Baking", className: "tag-baking" },
    { label: "Crochet", className: "tag-crochet" },
    { label: "Drawing", className: "tag-drawing" },
  ];

  return (
    <div className="open-requests-page">
      <div className="open-requests-shell">
        <LoggedInNavbar active="requests" />

        <div className="open-requests-header">
          <h1>Open requests.</h1>
          <p>View who in your neighborhood needs help.</p>
        </div>

        <div className="open-requests-grid">
          {requests.map((request) => (
            <OpenRequestCard
              key={request}
              profilePic={profilePic}
              name="Kenia"
              description="I learned how to crochet when i was 18 and i can draw ur cat :D"
              skills={skillTags}
              requesting="I NEED SOMEONE WHO CAN TEACH ME TO JUGGLE PLEASEEEEE"
              offer="I CAN DO ANYTHING MY SKILLS SAY PLEASE"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenRequests;