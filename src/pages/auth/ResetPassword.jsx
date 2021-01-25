import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

function ResetPassword() {
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
              <h5 className="text-center">Reset new password</h5>
              <form className="mt-3">
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="New Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  className="btn btn-primary btn-block mt-3"
                  type="submit"
                  name="submit"
                >
                  Set password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(ResetPassword);
