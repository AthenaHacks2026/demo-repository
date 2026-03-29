import "../styles/Approved.css";
import { Link } from "react-router-dom";


function Card_NewRequest({ profilePic, name, description, skills, lookingFor, tradeDescription}) {
  return (
    // USER - PROFILE, NAME, DESCRP
    <div className="user-card">
      <div className="user-header">
        <img src={profilePic} alt="Profile" className="profile-img" />

        <div className="user-text">
          <h3 className="user-name">{name}</h3>
          <p className="user-description">{description}</p>
        </div>
      </div>


      <div className="skills-block">
        <p className="label">Requesting:</p>
        <div className="tags-row">
          {skills.map((skill, index) => (
            <span key={index} className={`tag ${skill.className}`}>
              {skill.label}
            </span>
          ))}
        </div>
      </div>

      <div className="trade-description">
        <p className="label">Trade Description</p>
        <p className="trade-text">{tradeDescription}</p>
      </div>

      <div className="container">
        <button className="deny-btn">Deny</button>
        
        <Link to="/approved" className="accept-btn">
        Accept
        </Link>
          
    
      </div>
      
    </div>
  );
}

export default Card_NewRequest;