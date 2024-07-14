import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center">People</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-1"></div>
          <div className="col-4 p-5 text-center">
            <img
              src="media/images/nithin-kamath.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "80%" }}
            />
            <h4 className="text-muted mt-3">Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="col-5 mt-5 pt-3">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="mt-4">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="mt-4">Playing basketball is his zen.</p>
            <p className="mt-4">
              Connect on{" "}
              <Link
                to={"https://nithinkamath.me/"}
                style={{ textDecoration: "none" }}
                target="/"
              >
                Homepage
              </Link>
              <Link
                to={"https://tradingqna.com/u/nithin/summary"}
                style={{ textDecoration: "none" }}
                target="/"
              >
                / TradingQnA
              </Link>
              <Link
                to={"https://twitter.com/Nithin0dha"}
                style={{ textDecoration: "none" }}
                target="/"
              >
                / Twitter
              </Link>
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default About;
