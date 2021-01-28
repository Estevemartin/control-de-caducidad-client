import React, { Component } from "react";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import userService from "../lib/user-service";

class ProfileSettings extends Component {
  /* TODO: bring details to backend */
  constructor(props) {
    super(props);
  }
  state = {
    user: {
      name: "",
      surname: "",
      email: "",
      password: "",
      newPassword: "",
      repeatPassword: "",
    },
  };

  getUser = async () => {
    try {
      const theUser = await this.props.user;
      this.setState({
        user: theUser,
        name: theUser.name,
        surname: theUser.surname,
        email: theUser.email,
        password: theUser.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUser();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const { user } = this.state
      await userService.editUser({user})
      this.props.history.push('/')
    } catch (error) {
      console.log(error, "the error originated here");
    }
  };

  //TODO: Validaciones y envio de formulario
  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <SideNavbar />
        <div className="content">
          <TopNavbar />
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
                        <h5>Settings</h5>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          value={user.firstName}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Surname"
                          value={user.surname}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                          value={user.email}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control"
                            type="password"
                            placeholder="Current password"
                            value={user.password}
                        />
                      </div>
                      <div className="mb-3">
                      <input
                            className="form-control"
                            type="password"
                            placeholder="New Password"
                            value={user.newPassword}
                          />
                      </div>
                      <div className="mb-3">
                      <input
                            className="form-control"
                            type="password"
                            placeholder="Repeat new Password"
                            value={user.repeatPassword}
                          />
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-primary btn-block mt-3"
                          type="submit"
                          name="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
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
