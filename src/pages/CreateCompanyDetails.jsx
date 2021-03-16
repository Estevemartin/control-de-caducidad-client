import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import companyservice from "../lib/company-service";
import SideNavbar from "../Components/navbars/SideNavbar";
import TopNavbar from "../Components/navbars/TopNavbar";

class CreateCompanyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      respName: "",
      email: "",
      invitationCode: "",
    };
  }
  
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generateProductKey() {
      var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        chars = 5,
        segments = 4,
        keyString = "";
      for (var i = 0; i < segments; i++) {
        var segment = "";
        for (var j = 0; j < chars; j++) {
          var k = this.getRandomInt(0, 35);
          segment += tokens[k];
        }
        keyString += segment;
        if (i < segments - 1) {
          keyString += "-";
        }
      }
      return keyString;
    }
  
    componentDidMount = async () => {
      const code = await this.generateProductKey()
      this.setState({ invitationCode: code });
    };
  

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { companyName, respName, email, invitationCode } = this.state;
    await companyservice.createCompany({companyName, respName, email, invitationCode});
    this.props.history.push(`/landing`);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { companyName, respName, email } = this.state;
    return (
      <div className="container">
        <SideNavbar />
        <div className="content">
          <TopNavbar />
          <div className="row flex-center py-5">
            <div className="col-lg-8 pr-lg-2">
              <div className="card mb-3">
                <div className="card-header">
                  <h5 className="mb-0">Company Details</h5>
                </div>
                <div className="card-body bg-light">
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="row gx-2">
                      <div className="col-12 mb-3">
                        <label className="form-label" for="event-name">Company Name</label>
                        <input className="form-control" id="name" name="companyName" type="text" placeholder="Type your company name here" value={companyName} onChange={(e) => this.handleChange(e)} required/>
                      </div>
                      <div className=" col-12 mb-3">
                        <h6 className="form-label" for="modal-auth-email">Company Responsible</h6>
                      </div>
                      <div className="col-sm-6 mb-3 mt-1">
                        <label className="form-label" for="event-address">Responsible Name</label>
                        <input lassName="form-control mt-2" id="respName" name="respName" type="text" placeholder="Type name here" value={respName} onChange={(e) => this.handleChange(e)} required/>
                      </div>
                      <div className="col-sm-6 mb-3 mt-1">
                        <label className="form-label" for="event-address">
                          Responsible Email
                          <button class="btn btn-sm m-1" type="button" data-toggle="tooltip" data-placement="right" title="This person will appear as 'CC' in every email sent in this company." >
                            <i class="fas fa-question-circle"></i>
                          </button>
                        </label>
                        <input className="form-control mt-2" id="email" name="email" type="text" placeholder="Type email here" value={email} onChange={(e) => this.handleChange(e)} required/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <button className="btn btn-primary btn-xs mt-3 d-flex justify-center" type="submit" name="submit">Create company</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(CreateCompanyDetails);
