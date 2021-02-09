import React, { Component } from "react";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class ProfileSettings extends Component {
  
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    newPassword: "",
    repeatPassword: "",
    successMsg:null,
    errorMsg:null
  }

  componentDidMount = async ()=> {
    try {
      const theUser = await this.props.getUserInfo(this.props.user._id);
      this.setState({
        name: theUser.firstName,
        surname: theUser.surname,
        email: theUser.email,
        password:"",
      });
    } catch (error) {
      console.log(error);
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  clientFormSubmitProfileSettingsValidation = (firstName, surname, email, password, newPassword, repeatPassword) => {
    const regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    // console.log(regex.test(password))
    if (firstName === "" && surname ==="" && email === "" && password === "") {return "Don't forget to write your name, surname, email and password."
    }else if (firstName === "" && surname ==="" && email === "" && password !== ""){return "Don't forget to write your name, surname and email."
    }else if (firstName === "" && surname ==="" && email !== "" && password === ""){return "Don't forget to write your name, surname and password."
    }else if (firstName === "" && surname !=="" && email === "" && password === ""){return "Don't forget to write your name, email and password."
    }else if (firstName !== "" && surname ==="" && email === "" && password === ""){return "Don't forget to write your surname, email and password."

    }else if (firstName === "" && surname ==="" && email !== "" && password !== ""){return "Don't forget to write your name and surname."
    }else if (firstName === "" && surname !=="" && email === "" && password !== ""){return "Don't forget to write your name and email."
    }else if (firstName !== "" && surname ==="" && email === "" && password !== ""){return "Don't forget to write your surname and email."

    }else if (firstName === "" && surname !=="" && email !== "" && password !== ""){return "Don't forget to write your name."
    }else if (firstName !== "" && surname ==="" && email !== "" && password !== ""){return "Don't forget to write your surename."

    }else if (firstName !== "" && surname !=="" && email === "" && password === ""){return "Don't forget to write your email and password."
    }else if (firstName !== "" && surname !=="" && email !== "" && password === ""){return "Don't forget to write your password."
    }else if(newPassword!=="" && repeatPassword!==""){
      if (newPassword!==repeatPassword) {return "Passwords doesn't match."
      }else if (!regex.test(newPassword)){return "The password must contain at least 8 characters, an uppercase and a lowercase letter, one number and a special character."}
    }else{
      return ""
    }
  }
  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {name, surname, email, password, newPassword,repeatPassword} = this.state
      const errorMsg = this.clientFormSubmitProfileSettingsValidation(name, surname, email, password, newPassword, repeatPassword) //Front End Validations
      const userId = this.props.user._id
      if (errorMsg===""){
        const savedPassword = await this.props.saveNewPasswordFromSettings(userId,name, surname, email,password,newPassword) //Back End Validations
        if (savedPassword.errorMsg){
          this.setState({errorMsg:savedPassword.errorMsg, successMsg:null})
        } else {
          this.setState({successMsg:"All changes saved.", errorMsg:null,password:"",newPassword:"",repeatPassword:""})
        }
      } else {
        this.setState({errorMsg:errorMsg,successMsg:null})
      }
    } catch (error) {
      console.log(error, "the error originated here");
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
      console.log("Displaying Success MSG")
      return <div className="alert alert-success" role="alert" style={{padding:"5px",paddingLeft:"10px"}}>{successMsg}</div>
    }
  }
  render() {
    const { name, surname, email, password, newPassword, repeatPassword } = this.state;
    return (
      <div className="container">
        <SideNavbar />
        <div className="content">
          <TopNavbar />
          <div className="container">
            <div className="row flex-center min-vh-100 py-6">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <Link className="d-flex flex-center mb-4" to="/"> <img className="h-25 w-50" src="../../images/blueLogo.png" alt="logo" /> </Link>
                <div className="card">
                  <div className="card-body p-4 p-sm-5">
                    <div className="row flex-between-center mb-2"> <div className="col-auto"> <h5>User Profile</h5> </div> </div>
                    <form onSubmit={this.handleFormSubmit}>
                      <div className="mb-3"> <input className="form-control" type="text" placeholder="Name" name="name" value={name} onChange={(e) => this.handleChange(e)}/> </div>
                      <div className="mb-3"> <input className="form-control" type="text" placeholder="Surname" name="surname" value={surname} onChange={(e) => this.handleChange(e)}/> </div>
                      <div className="mb-3"> <input className="form-control" type="email" placeholder="Email" name="email" value={email} onChange={(e) => this.handleChange(e)}/> </div>
                      <div className="mb-3"> <input className="form-control" type="password" placeholder="Current password" name="password" value={password} onChange={(e) => this.handleChange(e)}/> </div>
                      <div className="mb-3"> <input className="form-control" type="password" placeholder="New Password" name="newPassword" value={newPassword} onChange={(e) => this.handleChange(e)}/> </div>
                      <div className="mb-3"> <input className="form-control" type="password" placeholder="Repeat new Password" name="repeatPassword" value={repeatPassword} onChange={(e) => this.handleChange(e)}/> </div>
                      <div className="mb-3"> <button className="btn btn-primary btn-block mt-3" type="submit" name="submit" > Save </button> </div>
                      {this.displayErrorMsg()}
                      {this.displaySuccessMsg()}
                    </form>
                    <Link to ="/"><div className="mb-3"> <button className="btn btn-primary btn-block mt-3"> Go Back </button> </div></Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(ProfileSettings);
