import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";
import LandingNoCompanies from "./LandingNoCompanies";
import companyservice from "../lib/company-service";
import { Link } from "react-router-dom";

class LandingCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = async () => {
    const theUser = await this.props.getUserInfo(this.props.user._id);  
    // console.log(theUser)  
    // const companiesArr = await this.props.user.companies;
    this.setState({
      user: theUser,
      // companies: theUser.companies,
    });
  };

  companyDetails = async (id) => {
    const details = await companyservice.getCompany(id);
    return details;
  };

  displayCompanyList = () =>{
    // const user = this.props.user
    // console.log(this.state.user)
    if(this.state.user!==undefined){

      let i
      for(i=0;i<this.state.user.companies.length;i++){
        return <>
          <div className="card-body fs--1 pb-0" key={i}>
            <div className="row">
              <div className="col-sm-6 col-md-4 mb-3">
                <div className="d-flex position-relative align-items-center mb-2">
                  <img className="d-flex align-self-center mr-2" src="" alt="logo" width="50"/>
                  <div className="flex-1">
                    <h6 className="fs-0 mb-0">
                      <a className="stretched-link" href="#!">
                        {this.state.user.companies[i].companyName}
                      </a>
                    </h6>
                    <p className="mb-1">{this.state.user.companies[i].workers.length} Personas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    }

  }
  /* TODO: hacer mapeo a las companies y traer datos (ahora solo trae el id que hay en el array de companies del usuario)*/
  render() {
    // const { companies } = this.state;
    // console.log(this.state.user)
    // console.log(this.state.companyName);
    const companiesList = this.state.user!==undefined ? this.state.user.companies.map((element,index)=>{
      if (element!==undefined&&element.workers!==undefined){
        return <div className="card-body fs--1 pb-0" key={index}>
            <div className="row">
              <div className="col-sm-6 col-md-4 mb-3">
                <div className="d-flex position-relative align-items-center mb-2">
                  {/* <img className="d-flex align-self-center mr-2" src="" alt="logo" width="50"/> */}
                  <div className="flex-1" >
                    <h6 className="fs-0 mb-0"><a className="stretched-link" href="#!" >{element.companyName}</a></h6>
                    <p className="mb-1">{element.workers.length} Personas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      } 
    }) : ""

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
                {companiesList}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withAuth(LandingCompanies);
