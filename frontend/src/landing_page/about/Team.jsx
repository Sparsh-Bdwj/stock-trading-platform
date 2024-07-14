import { Link } from "react-router-dom";
function Team() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <div className=" col-4 p-4">
            <img
              src="media/images/Nikhil.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "55%" }}
            />
            <h4 className="text-muted mt-3">Nikhil Kamath</h4>
            <p>Co-Founder & CFO</p>
            <p className="text-muted">
              Bio{" "}
              <Link to="#" style={{ color: "grey" }}>
                <i className="fa-solid fa-v" style={{ fontSize: ".6rem" }}></i>
              </Link>
            </p>
          </div>
          <div className=" col-4 p-4">
            <img
              src="media/images/Kailash.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "55%" }}
            />
            <h4 className="text-muted mt-3">Dr. Kailash Nath</h4>
            <p>CTO</p>
            <p className="text-muted">
              Bio{" "}
              <Link to="#" style={{ color: "grey" }}>
                <i className="fa-solid fa-v" style={{ fontSize: ".6rem" }}></i>
              </Link>
            </p>
          </div>
          <div className=" col-4 p-4">
            <img
              src="media/images/Venu.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "55%" }}
            />
            <h4 className="text-muted mt-3">Venu Madhav</h4>
            <p>COO</p>
            <p className="text-muted">
              Bio{" "}
              <Link to="#" style={{ color: "grey" }}>
                <i className="fa-solid fa-v" style={{ fontSize: ".6rem" }}></i>
              </Link>
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className=" col-4 p-4">
            <img
              src="media/images/Hanan.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "55%" }}
            />
            <h4 className="text-muted mt-3">Hanan Delvi</h4>
            <p>COO</p>
            <p className="text-muted">
              Bio{" "}
              <Link to="#" style={{ color: "grey" }}>
                <i className="fa-solid fa-v" style={{ fontSize: ".6rem" }}></i>
              </Link>
            </p>
          </div>
          <div className=" col-4 p-4">
            <img
              src="media/images/Seema.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "55%" }}
            />
            <h4 className="text-muted mt-3">Seema Patil</h4>
            <p>Director</p>
            <p className="text-muted">
              Bio{" "}
              <Link to="#" style={{ color: "grey" }}>
                <i className="fa-solid fa-v" style={{ fontSize: ".6rem" }}></i>
              </Link>
            </p>
          </div>
          <div className=" col-4 p-4">
            <img
              src="media/images/karthik.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "55%" }}
            />
            <h4 className="text-muted mt-3">Karthik Rangappa</h4>
            <p>Chief of Education</p>
            <p className="text-muted">
              Bio{" "}
              <Link to="#" style={{ color: "grey" }}>
                <i className="fa-solid fa-v" style={{ fontSize: ".6rem" }}></i>
              </Link>
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className=" col-4 p-4">
            <img
              src="media/images/Austin.jpg"
              alt="Nitin Kamat"
              className="rounded-circle"
              style={{ width: "55%" }}
            />
            <h4 className="text-muted mt-3">Austin Prakash</h4>
            <p>COO</p>
            <p className="text-muted">
              Bio{" "}
              <Link to="#" style={{ color: "grey" }}>
                <i className="fa-solid fa-v" style={{ fontSize: ".6rem" }}></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
