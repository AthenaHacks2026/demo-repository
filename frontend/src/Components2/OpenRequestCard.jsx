import { useEffect, useState } from "react";
import Login_Header from "../Components/Login_Header";
import OpenRequestCard from "../Components2/OpenRequestCard";
import profilePic from "../assets/image.png";
import "../styles/OpenRequests.css";

function OpenRequests() {
  const defaultRequests = [
    {
      id: 1,
      profilePic,
      name: "Kenia",
      description: "I learned how to crochet when i was 18 and i can draw ur cat :D",
      skills: [
        { label: "Baking", className: "tag-baking" },
        { label: "Crochet", className: "tag-crochet" },
        { label: "Drawing", className: "tag-drawing" },
      ],
      requesting: "I NEED SOMEONE WHO CAN TEACH ME TO JUGGLE PLEASEEEEE",
      offer: "I CAN DO ANYTHING MY SKILLS SAY PLEASE",
    },
  ];

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem("openRequests"));

    if (savedRequests && savedRequests.length > 0) {
      const formattedRequests = savedRequests.map((request) => ({
        ...request,
        profilePic,
      }));
      setRequests(formattedRequests);
    } else {
      setRequests(defaultRequests);
    }
  }, []);

  return (
    <div className="open-requests-page">
      <div className="open-requests-shell">
        <Login_Header active="requests" />

        <div className="open-requests-header">
          <h1>Open requests.</h1>
          <p>View who in your neighborhood needs help.</p>
        </div>

        <div className="open-requests-grid">
          {requests.map((request) => (
            <OpenRequestCard
              key={request.id}
              profilePic={request.profilePic}
              name={request.name}
              description={request.description}
              skills={request.skills}
              requesting={request.requesting}
              offer={request.offer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenRequests;