import React, { Component } from 'react';

export default class ExpirationsInPeriod extends Component {
    render() {
        return (
            <div className="w-100 h-100">
          <div className="h-100 pb-3">
            <div className="card h-100 bg-line-chart-gradient">
              <div className="card-header bg-transparent">
                <h5 className="text-white">Upcomming Expirations In Period</h5>
                <div className="upcoming-expirations-button-align d-flex flex-column align-items-start">
                <div
                  className="col real-time-user display-1 font-weight-normal text-white"
                  data-countup='{"endValue":119}'
                >
                  0
                </div>
                < br/>
                <div className="row w-75 d-flex container mt-3">
                  <select className="form-select form-select-sm select-month mr-2">
                  <option selected>Choose One</option>
                    <option value="0">1 Week</option>
                    <option value="1">2 Weeks</option>
                    <option value="2">1 Month</option>
                    <option value="3">3 Months</option>
                    <option value="4">6 Months</option>
                    <option value="5">1 Year</option>
                  </select>
                </div>
                </div>
              </div>

              <div className="card-body text-white fs--1">
                <div className="list-group-flush mt-2">
                  <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 font-weight-semi-bold border-top-0 upcoming-expirations-border">
                    <p className="mb-0">Items</p>
                    <p className="mb-0">Expirations</p>
                  </div>
                  <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 upcoming-expirations-border">
                    <p className="mb-0">Item 1</p>
                    <p className="mb-0">3</p>
                  </div>
                  <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 upcoming-expirations-border">
                    <p className="mb-0">Item 2</p>
                    <p className="mb-0">3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
