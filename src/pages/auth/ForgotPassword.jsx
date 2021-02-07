import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class ForgotPassword extends Component{
  constructor(props){
    super(props)
    this.state={
      email:"",
      errorMsg:null
    }
  }

  handleFormSubmit = async event =>{
    try{
      event.preventDefault();
      const {email} = this.state
      const emailSent = await this.props.sendResetPasswordEmail(email)
      if (emailSent){
        this.setState({errorMsg:emailSent})
      } else {
        this.props.history.push('/inbox-pass')
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
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render(){
    const {email} = this.state
    return(
      <div className="container">
      <div className="row flex-center min-vh-100 py-6 text-center">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <Link className="d-flex flex-center mb-4" to="/"><img className="h-25 w-50" src="../../images/blueLogo.png" alt="logo" /></Link>
          <div className="card">
            <div className="card-body p-4 p-sm-5">
              <h5 className="mb-0">Forgot your password?</h5>
              <small>Enter your email and we'll send you a reset link.</small>
              <form className="mt-4" onSubmit={this.handleFormSubmit}>
                <input className="form-control" type="email" placeholder="Email address" name="email" value={email} onChange={(e) => this.handleChange(e)}  />
                <div className="mb-3">
                  <button className="btn btn-primary btn-block mt-3" type="submit" name="submit" > Send reset link</button>
                </div>
                {this.displayErrorMsg()}

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withAuth(ForgotPassword);
