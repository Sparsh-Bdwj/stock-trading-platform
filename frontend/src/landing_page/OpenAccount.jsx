import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row text-center">
          <div className="col">
            <h3 className="mt-5 text-muted">Open a Zerodha account</h3>
            <p className="mt-3 text-muted" style={{ fontSize: "1.2rem" }}>
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
            <Link
              to={"/signup"}
              className="btn btn-primary mt-3 fs-5"
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

export default OpenAccount;
