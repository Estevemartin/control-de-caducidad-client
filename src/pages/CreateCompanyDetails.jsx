import React, { Component } from 'react'

export default class CreateCompanyDetails extends Component {
    render() {
        return (
            <div>
          <div class="row g-0">
            <div class="col-lg-8 pr-lg-2">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="mb-0">Company Details</h5>
                </div>
                <div class="card-body bg-light">
                  <form>
                    <div class="row gx-2">
                      <div class="col-12 mb-3">
                        <label class="form-label" for="event-name">Company Name</label>
                        <input class="form-control" id="event-name" type="text" placeholder="Type your company name here" />
                      </div>
                      <div class=" col-12 mb-3">
                        <h6 class="form-label" for="modal-auth-email">Company Responsible</h6>
                      </div>
                      <div class="col-sm-6 mb-3">
                        <label class="form-label" for="event-address">Responsible Name</label>
                        <input class="form-control" id="event-address" type="text" placeholder="Type name here" />
                      </div>
                      <div class="col-sm-6 mb-3">
                        <label class="form-label" for="event-address">Responsible Email</label>
                        <input class="form-control" id="event-address" type="text" placeholder="Type email here" />
                      </div>
                      </div>

                      <div class="card mb-3">
                <div class="card-header">
                  <h5 class="mb-0">Company Logo</h5>
                </div>
                <div class="card-body bg-light">
                  <div class="dropzone dropzone-multiple p-0" id="my-awesome-dropzone" data-dropzone="data-dropzone" action="../assets/img/">
                    <div class="fallback">
                      <input name="file" type="file" multiple="multiple" />
                    </div>
                    <div class="dz-message" data-dz-message="data-dz-message"> <img class="mr-2" src="../assets/img/icons/cloud-upload.svg" width="25" alt="" />Drop your logo here</div>
                    <div class="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                      <div class="d-flex media align-items-center mb-3 pb-3 border-bottom btn-reveal-trigger"><img class="dz-image" src="..." alt="..." data-dz-thumbnail="data-dz-thumbnail" />
                        <div class="flex-1 d-flex flex-between-center">
                          <div>
                            <h6 data-dz-name="data-dz-name"></h6>
                            <div class="d-flex align-items-center">
                              <p class="mb-0 fs--1 text-400 lh-1" data-dz-size="data-dz-size"></p>
                              <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress=""></span></div>
                            </div>
                          </div>
                          <div class="dropdown font-sans-serif">
                            <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h"></span></button>
                            <div class="dropdown-menu dropdown-menu-right border py-2"><a class="dropdown-item" href="#!" data-dz-remove="data-dz-remove">Remove File</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center w-100">
              <button class="btn btn-primary btn-xs mt-3 d-flex justify-center" type="submit" name="submit">Create company</button>
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
