import "../styles/Home.css";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import userImg from "../assets/temp_img.png";
import star1 from "../assets/star1.png";

import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import profilePic from "../assets/temp_img.png";

function Login_Header() {
  return (
    <header className="navbar">
        <div className="logo-box">Logo Here</div>
        
        <nav className="nav-menu">
            <Link to="/inbox-received">Inbox</Link>
            <Link to="/search">Search Skills</Link>
            <Link to="/services">Open Requests</Link>
      </nav>
      
      <img src={profilePic} alt="Placeholder" width="50" height="50"/>

    </header>
  );
}
export default Login_Header;