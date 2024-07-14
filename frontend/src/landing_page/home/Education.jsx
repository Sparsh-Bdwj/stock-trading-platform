function Education() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row pt-5">
          <div className="col-1"></div>
          <div className="col-5 ml-1">
            <img
              src="media/images/index-education.svg"
              alt="education section"
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-1"></div>
          <div className="col-4 mt-3">
            <h4>Free and open market education</h4>
            <p className="mt-4  text-muted">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="https://zerodha.com/varsity/"
              style={{ textDecoration: "none" }}
            >
              Varsity <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <p className="mt-4 text-muted">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="https://tradingqna.com/"
              style={{ textDecoration: "none" }}
            >
              Traning Q&A <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
