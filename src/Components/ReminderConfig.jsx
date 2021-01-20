import React from "react";

function ReminderConfig() {
  return (
    <form class="card mb-3">
      <div class="card-header bg-light">
        <h5 class="mb-0">Reminder Configuration</h5>
      </div>
      <div class="card-body p-0">
        <input
          class="form-control border-0 rounded-0 outline-none px-card"
          id="email-subject"
          type="text"
          aria-describedby="email-subject"
          placeholder="Subject"
        />
        <div class="min-vh-50">
          <textarea class="tinymce d-none" name="content"></textarea>
        </div>
        <div class="bg-light px-card py-3">
          <div class="d-inline-flex flex-column">
            <div class="border px-2 rounded-lg d-flex flex-between-center bg-white my-1 fs--1">
              <span class="fs-1 far fa-image"></span>
              <span class="ml-2">winter.jpg (873kb)</span>
              <a
                class="text-300 p-1 ml-6"
                href="#!"
                data-toggle="tooltip"
                data-placement="right"
                title="Detach"
              >
                <span class="fas fa-times"></span>
              </a>
            </div>
            <div class="border px-2 rounded-lg d-flex flex-between-center bg-white my-1 fs--1">
              <span class="fs-1 far fa-file-archive"></span>
              <span class="ml-2">coffee.zip (342kb)</span>
              <a
                class="text-300 p-1 ml-6"
                href="#!"
                data-toggle="tooltip"
                data-placement="right"
                title="Detach"
              >
                <span class="fas fa-times"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer border-top border-200 d-flex flex-between-center">
        <div class="d-flex align-items-center">
          <button class="btn btn-primary btn-sm px-5 mr-2" type="submit">
            Send
          </button>
          <input class="d-none" id="email-attachment" type="file" />
          <label
            class="mr-2 btn btn-light btn-sm mb-0 cursor-pointer"
            for="email-attachment"
            data-toggle="tooltip"
            data-placement="top"
            title="Attach files"
          >
            <span
              class="fas fa-paperclip fs-1"
              data-fa-transform="down-2"
            ></span>
          </label>
          <input class="d-none" id="email-image" type="file" accept="image/*" />
          <label
            class="btn btn-light btn-sm mb-0 cursor-pointer"
            for="email-image"
            data-toggle="tooltip"
            data-placement="top"
            title="Attach images"
          >
            <span class="fas fa-image fs-1" data-fa-transform="down-2"></span>
          </label>
        </div>
        <div class="d-flex align-items-center">
          <div class="dropdown font-sans-serif mr-2 btn-reveal-trigger">
            <button
              class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none"
              id="email-options"
              type="button"
              data-toggle="dropdown"
              data-boundary="viewport"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="fas fa-ellipsis-v" data-fa-transform="down-2"></span>
            </button>
            <div
              class="dropdown-menu dropdown-menu-right border py-2"
              aria-labelledby="email-options"
            >
              <a class="dropdown-item" href="#!">
                Print
              </a>
              <a class="dropdown-item" href="#!">
                Check spelling
              </a>
              <a class="dropdown-item" href="#!">
                Plain text mode
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#!">
                Archive
              </a>
            </div>
          </div>
          <button
            class="btn btn-light btn-sm"
            type="button"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
          >
            {" "}
            <span class="fas fa-trash"></span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReminderConfig;
