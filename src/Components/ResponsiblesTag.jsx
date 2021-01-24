import React from "react";

function ResponsiblesTag() {
  return (
    <div class="card">
      <div class="card-header d-flex flex-between-center bg-light py-2">
        <h6 class="mb-0">Responsibles</h6>
        <div class="dropdown font-sans-serif btn-reveal-trigger">
          {/* MODAL EDIT */}
          <button
            class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none"
            type="button"
            id="dropdown-active-user"
            data-toggle="dropdown"
            data-boundary="viewport"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="fas fa-ellipsis-h fs--2"></span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right border py-2"
            aria-labelledby="dropdown-active-user"
          >
            <button
              type="button"
              class="dropdown-item"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Edit
            </button>
            {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="responsibleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="responsibleModalLabel">
                Edit responsibles
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form className="row">
            <div className="col-3 mb-3 text-lg-right">
                          <label className="form-label" for="company">
                            Company responsible
                          </label>
                        </div>
                        <div className="col-6 col-sm-7 mb-3">
                          <input
                            className="form-control form-control-sm"
                            id="company"
                            type="text"
                          />
                        </div>
                        <div className="col-3 mb-3 text-lg-right">
                          <label className="form-label" for="company">
                            Item responsible
                          </label>
                        </div>
                        <div className="col-6 col-sm-7 mb-3">
                          <input
                            className="form-control form-control-sm"
                            id="company"
                            type="text"
                          />
                        </div>
                        </form>
            
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>

      

      {/* ITEM RESPONSIBLES */}
      <div class="card-body py-2">
        <div class="d-flex align-items-center mb-3">
          <div class="flex-1 ml-3">
            <h6 class="mb-0 font-weight-semi-bold">
              <a class="text-900" href="pages/profile.html">
                Emma Watson
              </a>
            </h6>
            <p class="text-500 fs--2 mb-0">Company Responsible</p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <div class="flex-1 ml-3">
            <h6 class="mb-0 font-weight-semi-bold">
              <a class="text-900" href="pages/profile.html">
                Antony Hopkins
              </a>
            </h6>
            <p class="text-500 fs--2 mb-0">Item Responsible</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiblesTag;
