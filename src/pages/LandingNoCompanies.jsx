import React from 'react'

function LandingNoCompanies() {
    return (
        <div class="card">
            <div class="card-body overflow-hidden p-lg-6">
              <div class="row align-items-center">
                <div class="col-lg-6"><img class="img-fluid" src="../assets/img/illustrations/4.png" alt="" /></div>
                <div class="col-lg-6 pl-lg-4 my-5 text-center text-lg-left">
                  <h3> <a href="#">You have no companies!</a></h3>
                  <p class="lead">Time to get a company.</p>
                  <a class="btn btn-falcon-primary" href="/create-company">Create a New Company</a><br/><br/>
                  <a class="btn btn-falcon-primary" href="/add-company">Add an Existing Company</a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default LandingNoCompanies
