import "../styles/Home.css";
import Navbar from "../Components2/Navbar";
import HeroSection from "../Components2/HeroSection";
import AboutSection from "../Components2/AboutSection";
import ServicesSection from "../Components2/ServicesSection";

function Home() {
  return (
    <div className="page">
      <div className="top-section">
        <Navbar />
        <HeroSection />
      </div>

      <AboutSection />
      <ServicesSection />
    </div>
  );
}

export default Home;