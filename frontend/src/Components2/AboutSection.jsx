import InfoCard from "./InfoCard";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2>Who we are</h2>

      <div className="cards-container">
        <InfoCard
          title="Mission"
          textLines={[
            "✦ Dedicated to making",
            "skills accessible for your",
            "community for mutual",
            "benefit",
          ]}
          extraClass="mission-card"
          starImage={star3}
          altText="Mission icon"
        />

        <InfoCard
          title="Goal"
          textLines={[
            "✦ Dedicated to making",
            "skills accessible for your",
            "community for mutual",
            "benefit",
          ]}
          extraClass="goal-card"
          starImage={star2}
          altText="Goal icon"
        />

        <InfoCard
          title="Vision"
          textLines={["✦ Cute!", "✦ Blah Blah"]}
          extraClass="vision-card"
          starImage={star1}
          altText="Vision icon"
        />
      </div>
    </section>
  );
}

export default AboutSection;