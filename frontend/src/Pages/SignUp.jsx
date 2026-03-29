import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import Navbar from "../Components2/Navbar";

function SignUp() {
  const skills = [
    "Baking",
    "Knitting",
    "Coding",
    "Drawing",
    "Sewing",
    "Cooking",
    "Budgeting",
    "Design",
    "Gaming",
    "Dog Grooming",
  ];

  return (
    <div className="signup-page">
      <div className="signup-shell">
        <Navbar />

        <div className="signup-container">
          <div className="left-panel">
            <h1 className="signup-title">Welcome!</h1>

            <div className="signup-box">
              <h2>✦ Sign Up</h2>

              <input className="input-field" placeholder="Email" type="email" />
              <input
                className="input-field"
                placeholder="Password"
                type="password"
              />
              <input className="input-field" placeholder="Location" type="text" />

              <Link to="/skills-step" className="signup-btn">
                Sign Up
              </Link>
            </div>

            <p className="login-text">
              Already have an account?
              <br />
              <Link to="/">Log In</Link>
            </p>
          </div>

          <div className="right-panel">
            <div className="skills-preview">
              <h1>Skill Swap</h1>
              <p>Search and swap skills!</p>
              <p>Because not everything should cost money.</p>

              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={skill === "Dog Grooming" ? "skill-tag long" : "skill-tag"}
                  >
                    ✦ {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;