import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ReminderConfig from "../Components/ReminderConfig";
import ResponsiblesTag from "../Components/ResponsiblesTag";
import LastDeliveries from "../Components/LastDeliveries";

export default class ItemDetails extends Component {
  render() {
    return (
      <div className="container">
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar />

        <div className="container ">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 item-details-top-half-container">
            {/* CONTROLLED ITEMS CARD */}
            <div className="col-md-4 item-details-top-half-item">
              <ControlledItemsCard />
            </div>
            {/* EXPIRED ITEMS CARD */}
            <div className="col-md-4 item-details-top-half-item mb-3">
              <ExpiredItemsCard />
            </div>
            {/* RESPONSIBLES */}
            <div className="col-md-4 item-details-top-half-item ">
              <ResponsiblesTag />
            </div>
          </div>
        </div>

        {/* MONTHLY EXPIRATIONS CHART */}

        <div className="item-details-right-side-container w-100 h-100 mt-2">
          <MonthlyExpirationsChart />
        </div>

        {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}

        <div className="container">
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
