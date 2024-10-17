import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container-fluid bg-light profile-height">
      <h1>Personal Information</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control w-50"
          id="name"
          name="name"
          value={user?.name || "Your Name"}
          readOnly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">
          Mobile
        </label>
        <input
          type="text"
          className="form-control w-50"
          id="mobile"
          name="mobile"
          value={user?.mobile || "Mobile No."}
          readOnly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailid" className="form-label">
          Email ID
        </label>
        <input
          type="text"
          className="form-control w-50"
          id="emailid"
          name="emailid"
          value={user?.emailid || "Email ID"}
          readOnly
        />
      </div>
    </div>
  );
};

export default Profile;
