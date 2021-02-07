import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class ResetPassword extends Component{
  constructor(props){
    super(props)
    this.state={
      password:"",
      confirmPassword:"",
      successMsg:null,
      errorMsg:null
    }
  }

  handleFormSubmit = async event =>{
    const {password,confirmPassword} = this.state
    try{
      event.preventDefault();
      const buttonText=document.getElementById("buttonClick").innerHTML
      if(buttonText==="Go to Login"){
        this.props.history.push('/')
      }else{
        //Front End Validations
        const userId = this.props.location.pathname.split("/")[2]
        const regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        if (password!==confirmPassword){
          this.setState({errorMsg:"The passwords doesn't match.", successMsg:null})
        } else if (!regex.test(password)){
          this.setState({errorMsg:"The password must contain at least 8 characters, an uppercase and a lowercase letter, one number and a special character.", successMsg:null})
        } else {
          const savedPassword = await this.props.saveNewPassword(userId,password) //Back end Validations
          if (savedPassword.errorMsg){
            this.setState({errorMsg:savedPassword.errorMs, successMsg:null})
          } else {
            this.setState({successMsg:"Your password has been changed.", errorMsg:null})
          }
        }
      }
    }catch(err){
      console.log(err)
    }
  }
  displayErrorMsg = () =>{
    const {errorMsg} = this.state
    if (errorMsg!=="" && errorMsg!==null){
      return <div className="alert alert-danger" role="alert" style={{padding:"5px",paddingLeft:"10px"}}>{errorMsg}</div>
    }
  }
  displaySuccessMsg = () =>{
    const {successMsg} = this.state
    if (successMsg!=="" && successMsg!==null){
      return <div className="alert alert-success" role="alert" style={{padding:"5px",paddingLeft:"10px"}}>{successMsg}</div>
    }
  }
  displayButtonText = () =>{
    const {successMsg} = this.state
    if (successMsg!==null){
      return ("Go to Login")
    }else{
      return ("Save password")
    }
  }
  handleChange = (event) => {
    const { name,value } = event.target;
    this.setState({[name]: value});
  }

  render(){
    const{password,confirmPassword}=this.state
    return(
      <div className="container">
      <div className="row flex-center min-vh-100 py-6">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <Link className="d-flex flex-center mb-4" to="/"> <img className="h-25 w-50" src="../../images/blueLogo.png" alt="logo" /> </Link>
          <div className="card">
            <div className="card-body p-4 p-sm-5">
              <h5 className="text-center">Reset new password</h5>
              <form className="mt-3"  onSubmit={this.handleFormSubmit}>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input className="form-control" type="password" placeholder="New Password" name="password" value={password} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => this.handleChange(e)}/>
                </div>
                <button className="btn btn-primary btn-block mt-3" type="submit" name="submit" id="buttonClick">{this.displayButtonText()}</button>
                {this.displayErrorMsg()}
                {this.displaySuccessMsg()}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withAuth(ResetPassword);
