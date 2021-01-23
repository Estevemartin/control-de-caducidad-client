import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="container">
          <div className="row flex-center py-5 py-md-8 text-center">
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
                  <h5 className="mb-0">Enter the company code</h5>
                  <form className="mt-4">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Company Code"
                    />
                    <div className="mb-3">
                      <button
                        className="btn btn-primary btn-block mt-3"
                        type="submit"
                        name="submit"
                      >
                        Validate Code
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mb-3 go-back-button-container">
                <button
                  className="btn btn-light btn-block mt-6 go-back-button"
                  onClick={this.goBack}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default AddCompany;
