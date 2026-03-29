function OpenRequestCard({
  profilePic,
  name,
  description,
  skills,
  requesting,
  offer,
  onAccept,
}) {
  return (
    <div className="open-request-card">
      <div className="open-request-top">
        <img src={profilePic} alt={name} className="open-request-avatar" />

        <div className="open-request-userinfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <h3>Skills</h3>
      <div className="open-request-skills">
        {skills.map((skill, index) => (
          <span key={index} className={`skill-pill ${skill.className}`}>
            {skill.label}
          </span>
        ))}
      </div>

      <h3>Requesting</h3>
      <p className="open-request-text">{requesting}</p>

      <h3>Offer</h3>
      <p className="open-request-text">{offer}</p>

      {onAccept && (
        <button className="open-request-accept-btn" onClick={onAccept}>
          Accept
        </button>
      )}
    </div>
  );
}

export default OpenRequestCard;