import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login_Header from "../Components/Login_Header";
import "../styles/CreateRequest.css";

function CreateRequest() {
  const navigate = useNavigate();
  const [requesting, setRequesting] = useState("");
  const [offer, setOffer] = useState("");

  const mySkills = [
    { label: "Baking", className: "tag-baking" },
    { label: "Crochet", className: "tag-crochet" },
    { label: "Drawing", className: "tag-drawing" },
  ];

  const handlePost = () => {
    const newRequest = {
      id: Date.now(),
      name: "Kenia",
      description: "I learned how to crochet when I was 18 and I can draw your cat :D",
      skills: mySkills,
      requesting: requesting.trim(),
      offer: offer.trim(),
    };

    const existingRequests =
      JSON.parse(localStorage.getItem("openRequests")) || [];

    localStorage.setItem(
      "openRequests",
      JSON.stringify([newRequest, ...existingRequests])
    );

    navigate("/open-requests");
  };

  return (
    <div className="create-page">
      <Login_Header />

      <main className="create-main">
        <div className="create-top-row">
          <Link to="/search" className="back-btn">
            ← Go back
          </Link>
        </div>

        <div className="request-card">
          <h1>Create Request</h1>

          <div className="form-section">
            <p className="section-label">My Skills</p>
            <div className="tags-row">
              {mySkills.map((skill, index) => (
                <span key={index} className={`tag ${skill.className}`}>
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          <div className="form-section">
            <p className="section-label">Requesting</p>
            <textarea
              className="request-textarea"
              placeholder="What do you need?"
              value={requesting}
              onChange={(e) => setRequesting(e.target.value)}
            />
          </div>

          <div className="form-section">
            <p className="section-label">Offer</p>
            <input
              className="offer-input"
              placeholder="What are you offering?"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
            />
          </div>

          <button className="post-btn" onClick={handlePost}>
            Post Request
          </button>
        </div>
      </main>
    </div>
  );
}

export default CreateRequest;