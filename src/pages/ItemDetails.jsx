import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ItemAddAndList from "../Components/ItemAddAndList";
import ReminderConfig from "../Components/ReminderConfig";
import ResponsiblesTag from "../Components/ResponsiblesTag";
import LastDeliveries from "../Components/LastDeliveries";

export default class ItemDetails extends Component {
  render() {
    return (
      <div className="container">
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar />

        <div className=" h-100">
        <div class="row g-3">
        <div class="col-sm-6 col-md-4 d-flex w-100">
          {/* CONTROLLED ITEMS CARD */}
          <div className="item-details-top-half-item h-100">
            <ControlledItemsCard />
          </div>
          {/* EXPIRED ITEMS CARD */}
          <div className="item-details-top-half-item  h-100">
            <ExpiredItemsCard />
          </div>
          {/* RESPONSIBLES */}
          <div className="item-details-top-half-item  h-100">
            <ResponsiblesTag />
          </div>
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
          <div className="item-details-bottom-section">
          <div className="col">
          <ReminderConfig />
          </div>
          <div className="col w-100">
          <LastDeliveries />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
