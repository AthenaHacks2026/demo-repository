function UserCard({ profilePic, name, description, skills, lookingFor }) {
  return (
    <div className="user-card">
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

      <div className="looking-block">
        <p className="label">Looking For</p>
        <p className="looking-text">{lookingFor}</p>
      </div>

      <button className="request-btn">Send Swap Request</button>
    </div>
  );
}

export default UserCard;