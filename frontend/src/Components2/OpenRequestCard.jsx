import { Link } from "react-router-dom";

function OpenRequestCard({
  profilePic,
  name,
  description,
  skills,
  requesting,
  offer,
}) {
  return (
    <div className="open-request-card">
      <div className="user-header">
        <img src={profilePic} alt="Profile" className="profile-img" />

        <div className="user-text">
          <h3 className="user-name">{name}</h3>
          <p className="user-description">{description}</p>
        </div>
      </div>

      <div className="skills-block">
        <p className="label">Skills</p>
        <div className="tags-row">
          {skills.map((skill, index) => (
            <span key={index} className={`tag ${skill.className}`}>
              {skill.label}
            </span>
          ))}
        </div>
      </div>

      <div className="requesting-block">
        <p className="label">Requesting</p>
        <p className="requesting-text">{requesting}</p>
      </div>

      <div className="offer-block">
        <p className="label">Offer</p>
        <p className="offer-text">{offer}</p>
      </div>

      {/* 🔥 THIS is the important change */}
      <Link to="/approved" className="accept-btn">
        Accept
      </Link>
    </div>
  );
}

export default OpenRequestCard;