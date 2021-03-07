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
    company: "",
    controlledItemsValue:null,
    controlledItemsPercentage:"",
    expiredItemsValue:null,
    expiredItemsPercentage:"",
    itemsList:[],
  }

  componentDidMount = async() => {
    await this.getCompanyDetails()
    this.Button()
  }
  getItemTitle=()=>{
    const { company } = this.state;
    if(company!==""){
      return <span><Link to="/landing">Companies </Link> > {company.companyName}</span>
    } else{
      return ""
    }
  }
  getCompanyDetails = async () => {
    const companyId = this.props.location.pathname.split("/")[2]
    const companyDetails = await this.props.getCompanyDetails(companyId)
    // const items = this.state.company.items
    //EXPIRED AND CONTROLLED ITEMS
    const items = companyDetails.items
    // console.log(items)
    if (items.length===0){
      this.setState({controlledItemsValue:0,controlledItemsPercentage:"",expiredItemsValue:0,expiredItemsPercentage:""})
    } else {
      // var stateItemList = []
      // stateItemList = items.map(element=>{
      //   return({itemName:element.itemName,numWorkers:element.workers.length})
      // })

      // CONTAR CONTROLLED AND EXPIRED ITEMS
      this.setState({controlledItemsValue:200,controlledItemsPercentage:"80%",expiredItemsValue:340,expiredItemsPercentage:"90%"})
      // count controlled items from "items" object, calculate percentage and set state.
    }

    //COMPANY NAME
    // console.log(companyDetails)
    this.setState({ company: companyDetails })
  }

  Button = () => {
    const companyId = this.props.location.pathname.split("/")[2]
    return (<Link to={"/edit-company/"+companyId}><button className="btn btn-falcon-primary btn-sm">Edit Company Details</button></Link>)
  }

  render() {
    const { company, controlledItemsValue, controlledItemsPercentage, expiredItemsValue, expiredItemsPercentage } = this.state;
    let itemTitle = this.getItemTitle()
    return (
      <div className="container"><SideNavbar/>
        <div className="content"><TopNavbar/>
          <div><CompanyNavbar theName={itemTitle} button={this.Button()} />
            <div className="row-cols-md-3 d-md-flex justify-content-between">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                <div className="col-md-12 item-details-top-half-item col"><ControlledItemsCard value={controlledItemsValue} percentage={controlledItemsPercentage}/></div>
                <div className="col-md-12 item-details-top-half-item mb-3"><ExpiredItemsCard  value={expiredItemsValue} percentage={expiredItemsPercentage}/></div>
              </div>
              <div className="col-md-8 col-sm-12"><MonthlyExpirationsChart/></div>
            </div>
            <div className="row-cols-md-3 d-none d-md-flex justify-content-between">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                <div className="col-md-12 col-sm-12 item-details-top-half-item"><ExpirationsInPeriod/></div>
              </div>
              <div className="col-md-8 col-sm-12"><ItemAddAndList items={company.items} company={company}/></div>
            </div>
            <UpcomingExpirationsEmployee />
            <div className="row-cols-md-3 d-md-none justify-content-between">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                <div className="col-md-12 col-sm-12 item-details-top-half-item"><ExpirationsInPeriod/></div>
              </div>
              <div className="col-md-8 col-sm-12"><ItemAddAndList items={company.items} company={company}/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(CompanyDetails);
