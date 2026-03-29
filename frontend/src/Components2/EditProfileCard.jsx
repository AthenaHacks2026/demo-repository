import ProfileCardHeader from "./ProfileCardHeader";
import InputField from "./InputField";
import SkillTag from "./SkillTag";

function EditProfileCard() {
  const skills = ["Baking", "Crochet", "Drawing"];

  return (
    <div className="profile-card">
      <ProfileCardHeader title="Edit Profile" />

      <p className="bio">
        I learned how to crochet when I was 18 and I can draw your cat :D
      </p>

      <h3>Skills</h3>
      <div className="skills-row">
        {skills.map((s, i) => (
          <SkillTag key={i} label={s} />
        ))}
      </div>

      <h3>Information</h3>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <InputField placeholder="Location" />
    </div>
  );
}

export default EditProfileCard;