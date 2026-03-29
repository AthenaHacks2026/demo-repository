import SignedOut_Header from "../Components/SignedOut_Header";
import SkillTag from "../Components2/SkillTag";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const skills = [
    "Baking",
    "Knitting",
    "Coding",
    "Drawing",
    "Sewing",
    "Cooking",
    "Budgeting",
  ];

  const handleLogin = () => {
    navigate("/search");
  };

  return (
    <div className="login-page">
      <div className="login-shell">
        <SignedOut_Header />

        <div className="login-container">
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

          <div className="right-panel">
            <h1 className="welcome">Welcome Back!</h1>

            <div className="login-box">
              <h2>✦ Log In</h2>

              <input className="input-field" placeholder="Email" type="email" />
              <input
                className="input-field"
                placeholder="Password"
                type="password"
              />

              <button className="login-btn" onClick={handleLogin}>
                Log In
              </button>
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