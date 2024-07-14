import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="row  p-5 border-bottom">
          <div className="col  text-grey ">
            <h2
              style={{ textAlign: "justify", fontWeight: "500" }}
              className="text-center"
            >
              We pioneered the discount broking model in India <br />
              Now, we are breaking ground with our technology.
            </h2>
          </div>
        </div>
        <div className="row p-5 text-muted lh-large">
          <div className="col-1"></div>
          <div className="col-5 p-5">
            <p className="mb-4">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="mb-4">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p className="">
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-5 p-5">
            <p className="mb-4">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="mb-4">
              <Link
                to={"https://rainmatter.com/"}
                target="/"
                style={{ textDecoration: "none" }}
              >
                Rainmatter
              </Link>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p className="">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us.
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
