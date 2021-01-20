import React, { Component } from "react";
import UpcomingExpirationsEmployee from '../Components/UpcomingExpirationsEmployee';
import MonthlyExpirationsChart from '../Components/MonthlyExpirationsChart';
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
       <CompanyNavbar/>

        <div className="company-details-top-half-container h-100">
            <div className="company-details-left-side-container">
            
                {/* CONTROLLED ITEMS CARD */}

                <ControlledItemsCard />

                {/* EXPIRED ITEMS CARD */}

                <ExpiredItemsCard />

                {/* UPCOMING EXPIRATIONS IN PERIOD CARD */}

                <ExpirationsInPeriod />

                </div>

                {/* MONTHLY EXPIRATIONS CHART */}

            <div className="company-details-right-side-container">
        
                <MonthlyExpirationsChart/>

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
