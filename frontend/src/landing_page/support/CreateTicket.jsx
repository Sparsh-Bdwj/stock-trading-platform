import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <>
      <div className="conatiner m-5 p-5">
        <div className="row p-5">
          <div className="col-1"></div>
          <div className="col-10">
            <h5 className="text-muted">
              To create a ticket, select a relevant topic
            </h5>
            <div className="row mt-5 text-muted">
              <div className="col-4">
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h5 style={{ fontWeight: "lighter" }}>
                    <i className="fa-solid fa-circle-plus"></i> &nbsp; Account
                    Opening
                  </h5>
                </Link>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", lineHeight: "2.3" }}
                >
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <li>Getting started </li>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <li>Online </li>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <li>Offline </li>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <li>Charges </li>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <li>Company, Partnership and HUF </li>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <li>Non Resident Indian (NRI) </li>
                  </Link>
                </ul>
              </div>
              <div className="col-4">
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h5 style={{ fontWeight: "lighter" }}>
                    <i className="fa-regular fa-user"></i> &nbsp; Your Zerodha
                    Account
                  </h5>
                </Link>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", lineHeight: "2.5" }}
                >
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Login credentials </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Your Profile </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li style={{ lineHeight: "1" }}>
                      Account modification and segment addition{" "}
                    </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>CMR & DP ID </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Nomination </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Transfer and conversion of shares </li>
                  </Link>
                </ul>
              </div>
              <div className="col-4">
                <Link
                  href="/support"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h5 style={{ fontWeight: "lighter" }}>
                    <i className="fa-solid fa-arrow-trend-up"></i> &nbsp;
                    Trading and Markets
                  </h5>
                </Link>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", lineHeight: "2.3" }}
                >
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Trading FAQs </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Kite </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Margins </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Products and other types </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Corporate action </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Kite features </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="row mt-5 text-muted">
              <div className="col-4">
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h5 style={{ fontWeight: "lighter" }}>
                    <i className="fa-regular fa-credit-card"></i> &nbsp; Funds
                  </h5>
                </Link>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", lineHeight: "2.5" }}
                >
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Fund withdrawal </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Adding fund </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Adding bank accounts </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>eMandates </li>
                  </Link>
                </ul>
              </div>
              <div className="col-4">
                <Link
                  href="/support"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h5 style={{ fontWeight: "lighter" }}>
                    <i className="fa-solid fa-chart-pie"></i> &nbsp; Console
                  </h5>
                </Link>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", lineHeight: "2.5" }}
                >
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>IPO </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Portfolio </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li style={{ lineHeight: "1" }}>Fund statements </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Profile </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Report</li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Referral program </li>
                  </Link>
                </ul>
              </div>
              <div className="col-4">
                <Link
                  href="/support"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h5 style={{ fontWeight: "lighter" }}>
                    <i className="fa-solid fa-coins"></i> &nbsp; Coin
                  </h5>
                </Link>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", lineHeight: "2.5" }}
                >
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Understanding mutual funds and Coin </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Coin app </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Coin web </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>Transactions and reports </li>
                  </Link>
                  <Link to="/support" style={{ textDecoration: "none" }}>
                    <li>National Pension Scheme (NPS)</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
