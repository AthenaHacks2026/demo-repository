import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import SignedOut_Header from "../Components/SignedOut_Header";

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
    "Budgeting",
  ];

  return (
    <div className="signup-page">
      <div className="signup-shell">
        <SignedOut_Header />

        <main className="signup-container">
          <section className="left-panel">
            <h1 className="signup-title">Welcome!</h1>

            <div className="signup-box">
              <h2>✦ Sign Up</h2>

              <input
                className="input-field"
                type="email"
                placeholder="Email"
              />

              <input
                className="input-field"
                type="password"
                placeholder="Password"
              />

              <input
                className="input-field"
                type="text"
                placeholder="Location"
              />

              <Link to="/skills-step" className="signup-btn">
                Sign Up
              </Link>
            </div>

            <p className="login-text">
              Already have an account?
              <br />
              <Link to="/">Log In</Link>
            </p>
          </section>

          <section className="right-panel">
            <div className="skills-preview">
              <h1 className="skills-title">Skill Swap</h1>

              <p>Search and swap skills!</p>
              <p>Because not everything should cost money.</p>

              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className={`skill-tag ${
                      skill === "Dog Grooming" ? "long" : ""
                    }`}
                  >
                    ✦ {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default SignUp;