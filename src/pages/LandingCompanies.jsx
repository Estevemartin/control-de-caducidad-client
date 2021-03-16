import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";
import LandingNoCompanies from "./LandingNoCompanies";
// import companyservice from "../lib/company-service";
import { Link } from "react-router-dom";

class LandingCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = async () => {
    const theUser = await this.props.getUserInfo(this.props.user._id)
    this.setState({
      user: theUser,
    })
  }

  displayCompanyList = () =>{
    if(this.state.user!==undefined){
      return this.state.user.companies.map((company,companyIndex)=>{
        return this.companyBlock(company.companyName,company._id,company.workers.length,companyIndex)
      })
    }
  }

  companyBlock = (companyName, companyId, numWorkers,companyIndex) => {
    return (
      <div className="card-body fs--1 pb-0" key={companyIndex}>
        <div className="row ">
          <div className="col-sm-4 col-md-4 mb-3">
            <div className="d-flex position-relative align-items-center mb-2">
              {/* <img className="d-flex align-self-center mr-2" src="" alt="logo" width="50"/> */}
              <div className="flex-1">
                <h6 className="fs-0 mb-0">
                  <Link className="stretched-link" to={"/company-details/"+companyId}>
                    {companyName}
                  </Link>
                </h6>
                <p className="mb-1">{numWorkers} Personas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <>
        {this.props.user.companies.length === 0 ? (
          <LandingNoCompanies />
        ) : (
          <div className="container">
            <SideNavbar />
            <div className="content">
              <TopNavbar />
              <div className="card mb-3">
                <div className="card-header bg-light d-flex flex-column flex-md-row justify-content-between">
                  <h5 className="mb-0 text-center">Companies</h5>
                  <div className="d-flex flex-column flex-md-row mt-2 mt-md-0">
                    <Link className="btn btn-falcon-primary mx-6 mx-md-0 mt-2 mt-md-0" to="/add-company">Add Company</Link>
                    <Link className="btn btn-falcon-primary mx-6 mx-md-0 mt-2 mt-md-0 ml-md-2" to="/create-company-details">Create Company</Link>
                  </div>
                </div>
                {this.displayCompanyList()}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withAuth(LandingCompanies);
