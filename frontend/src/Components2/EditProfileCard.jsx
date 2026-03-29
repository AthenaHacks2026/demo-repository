import { useEffect, useState } from "react";
import ProfileCardHeader from "./ProfileCardHeader";
import InputField from "./InputField";
import SkillTag from "./SkillTag";
import { getCurrentUser, updateCurrentUserProfile } from "../api/mockApi";

function EditProfileCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await getCurrentUser();

        if (currentUser) {
          setEmail(currentUser.email || "");
          setPassword(currentUser.password || "");
          setLocation(currentUser.location || "");
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      }
    };

    loadUser();
  }, []);

  const skills = ["Baking", "Crochet", "Drawing"];

  const handleSave = async () => {
    try {
      await updateCurrentUserProfile({
        email,
        password,
        location,
      });

      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to save profile.");
    }
  };

  return (
    <div className="profile-card">
      <ProfileCardHeader title="Edit Profile" />

      <p className="bio">
        I learned how to crochet when I was 18 and I can draw your cat :D
      </p>

      <h3>Skills</h3>
      <div className="skills-row">
        {skills.map((skill, index) => (
          <SkillTag key={index} label={skill} />
        ))}
      </div>

      <h3>Information</h3>
      <InputField
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        Save Changes
      </button>
    </div>
  );
}

export default EditProfileCard;