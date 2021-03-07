import React, { Component } from "react";

export default class MonthlyExpirationsChart extends Component {
  render() {
    return (
      <div className="col-xxl-12 pl-xxl-2" style={{paddingLeft:"0!important"}}>
        <div className="card mb-3">
          <div className="card-header bg-light py-2">
            <div className="row flex-between-center">
              <div className="col-auto">
                <h6 className="mb-0">Monthly expirations</h6>
              </div>
              <div className="col-auto d-flex">
                {/* <a className="btn btn-link btn-sm mr-2" href="#!">
                  View Details
                </a>
                <div className="dropdown font-sans-serif btn-reveal-trigger">
                  <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" id="dropdown-top-products" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fs--2"></span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right border py-2" aria-labelledby="dropdown-top-products" >
                    <a className="dropdown-item" href="#!">
                      View
                    </a>
                    <a className="dropdown-item" href="#!">
                      Export
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#!">
                      Remove
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="card-body h-100">
            <div className="echart-bar-top-products h-100" data-echart-responsive="true" ></div>
          </div>
        </div>
      </div>
    );
  }
}
