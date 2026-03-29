function InfoCard({ title, textLines, extraClass, starImage, altText }) {
  return (
    <div className={`info-card ${extraClass}`}>
      <div className="star">
        <img src={starImage} alt={altText} />
      </div>

      <h3>{title}</h3>

      {textLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default InfoCard;