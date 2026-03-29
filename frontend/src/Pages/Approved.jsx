import Login_Header from "../Components/Login_Header";
import ConnectCard from "../Components2/ConnectCard";
import profilePic from "../assets/image.png";
import "../styles/Approved.css";

function Approved() {
  return (
    <div className="approved-page">
      <Login_Header />

      <main className="approved-main">
        <h1 className="approved-title">Accepted!</h1>

        <ConnectCard
          profilePic={profilePic}
          name="Hanna"
          subtitle="NO REQUEST FROM MINIKUS!!!!"
          contact="hannalody22@gmail.com"
        />
      </main>
    </div>
  );
}

export default Approved;