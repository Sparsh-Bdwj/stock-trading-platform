import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/user");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container p-5 my-5">
        <div className="row my-5">
          <div className="col-1"></div>
          <div className="col-6 text-end my-5">
            <img
              src="media/images/signup.png"
              alt=""
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-4 text-muted my-5 p-4">
            <h2 className="text-muted">Login to your account</h2>
            <p>Or track your existing application.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={handleOnChange}
                />
              </div>
              <button className="btn btn-primary my-3">Login</button>
              <span className="mx-3">
                Create a new account? <Link to={"/signup"}>Singup</Link>
              </span>
            </form>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
