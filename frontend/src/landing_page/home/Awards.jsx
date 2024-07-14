function Awards() {
  return (
    <>
      <div className="container mb-5 mt-5 ml-3">
        <div className="row">
          <div className="col-6 text-center ">
            <img
              src="media/images/largest-broker.svg"
              alt="Awards"
              style={{ width: "70%" }}
              className="p-3"
            />
          </div>
          <div className="col-6 text-left mt-3">
            <h2>Largest stock broker in India</h2>
            <p className="mt-3 fs-5.5 text-muted">
              1.5+ Crore Zerodha clients contribute to over 15% of all retail
              order <br /> volumes in India daily by trading and investing in:
            </p>
            <div className="row mt-4">
              <div className="col-5">
                <ul>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col-5 pl-0">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
              <img
                src="media/images/press-logos.png"
                alt="Press Logo"
                className="mt-3 "
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
