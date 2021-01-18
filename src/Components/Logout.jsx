import React from "react";
import {Link} from 'react-router-dom';

function Logout() {
  return (
    <div>
      <div class="container">
        <div class="row flex-center min-vh-100 py-6">
          <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Link class="d-flex flex-center mb-4" to="/">
              <img
                class="mr-2"
                src="../images/rayas.png"
                alt="logo"
                width="58"
              />
              <span class="font-sans-serif font-weight-bolder fs-5 d-inline-block">
                MPA Solutions
              </span>
            </Link>
            <div class="card">
              <div class="card-body p-4 p-sm-5">
                <div class="text-center">
                  <img
                    class="d-block mx-auto mb-4"
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
                    class="btn btn-primary btn-sm mt-3"
                    to="/login"
                  >
                    <span
                      class="fas fa-chevron-left mr-1"
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