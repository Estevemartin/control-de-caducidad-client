import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class Login extends Component {
  state = { 
    email: "", 
    password: "",
    errorMsg:null,
    rememberMe: false
  }
  
   handleFormSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const errorMsg = this.clientFormSubmitValidations(email,password)
    if (errorMsg!==""){
      this.setState({errorMsg})
    } else{
      let errorMsg = await this.props.login({ email, password })
      this.setState({errorMsg})
    }
  }
  handleFormSubmitSendAccountActivationEmail = async event =>{
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    if(email===""){
      this.setState({errorMsg:"Don't forget to write your email."})
    } else {
      await this.props.sendAccountActivationEmail(email)
      //Aquí no faltaria hacer algo con ese Error?
    }
  }

  clientFormSubmitValidations = (email,password) =>{
    if (email === "" && password === "") {
      return "Don't forget to write your email and password."
    } else if (email === "" && password !== ""){
      return "Don't forget to write your email."
    }else if (email !== "" && password === ""){
      return "Don't forget to write your password."
    } else {
      return ""
    }
  }
  displayErrorMsg = () =>{
    const {errorMsg} = this.state
    if (errorMsg==="We sent you an email to activate the account, click the button below to recieve the activation email again."){
      return <>
        <div className="alert alert-danger" role="alert" style={{padding:"5px",paddingLeft:"10px"}}>{errorMsg}</div>
        <form  onSubmit={this.handleFormSubmitSendAccountActivationEmail}>
          <div className="mb-3">
            <button className="btn btn-primary btn-block mt-3" type="submit" name="submit" id="sendActivationEmail">Send Activation Email</button>
          </div>
        </form>
      </>
    } else if (errorMsg!=="" && errorMsg!==null){
      return <div className="alert alert-danger" role="alert" style={{padding:"5px",paddingLeft:"10px"}}>{errorMsg}</div>
    }
  }
  handleChange = event => {
    const { name, value } = event.target;
    const {errorMsg} = this.state
    if (errorMsg === ""){
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: value , errorMsg :null});
    }
  }
  handleChangeCheckBox = event => {
    const {rememberMe} = this.state;
    if (rememberMe){
      this.setState({rememberMe: false });
    } else {
      this.setState({rememberMe: true });
    }
  }
  render() {
    const { email, password} = this.state;
    return (
      <div className="container">
        <div className="row flex-center min-vh-100 py-6">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Link className="d-flex flex-center mb-4" to="/"><img className="h-25 w-50" src="../../images/blueLogo.png" alt="logo"/></Link>
            <div className="card">
              <div className="card-body p-4 p-sm-5">
                <div className="row flex-between-center mb-2">
                  <div className="col-auto">
                    <h5>Log in</h5>
                  </div>
                  <div className="col-auto fs--1 text-600">
                    <span className="mb-0 undefined">or</span>{" "}
                    <span><Link to="/register">Create an account</Link></span>
                  </div>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="mb-3">
                    <input className="form-control" type="email" name="email" id="loginEmail" value={email} placeholder="Email address" onChange={(e) => this.handleChange(e)}/>
                  </div>
                  <div className="mb-3">
                    <input className="form-control" type="password" name="password" value={password} placeholder="Password" onChange={(e) => this.handleChange(e)}/>
                  </div>
                  <div className="row flex-between-center">
                    <div className="col-auto">
                      <div className="form-check mb-0">
                        <input className="form-check-input" type="checkbox" id="basic-checkbox" name="rememberMe" onClick={(e)=>this.handleChangeCheckBox(e)}/>
                        <label className="form-check-label" htmlFor="basic-checkbox">Remember me</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <Link className="fs--1" to="/forgotPassword">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary btn-block mt-3" type="submit" name="submit">Log in</button>
                  </div>
                </form>
                {this.displayErrorMsg()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
