function LeftSection({
  imageURL,
  head,
  headDescription,
  tryDemo,
  learnMore,
  tryDemoURL,
  learnMoreURL,
  googlePlayURL,
  appleStoreURL,
  imgAlt,
}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 text-center">
            <img src={imageURL} alt="app model" style={{ width: "85%" }} />
          </div>
          <div className="col-1"></div>
          <div className="col-4 p-5">
            <h3 className="fs-2 mb-4">{head}</h3>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              {headDescription}
            </p>
            <div
              className="link-up mt-3 mb-4  d-flex justify-content-between"
              style={{ width: "70%" }}
            >
              <a href={tryDemoURL} style={{ textDecoration: "none" }}>
                {tryDemo}{" "}
                {tryDemo && <i className="fa-solid fa-arrow-right"></i>}
              </a>
              <a href={learnMoreURL} style={{ textDecoration: "none" }}>
                {learnMore}{" "}
                {learnMore && <i className="fa-solid fa-arrow-right"></i>}
              </a>
            </div>
            <div
              className="link-down d-flex justify-content-between mt-4"
              style={{ width: "80%" }}
            >
              <a href={googlePlayURL}>
                <img
                  src="media/images/google-play-badge.svg"
                  alt="Google Store"
                />
              </a>
              <a href={appleStoreURL}>
                <img src="media/images/appstore-badge.svg" alt="Apple Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
