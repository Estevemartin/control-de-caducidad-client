import React from "react";

function ResponsiblesTag() {
  return (
    <div class="card" >
      <div class="card-header d-flex flex-between-center bg-light py-2">
        <h6 class="mb-0">Responsibles</h6>
        <div class="dropdown font-sans-serif btn-reveal-trigger">
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
            <a class="dropdown-item" href="#!">
              Edit
            </a>
          </div>
        </div>
      </div>
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
