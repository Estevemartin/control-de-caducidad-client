import React, { Component } from 'react'

export default class UpcomingExpirationsEmployee extends Component {
    render() {
        return (
            
                <div className="card mb-3" id="customersTable" data-list='{"valueNames":["name","email","phone","address","joined"],"page":10,"pagination":true}'>
            <div className="card-header">
              <div className="row flex-between-center">
                <div className="col-4 col-sm-auto d-flex align-items-center pr-0">
                  <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Upcoming Expirations</h5>
                </div>
                <div className="col-8 col-sm-auto text-right pl-2">
                  <div className="d-none" id="table-customers-actions">
                    <div className="d-flex">
                      <select className="form-select form-select-sm" aria-label="Bulk actions">
                        <option selected="">Bulk actions</option>
                        <option value="Refund">Refund</option>
                        <option value="Delete">Delete</option>
                        <option value="Archive">Archive</option>
                      </select>
                      <button className="btn btn-falcon-default btn-sm ml-2" type="button">Apply</button>
                    </div>
                  </div>
                  <div id="table-customers-replace-element">
                    <button className="btn btn-falcon-default btn-sm" type="button"><span className="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">New</span></button>
                    <button className="btn btn-falcon-default btn-sm mx-2" type="button"><span className="fas fa-filter" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Filter</span></button>
                    <button className="btn btn-falcon-default btn-sm" type="button"><span className="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Export</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-sm table-striped fs--1 mb-0">
                  <thead className="bg-200 text-900">
                    <tr>
                      <th>
                        <div className="form-check fs-0 mb-0 d-flex align-items-center">
                          <input className="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select='{"body":"table-customers-body","actions":"table-customers-actions","replacedElement":"table-customers-replace-element"}' />
                        </div>
                      </th>
                      <th className="sort pr-1 align-middle white-space-nowrap" data-sort="name">Name</th>
                      <th className="sort pr-1 align-middle white-space-nowrap" style={{maxWidth: 20 + "px"}} data-sort="email">Email</th>
                      <th className="sort pr-1 align-middle white-space-nowrap" data-sort="phone">Phone</th>
                      <th className="sort pr-1 align-middle white-space-nowrap" data-sort="item">Item</th>
                      <th className="sort pr-1 align-middle white-space-nowrap" data-sort="phone">Expiration Date</th>
                      <th className="align-middle no-sort"></th>
                    </tr>
                  </thead>
                  <tbody className="list" id="table-customers-body">
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle py-2" style={{width: 28 + "px"}}>
                        <div className="form-check fs-0 mb-0 d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" id="customer-0" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td className="name align-middle white-space-nowrap py-2"><a href="../e-commerce/customer-details.html">
                          <div className="d-flex d-flex align-items-center">
                            <div className="avatar avatar-xl mr-2">
                              <div className="avatar-name rounded-circle"><span>RA</span></div>
                            </div>
                            <div className="flex-1">
                              <h5 className="mb-0 fs--1">Ricky Antony</h5>
                            </div>
                          </div>
                        </a></td>
                      <td className="email align-middle py-2"><a href="mailto:ricky@example.com">ricky@example.com</a></td>
                      <td className="phone align-middle white-space-nowrap py-2"><a href="tel:2012001851">601-200-1851</a></td>
                      <td className="address align-middle white-space-nowrap pl-5 py-2">2392 Main Avenue</td>
                      <td className="date align-middle white-space-nowrap pl-5 py-2">29/01/2021</td>
                                            <td className="align-middle white-space-nowrap py-2 text-right">
                        <div className="dropdown font-sans-serif">
                          <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="customer-dropdown-0" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                          <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="customer-dropdown-0">
                            <div className="bg-white py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="card-footer d-flex align-items-center justify-content-center">
              <button className="btn btn-sm btn-falcon-default mr-1" type="button" title="Previous" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
              <ul className="pagination mb-0"></ul>
              <button className="btn btn-sm btn-falcon-default ml-1" type="button" title="Next" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
            </div>
          </div>
        )
    }
}
