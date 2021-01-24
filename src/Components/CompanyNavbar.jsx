import React, { Component } from "react";

class CompanyNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-3 mt-2 container">
        <div className="card-body">
          <div className="row flex-between-center">
            <div className="col-md">
              <h5 className="mb-2 mb-md-0"> {this.props.companyName} </h5>
            </div>
            <div className="col-auto">{this.props.button}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyNavbar;
