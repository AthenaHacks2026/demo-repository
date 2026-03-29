import "../styles/Home.css";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import profilePic from "../assets/temp_img.png";

function Login_Header() {
  return (
    <header className="navbar">
        <div className="logo-box">Logo Here</div>
        
        <nav className="nav-menu">
            <Link to="/inbox-received">Inbox</Link>
            <Link to="/search">Search Skills</Link>
            <Link to="/open-requests">Open Requests</Link>
      </nav>

      {/* FIXED: use class instead of width/height */}
      <img src={profilePic} alt="Profile" className="nav-user-img" />
    </header>
  );
}

export default Login_Header;