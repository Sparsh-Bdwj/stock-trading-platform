import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="row p-5  d-flex justify-content-between">
            <div className="col-7">
              <h5>Support Portal</h5>
            </div>
            <div className="col-5">
              <h6 className="text-end">
                <Link to="/signup" className="text-white">
                  Track Ticket
                </Link>
              </h6>
            </div>
          </div>
          <div className="row px-5">
            <div className="col-6">
              <h4 className="fw-light">
                Search for an answer or browse help topics to create a ticket
              </h4>
              <form className="d-flex my-3 search">
                <input
                  className="form-control  me-2 p-3 "
                  type="search"
                  placeholder="Eg: how do i active F&O, why is my order getting rejected..."
                  aria-label="Search"
                />
              </form>
              <div className="links" style={{ fontSize: "1.1rem" }}>
                <span>
                  <Link to="/signup" className="text-white  ">
                    Track account opening
                  </Link>
                </span>
                <span>
                  <Link to="/signup" className="text-white">
                    Track segment activation
                  </Link>
                </span>
                <span>
                  <Link to="/signup" className="text-white">
                    {" "}
                    Intraday margins
                  </Link>
                </span>{" "}
                <br />
                <span>
                  <Link to="/signup" className="text-white">
                    Kite user manual
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-6 p-4">
              <h4>Featured</h4>
              <ol style={{ color: "#fff" }} className="lh-lg">
                <li>
                  <Link to="/signup" style={{ color: "#fff" }}>
                    Issue with order status update [Resolved]
                  </Link>
                </li>
                <li>
                  <Link to="/signup" style={{ color: "#fff" }}>
                    Surveillance measure on scrips - July 2024
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
