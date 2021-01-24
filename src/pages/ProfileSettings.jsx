import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfileSettings extends Component {
  /* TODO: bring details from backend */

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
                    <h5>Register</h5>
                  </div>
                </div>
                <form>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Surname"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="row gx-3">
                    <div className="mb-3 col-sm-6">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3 col-sm-6">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary btn-block mt-3"
                      type="submit"
                      name="submit"
                    >
                      Edit
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
