import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container mb-5 mt-3">
        <div className="row text-center">
          <div className="col">
            <img
              src="media/images/landing.png"
              alt=""
              style={{
                width: "70%",
              }}
              className="mb-4 mt-5 "
            />
            <h1 className="mt-2">Invest in everything</h1>
            <p className=" fs-5 text-muted">
              Online platform to invest in stocks, derivatives, mutual funds,
              and more
            </p>

            <Link
              to={"/signup"}
              className="btn btn-primary mt-4 fs-5"
              style={{ width: "15%", fontWeight: "600" }}
            >
              singn up now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
