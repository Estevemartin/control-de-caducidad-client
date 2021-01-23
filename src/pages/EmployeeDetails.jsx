import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";

export default class EmployeeDetails extends Component {


  /* tableFields */


  render() {
    return (
      <div className="container">
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar />

        
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
          <UpcomingExpirationsEmployee />
        </div>
      </div>
    );
  }
}
