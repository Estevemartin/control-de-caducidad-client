import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ExpirationsInPeriod from "../Components/ExpirationsInPeriod";
import ItemAddAndList from "../Components/ItemAddAndList";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";

import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class CompanyDetails extends Component {
  state = {
    companyName: "",
  };

  componentDidMount = () => {
    this.GetCompanyName();
    this.Button();
  };

  GetCompanyName = () => {
    const findCompany = "Company name";
    this.setState({ companyName: findCompany });
  };

  Button = () => {
    return (
      <>
      <Link to="/edit-company">
        <button className="btn btn-falcon-primary btn-sm">
          Edit Company Details
        </button>
      </Link>
      </>
    );
  };

  render() {
    const { companyName } = this.state;
    return (
      <div className="container">
        <SideNavbar />
        <div className="content">
          <TopNavbar />
          <div>
            {/* TOP COMPANY NAVBAR */}
            <CompanyNavbar theName={companyName} button={this.Button()} />
            {/* CONTENT */}
            <div className="row-cols-md-3 d-md-flex justify-content-between">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                {/* CONTROLLED ITEMS CARD */}
                <div className="col-md-12 item-details-top-half-item col">
                  <ControlledItemsCard />
                </div>
                {/* EXPIRED ITEMS CARD */}
                <div className="col-md-12 item-details-top-half-item mb-3">
                  <ExpiredItemsCard />
                </div>
              </div>

              <div className="col-md-8 col-sm-12">
                {/* MONTHLY EXPIRATIONS CHART */}
                <MonthlyExpirationsChart />
              </div>
            </div>

            {/* DESKTOP VERSION ORDER */}

            <div className="row-cols-md-3 d-none d-md-flex justify-content-between">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                {/* UPCOMING EXPIRATIONS IN PERIOD CARD */}
                <div className="col-md-12 col-sm-12 item-details-top-half-item">
                  <ExpirationsInPeriod />
                </div>
              </div>

              <div className="col-md-8 col-sm-12">
                {/* ITEMS */}
                <ItemAddAndList />
              </div>
            </div>

            {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}
            <UpcomingExpirationsEmployee />

            {/* MOBILE VERSION ORDER */}

            <div className="row-cols-md-3 d-md-none justify-content-between">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                {/* UPCOMING EXPIRATIONS IN PERIOD CARD */}
                <div className="col-md-12 col-sm-12 item-details-top-half-item">
                  <ExpirationsInPeriod />
                </div>
              </div>

              <div className="col-md-8 col-sm-12">
                {/* ITEMS */}
                <ItemAddAndList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(CompanyDetails);
