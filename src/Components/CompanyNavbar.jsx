import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CompanyNavbar extends Component {
  constructor(props) {
    super(props);
  }
  
  /* Title = (props) => {
    const search = this.props.location.search;
    const product_id = new URLSearchParams(search).get("employee");
    console.log(this.props.location, 'la location')
    if (product_id === "/employee") {
      return <h5 className="mb-2 mb-md-0"> Employee details</h5>;
    } else if (product_id === "/item")
      return <h5 className="mb-2 mb-md-0"> Item details</h5>;
  } */
  
    render() {
        return (
            <div className="card mb-3 mt-2 container">
            <div className="card-body">
              <div className="row flex-between-center">
                <div className="col-md">
                  <h5 className="mb-2 mb-md-0"> {/* {this.Title()} */}Company </h5>
                </div>
                <div className="col-auto">
                <Link to="/edit-company">
                  <button className="btn btn-falcon-primary btn-sm">
                    Edit Company Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default CompanyNavbar
