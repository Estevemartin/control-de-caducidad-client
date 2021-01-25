import React, { Component } from "react";
import UpcomingExpirationsItem from "../Components/UpcomingExpirationsItem";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";

import { withAuth } from "../lib/AuthProvider";

class EmployeeDetails extends Component {
  state = {
    employeeName: "",
  };

  componentDidMount = () => {
    this.GetCompanyName();
    this.Button();
  };

  GetCompanyName = () => {
    const findItem = "Item name";
    this.setState({ employeeName: findItem });
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
          Add item delivery
        </button>
        {/* <!-- Modal--> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="itemModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="itemModalLabel">
                  Item delivery details
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
                          <label className="form-label" for="itemName">
                            Name of the item
                          </label>
                        </div>
                        <div className="col-6 col-sm-9 mb-3">
                          <input
                            className="form-control form-control-sm"
                            id="itemName"
                            type="text"
                          />
                        </div>

                        <div className="col-3 mb-3 text-lg-right">
                          <label className="form-label" for="position">
                            Date of delivery
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
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                          </select>
                        </div>

                        <div className="col-3">
                          <input
                            className="form-control form-control-sm h-50"
                            id="itemName"
                            type="text"
                            placeholder="Year"
                          />
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
    const { employeeName } = this.state;
    return (
      <div className="container">
        <SideNavbar />
        <div className="content">
          <TopNavbar />
          <div className="container">
            {/* TOP COMPANY NAVBAR */}
            <CompanyNavbar theName={employeeName} button={this.Button()} />

            <div className="row ">
              {/* CONTROLLED ITEMS CARD */}
              <div className="col col-xl-5 mb-3">
                <ControlledItemsCard />
              </div>
              {/* EXPIRED ITEMS CARD */}
              <div className="col col-xl-5 mb-3">
                <ExpiredItemsCard />
              </div>
            </div>

            {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}

            <div className="">
              <UpcomingExpirationsItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(EmployeeDetails);
