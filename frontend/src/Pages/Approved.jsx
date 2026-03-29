import LoggedInNavbar from "../Components2/LoggedInNavbar";
import ConnectCard from "../Components2/ConnectCard";
import profilePic from "../assets/image.png";
import "../styles/Approved.css";

function Approved() {
  return (
    <div className="approved-page">
      <div className="approved-shell">
        <LoggedInNavbar active="requests" />

        <div className="approved-content">
          <h1 className="approved-title">Accepted!</h1>

          <ConnectCard
            profilePic={profilePic}
            name="Hanna"
            subtitle="NO REQUEST FROM MINIKUS!!!!"
            contact="hannalody22@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Approved;