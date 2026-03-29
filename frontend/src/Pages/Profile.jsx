import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login_Header from "../Components/Login_Header";
import ProfileHero from "../Components2/ProfileHero";
import EditProfileCard from "../Components2/EditProfileCard";
import EditSettingsCard from "../Components2/EditSettingsCard";
import LogoutButton from "../Components2/LogoutButton";
import { getCurrentUser } from "../api/mockApi";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();

        if (!user) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [navigate]);

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <Login_Header />
      <ProfileHero />

      <div className="profile-content">
        <EditProfileCard />
        <EditSettingsCard />
      </div>

      <LogoutButton />
    </div>
  );
}

export default Profile;