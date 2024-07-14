import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-bg border-top">
        <div className="container  p-5">
          <div className="row p-5">
            <div className="col">
              <img
                src="media/images/logo.svg"
                alt="Zeroda Logo"
                style={{ width: "50%" }}
              />
              <p className="mt-3" style={{ fontSize: ".8rem", width: "80%" }}>
                © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
              </p>
              <div className="socials">
                <div className="social-up">
                  <i className="fa-brands fs-4 m-2 fa-x-twitter"></i>
                  <i className="fa-brands fs-4 m-2 fa-facebook"></i>
                  <i className="fa-brands fs-4 m-2 fa-square-instagram"></i>
                  <i className="fa-brands fs-4 m-2 fa-linkedin"></i>
                </div>
                <div className="social-down mt-2 border-top">
                  <i className="fa-brands fs-4 m-2 fa-youtube"></i>
                  <i className="fa-brands fs-4 m-2 fa-whatsapp"></i>
                  <i className="fa-brands fs-4 m-2 fa-telegram"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <p className="fs-5">Company</p>
              <ul
                style={{ listStyle: "none", padding: "0" }}
                className="footer-ul"
              >
                <li>
                  <Link to="/signup">About</Link>
                </li>
                <li>
                  <Link to="/signup">Products</Link>
                </li>
                <li>
                  <Link to="/signup">Pricing</Link>
                </li>
                <li>
                  <Link to="/signup">Referral programme</Link>
                </li>
                <li>
                  <Link to="/signup">Careers</Link>
                </li>
                <li>
                  <Link to="/signup">Zerodha.tech</Link>
                </li>
                <li>
                  <Link to="/signup">Press & media</Link>
                </li>
                <li>
                  <Link to="/signup">Zerodha Cares (CSR)</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="fs-5">Support</p>
              <ul
                style={{ listStyle: "none", padding: "0" }}
                className="footer-ul"
              >
                <li>
                  <Link to="/signup">Contact up</Link>
                </li>
                <li>
                  <Link to="/signup">Support portal</Link>
                </li>
                <li>
                  <Link to="/signup">Z-connet blog</Link>
                </li>
                <li>
                  <Link to="/signup">List of charges</Link>
                </li>
                <li>
                  <Link to="/signup">Download and Resouces</Link>
                </li>
                <li>
                  <Link to="/signup">Vedios</Link>
                </li>
                <li>
                  <Link to="/signup">Market overview</Link>
                </li>
                <li>
                  <Link to="/signup">How to file a complaint</Link>
                </li>
                <li>
                  <Link to="/signup">Stauts of your complaint</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="fs-5">Account</p>
              <ul
                style={{ listStyle: "none", padding: "0" }}
                className="footer-ul"
              >
                <li>
                  <Link to="/signup">Open an account</Link>
                </li>
                <li>
                  <Link to="/signup">Fund transfer</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="terms">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              <Link to="/signup">
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </Link>
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
