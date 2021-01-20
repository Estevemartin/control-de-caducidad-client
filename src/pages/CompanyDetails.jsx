import React, { Component } from "react";
import UpcomingExpirationsEmployee from '../Components/UpcomingExpirationsEmployee';
import MonthlyExpirationsChart from '../Components/MonthlyExpirationsChart';


export default class CompanyDetails extends Component {
  render() {
    return (
      <div>
        {/* TOP COMPANY NAVBAR */}
        <div class="card mb-3">
          <div class="card-body">
            <div class="row flex-between-center">
              <div class="col-md">
                <h5 class="mb-2 mb-md-0">Company name</h5>
              </div>
              <div class="col-auto">
                <button class="btn btn-falcon-primary btn-sm" role="button">
                  Edit Company Details
                </button>
              </div>
            </div>
          </div>
        </div>

<div className="company-details-top-half-container h-100">
<div className="company-details-left-side-container">
        {/* CONTROLLED ITEMS CARD */}

        <div class="w-100 mb-3 container">
          <div
            class="card mb-3 overflow-hidden"
            style={{ minWidth: 12 + "rem" }}
          >
            <div class="bg-holder bg-card company-details-controlled-items-card"></div>

            <div class="card-body position-relative">
              <h6>
                Controlled Items
                <span class="badge badge-soft-success rounded-pill ml-2">
                  96%
                </span>
              </h6>
              <div
                class="display-4 fs-4 mb-2 font-weight-normal font-sans-serif"
                data-countup='{"endValue":1450,"suffix":" Items"}'
              >
                0
              </div>
              <a
                class="font-weight-semi-bold fs--1 text-nowrap"
                href="index.html"
              >
                See all
                <span
                  class="fas fa-angle-right ml-1"
                  data-fa-transform="down-1"
                ></span>
              </a>
            </div>
          </div>
        </div>

        {/* EXPIRED ITEMS CARD */}

        <div class="w-100 mb-3 container">
          <div class="card overflow-hidden" style={{ minWidth: 12 + "rem" }}>
            <div class="bg-holder bg-card company-details-expired-items-card"></div>
            <div class="card-body position-relative">
              <h6>
                Expired Items
                <span class="badge badge-soft-warning rounded-pill ml-2">
                  4%
                </span>
              </h6>
              <div
                class="display-4 fs-4 mb-2 font-weight-normal font-sans-serif text-warning"
                data-countup='{"endValue":58,"decimalPlaces":0,"suffix":" Items"}'
              >
                0
              </div>
              <a
                class="font-weight-semi-bold fs--1 text-nowrap"
                href="e-commerce/customers.html"
              >
                See all
                <span
                  class="fas fa-angle-right ml-1"
                  data-fa-transform="down-1"
                ></span>
              </a>
            </div>
          </div>
        </div>

        {/* UPCOMING EXPIRATIONS IN PERIOD CARD */}

        <div class=" container-fluid w-100 h-100">
          <div class="h-100 pb-3">
            <div class="card h-100 bg-line-chart-gradient">
              <div class="card-header bg-transparent">
                <h5 class="text-white">Upcomming Expirations In Period</h5>
                <div className="upcoming-expirations-button-align">
                <div
                  class="real-time-user display-1 font-weight-normal text-white"
                  data-countup='{"endValue":119}'
                >
                  0
                </div>
                <div class="col-auto w-50 d-flex container">
                  <select class="form-select form-select-sm select-month mr-2">
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

              <div class="card-body text-white fs--1">
                <div class="list-group-flush mt-4">
                  <div class="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 font-weight-semi-bold border-top-0 upcoming-expirations-border">
                    <p class="mb-0">Items</p>
                    <p class="mb-0">Expirations</p>
                  </div>
                  <div class="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 upcoming-expirations-border">
                    <p class="mb-0">Item 1</p>
                    <p class="mb-0">3</p>
                  </div>
                  <div class="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 upcoming-expirations-border">
                    <p class="mb-0">Item 2</p>
                    <p class="mb-0">3</p>
                  </div>
                  <div class="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 upcoming-expirations-border">
                    <p class="mb-0">Item 3</p>
                    <p class="mb-0">2</p>
                  </div>
                  <div class="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 upcoming-expirations-border">
                    <p class="mb-0">Item 4</p>
                    <p class="mb-0">2</p>
                  </div>
                  <div class="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 upcoming-expirations-border">
                    <p class="mb-0">Item 5</p>
                    <p class="mb-0">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



</div>
        {/* MONTHLY EXPIRATIONS CHART */}

<div className="company-details-right-side-container">
        
        <MonthlyExpirationsChart/>


        {/* ITEMS */}

        <div class="card mb-3 container">
          <div class="card-header">
            <h5 class="mb-0">Items</h5>
          </div>
          <div class="card-body bg-light">
            <a
              class="mb-4 d-block d-flex align-items-center"
              href="#experience-form1"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="experience-form1"
            >
              <span class="circle-dashed">
                <span class="fas fa-plus"></span>
              </span>
              <span class="ml-3">Add new Item</span>
            </a>
            <div class="collapse" id="experience-form1">
              <form class="row">
                <div class="col-3 mb-3 text-lg-right">
                  <label class="form-label" for="company">
                    Name
                  </label>
                </div>
                <div class="col-6 col-sm-7 mb-3">
                  <input
                    class="form-control form-control-sm"
                    id="company"
                    type="text"
                  />
                </div>

                <div class="col-3 mb-3 text-lg-right">
                  <label class="form-label" for="company">
                    Item responsible name
                  </label>
                </div>
                <div class="col-6 col-sm-7 mb-3">
                  <input
                    class="form-control form-control-sm"
                    id="company"
                    type="text"
                  />
                </div>

                <div class="col-3 mb-3 text-lg-right">
                  <label class="form-label" for="company">
                    Item responsible email
                  </label>
                </div>
                <div class="col-6 col-sm-7 mb-3">
                  <input
                    class="form-control form-control-sm"
                    id="company"
                    type="text"
                  />
                </div>

                <div class="col-3 mb-3 text-lg-right">
                  <label class="form-label" for="position">
                    Validity period
                  </label>
                </div>
                <div class="col-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="col-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                    <option value="Months">Months</option>
                    <option value="Years">Years</option>
                  </select>
                </div>
                <br />
                <div class="col-3 mb-3 text-lg-right">
                  <label class="form-label" for="position">
                    Notice period
                  </label>
                </div>
                <div class="col-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="col-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Days">Days in advace</option>
                    <option value="Weeks">Weeks in advace</option>
                    <option value="Months">Months in advace</option>
                    <option value="Years">Years in advace</option>
                  </select>
                </div>

                <div class="col-9 col-sm-7 offset-3">
                  <button class="btn btn-primary" type="button">
                    Save
                  </button>
                </div>
              </form>
              <div class="border-dashed-bottom my-4"></div>
            </div>
            <div class="d-flex">
              <div class="flex-1 position-relative pl-3">
                <h6 class="fs-0 mb-0">Item 1</h6>
                <p class="mb-1">
                  {" "}
                  <a href="#!">1.234 Personas</a>
                </p>
                <div class="border-dashed-bottom my-3"></div>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-1 position-relative pl-3">
                <h6 class="fs-0 mb-0">Item 2</h6>
                <p class="mb-1">
                  {" "}
                  <a href="#!">424 Personas</a>
                </p>
                <div class="border-dashed-bottom my-3"></div>
              </div>
            </div>
            <div class="d-flex">
              <div class="flex-1 position-relative pl-3">
                <h6 class="fs-0 mb-0">Item 3</h6>
                <p class="mb-1">
                  {" "}
                  <a href="#!">12 Personas</a>
                </p>
              </div>
            </div>
          </div>
        </div>

</div>
</div>
        {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}

        <div className="container"><UpcomingExpirationsEmployee /></div>
        

      </div>
    );
  }
}
