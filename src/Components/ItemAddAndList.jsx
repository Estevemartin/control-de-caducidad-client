import React, { Component } from "react";

export default class ItemAddAndList extends Component {
  render() {
    return (
      <div className="card mb-3 container">
        <div className="card-header">
          <h5 className="mb-0">Items</h5>
        </div>
        <div className="card-body bg-light">
          <a
            className="mb-4 d-block d-flex align-items-center"
            href="#experience-form1"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="experience-form1"
          >
            <span className="circle-dashed">
              <span className="fas fa-plus"></span>
            </span>
            <span className="ml-3">Add new Item</span>
          </a>
          <div className="collapse" id="experience-form1">
            <form className="row">
              <div className="col-12 mb-3">
                <label className="form-label" for="company">
                  Name
                </label>
              </div>
              <div className="col-12 mb-3">
                <input
                  className="form-control form-control-sm"
                  id="company"
                  type="text"
                />
              </div>

              <div className="col-12 mb-3 ">
                <label className="form-label" for="company">
                  Item responsible name
                </label>
              </div>
              <div className="col-12 mb-3">
                <input
                  className="form-control form-control-sm"
                  id="company"
                  type="text"
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label" for="company">
                  Item responsible email
                </label>
              </div>
              <div className="col-12 mb-3">
                <input
                  className="form-control form-control-sm"
                  id="company"
                  type="text"
                />
              </div>

              <div className="col-12 mb-3 ">
                <label className="form-label" for="position">
                  Validity period
                </label>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="Days">Days</option>
                  <option value="Weeks">Weeks</option>
                  <option value="Months">Months</option>
                  <option value="Years">Years</option>
                </select>
              </div>
              <div className="d-none d-sm-inline-block">< br /></div>
              <div className="col-12 mb-3">
                <label className="form-label" for="position">
                  Notice period
                </label>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="Days">Days in advace</option>
                  <option value="Weeks">Weeks in advace</option>
                  <option value="Months">Months in advace</option>
                  <option value="Years">Years in advace</option>
                </select>
              </div>

              <div className="col-9 col-sm-7 ml-0 mt-3 offset-5">
                <button className="btn btn-primary" type="button">
                  Save
                </button>
              </div>
            </form>
            <div className="border-dashed-bottom my-4"></div>
          </div>
          <div className="d-flex">
            <div className="flex-1 position-relative pl-3">
              <h6 className="fs-0 mb-0">Item 1</h6>
              <p className="mb-1">
                {" "}
                <a href="#!">1.234 Personas</a>
              </p>
              <div className="border-dashed-bottom my-3"></div>
            </div>
          </div>
          <div className="d-flex">
            <div className="flex-1 position-relative pl-3">
              <h6 className="fs-0 mb-0">Item 2</h6>
              <p className="mb-1">
                {" "}
                <a href="#!">424 Personas</a>
              </p>
              <div className="border-dashed-bottom my-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
