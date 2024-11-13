import ProfileCard from "./ProfileCard";

function Profile() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <ProfileCard name="Haris" age="24" location="Lahore" />
          </div>
          <div className="col-md-3">
            <ProfileCard name="Haris" age="24" location="Lahore" />
          </div>
          <div className="col-md-3">
            <ProfileCard name="Haris" age="24" location="Lahore" />
          </div>
          <div className="col-md-3">
            <ProfileCard name="Haris" age="24" location="Lahore" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
