import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import profilePic from "../assets/temp_img.png";

function Login_Header() {
  const location = useLocation();

  return (
    <header className="navbar">
      <Link to="/" className="logo-box">
        Skill Swap
      </Link>

      <nav className="nav-menu">
        <Link
          to="/inbox-received"
          className={location.pathname === "/inbox-received" ? "active-link" : ""}
        >
          Inbox
        </Link>

        <Link
          to="/search"
          className={location.pathname === "/search" ? "active-link" : ""}
        >
          Search Skills
        </Link>

        <Link
          to="/open-requests"
          className={location.pathname === "/open-requests" ? "active-link" : ""}
        >
          Open Requests
        </Link>
      </nav>

      <a href="/profile">
        <img src={profilePic} alt="Profile" className="nav-user-img" />
      </a>
    </header>
  );
}

export default Login_Header;