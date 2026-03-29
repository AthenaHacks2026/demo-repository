import { Link } from "react-router-dom";
import Navbar from "../Components2/Navbar";
import InputField from "../Components2/InputField";
import "../styles/SkillsStep.css";

function SkillsStep() {
  return (
    <div className="skills-page">
      <div className="skills-shell">
        <Navbar />

        <h1 className="skills-title">
          What skills can you offer?
        </h1>

        <div className="signup-box">
          <h2>✦ Skills</h2>

          <p className="helper-text">
            Keep it 2 words or less
          </p>

          <InputField placeholder="Skills" />

          {/* navigate to search page */}
          <Link to="/search" className="signup-btn">
            Finish signing up.
          </Link>
        </div>

        <p className="login-text">
          Already have an account? <br />
          <Link to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SkillsStep;