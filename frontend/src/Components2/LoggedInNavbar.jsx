import { Link } from "react-router-dom";
import profilePic from "../assets/image.png";

function LoggedInNavbar({ active = "" }) {
  return (
    <nav className="logged-navbar">
      <div className="logo-box">Logo Here</div>

      <div className="logged-nav-center">
        <Link to="/inbox" className={active === "inbox" ? "active-link" : ""}>
          Inbox
        </Link>

        <Link to="/search" className={active === "search" ? "active-link" : ""}>
          Search Skills
        </Link>

        <Link
          to="/open-requests"
          className={active === "requests" ? "active-link" : ""}
        >
          Open Requests
        </Link>
      </div>

      <div className="logged-profile">
        <img src={profilePic} alt="Profile" className="nav-profile-img" />
      </div>
    </nav>
  );
}

export default LoggedInNavbar;