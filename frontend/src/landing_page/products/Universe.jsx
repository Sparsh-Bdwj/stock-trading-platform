import { Link } from "react-router-dom";

function Universe() {
  return (
    <>
      <div className="container m-5">
        <div className="row text-center">
          <div className="col">
            <p className="fs-5">
              Want to know more about our technology stack? Check out the{" "}
              <a
                href="https://zerodha.tech/"
                style={{ textDecoration: "none" }}
              >
                Zerodha.tech
              </a>{" "}
              blog.
            </p>
            <h2 className="fs-1 mt-5 pt-5">The Zerodha Universe</h2>
            <p className="mt-5">
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
            <div className="container m-5 p-5">
              <div className="row ">
                <div className="col-4">
                  <a
                    href="https://smallcase.zerodha.com/"
                    style={{ textDecoration: "none" }}
                    className="text-muted"
                    target="/"
                  >
                    <img
                      src="media/images/smallcase-logo.png"
                      alt="Small Case"
                    />
                    <p className="text-fade mt-3" style={{ fontSize: ".8rem" }}>
                      Thematic Investment Platform
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="https://www.streak.tech/home"
                    style={{ textDecoration: "none" }}
                    className="text-muted"
                    target="/"
                  >
                    <img
                      src="media/images/streak-logo.png"
                      alt="Streak Logo"
                      style={{ width: "45%" }}
                    />
                    <p className="text-fade mt-3" style={{ fontSize: ".8rem" }}>
                      Algo & Startegy platform
                    </p>
                  </a>
                </div>
                <div className="col-4 mt-2">
                  <a
                    href="https://sensibull.com/"
                    style={{ textDecoration: "none" }}
                    className="text-muted"
                    target="/"
                  >
                    <img
                      src="media/images/sensibull-logo.svg"
                      alt="SensiBull"
                      style={{ width: "55%" }}
                    />
                    <p className="text-fade mt-3" style={{ fontSize: ".8rem" }}>
                      Options Trading platform
                    </p>
                  </a>
                </div>
              </div>
              <div className="row text-center mt-3">
                <div className="col-4">
                  <a
                    href="https://www.zerodhafundhouse.com/"
                    style={{ textDecoration: "none" }}
                    className="text-muted"
                    target="/"
                  >
                    <img
                      src="media/images/zerodhafundhouse.png"
                      alt="zerodhafundhouse"
                      style={{ width: "50%" }}
                    />
                    <p className="text-fade mt-3" style={{ fontSize: ".8rem" }}>
                      Asset Management
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="https://www.tijorifinance.com/features/"
                    style={{ textDecoration: "none" }}
                    className="text-muted"
                    target="/"
                  >
                    <img
                      src="media/images/tijori.svg"
                      alt="tijori"
                      style={{ width: "40%" }}
                    />
                    <p className="text-fade mt-3" style={{ fontSize: ".8rem" }}>
                      Fundamental Research platform
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="https://joinditto.in/"
                    style={{ textDecoration: "none" }}
                    className="text-muted"
                    target="/"
                  >
                    <img
                      src="media/images/ditto-logo.png"
                      alt="ditto"
                      style={{ width: "30%" }}
                    />
                    <p className="text-fade mt-3" style={{ fontSize: ".8rem" }}>
                      Insurance
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <Link to={"/signup"} className="btn btn-primary fs-5 mb-4  fw-bold">
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
