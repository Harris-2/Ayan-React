
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand text-light fs-2" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className=" d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active text-light fs-5" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light fs-5" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light fs-5" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light fs-5" href="#">Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        
    );
}

export default Navbar