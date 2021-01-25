import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";

class LandingCompanies extends Component {
  render() {
    return (
      <div className="container">
        <SideNavbar />
        <div className="content">
          <TopNavbar />
          <div className="card mb-3">
            <div className="card-header bg-light">
              <h5 className="mb-0">Companies</h5>
            </div>
            <div className="card-body fs--1 pb-0">
              <div className="row">
                <div className="col-sm-6 col-md-4 mb-3">
                  <div className="d-flex position-relative align-items-center mb-2">
                    <img
                      className="d-flex align-self-center mr-2"
                      src=""
                      alt="logo"
                      width="50"
                    />
                    <div className="flex-1">
                      <h6 className="fs-0 mb-0">
                        <a className="stretched-link" href="#!">
                          Company 1
                        </a>
                      </h6>
                      <p className="mb-1">3243 Personas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LandingCompanies);
