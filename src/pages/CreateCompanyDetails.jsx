import React, { Component } from 'react'

export default class CreateCompanyDetails extends Component {
    render() {
        return (
            <div>
          <div className="row g-0">
            <div className="col-lg-8 pr-lg-2">
              <div className="card mb-3">
                <div className="card-header">
                  <h5 className="mb-0">Company Details</h5>
                </div>
                <div className="card-body bg-light">
                  <form>
                    <div className="row gx-2">
                      <div className="col-12 mb-3">
                        <label className="form-label" for="event-name">Company Name</label>
                        <input className="form-control" id="event-name" type="text" placeholder="Type your company name here" />
                      </div>
                      <div className=" col-12 mb-3">
                        <h6 className="form-label" for="modal-auth-email">Company Responsible</h6>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" for="event-address">Responsible Name</label>
                        <input className="form-control" id="event-address" type="text" placeholder="Type name here" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" for="event-address">Responsible Email</label>
                        <input className="form-control" id="event-address" type="text" placeholder="Type email here" />
                      </div>
                      </div>

                      <div className="card mb-3">
                <div className="card-header">
                  <h5 className="mb-0">Company Logo</h5>
                </div>
                <div className="card-body bg-light">
                  <div className="dropzone dropzone-multiple p-0" id="my-awesome-dropzone" data-dropzone="data-dropzone" action="../assets/img/">
                    <div className="fallback">
                      <input name="file" type="file" multiple="multiple" />
                    </div>
                    <div className="dz-message" data-dz-message="data-dz-message"> <img className="mr-2" src="../assets/img/icons/cloud-upload.svg" width="25" alt="" />Drop your logo here</div>
                    <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                      <div className="d-flex media align-items-center mb-3 pb-3 border-bottom btn-reveal-trigger"><img className="dz-image" src="..." alt="..." data-dz-thumbnail="data-dz-thumbnail" />
                        <div className="flex-1 d-flex flex-between-center">
                          <div>
                            <h6 data-dz-name="data-dz-name"></h6>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 fs--1 text-400 lh-1" data-dz-size="data-dz-size"></p>
                              <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                            </div>
                          </div>
                          <div className="dropdown font-sans-serif">
                            <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h"></span></button>
                            <div className="dropdown-menu dropdown-menu-right border py-2"><a className="dropdown-item" href="#!" data-dz-remove="data-dz-remove">Remove File</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center w-100">
              <button className="btn btn-primary btn-xs mt-3 d-flex justify-center" type="submit" name="submit">Create company</button>
              </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
