import { Link } from "react-router-dom";
import Login_Header from "../Components/Login_Header";
import "../styles/CreateRequest.css";

function CreateRequest() {
  const mySkills = [
    { label: "Baking", className: "tag-baking" },
    { label: "Crochet", className: "tag-crochet" },
    { label: "Drawing", className: "tag-drawing" },
  ];

  return (
    <div className="create-page">
      <div className="create-shell">
        <Login_Header />

        <div className="create-content">
          <Link to="/search" className="back-btn">
            ← Go back
          </Link>

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
              />
            </div>

            <div className="form-section">
              <p className="section-label">Offer</p>
              <input
                className="offer-input"
                placeholder="What are you offering?"
              />
            </div>

            <button className="post-btn">Post Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRequest;