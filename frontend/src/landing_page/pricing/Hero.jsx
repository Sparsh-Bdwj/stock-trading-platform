function Hero() {
  return (
    <>
      <div className="container ">
        <div className="row text-center">
          <div className="col border-bottom  p-5">
            <h2 className="fs-1 mt-5 ">Pricing</h2>
            <p className="fs-5 mb-5 pb-5">
              Free equity investments and flat ₹20 intraday and F&O trades
            </p>
          </div>
        </div>
        <div className="row text-center mt-5 border-bottom">
          <div className="col-12 text-muted p-5 mb-5">
            <div className="cotainer">
              <div className="row d-flex justify-content-center">
                <div className="col-4 ">
                  <img
                    src="media/images/pricing-eq.svg"
                    alt="pricing"
                    style={{ width: "70%" }}
                  />
                  <h3>Free equity delivery</h3>
                  <p>
                    All equity delivery investments (NSE, BSE), are absolutely
                    free — ₹ 0 brokerage.
                  </p>
                </div>
                <div className="col-4 ">
                  <img
                    src="media/images/other-trades.svg"
                    alt="pricing"
                    style={{ width: "70%" }}
                  />
                  <h3>Intraday and F&O trades</h3>
                  <p>
                    AFlat ₹ 20 or 0.03% (whichever is lower) per executed order
                    on intraday trades across equity, currency, and commodity
                    trades. Flat ₹20 on all option trades.
                  </p>
                </div>
                <div className="col-4 ">
                  <img
                    src="media/images/pricing-eq.svg"
                    alt="pricing"
                    style={{ width: "70%" }}
                  />
                  <h3>Free direct MF</h3>
                  <p>
                    All direct mutual fund investments are absolutely free — ₹ 0
                    commissions & DP charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
