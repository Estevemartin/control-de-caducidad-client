import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";
import LandingNoCompanies from "./LandingNoCompanies";
import companyservice from "../lib/company-service"

class LandingCompanies extends Component {
  constructor(props){
    super(props); 
    this.state = { 
      user: "",
      companies: [],
      companyName: "",
      employees: "",
    }
    
  }

  componentDidMount = async () => {
    const companiesArr = await this.props.user.companies
    console.log()
      this.setState({
        user: this.props.user,
        companies: companiesArr,
      })
  }

  companyDetails = async (id) => {
    const details = await companyservice.getCompany(id)
    return details
  }


/* TODO: hacer mapeo a las companies y traer datos */
  render() {
    const { companies } = this.state;
    console.log(this.state.companyName)
    return (
      <>
      { companies.length === 0 ? <LandingNoCompanies /> :
      <div className="container">
        <SideNavbar />
        <div className="content">
          <TopNavbar />
          <div className="card mb-3">
            <div className="card-header bg-light">
              <h5 className="mb-0">Companies</h5>
            </div>
            { companies ? companies.map((company, index) => {
                    return (
            <div className="card-body fs--1 pb-0" key={index}>
              <div className="row">
                <div className="col-sm-6 col-md-4 mb-3">
                  <div className="d-flex position-relative align-items-center mb-2">
                    <img
                      className="d-flex align-self-center mr-2"
                      src=""
                      alt="logo"
                      width="50"
                    />
                    <div className="flex-1">
                      <h6 className="fs-0 mb-0">
                        <a className="stretched-link" href="#!">
                          {company.companyName}
                        </a>
                      </h6>
                      <p className="mb-1">3243 Personas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}) : <p>Loading...</p>}
          </div>
        </div>
      </div>
       }
       </>
    );
  }
}

export default withAuth(LandingCompanies);
