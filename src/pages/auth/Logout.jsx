import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

function Logout(props) {
  const { logout } = props;

  return (
    <div className="container" onLoad={logout}>
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
              <div className="text-center">
                <img
                  className="d-block mx-auto mb-4"
                  src="../../assets/img/illustrations/rocket.png"
                  alt="shield"
                  width="70"
                />
                <h4>See you again!</h4>
                <p>
                  Thanks for using MPA Solutions. You are <br />
                  now successfully signed out.
                </p>
                <Link className="btn btn-primary btn-sm mt-3" to="/">
                  <span
                    className="fas fa-chevron-left mr-1"
                    data-fa-transform="shrink-4 down-1"
                  ></span>
                  Return to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Logout);
