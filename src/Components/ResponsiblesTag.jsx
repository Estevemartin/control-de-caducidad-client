import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class  ResponsiblesTag extends Component{

  render(){
    
  
    return (
      <div className="card">
        <div className="card-header d-flex flex-between-center bg-light py-2">
          <h6 className="mb-0">Responsibles</h6>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            {/* MODAL EDIT */}
            <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" id="dropdown-active-user" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
              <span className="fas fa-ellipsis-h fs--2"></span>
            </button>
            <div className="dropdown-menu dropdown-menu-right border py-2" aria-labelledby="dropdown-active-user">
              <button type="button" className="dropdown-item" data-toggle="modal" data-target="#editResponsibles-itemDetails">Edit</button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id="editResponsibles-itemDetails" tabIndex="-1" aria-labelledby="responsibleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="responsibleModalLabel">Edit responsibles</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" ><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                      <form className="row">
                        <div className="col-3 mb-3 text-lg-right"><label className="form-label" htmlFor="company">Company responsible</label></div>
                        <div className="col-6 col-sm-7 mb-3"><input className="form-control form-control-sm" type="text"/></div>
                        <div className="col-3 mb-3 text-lg-right"><label className="form-label" htmlFor="company">Item responsible</label></div>
                        <div className="col-6 col-sm-7 mb-3"><input className="form-control form-control-sm" type="text"/></div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM RESPONSIBLES */}
        <div className="card-body py-2">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-1 ml-3">
              <h6 className="mb-0 font-weight-semi-bold">
                <a className="text-900" href="pages/profile.html">
                  {this.props.companyResponsible}
                </a>
              </h6>
              <p className="text-500 fs--2 mb-0">Company Responsible</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="flex-1 ml-3">
              <h6 className="mb-0 font-weight-semi-bold">
                <a className="text-900" href="pages/profile.html">
                {this.props.itemResponsible}
                </a>
              </h6>
              <p className="text-500 fs--2 mb-0">Item Responsible</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(ResponsiblesTag);

