import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <main className="main" id="top">
      <div className="container">
        <div className="row flex-center min-vh-100 py-6 text-center">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Link className="d-flex flex-center mb-4" to="/">
              <img
                className="mr-2"
                src="../../assets/img/illustrations/rayas.png"
                alt="logo"
                width="58"
              />
              <span className="font-sans-serif font-weight-bolder fs-5 d-inline-block">
                MPA Solutions
              </span>
            </Link>
            <div className="card">
              <div className="card-body p-4 p-sm-5">
                <h5 className="mb-0">Enter the company code</h5>
                <form className="mt-4">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Company Code"
                  />
                  <div className="mb-3">
                    <button
                      className="btn btn-primary btn-block mt-3"
                      type="submit"
                      name="submit"
                    >
                      Validate Code
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
