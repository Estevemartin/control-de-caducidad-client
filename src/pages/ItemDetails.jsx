import React, { Component } from "react";
import UpcomingExpirationsEmployee from "../Components/UpcomingExpirationsEmployee";
import MonthlyExpirationsChart from "../Components/MonthlyExpirationsChart";
import ControlledItemsCard from "../Components/ControlledItemsCard";
import ExpiredItemsCard from "../Components/ExpiredItemsCard";
import CompanyNavbar from "../Components/CompanyNavbar";
import ReminderConfig from "../Components/ReminderConfig";
import ResponsiblesTag from "../Components/ResponsiblesTag";
import LastDeliveries from "../Components/LastDeliveries";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";

import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";


class ItemDetails extends Component {
  

  state = {
    item: "",
    companyResponsible:"",
    itemResponsible:"",
    itemTitle:null,
    companyName:"",
    companyLink:"",
    pathName:""
  }
  componentDidMount = () => {
    this.getItemDetails();
    this.Button();
   }

  getItemDetails = async () => {
    const itemId = this.props.location.pathname.split("/")[2]
    // console.log(itemId)
    const item = await this.props.getItemDetails(itemId)
    // console.log(item)
    const companyResponsible = item.companyId.responsible.respName
    const itemResponsible = item.responsible.name
    const companyName = item.companyId.companyName
    const companyLink = "/company-details/" + item.companyId._id
    this.setState({ item, companyResponsible, itemResponsible, companyName, companyLink});
  }

  getItemTitle=()=>{
    const { item } = this.state;
    if(item!==""){
      return <span><Link to="/landing">Companies </Link> > <Link to={"/company-details/"+item.companyId._id}>{item.companyId.companyName}</Link> > {item.itemName}</span>
    } else{
      return ""
    }
  }
  
  getCompanyResponsible=()=>{
    const { item } = this.state;
    if(item!==""){
      return this.state.item.companyId.responsible.name
    } else{
      return ""
    }
  }
  Button = () => {
    return (
      <>
        <button className="btn btn-falcon-primary btn-sm" type="button" data-toggle="modal" data-target="#exampleModal">Edit item</button>
        {/* <!-- Modal--> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span className="font-weight-light" aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* EDIT FORM */}

                <div className="card mb-3">
                  <div className="card-body bg-light">
                    <div className="" id="experience-form1">
                      <form className="row">
                        <div className="col-3 mb-3 text-lg-right"><label className="form-label" htmlFor="company">Name</label></div>
                        <div className="col-6 col-sm-7 mb-3"><input className="form-control form-control-sm" type="text"/></div>
                        <div className="col-3 mb-3 text-lg-right"><label className="form-label" htmlFor="company">Item responsible name</label></div>
                        <div className="col-6 col-sm-7 mb-3"><input className="form-control form-control-sm" type="text"/></div>
                        <div className="col-3 mb-3 text-lg-right"><label className="form-label" htmlFor="company">Item responsible email</label></div>
                        <div className="col-6 col-sm-7 mb-3"><input className="form-control form-control-sm" type="text"/></div>
                        <div className="col-3 mb-3 text-lg-right"><label className="form-label" htmlFor="position">Validity period</label></div>
                        <div className="col-3">
                          <select className="form-select" aria-label="Default select example" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                        <div className="col-3">
                          <select className="form-select" aria-label="Default select example" >
                            <option value="Days">Days</option>
                            <option value="Weeks">Weeks</option>
                            <option value="Months">Months</option>
                            <option value="Years">Years</option>
                          </select>
                        </div>
                        <br />
                        <div className="col-3 mb-3 text-lg-right"><label className="form-label" htmlFor="position">Notice period</label></div>
                        <div className="col-3">
                          <select className="form-select" aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                        <div className="col-3">
                          <select className="form-select" aria-label="Default select example">
                            <option value="Days">Days in advace</option>
                            <option value="Weeks">Weeks in advace</option>
                            <option value="Months">Months in advace</option>
                            <option value="Years">Years in advace</option>
                          </select>
                        </div>
                        <div className="col-auto container">
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="checkbox" id="basic-checkbox" />
                            <label className="form-check-label" htmlFor="basic-checkbox" >Update previous expiry dates to new item duration</label>
                          </div>
                        </div>
                      </form>
                      <div className="border-dashed-bottom my-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Close</button>
                <button className="btn btn-primary btn-sm" type="button">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { companyResponsible, itemResponsible} = this.state;

    // console.log(item)
    let itemTitle = this.getItemTitle()
    // let companyResponsible = this.getCompanyResponsible
    // console.log(itemTitle)
    // console.log(companyResponsible)

    return (
      <div key={this.props.location.pathname.split("/")[2]}>
        <div className="container">
          <SideNavbar />
          <div className="content">
            <TopNavbar />
            {/* TOP COMPANY NAVBAR */}
            <CompanyNavbar theName={itemTitle}  button={this.Button()} />

            {/* CONTENT */}
            <div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {/* CONTROLLED ITEMS CARD */}
                <div className="col-md-4 mb-3">
                  <ControlledItemsCard />
                </div>
                {/* EXPIRED ITEMS CARD */}
                <div className="col-md-4 mb-3">
                  <ExpiredItemsCard />
                </div>
                {/* RESPONSIBLES */}
                <div className="col-md-4 mb-3">
                  <ResponsiblesTag itemResponsible={itemResponsible} companyResponsible={companyResponsible}/>
                </div>
              </div>
            </div>

            {/* MONTHLY EXPIRATIONS CHART */}

            <div className="item-details-right-side-container w-100 h-100 mt-2">
              <MonthlyExpirationsChart />
            </div>

            {/* UPCOMING EXPIRATIONS BY EMPLOYEE */}

            <div>
              <UpcomingExpirationsEmployee />
              <div className="row row-cols-1 row-cols-md-2 item-details-bottom-section">
                <div className="col-12 col-md-8">
                  <ReminderConfig />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <LastDeliveries />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(ItemDetails);
