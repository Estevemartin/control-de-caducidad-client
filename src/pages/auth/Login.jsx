import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class Login extends Component {
  state = { email: "", password: "" };handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
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
                <form onSubmit={this.handleFormSubmit}>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email address"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => this.handleChange(e)}
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

export default withAuth(Login);
