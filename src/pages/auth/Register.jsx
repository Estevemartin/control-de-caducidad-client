import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
      errorMsg:null,
      termsAndConditions:false
    };
  }

  clientFormSubmitRegisterValidation = (firstName, surname, email, password, repeatPassword, termsAndConditions) => {
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

    }else if (password!==repeatPassword) {return "Passwords doesn't match."
    
    }else if (!termsAndConditions) {return "We need you to accept the terms and conditions."
    }else if (!regex.test(password)){return "The password must contain at least 8 characters, an uppercase and a lowercase letter, one number and a special character."
    }else{
      return ""
    }
  }
  handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const {firstName, surname, email, password, repeatPassword,termsAndConditions} = this.state;
      const errorMsg = this.clientFormSubmitRegisterValidation(firstName, surname, email, password, repeatPassword,termsAndConditions) //Front End Validations
      if (errorMsg!==""){
        this.setState({errorMsg})
      } else{
        this.setState({errorMsg:null})
        let errorMsg = await this.props.signup({firstName, surname, password, email }) //Back End Validations
        if (errorMsg){
          this.props.history.push('/inbox-activate')
        }else{
          this.setState({errorMsg})
        }
      }
    } catch (error) {
      console.log(error);
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
  handleChangeCheckBox = event => {
    const {termsAndConditions} = this.state;
    if (termsAndConditions){
      this.setState({termsAndConditions: false });
    } else {
      this.setState({termsAndConditions: true });
    }
  }
  
  render() {
    const {firstName,surname,email,password,repeatPassword} = this.state;
    return (
      <div className="container">
        <div className="row flex-center min-vh-100 py-6">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Link className="d-flex flex-center mb-4" to="/"> <img className="h-25 w-50" src="../../images/blueLogo.png" alt="logo" /> </Link>
            <div className="card">
              <div className="card-body p-4 p-sm-5">
                <div className="row flex-between-center mb-2">
                  <div className="col-auto">
                    <h5>Register</h5>
                  </div>
                  <div className="col-auto fs--1 text-600">
                    <span className="mb-0 undefined">Have an account?</span>{" "}
                    <span><Link to="/">Login</Link></span>
                  </div>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Name" name="firstName" value={firstName} onChange={(e) => this.handleChange(e)} />
                    {/* {this.state.isError.firstName.length > 0 && (<span className="error-input">{this.state.isError.firstName}</span>)} */}
                  </div>
                  <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Surname" name="surname" value={surname} onChange={(e) => this.handleChange(e)} />
                    {/* {this.state.isError.surname.length > 0 && (<span className="error-input">{this.state.isError.surname}</span>)} */}
                  </div>
                  <div className="mb-3">
                    <input className="form-control" type="email" placeholder="Email address" name="email" value={email} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="row gx-3">
                    <div className="mb-3 col-sm-6">
                      <input className="form-control" type="password" placeholder="Password" name="password" value={password} onChange={(e) => this.handleChange(e)} />
                      {/* {this.state.isError.password.length > 0 && (<span className="error-input">{this.state.isError.password}</span>)} */}
                    </div>
                    <div className="mb-3 col-sm-6">
                      <input className="form-control" type="password" placeholder="Confirm Password" name="repeatPassword" value={repeatPassword} onChange={(e) => this.handleChange(e)} />
                      {/* {this.state.isError.repeatPassword.length > 0 && (<span className="error-input">{this.state.isError.repeatPassword}</span>)} */}
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="basic-register-checkbox" name="termsAndConditions" onClick={(e)=>this.handleChangeCheckBox(e)}/>
                    <label className="form-label" name="basic-register-checkbox">I accept the <Link to="#!">terms </Link>and{" "}<Link to="#!">privacy policy</Link></label>
                  </div>
                  {/* {this.state.warning !== '' && (<p className='error-input'>{warning}</p>)}  */}
                  <div className="mb-3">
                    <button className="btn btn-primary btn-block mt-3" type="submit" name="submit" >Register</button>
                  </div>
                  {this.displayErrorMsg()}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Register);
