import React, { Component } from "react";

export default class ControlledItemsCard extends Component {
  render() {
    return (
      
        <div
          className="card mb-3 overflow-hidden "
          style={{ minWidth: 12 + "rem" }}
        >
          <div className="bg-holder bg-card company-details-controlled-items-card"></div>
          <div className="card-body position-relative">
            <h6>
              Controlled Items
              <span className="badge badge-soft-success rounded-pill ml-2">
                96%
              </span>
            </h6>
            <div
              className="display-4 fs-4 mb-2 font-weight-normal font-sans-serif"
              data-countup='{"endValue":1450,"suffix":" Items"}'
            >
              0
            </div>
            <a
              className="font-weight-semi-bold fs--1 text-nowrap"
              href="index.html"
            >
              See all
              <span
                className="fas fa-angle-right ml-1"
                data-fa-transform="down-1"
              ></span>
            </a>
          </div>
        </div>
    );
  }
}
