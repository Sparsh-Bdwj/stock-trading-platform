function Brokerage() {
  return (
    <>
      <div className="container m-5">
        <div className="row mb-5 p-5">
          <div className="col-1"></div>
          <div className="col-7">
            <a href="/" style={{ textDecoration: "none", color: "#387ed1" }}>
              <h5 className="text-center mb-5">Brokerage calculator</h5>
            </a>
            <ul
              className="text-muted"
              style={{ fontSize: ".8rem", lineHeight: "2" }}
            >
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>

              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
          <div className="col-4 ">
            <a href="/" style={{ textDecoration: "none", color: "#387ed1" }}>
              <h5 className="text-center">List of charges</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
