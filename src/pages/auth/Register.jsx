import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
      isError: {
        name: "",
        surname: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      warning: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name = value.length < 1 ? "Write a valid name" : "";
        break;
      case "surname":
        isError.surname = value.length < 1 ? "Write a valid surname" : "";
        break;
      case "email":
        isError.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        isError.password =
          value.length < 6
            ? "Introduce a password with at least 6 characters"
            : "";
        break;
      case "repeatPassword":
        isError.repeatPassword =
          value !== this.state.password ? "Passwords don't match" : "";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value,
    });
  };

  checkForErrors = async () => {
    const { name, surname, password, email, isError } = this.state;
    if (isError.name === "" && isError.password === "") {
      await this.props.signup({ name, surname, password, email });
    } else {
      this.setState({
        warning: "Please fill in all the information correctly",
      });
    }
  };

  handleFormSubmit = async (event) => {
    const { name, surname, password, email } = this.state;
    await this.props.signup({ name, surname, password, email });
    /* try {
      event.preventDefault();
      await this.checkForErrors();
    } catch (error) {
      console.log(error);
    } */
  };

  render() {
    const {
      name,
      surname,
      email,
      password,
      repeatPassword,
      warning,
    } = this.state;
    return (
      <div className="container">
        <div className="row flex-center min-vh-100 py-6">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Link className="d-flex flex-center mb-4" to="/">
              <img
                className="h-25 w-50"
                src="../../images/blueLogo.png"
                alt="logo"
              />
            </Link>
            <div className="card">
              <div className="card-body p-4 p-sm-5">
                <div className="row flex-between-center mb-2">
                  <div className="col-auto">
                    <h5>Register</h5>
                  </div>
                  <div className="col-auto fs--1 text-600">
                    <span className="mb-0 undefined">Have an account?</span>{" "}
                    <span>
                      <Link to="/login">Login</Link>
                    </span>
                  </div>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => this.handleChange(e)}
                    />
                    {this.state.isError.name.length > 0 && (
                      <span className="error-input">
                        {this.state.isError.name}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Surname"
                      name="surname"
                      value={surname}
                      onChange={(e) => this.handleChange(e)}
                    />
                    {this.state.isError.surname.length > 0 && (
                      <span className="error-input">
                        {this.state.isError.surname}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={email}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="row gx-3">
                    <div className="mb-3 col-sm-6">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => this.handleChange(e)}
                      />
                      {this.state.isError.password.length > 0 && (
                        <span className="error-input">
                          {this.state.isError.password}
                        </span>
                      )}
                    </div>
                    <div className="mb-3 col-sm-6">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => this.handleChange(e)}
                      />
                      {this.state.isError.repeatPassword.length > 0 && (
                        <span className="error-input">
                          {this.state.isError.repeatPassword}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="basic-register-checkbox"
                    />
                    <label className="form-label" for="basic-register-checkbox">
                      I accept the <Link to="#!">terms </Link>and{" "}
                      <Link to="#!">privacy policy</Link>
                    </label>
                  </div>
                  {this.state.warning !== '' && (
            <p className='error-input'>{warning}</p>
              )} 
                  <div className="mb-3">
                    <button
                      className="btn btn-primary btn-block mt-3"
                      type="submit"
                      name="submit"
                    >
                      Register
                    </button>
                  </div>
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
