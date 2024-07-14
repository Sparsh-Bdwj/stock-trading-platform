import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container m-5">
        <div className="row text-center">
          <div className="col-1"></div>
          <div className="col-10 border-bottom mt-5 mb-5">
            <h2 className="fs-1">Technology</h2>
            <p className="fs-5 mt-3 text-muted">
              Sleek, modern, and intuitive trading platforms
            </p>
            <p style={{ marginBottom: "7rem" }}>
              Check out our{" "}
              <Link to={"/investments"} style={{ textDecoration: "none" }}>
                investment offerings <i className="fa-solid fa-arrow-right"></i>
              </Link>{" "}
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
