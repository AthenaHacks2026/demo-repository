import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/mockApi";
import profileImage from "../assets/image.png";

function ProfileHero() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Failed to load user:", error);
      }
    };

    loadUser();
  }, []);

  return (
    <div className="profile-hero">
      <h1>{user ? `${user.name}'s Profile` : "My Profile"}</h1>
      <img src={profileImage} alt="Profile" className="profile-img" />
    </div>
  );
}

export default ProfileHero;