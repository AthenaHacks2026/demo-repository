import "../styles/Home.css";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function SignedOut_Header() {
  return (
    <header className="navbar">
      <div className="logo-box">Logo Here</div>

      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/search">Skills</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default SignedOut_Header;