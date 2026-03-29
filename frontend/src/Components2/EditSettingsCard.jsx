import { useEffect, useState } from "react";
import ProfileCardHeader from "./ProfileCardHeader";
import InputField from "./InputField";
import { getCurrentUser, updateCurrentUserProfile } from "../api/mockApi";

function EditSettingsCard() {
  const [notifications, setNotifications] = useState("Enabled");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await getCurrentUser();

        if (user) {
          setPassword(user.password || "");
          setLocation(user.location || "");
        }
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    };

    loadUser();
  }, []);

  const handleSave = async () => {
    try {
      await updateCurrentUserProfile({
        password,
        location,
      });

      alert("Settings updated successfully!");
    } catch (error) {
      alert("Failed to save settings.");
    }
  };

  return (
    <div className="profile-card">
      <ProfileCardHeader title="Edit Settings" />

      <h3>Preferences</h3>

      <InputField
        placeholder="Notifications"
        value={notifications}
        onChange={(e) => setNotifications(e.target.value)}
      />

      <InputField
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <InputField
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button className="save-btn" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
}

export default EditSettingsCard;