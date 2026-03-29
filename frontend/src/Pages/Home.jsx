import "../styles/Home.css";
import SignedOut_Header from "../Components/SignedOut_Header";
import HeroSection from "../Components2/HeroSection";
import AboutSection from "../Components2/AboutSection";
import ServicesSection from "../Components2/ServicesSection";

function Home() {
  return (
    <div className="page">
      <div className="top-section">
        <SignedOut_Header />
        <HeroSection />
      </div>

      <AboutSection />
      <ServicesSection />
    </div>
  );
}

export default Home;