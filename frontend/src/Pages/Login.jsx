import Navbar from "../Components2/Navbar";
import SkillTag from "../Components2/SkillTag";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const skills = [
    "Baking", "Knitting", "Coding",
    "Drawing", "Sewing", "Cooking",
    "Budgeting", "Design", "Gaming",
    "Dog Grooming", "Budgeting"
  ];

  return (
    <div className="login-page">
      <div className="login-shell">
        <Navbar />

        <div className="login-container">
          
          {/* LEFT SIDE */}
          <div className="left-panel">
            <h1 className="title">Skill Swap</h1>
            <p>Search and swap skills!</p>
            <p>Because not everything should cost money.</p>

            <div className="skills-grid">
              {skills.map((skill, i) => (
                <SkillTag key={i} label={skill} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-panel">
            <h1 className="welcome">Welcome Back!</h1>

            <div className="login-box">
              <h2>✦ Log In</h2>

              <input className="input-field" placeholder="Email" />
              <input
                className="input-field"
                placeholder="Password"
                type="password"
              />

              <button className="login-btn">Log In</button>
            </div>

            <p className="signup-link">
              Don’t have an account?
              <br />
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;