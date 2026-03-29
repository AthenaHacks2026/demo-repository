import "../styles/Home.css";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import profilePic from "../assets/image.png";

function SignedOut_Header() {
  return (
    <header className="navbar">
      <div className="logo-box">Logo Here</div>

      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/search">Skills</Link>
        <Link to="/signup">Sign Up</Link>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}
export default SignedOut_Header;