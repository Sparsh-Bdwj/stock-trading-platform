import { Link } from "react-router-dom";

function Pricing() {
  return (
    <>
      <div className="container mb-5">
        <div className="row pb-5">
          <div className="col-1"></div>
          <div className="col-4 mt-3">
            <h2>Unbeatable pricing</h2>
            <p className="mt-4 text-muted">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <Link to="/pricing" style={{ textDecoration: "none" }}>
              See Pricing <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="col-1"></div>
          <div className="col-5 ml-1">
            <div className="row text-center">
              <div className="col p-5 border">
                <h2>₹0</h2>
                <p className="mt-3">
                  Free equity delivery and <br /> direct mutual funds
                </p>
              </div>
              <div className="col p-5 border">
                <h2>₹20</h2>
                <p className="mt-3">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
