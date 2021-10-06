import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { isAutheticated } from "./authHelper";
function Login(props) {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { token } = isAutheticated();
  const [loading, setLoading] = useState(false);
  if (token) {
    history.push("/dashboard");
  }
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
    axios
      .post("https://api.Shoperola.com/sigin_admin", { ...user })
      .then((response) => {
        setLoading(false);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            user: user.email,
            token: response.data.token,
          })
        );
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="authentication-bg h-100">
      <div className="account-pages pt-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <a href="index.html" className="mb-5 d-block auth-logo">
                  <img
                    src="assets/images/logo.png"
                    alt=""
                    height="45"
                    className="logo logo"
                  />
                  <img
                    src="assets/images/logo.png"
                    alt=""
                    height="45"
                    className="logo logo-light"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary welcome-text">
                      Welcome Back !
                    </h5>
                    <p className="text-muted">Sign In to Shoperola</p>
                  </div>
                  <div className="p-2 mt-4">
                    <form>
                      <div className="form-group">
                        <label for="username">Email</label>
                        <input
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          type="text"
                          className="form-control input-field"
                          placeholder="Enter Email ID"
                        />
                      </div>

                      <div className="form-group">
                        <label for="userpassword">Password</label>
                        <input
                          value={user.password}
                          name="password"
                          onChange={handleChange}
                          type="password"
                          className="form-control input-field"
                          placeholder="Enter password"
                        />
                      </div>

                      <div className="mt-3 text-right">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-primary w-sm waves-effect waves-light"
                        >
                          <ClipLoader
                            color="blue"
                            loading={loading}
                            size={20}
                          />
                          {!loading && "Log In"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
    </div>
  );
}

export default Login;
