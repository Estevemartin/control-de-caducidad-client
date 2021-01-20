import React, { Component } from 'react'

export default class MonthlyExpirationsChart extends Component {
    render() {
        return (
           
        <div class="col-xxl-8 pl-xxl-2 container">
          <div class="card mb-3">
            <div class="card-header bg-light py-2">
              <div class="row flex-between-center">
                <div class="col-auto">
                  <h6 class="mb-0">Monthly expirations</h6>
                </div>
                <div class="col-auto d-flex">
                  <a class="btn btn-link btn-sm mr-2" href="#!">
                    View Details
                  </a>
                  <div class="dropdown font-sans-serif btn-reveal-trigger">
                    <button
                      class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none"
                      type="button"
                      id="dropdown-top-products"
                      data-toggle="dropdown"
                      data-boundary="viewport"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="fas fa-ellipsis-h fs--2"></span>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-right border py-2"
                      aria-labelledby="dropdown-top-products"
                    >
                      <a class="dropdown-item" href="#!">
                        View
                      </a>
                      <a class="dropdown-item" href="#!">
                        Export
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body h-100">
              <div
                class="echart-bar-top-products h-100"
                data-echart-responsive="true"
              ></div>
            </div>
          </div>
          </div>
        )
    }
}
