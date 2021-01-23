import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ExpirationsInPeriod from "../Components/ExpirationsInPeriod";
import ItemAddAndList from "../Components/ItemAddAndList";
import {Link} from 'react-router-dom';

export default class CompanyDetails extends Component {
  state = {
    companyName: "",
  }

  componentDidMount = () => {
    this.GetCompanyName();
    this.Button();
  };

  GetCompanyName = () => {
    const findCompany = "El nombre de la empresa";
    this.setState({companyName: findCompany});
  };

  Button = () => {
    return(
      <Link to="/edit-company">
                  <button className="btn btn-falcon-primary btn-sm">
                    Edit Company Details
                  </button>
                  </Link>
    )
  }


  render() {
    const {companyName} = this.state;
    return (
      <div>
        {/* TOP COMPANY NAVBAR */}
        <CompanyNavbar companyName={companyName} button={this.Button()}/>
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
