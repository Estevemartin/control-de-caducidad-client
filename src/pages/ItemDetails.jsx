import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ReminderConfig from "../Components/ReminderConfig";
import ResponsiblesTag from "../Components/ResponsiblesTag";
import LastDeliveries from "../Components/LastDeliveries";


import { withAuth } from "../lib/AuthProvider";

class ItemDetails extends Component {
  state = {
    itemName: "",
  };

  componentDidMount = () => {
    this.GetCompanyName();
    this.Button();
  };

  GetCompanyName = () => {
    const findItem = "Item name";
    this.setState({ itemName: findItem });
  };

  Button = () => {
    return (
      <>
        <button
          class="btn btn-falcon-primary btn-sm"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Edit item
        </button>
        {/* <!-- Modal--> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit
                </h5>
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span class="font-weight-light" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
              <div class="modal-body">
                {/* EDIT FORM */}

                <div className="card mb-3">
                  <div className="card-body bg-light">
                    <div className="" id="experience-form1">
                      <form className="row">
                        <div className="col-3 mb-3 text-lg-right">
                          <label className="form-label" for="company">
                            Name
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
                            Item responsible name
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
                            Item responsible email
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
                          <label className="form-label" for="position">
                            Validity period
                          </label>
                        </div>
                        <div className="col-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                        <div className="col-3">
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
                        <br />
                        <div className="col-3 mb-3 text-lg-right">
                          <label className="form-label" for="position">
                            Notice period
                          </label>
                        </div>
                        <div className="col-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                        <div className="col-3">
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
                        <div className="col-auto container">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="basic-checkbox"
                        />
                        <label
                          className="form-check-label"
                          for="basic-checkbox"
                        >
                          Update previous expiry dates to new item duration
                        </label>
                      </div>
                    </div>
                      </form>
                      <div className="border-dashed-bottom my-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-secondary btn-sm"
                  type="button"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button class="btn btn-primary btn-sm" type="button">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    const { itemName } = this.state;
    return (
      <div>
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar theName={itemName} button={this.Button()} />

        {/* CONTENT */}
        <div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {/* CONTROLLED ITEMS CARD */}
            <div className="col-md-4">
              <ControlledItemsCard />
            </div>
            {/* EXPIRED ITEMS CARD */}
            <div className="col-md-4 mb-3">
              <ExpiredItemsCard />
            </div>
            {/* RESPONSIBLES */}
            <div className="col-md-4">
              <ResponsiblesTag />
            </div>
          </div>
        </div>

        {/* MONTHLY EXPIRATIONS CHART */}

        <div className="item-details-right-side-container w-100 h-100 mt-2">
          <MonthlyExpirationsChart />
        </div>

        {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}

        <div>
          <UpcomingExpirationsEmployee />
          <div className="row row-cols-1 row-cols-md-2 item-details-bottom-section">
            <div className="col-12 col-md-8">
              <ReminderConfig />
            </div>
            <div className="col-12 col-md-4">
              <LastDeliveries />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(ItemDetails) 