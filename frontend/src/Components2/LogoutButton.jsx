import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // later you can clear auth here
    navigate("/");
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default LogoutButton;