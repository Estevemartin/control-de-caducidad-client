import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class EmployeeList extends Component {

    state={
      newEmployeeName:"",
      newEmployeeSurname:"",
      newEmployeeEmail:"",
      successMsg:"",
      errorMsg:"",
      addEmployeeFormVisible:false,
      employees:null,
      nameSearched:""
    }

    getEmployees(){
      if (this.state.employees===null){
        return this.props.company.workers
      } else {
        // console.log(this.props.company.workers)
         return this.state.employees
      }
    }
    
    getTableContent(){
      let employees = this.getEmployees()
      
      // console.log(employees)
      const employeeTable = employees.map((employee,employeeIndex)=>{
        return(
          <tr className="btn-reveal-trigger" key={employeeIndex}>
            {/* CHECKBOX */}
            <td className="align-middle py-2" style={{width: 28 + "px"}}>
              <div className="form-check fs-0 mb-0 d-flex align-items-center">
                <input className="form-check-input" type="checkbox" id="customer-0" data-bulk-select-row="data-bulk-select-row" />
              </div>
            </td>
            {/* NAME */}
            <td className="name align-middle white-space-nowrap py-2"><a href="../e-commerce/customer-details.html">
                <div className="d-flex d-flex align-items-center">
                  <div className="avatar avatar-xl mr-2">
                    <div className="avatar-name rounded-circle"><span>{employee.name[0]+employee.surname[0]}</span></div>
                  </div>
                  <div className="flex-1">
                    <h5 className="mb-0 fs--1">{employee.name+" "+employee.surname}</h5>
                  </div>
                </div>
              </a></td>
            {/* EMAIL */}
            <td className="email align-middle py-2"><a href={"mailto:"+employee.email}>{employee.email}</a></td>
            <td className="align-middle white-space-nowrap py-2 text-right">
              <div className="dropdown font-sans-serif">
                <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="customer-dropdown-0" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="customer-dropdown-0">
                  <div className="bg-white py-2">
                    <a className="dropdown-item" href="#!">Edit</a>
                    <a className="dropdown-item text-danger" href="#!">Delete</a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )
      })
      return employeeTable
      
    }
    filterTable(event){
      // console.log(event.target.value)
      const currentValue = event.target.value
      const employees = this.props.company.workers

      const filteredTable = employees.filter(employee=>{
        // console.log("Searched:", currentValue, " | Boolean: ",employee.name.toLowerCase() .includes(currentValue.toLowerCase() ), " | Name: ", employee.name )
        return (employee.name.toLowerCase().includes(currentValue.toLowerCase() ))
      })
      this.setState({nameSearched:event.target.value, employees:filteredTable})
    }
    getEmployeeTable(){
      const employees = this.props.company.workers
      // console.log(employees)
      if (employees!==undefined){
        if (employees.length===0){
          // IF THERE ARE NO EMPLOYEES
          return (
            <div className="card-header">
              <div className="row flex-between-center">
                <div className="col-4 col-sm-auto d-flex align-items-center pr-0">
                  <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                    This Company doesn't have any employee yet. Add employees with the buttons above.
                  </h5>
                  </div>
                </div>
              </div>
          )
        } else {
          // IF THERE ARE SOME EMPLOYEES
          let tableHeaders = (
            <thead className="bg-200 text-900">
              <tr>
                <th>
                  <div className="form-check fs-0 mb-0 d-flex align-items-center">
                    <input className="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select='{"body":"table-customers-body","actions":"table-customers-actions","replacedElement":"table-customers-replace-element"}' />
                  </div>
                </th>
                <th className="sort pr-1 align-middle white-space-nowrap" style={{display:"flex",alignItems:"center"}}>
                  Name
                  <input type="text" className="form-control" value={this.state.nameSearched} style={{height:"25px",minHeight:0,width:"150px",marginLeft:"10px"}} placeholder={"Search"} onChange={(e)=>this.filterTable(e)}/>
                </th>
                <th className="sort pr-1 align-middle white-space-nowrap" data-sort="email">Email</th>
                <th className="align-middle no-sort"></th>
              </tr>
            </thead>
          )
          const tableArrowsAndPagination = (
            <div className="card-footer d-flex align-items-center justify-content-center">
              <button className="btn btn-sm btn-falcon-default mr-1" type="button" title="Previous" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
              <ul className="pagination mb-0">

              </ul>
              <button className="btn btn-sm btn-falcon-default ml-1" type="button" title="Next" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
            </div>
          )

          return (
            <>
              <table className="table table-sm table-striped fs--1 mb-0">
                {tableHeaders}
                <tbody className="list" id="table-customers-body">
                  {this.getTableContent()}
                  </tbody>
                </table>
              {tableArrowsAndPagination}
            </>
          )
        }
      }
    }
    getAddEmployeeForm(){
      const visible = this.state.addEmployeeFormVisible
      if (visible===true){
        return(
            <div className="card mb-3"  style={{maxWidth:"508px"}} >
                <form onSubmit={this.handleFormSubmit}>
                  <div className="modal-header" style={{borderBottom:0}}>
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Add a New Employee</h5>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      {/* <div className="row"> */}
                        <div className="col" >
                          <label className="form-label" htmlFor="newEmployeeName">Name</label>
                          <input className="form-control" name="newEmployeeName" value={this.state.newEmployeeName} type="text" placeholder="Write employee's name" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <br></br>
                        <div className="col ">
                          <label className="form-label" htmlFor="newEmployeeSurname">Surname</label>
                          <input className="form-control" name="newEmployeeSurname" value={this.state.newEmployeeSurname}  type="text" placeholder="Write employee's surname" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <br></br>
                        <div className="col " >
                          <label className="form-label" htmlFor="newEmployeeEmail">Email</label>
                          <input className="form-control" name="newEmployeeEmail" value={this.state.newEmployeeEmail}  type="email" placeholder="Write employee's email" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                  <div className="modal-footer" style={{borderTop:0}}>
                    <button className="btn btn-secondary btn-sm" type="button" data-dismiss="modal" onClick={this.showHideAddEmployeeForm}>Close</button>
                    <button className="btn btn-primary btn-sm" type="submit" value="submit" name="submit">Add Employee</button>
                  </div>
                </form>
              </div>
        )
      } else {
        return
      }
    }


    // getCompanyDetails = async () => {
    //   // const companyId = this.props.location.pathname.split("/")[2]
    //   const companyDetails = await this.props.getCompanyDetails(this.props.company._id)
    //   this.setState({ company: companyDetails })
    // }

    handleFormSubmit = async (event) => {
      try{
        event.preventDefault();
        const {newEmployeeName,newEmployeeSurname,newEmployeeEmail}=this.state
        const errorMsg = this.addEmployeeFormValidations(newEmployeeName,newEmployeeSurname,newEmployeeEmail)
        const companyId = this.props.company._id
        if (errorMsg===""){
          let status = await this.props.addEmployee(newEmployeeName,newEmployeeSurname,newEmployeeEmail,companyId)
          if (status.message===undefined){
            // this.getCompanyDetails()
            this.setState({successMsg:"Employee succesfully added.",errorMsg:"",addEmployeeFormVisible:false, employees:status.workers})
          }else{
            this.setState({errorMsg:"Something went wrong.",successMsg:""})
          }
        }else{
          this.setState({errorMsg,successMsg:""})
        }
      }catch(err){
        console.log(err)
      }
    }
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({[name]: value});
    }
    showHideAddEmployeeForm = () =>{
      this.setState({addEmployeeFormVisible:!this.state.addEmployeeFormVisible})
    }
    addEmployeeFormValidations = (name, surname, email) => {
      if (name ==="" || surname ==="" || email===""){
        return "Please fill all the fields to add a new employee."
      } else {
        return ""
      }
    }
    displayErrorMsg = () =>{
      const {errorMsg} = this.state
      if (errorMsg!=="" && errorMsg!==null){
        return <div className="alert alert-danger" role="alert" style={{padding:"5px",paddingLeft:"10px"}}>{errorMsg}</div>
      }
    }
    displaySuccess = () =>{
      const {successMsg} = this.state
      if (successMsg!=="" && successMsg!==null){
        return <div className="alert alert-success" role="alert" style={{padding:"5px",paddingLeft:"10px"}}>{successMsg}</div>
      }
    }

    render() {

      return (
          <>
            {this.displaySuccess()}
            {this.displayErrorMsg()}
            {this.getAddEmployeeForm()}
            <div className="card mb-3" id="customersTable" data-list='{"valueNames":["name","email","phone","address","joined"],"page":10,"pagination":true}'>
              <div className="card-header">
                <div className="row flex-between-center">
                  <div className="col-4 col-sm-auto d-flex align-items-center pr-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Employees</h5>
                  </div>
                  <div className="col-8 col-sm-auto text-right pl-2">
                    <div id="table-customers-replace-element">
                      <select className="btn btn-falcon-default btn-sm mx-2" aria-label="Bulk actions">
                        {/* <option selected="">20 Employees per Page</option> */}
                        <option value="50">50 Employees per Page</option>
                        <option value="100">100 Employees per Page</option>
                      </select>
                      <button className="btn btn-falcon-default btn-sm mx-2" type="button" onClick={this.showHideAddEmployeeForm}><span className="fas fa-plus"></span><span className="d-none d-sm-inline-block ml-1">Add Employee</span></button>
                      <button className="btn btn-falcon-default btn-sm mx-2" type="button"><span className="fas fa-filter" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Import</span></button>
                      <button className="btn btn-falcon-default btn-sm mx-2" type="button"><span className="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Export</span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  {this.getEmployeeTable()}
                </div>
              </div>
            </div>  
          </>
        )
    }
    
}
export default withAuth(EmployeeList);
