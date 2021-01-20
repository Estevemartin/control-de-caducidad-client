import React, { Component } from "react";

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

        {/* CONTROLLED ITEMS CARD */}

        <div class="col-md-4">
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

        <div class="col-sm-6 col-md-4">
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

        <div class="row g-0">
          <div class="col-lg-6 col-xxl-4 pr-lg-2 mb-3 mb-xxl-0">
            <div class="card h-100 bg-line-chart-gradient">
              <div class="card-header bg-transparent">
                <h5 class="text-white">Upcomming Expirations In Period</h5>
                <div
                  class="real-time-user display-1 font-weight-normal text-white"
                  data-countup='{"endValue":119}'
                >
                  0
                </div>
                <div class="col-auto w-25 d-flex container">
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
            <div class="card-footer text-right bg-transparent border-top upcoming-expirations-border">
              <a class="text-white" href="#!">
                Real-time report
                <span class="fa fa-chevron-right ml-1 fs--1"></span>
              </a>
            </div>
          </div>
        </div>

        {/* MONTHLY EXPIRATIONS CHART */}

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


        {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}


        <div class="card mb-3" id="customersTable" data-list='{"valueNames":["name","email","phone","address","joined"],"page":10,"pagination":true}'>
            <div class="card-header">
              <div class="row flex-between-center">
                <div class="col-4 col-sm-auto d-flex align-items-center pr-0">
                  <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Upcoming Expirations</h5>
                </div>
                <div class="col-8 col-sm-auto text-right pl-2">
                  <div class="d-none" id="table-customers-actions">
                    <div class="d-flex">
                      <select class="form-select form-select-sm" aria-label="Bulk actions">
                        <option selected="">Bulk actions</option>
                        <option value="Refund">Refund</option>
                        <option value="Delete">Delete</option>
                        <option value="Archive">Archive</option>
                      </select>
                      <button class="btn btn-falcon-default btn-sm ml-2" type="button">Apply</button>
                    </div>
                  </div>
                  <div id="table-customers-replace-element">
                    <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ml-1">New</span></button>
                    <button class="btn btn-falcon-default btn-sm mx-2" type="button"><span class="fas fa-filter" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ml-1">Filter</span></button>
                    <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ml-1">Export</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-sm table-striped fs--1 mb-0">
                  <thead class="bg-200 text-900">
                    <tr>
                      <th>
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select='{"body":"table-customers-body","actions":"table-customers-actions","replacedElement":"table-customers-replace-element"}' />
                        </div>
                      </th>
                      <th class="sort pr-1 align-middle white-space-nowrap" data-sort="name">Name</th>
                      <th class="sort pr-1 align-middle white-space-nowrap" style={{maxWidth: 20 + "px"}} data-sort="email">Email</th>
                      <th class="sort pr-1 align-middle white-space-nowrap" data-sort="phone">Phone</th>
                      <th class="sort pr-1 align-middle white-space-nowrap" data-sort="item">Item</th>
                      <th class="sort pr-1 align-middle white-space-nowrap" data-sort="phone">Expiration Date</th>
                      <th class="align-middle no-sort"></th>
                    </tr>
                  </thead>
                  <tbody class="list" id="table-customers-body">
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle py-2" style={{width: 28 + "px"}}>
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="customer-0" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="name align-middle white-space-nowrap py-2"><a href="../e-commerce/customer-details.html">
                          <div class="d-flex d-flex align-items-center">
                            <div class="avatar avatar-xl mr-2">
                              <div class="avatar-name rounded-circle"><span>RA</span></div>
                            </div>
                            <div class="flex-1">
                              <h5 class="mb-0 fs--1">Ricky Antony</h5>
                            </div>
                          </div>
                        </a></td>
                      <td class="email align-middle py-2"><a href="mailto:ricky@example.com">ricky@example.com</a></td>
                      <td class="phone align-middle white-space-nowrap py-2"><a href="tel:2012001851">601-200-1851</a></td>
                      <td class="address align-middle white-space-nowrap pl-5 py-2">2392 Main Avenue</td>
                      <td class="date align-middle white-space-nowrap pl-5 py-2">29/01/2021</td>
                                            <td class="align-middle white-space-nowrap py-2 text-right">
                        <div class="dropdown font-sans-serif">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="customer-dropdown-0" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="customer-dropdown-0">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="card-footer d-flex align-items-center justify-content-center">
              <button class="btn btn-sm btn-falcon-default mr-1" type="button" title="Previous" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
              <ul class="pagination mb-0"></ul>
              <button class="btn btn-sm btn-falcon-default ml-1" type="button" title="Next" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
            </div>
          </div>




      </div>
    );
  }
}
