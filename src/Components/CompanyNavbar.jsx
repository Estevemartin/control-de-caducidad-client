import React, { Component } from 'react'

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
                  <button className="btn btn-falcon-primary btn-sm" role="button">
                    Edit Company Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
