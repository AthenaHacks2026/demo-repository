import "../styles/Home.css";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import userImg from "../assets/temp_img.png";
import star1 from "../assets/star1.png";

import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import profilePic from "../assets/image.png";

function SignedOut_Header() {
  return (
    <header className="navbar">
        <div className="logo-box">Logo Here</div>
        
        <nav className="nav-menu">
            <Link to="/">Inbox</Link>
            <Link to="/">Search Skills</Link>
            <Link to="/services">Open Requests</Link>
      </nav>
      
      <img src={userImg} alt="Placeholder" width="50" height="50"/>

    </header>
  );
}
export default SignedOut_Header;