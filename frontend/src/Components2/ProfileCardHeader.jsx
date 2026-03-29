import editIcon from "../assets/image2.png";

function ProfileCardHeader({ title }) {
  return (
    <div className="card-header">
      <h2>{title}</h2>
      <img src={editIcon} alt="Edit" className="edit-icon-img" />
    </div>
  );
}

export default ProfileCardHeader;