import "../styles/Home.css";
import "../styles/Header.css";
import "../styles/Inbox_Navigation.css";
import { Link } from "react-router-dom";

function Inbox_Navigation() {
  return (
    <header className="inbox-navbar">
        <div className="container">

          <Link to="/inbox-received">
            <button className="received-btn">Received</button>
          </Link>

          <Link to="/inbox-outgoing">
            <button className="outgoing-btn">Outgoing</button>
          </Link>

          <Link to="/inbox-accepted">
            <button className="accepted-btn">Accepted</button>
          </Link>

        </div>
        

    </header>
  );
}
export default Inbox_Navigation;