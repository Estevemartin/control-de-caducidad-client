import React, { Component } from "react";

export default class LandingCompanies extends Component {
  render() {
    return (
      <div class="container">
        <div class="content">
          <div class="card mb-3">
            <div class="card-header bg-light">
              <h5 class="mb-0">Companies</h5>
            </div>
            <div class="card-body fs--1 pb-0">
              <div class="row">
                <div class="col-sm-6 col-md-4 mb-3">
                  <div class="d-flex position-relative align-items-center mb-2">
                    <img
                      class="d-flex align-self-center mr-2"
                      src=""
                      alt="logo"
                      width="50"
                    />
                    <div class="flex-1">
                      <h6 class="fs-0 mb-0">
                        <a class="stretched-link" href="#!">
                          Company 1
                        </a>
                      </h6>
                      <p class="mb-1">3243 Personas</p>
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
