import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class ItemAddAndList extends Component {
  state={
    itemResponsibleName:"",
    itemResponsibleEmail:"",
    validityPeriodValue:"1",
    validityPeriodUnits:"Days",
    noticePeriodValue:"1",
    noticePeriodUnits:"Days",
    errorMsg:null,
    successMsg:null
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleFormSubmit = async event => {
    event.preventDefault();
    const {itemName, itemResponsibleName, itemResponsibleEmail, validityPeriodValue, validityPeriodUnits, noticePeriodValue, noticePeriodUnits} = this.state
    console.log(this.props.company)
    const companyId = this.props.company._id
    const errorMsgValidations = this.createNewItemValidations(itemName, itemResponsibleName, itemResponsibleEmail)
    if (errorMsgValidations===null){
      let errorMsg=await this.props.createNewItem(itemName, itemResponsibleName, itemResponsibleEmail, validityPeriodValue, validityPeriodUnits, noticePeriodValue, noticePeriodUnits, companyId)
      this.setState({successMsg:"Item Successfully Created",errorMsg:null})
      await this.getCompanyDetails()
      this.forceUpdate()
    } else {
      this.setState({errorMsg:errorMsgValidations,successMsg:null})
    }

  }
  displayErrorMsg=()=>{
    const {errorMsg} = this.state
    if (errorMsg){
      return (<div className="alert alert-danger" role="alert" style={{padding:"5px",paddingLeft:"10px", margin:"17px", width:"80%"}}>{errorMsg}</div>)
    }
  }
  displaySuccessMsg=()=>{
    const {successMsg} = this.state
    if (successMsg){
      return (<div className="alert alert-success" role="alert" style={{padding:"5px",paddingLeft:"10px", margin:"17px", width:"80%"}}>{successMsg}</div>)
    }
  }
  createNewItemValidations = (itemName, itemResponsibleName, itemResponsibleEmail) =>{
    
    if (itemName === "" && itemResponsibleEmail === "" && itemResponsibleName === ""){return "Don't forget to fill the item name, and the item responsible information."}

    else if(itemName === "" && itemResponsibleEmail !== "" && itemResponsibleName === ""){return "Don't forget to fill the item name, and the item responsible information."}
    else if(itemName === "" && itemResponsibleEmail === "" && itemResponsibleName !== ""){return "Don't forget to fill the item name, and the item responsible information."}
    else if(itemName === "" && itemResponsibleEmail !== "" && itemResponsibleName !== ""){return "Don't forget to fill the item name."}
    
    else if(itemName !== "" && itemResponsibleEmail === "" && itemResponsibleName === ""){return "Don't forget to fill the item responsible information."}
    else if(itemName !== "" && itemResponsibleEmail !== "" && itemResponsibleName === ""){return "Don't forget to fill the item responsible information."}
    else if(itemName !== "" && itemResponsibleEmail === "" && itemResponsibleName !== ""){return "Don't forget to fill the item responsible information."}

    else if(itemName !== "" && itemResponsibleEmail !== "" && itemResponsibleName !== ""){return null}
  }
  displayItemsList= ()=>{
    
    const {items} = this.props
    const {company} = this.state
    // console.log(company)
    // console.log(items)
    if (company!==undefined){
      const companyItems = company.items
      return companyItems.map((element,index)=>{
        // console.log(element.workers.length)
        const link = "/item-details/"+element._id
        return (
          <div className="d-flex" key={index}>
            <div className="flex-1 position-relative pl-3">
              <h6 className="fs-0 mb-0"><Link to={link}>{element.itemName}</Link></h6>
              <p className="mb-1" style={{fontSize:'0.8rem'}}>{element.workers.length} {element.workers.length===1?'employee':'employees'}</p>
              <div className="border-dashed-bottom my-3"></div>
            </div>
          </div>
        ) 
      })
    } else if (items!==undefined){
      return items.map((element,index)=>{
        // console.log(element.workers.length)
        const link = "/item-details/"+element._id

        return (
          <div className="d-flex" key={index}>
            <div className="flex-1 position-relative pl-3">
              <h6 className="fs-0 mb-0"><Link to={link}>{element.itemName}</Link></h6>
              <p className="mb-1" style={{fontSize:'0.8rem'}}>{element.workers.length}  {element.workers.length===1?'employee':'employees'}</p>
              <div className="border-dashed-bottom my-3"></div>
            </div>
          </div>
        ) 
      })
    }
  }
  componentDidMount = async() =>{
    // const companyDetails = await this.props.getCompanyDetails(this.props.company._id)
    const items=this.props.items
    // console.log(items)
    // console.log(companyDetails)
    // if (companyDetails!==null){
    //   const companyItems = companyDetails.items
    //   console.log(companyItems)
      
    // }
  }
  getCompanyDetails = async () => {
    const companyId = this.props.company._id
    const companyDetails = await this.props.getCompanyDetails(companyId)
    //COMPANY NAME
    // console.log(companyDetails)
    this.setState({ company: companyDetails })
  }

  render() {
    const{itemName, itemResponsibleName, itemResponsibleEmail, validityPeriodValue, validityPeriodUnits, noticePeriodValue, noticePeriodUnits} = this.state
    
    return (
      <div className="card mb-3 container">
        <div className="card-header">
          <h5 className="mb-0">Items</h5>
        </div>
        <div className="card-body bg-light">
          <a className="mb-4 d-block d-flex align-items-center" href="#experience-form1" data-toggle="collapse" aria-expanded="false" aria-controls="experience-form1" >
            <span className="circle-dashed">
              <span className="fas fa-plus"></span>
            </span>
            <span className="ml-3">Add new Item</span>
          </a>
          <div className="collapse" id="experience-form1">
            <form className="row"  onSubmit={this.handleFormSubmit}>
              <div className="col-12 mb-3"><label className="form-label" htmlFor="company">Name</label></div>
              <div className="col-12 mb-3"><input className="form-control form-control-sm" type="text"  onChange={(e) => this.handleChange(e)} value={itemName} name="itemName"/></div>

              <div className="col-12 mb-3 "><label className="form-label" htmlFor="company">Item responsible name</label></div>
              <div className="col-12 mb-3"><input className="form-control form-control-sm" type="text"  onChange={(e) => this.handleChange(e)} value={itemResponsibleName} name="itemResponsibleName"/></div>

              <div className="col-12 mb-3"><label className="form-label" htmlFor="company">Item responsible email</label></div>
              <div className="col-12 mb-3"><input className="form-control form-control-sm" type="email"  onChange={(e) => this.handleChange(e)} value={itemResponsibleEmail} name="itemResponsibleEmail"/></div>

              <div className="col-12 mb-3 "><label className="form-label" htmlFor="position">Validity period</label></div>
              <div className="col-6">
                <select className="form-select" name="validityPeriodValue" value={validityPeriodValue} aria-label="Default select example" onChange={(e) => this.handleChange(e)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-6">
                <select className="form-select"  name="validityPeriodUnits" value={validityPeriodUnits} aria-label="Default select example" onChange={(e) => this.handleChange(e)}>
                  <option value="Days">Days</option>
                  <option value="Weeks">Weeks</option>
                  <option value="Months">Months</option>
                  <option value="Years">Years</option>
                </select>
              </div>
              <div className="d-none d-sm-inline-block">< br /></div>
              <div className="col-12 mb-3"><label className="form-label" htmlFor="position">Notice period</label></div>
              <div className="col-6">
                <select className="form-select" name="noticePeriodValue" value={noticePeriodValue} aria-label="Default select example" onChange={(e) => this.handleChange(e)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-6">
                <select className="form-select" name="noticePeriodUnits" value={noticePeriodUnits} aria-label="Default select example" onChange={(e) => this.handleChange(e)}>
                  <option value="Days">Days in advace</option>
                  <option value="Weeks">Weeks in advace</option>
                  <option value="Months">Months in advace</option>
                  <option value="Years">Years in advace</option>
                </select>
              </div>
              
              <div className="col-9 col-sm-7 ml-0 mt-3 offset-5"><button className="btn btn-primary" type="submit">Save</button></div>
              <br></br>
              {this.displayErrorMsg()}
              {this.displaySuccessMsg()}
            </form>
            
            <div className="border-dashed-bottom my-4"></div>
          </div>
          {this.displayItemsList()}
          
        </div>
      </div>
    );
  }
}
export default withAuth(ItemAddAndList);
