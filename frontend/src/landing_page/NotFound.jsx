function NotFound() {
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row text-center">
          <div className="col">
            <h1 className="mt-5">404</h1>
            <p className="mt-3 text-muted" style={{ fontSize: "1.2rem" }}>
              Sorry the page you are looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
