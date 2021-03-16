import React from "react";

function ReminderConfig() {
  return (
    <form className="card mb-3">
      <div className="card-header bg-light">
        <h5 className="mb-0">Reminder Configuration</h5>
      </div>
      <div className="card-body p-0">
        <input
          className="form-control border-0 rounded-0 outline-none px-card"
          id="email-subject"
          type="text"
          aria-describedby="email-subject"
          placeholder="Subject"
        />
        <div className="min-vh-50">
          <textarea className="tinymce d-none" name="content"></textarea>
        </div>
        <div className="bg-light px-card py-3">
          <div className="d-inline-flex flex-column">
            <div className="border px-2 rounded-lg d-flex flex-between-center bg-white my-1 fs--1">
              <span className="fs-1 far fa-image"></span>
              <span className="ml-2">winter.jpg (873kb)</span>
              <a
                className="text-300 p-1 ml-6"
                href="#!"
                data-toggle="tooltip"
                data-placement="right"
                title="Detach"
              >
                <span className="fas fa-times"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer border-top border-200 d-flex flex-between-center">
        <div className="d-flex align-items-center">
          <button className="btn btn-primary btn-sm px-5 mr-2" type="submit">
            Send
          </button>
          <input className="d-none" id="email-attachment" type="file" />
          <label
            className="mr-2 btn btn-light btn-sm mb-0 cursor-pointer"
            htmlFor="email-attachment"
            data-toggle="tooltip"
            data-placement="top"
            title="Attach files"
          >
            <span
              className="fas fa-paperclip fs-1"
              data-fa-transform="down-2"
            ></span>
          </label>
          <input className="d-none" id="email-image" type="file" accept="image/*" />
          <label
            className="btn btn-light btn-sm mb-0 cursor-pointer"
            htmlFor="email-image"
            data-toggle="tooltip"
            data-placement="top"
            title="Attach images"
          >
            <span className="fas fa-image fs-1" data-fa-transform="down-2"></span>
          </label>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown font-sans-serif mr-2 btn-reveal-trigger">
            <button
              className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none"
              id="email-options"
              type="button"
              data-toggle="dropdown"
              data-boundary="viewport"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fas fa-ellipsis-v" data-fa-transform="down-2"></span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right border py-2"
              aria-labelledby="email-options"
            >
              <a className="dropdown-item" href="#!">
                Print
              </a>
              <a className="dropdown-item" href="#!">
                Check spelling
              </a>
              <a className="dropdown-item" href="#!">
                Plain text mode
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#!">
                Archive
              </a>
            </div>
          </div>
          <button
            className="btn btn-light btn-sm"
            type="button"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
          >
            {" "}
            <span className="fas fa-trash"></span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReminderConfig;
