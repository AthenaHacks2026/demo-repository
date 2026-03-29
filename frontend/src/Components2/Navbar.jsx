import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-box">Skill Swap</div>

      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/services">Skills</Link>

        <Link to="/signup" className="login-btn">
          Sign Up
        </Link>

        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;