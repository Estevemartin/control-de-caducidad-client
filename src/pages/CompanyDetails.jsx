import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ExpirationsInPeriod from "../Components/ExpirationsInPeriod";
import ItemAddAndList from "../Components/ItemAddAndList";

export default class CompanyDetails extends Component {
  render() {
    return (
      <div>
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar />
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

        <div className="row-cols-md-3 d-md-flex justify-content-between">
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
      </div>
    );
  }
}
