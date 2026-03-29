import ProfileCardHeader from "./ProfileCardHeader";
import InputField from "./InputField";

function EditSettingsCard() {
  return (
    <div className="profile-card">
      <ProfileCardHeader title="Edit Settings" />

      <h3>Preferences</h3>

      <InputField placeholder="Notifications" />
      <InputField placeholder="Password" />
      <InputField placeholder="Location" />
    </div>
  );
}

export default EditSettingsCard;