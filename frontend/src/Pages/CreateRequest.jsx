import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignedOut_Header from "../Components/SignedOut_Header";
import { signupUser } from "../api/mockApi";
import "../styles/SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSignup = async () => {
    setErrorMessage("");

    if (!email.trim() || !password.trim() || !location.trim()) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      await signupUser({ email, password, location });
      navigate("/skills-step");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="input-field"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                className="input-field"
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              {errorMessage && <p className="error-text">{errorMessage}</p>}

              <button
                className="signup-btn"
                onClick={handleSignup}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </div>

            <p className="login-text">
              Already have an account?
              <br />
              <Link to="/login">Log In</Link>
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
                    className={`skill-tag ${skill === "Dog Grooming" ? "long" : ""}`}
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