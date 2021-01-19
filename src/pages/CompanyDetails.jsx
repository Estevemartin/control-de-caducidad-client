import React, { Component } from 'react'

export default class CompanyDetails extends Component {
    render() {
        return (
            <div>
                <div class="card mb-3">
                <div class="card-body">
                <div class="row flex-between-center">
                    <div class="col-md">
                    <h5 class="mb-2 mb-md-0">Company name</h5>
                    </div>
                    <div class="col-auto">
                    <button class="btn btn-falcon-primary btn-sm" role="button">Edit Company Details</button>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3 overflow-hidden" style={{minWidth: 12 + "rem"}}>
                <div class="bg-holder bg-card company-details-controlled-items-card">
                </div>

                <div class="card-body position-relative">
                  <h6>Controlled Items<span class="badge badge-soft-success rounded-pill ml-2">96%</span></h6>
                  <div class="display-4 fs-4 mb-2 font-weight-normal font-sans-serif" data-countup='{"endValue":1450,"suffix":" Items"}'>0</div><a class="font-weight-semi-bold fs--1 text-nowrap" href="index.html">See all<span class="fas fa-angle-right ml-1" data-fa-transform="down-1"></span></a>
                </div>
              </div>
            </div>

                <div class="col-sm-6 col-md-4">
                <div class="card overflow-hidden" style={{minWidth: 12 + "rem"}}>
                    <div class="bg-holder bg-card company-details-expired-items-card">
                    </div>
                    <div class="card-body position-relative">
                    <h6>Expired Items<span class="badge badge-soft-warning rounded-pill ml-2">4%</span></h6>
                    <div class="display-4 fs-4 mb-2 font-weight-normal font-sans-serif text-warning" data-countup='{"endValue":58,"decimalPlaces":0,"suffix":" Items"}'>0</div><a class="font-weight-semi-bold fs--1 text-nowrap" href="e-commerce/customers.html">See all<span class="fas fa-angle-right ml-1" data-fa-transform="down-1"></span></a>
                    </div>
                </div>
                </div>
                
                
            </div>
        )
    }
}
