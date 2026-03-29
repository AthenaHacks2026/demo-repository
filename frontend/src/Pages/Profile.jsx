import Login_Header from "../Components/Login_Header";
import ProfileHero from "../Components2/ProfileHero";
import EditProfileCard from "../Components2/EditProfileCard";
import EditSettingsCard from "../Components2/EditSettingsCard";
import LogoutButton from "../Components2/LogoutButton";
import "../styles/Profile.css";

function Profile() {
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