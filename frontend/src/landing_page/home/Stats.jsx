import { Link } from "react-router-dom";

function Stats() {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row mt-4 p-5 ">
          <div className="col-6 p-5">
            <h2 className="mb-5">Trust with confidence</h2>
            <h5 className="mb-4 ">Customer-first always</h5>
            <p
              className="text-muted"
              style={{ textAlign: "justify", width: "80%" }}
            >
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores worth of equity investments.
            </p>
            <h5 className="mb-4">No spam or gimmicks</h5>
            <p
              className="text-muted"
              style={{ textAlign: "justify", width: "80%" }}
            >
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h5 className="mb-4">The Zerodha universe</h5>
            <p
              className="text-muted"
              style={{ textAlign: "justify", width: "80%" }}
            >
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h5 className="mb-4">Do better with money</h5>
            <p
              className="text-muted"
              style={{ textAlign: "justify", width: "80%" }}
            >
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 text-center p-5">
            <img
              src="media/images/ecosystem.png"
              alt=""
              style={{ width: "100%" }}
            />
            <div className="mt-3">
              <Link
                to="/product"
                className="m-5"
                style={{ textDecoration: "none" }}
              >
                Explore Our Product{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <a href="/" style={{ textDecoration: "none" }}>
                Try Our Kit <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
