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
      <div className="container">
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar />

        <div className="container row-cols-1 row-cols-md-3 d-md-flex">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
            {/* CONTROLLED ITEMS CARD */}
            <div className="col-md-12 item-details-top-half-item">
              <ControlledItemsCard />
            </div>
            {/* EXPIRED ITEMS CARD */}
            <div className="col-md-12 item-details-top-half-item mb-3">
              <ExpiredItemsCard />
            </div>
            {/* UPCOMING EXPIRATIONS IN PERIOD CARD */}
            <div className="col-md-12 col-sm-12 item-details-top-half-item">
              <ExpirationsInPeriod />
            </div>
          </div>

          {/* MONTHLY EXPIRATIONS CHART */}

          <div className="col-md-8 col-sm-12 container">
            <MonthlyExpirationsChart />

            {/* ITEMS */}

            <ItemAddAndList />
          </div>
        </div>

        {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}

        <div className="container">
          <UpcomingExpirationsEmployee />
        </div>
      </div>
    );
  }
}
