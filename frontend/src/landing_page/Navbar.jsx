import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top "
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-1">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="L0go"
            style={{ width: "20%" }}
            className="m-2"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-muted"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active text-muted"
                  to="/about"
                  aria-current="page"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-muted"
                  to="/product"
                  aria-current="page"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link to="/pricing" className="nav-link active text-muted">
                  Pricing
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link to="/support" className="nav-link active text-muted">
                  Support
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link to="/" className="nav-link active text-muted">
                  <i className="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
