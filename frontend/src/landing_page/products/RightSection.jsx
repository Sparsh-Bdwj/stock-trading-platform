function RightSection({
  imageURL,
  head,
  headDescription,
  learnMore,
  learnMoreUrl,
}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-1  "></div>
          <div className="col-4" style={{ marginTop: "10rem" }}>
            <h3 className="fs-2 mb-4">{head}</h3>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              {headDescription}
            </p>
            <div
              className="link-up mt-3 mb-4  d-flex justify-content-between"
              style={{ width: "70%" }}
            >
              <a href={learnMoreUrl} style={{ textDecoration: "none" }}>
                {learnMore}{" "}
                {learnMore && <i className="fa-solid fa-arrow-right"></i>}
              </a>
            </div>
          </div>

          <div className="col-6 text-center">
            <img src={imageURL} style={{ width: "100%" }} alt="model link" />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
