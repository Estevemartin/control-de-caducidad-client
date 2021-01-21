import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CompanyNavbar extends Component {
    render() {
        return (
            <div className="card mb-3 container">
            <div className="card-body">
              <div className="row flex-between-center">
                <div className="col-md">
                  <h5 className="mb-2 mb-md-0">Company name</h5>
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
