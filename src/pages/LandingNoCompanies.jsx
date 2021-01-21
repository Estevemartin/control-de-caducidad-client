import React from 'react';
import {Link} from 'react-router-dom';

function LandingNoCompanies() {
    return (
        <div className="card">
            <div className="card-body overflow-hidden p-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-6"><img className="img-fluid" src="../assets/img/illustrations/4.png" alt="" /></div>
                <div className="col-lg-6 pl-lg-4 my-5 text-center text-lg-left">
                  <h3> <Link to="/create-company-details">You have no companies!</Link></h3>
                  <p className="lead">Time to get a company.</p>
                  <Link className="btn btn-falcon-primary" to="/create-company-details">Create a New Company</Link><br/><br/>
                  <Link className="btn btn-falcon-primary" to="/add-company">Add an Existing Company</Link>
                </div>
              </div>
            </div>
          </div>
    )
}

export default LandingNoCompanies
