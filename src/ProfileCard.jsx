function ProfileCard(props) {
  return (
    <>
      <div class="container my-4 d-flex justify-content-center">
        <div class="row">
          <div class="card mx-4 border border-2 border-dark">
            <div class="card-body">
              <h5 class="card-title">{props.name} </h5>
              <p class="card-text">{props.age} </p>
              <p class="card-text">{props.location} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
