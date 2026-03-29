import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/mockApi";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/login");
    }
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default LogoutButton;