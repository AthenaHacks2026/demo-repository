import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-box">Logo Here</div>

      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/services">Skills</Link>
        <Link to="/profile">Sign Up</Link>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}

export default Navbar;