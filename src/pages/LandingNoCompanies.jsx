import React from 'react'

function LandingNoCompanies() {
    return (
        <div className="card">
            <div className="card-body overflow-hidden p-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-6"><img className="img-fluid" src="../assets/img/illustrations/4.png" alt="" /></div>
                <div className="col-lg-6 pl-lg-4 my-5 text-center text-lg-left">
                  <h3> <a href="#">You have no companies!</a></h3>
                  <p className="lead">Time to get a company.</p>
                  <a className="btn btn-falcon-primary" href="/create-company">Create a New Company</a><br/><br/>
                  <a className="btn btn-falcon-primary" href="/add-company">Add an Existing Company</a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default LandingNoCompanies
