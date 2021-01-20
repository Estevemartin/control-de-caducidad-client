import React, { Component } from 'react'
import UpcomingExpirationsEmployee from '../Components/UpcomingExpirationsEmployee';
import MonthlyExpirationsChart from '../Components/MonthlyExpirationsChart';
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ItemAddAndList from "../Components/ItemAddAndList";
import ReminderConfig from '../Components/ReminderConfig';
import ResponsiblesTag from '../Components/ResponsiblesTag';


export default class ItemDetails extends Component {
  render() {
    return (
      <div className="container">
        {/* TOP COMPANY NAVBAR */}
       <CompanyNavbar/>

        <div className="item-details-top-half-container h-100">
           
            
                {/* CONTROLLED ITEMS CARD */}

                <ControlledItemsCard />

                {/* EXPIRED ITEMS CARD */}

                <ExpiredItemsCard />

                <ResponsiblesTag />

            
                
        </div>

        {/* MONTHLY EXPIRATIONS CHART */}

        <div className="item-details-right-side-container">
                
                <MonthlyExpirationsChart/>

            </div>

        {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}

        <div className="container">
            <UpcomingExpirationsEmployee />
            <ReminderConfig/>
        </div>
        
      </div>
    );
  }
}
