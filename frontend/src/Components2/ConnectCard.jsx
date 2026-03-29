import { useNavigate } from "react-router-dom";

function ConnectCard({ profilePic, name, subtitle, contact }) {
  const navigate = useNavigate();

  return (
    <div className="connect-card">
      <h2>Connect!</h2>

      <div className="connect-user-row">
        <img src={profilePic} alt="Profile" className="connect-profile-img" />

        <div className="connect-user-text">
          <h3>{name}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="connect-section">
        <p className="connect-label">✦ Contact</p>
        <div className="contact-box">{contact}</div>
      </div>

      <button
        className="close-btn"
        onClick={() => navigate("/inbox-accepted")}
      >
        Close Page
      </button>
    </div>
  );
}

export default ConnectCard;