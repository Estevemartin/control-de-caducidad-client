import React, { Component } from "react";
import EmployeeList from "../Components/EmployeeList";
import CompanyNavbar from "../Components/CompanyNavbar";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";

import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class CompanyEmployees extends Component {
  state = {
    company:"",
  }

  componentDidMount = async() => {
    await this.getCompanyDetails()
    // this.Button()
  }
  getItemTitle=()=>{
    const { company } = this.state;
    if(company!==""){
      return <span><Link to="/landing">Companies </Link> > <Link to={"/company-details/"+company._id}>{company.companyName}</Link> > Employees</span>
    } else{
      return ""
    }
  }
  getCompanyDetails = async () => {
    const companyId = this.props.location.pathname.split("/")[2]
    const companyDetails = await this.props.getCompanyDetails(companyId)
    this.setState({ company: companyDetails })
  }

  Button = () => {
    const companyId = this.props.location.pathname.split("/")[2]
    return (<Link to={"/edit-company/"+companyId}><button className="btn btn-falcon-primary btn-sm">Edit Company Details</button></Link>)
  }

  render() {
    let itemTitle = this.getItemTitle()
    // let employees = this.state.company.workers
    let company = this.state.company
    // console.log(employees)
    return (
      <div className="container">
        <SideNavbar/>
        <div className="content">
          <TopNavbar/>
          <div>
            <CompanyNavbar theName={itemTitle} button={this.Button()} />
            <EmployeeList company={company}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(CompanyEmployees);
