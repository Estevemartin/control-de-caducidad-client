import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="container">
      <div className="row flex-center min-vh-100 py-6 text-center">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <Link className="d-flex flex-center mb-4" to="/">
            <img
              className="h-25 w-50"
              src="../../images/blueLogo.png"
              alt="logo"
            />
          </Link>
          <div className="card">
            <div class="card-body p-4 p-sm-5">
              <h5 class="mb-0">Forgot your password?</h5>
              <small>Enter your email and we'll send you a reset link.</small>
              <form class="mt-4">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email address"
                />
                <div class="mb-3">
                  <button
                    class="btn btn-primary btn-block mt-3"
                    type="submit"
                    name="submit"
                  >
                    Send reset link
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

export default ForgotPassword;
