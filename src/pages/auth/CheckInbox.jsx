import React from "react";
import { Link } from "react-router-dom";

function CheckInbox(props) {
  //TODO hacer función para que muestre el mail del usuario

  function resetOrActivateAcctounMessage() {
    const query = props.location.pathname;
    if (query === "/inbox-pass") {
      return <span>reset your password</span>;
    } else if (query === "/inbox-activate")
      return <span>activate your account</span>;
  }

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
              <div className="text-center">
                <img
                  className="d-block mx-auto mb-4"
                  src="../../assets/img/illustrations/envelope.png"
                  alt="Email"
                  width="70"
                />
                <h4>Please check your email!</h4>
                <p>
                  An email has been sent to <strong>xyz@abc.com</strong>. Please
                  click on the included link to{" "}
                  {resetOrActivateAcctounMessage()}.
                </p>
                <Link className="btn btn-primary btn-sm mt-3" to="/login">
                  <span
                    className="fas fa-chevron-left mr-1"
                    data-fa-transform="shrink-4 down-1"
                  ></span>
                  Return to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInbox;
