import React from "react";
import {Link} from 'react-router-dom';

function Logout() {
  return (
    <div>
      <div className="container">
        <div className="row flex-center min-vh-100 py-6">
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
                  <Link
                    className="btn btn-primary btn-sm mt-3"
                    to="/login"
                  >
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
    </div>
  );
}

export default Logout;
