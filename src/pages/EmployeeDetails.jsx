import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ExpirationsInPeriod from "../Components/ExpirationsInPeriod";
import ItemAddAndList from "../Components/ItemAddAndList";

export default class EmployeeDetails extends Component {
  render() {
    return (
      <div className="container">
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar />
        <div className="row container">
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

        <div className="container">
          <UpcomingExpirationsEmployee />
        </div>
      </div>
    );
  }
}
