import React from "react";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";

import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function LandingNoCompanies() {
  return (
    <div className="container">
      <SideNavbar />
      <div className="content">
        <TopNavbar />
        <div className="card">
          <div className="card-body overflow-hidden p-lg-6 ">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 pl-lg-4 col-md-6 my-5 text-center text-lg-left">
                <h3>{" "}<Link to="/create-company-details">ou have no companies!</Link></h3>
                <p className="lead">Time to get a company.</p>
                <Link className="btn btn-falcon-primary" to="/create-company-details">Create a New Company</Link>
                <br /><br />
                <Link className="btn btn-falcon-primary" to="/add-company">Add an Existing Company</Link>
              </div>
              <div className="col-lg-6 col-md-4">
                <img className="img-thumbnail" src="../assets/img/illustrations/4.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(LandingNoCompanies);
