import React, { Component } from "react";

export default class ExpiredItemsCard extends Component {
  render() {
    return (
      <div className="card overflow-hidden" style={{ minWidth: 12 + "rem" }}>
        <div className="bg-holder bg-card company-details-expired-items-card"></div>
        <div className="card-body position-relative">
          <h6>
            Expired Items
            <span className="badge badge-soft-warning rounded-pill ml-2">
              4%
            </span>
          </h6>
          <div
            className="display-4 fs-4 mb-2 font-weight-normal font-sans-serif text-warning"
            data-countup='{"endValue":58,"decimalPlaces":0,"suffix":" Items"}'
          >
            0
          </div>
          <a
            className="font-weight-semi-bold fs--1 text-nowrap"
            href="e-commerce/customers.html"
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
