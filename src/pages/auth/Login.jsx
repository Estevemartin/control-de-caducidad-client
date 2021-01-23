import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row flex-center min-vh-100 py-6">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Link className="d-flex flex-center mb-4" to="/">
              <img
                className="h-25 w-50"
                src="../../images/blueLogo.png"
                alt="logo"
              />
            </Link>
            <div className="card">
              <div className="card-body p-4 p-sm-5">
                <div className="row flex-between-center mb-2">
                  <div className="col-auto">
                    <h5>Log in</h5>
                  </div>
                  <div className="col-auto fs--1 text-600">
                    <span className="mb-0 undefined">or</span>{" "}
                    <span>
                      <Link to="/register">Create an account</Link>
                    </span>
                  </div>
                </div>
                <form>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row flex-between-center">
                    <div className="col-auto">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="basic-checkbox"
                        />
                        <label
                          className="form-check-label"
                          for="basic-checkbox"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <Link className="fs--1" to="/forgot">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary btn-block mt-3"
                      type="submit"
                      name="submit"
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
