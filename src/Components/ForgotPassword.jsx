import React from 'react';
import {Link} from 'react-router-dom';

function ForgotPassword() {
    return (
        <main class="main" id="top">
      <div class="container">
        <div class="row flex-center min-vh-100 py-6 text-center">
          <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4"><Link class="d-flex flex-center mb-4" to="/"><img class="mr-2" src="../images/rayas.png" alt="logo" width="58" /><span class="font-sans-serif font-weight-bolder fs-5 d-inline-block">MPA Solutions</span></Link>
            <div class="card">
              <div class="card-body p-4 p-sm-5">
                <h5 class="mb-0">Enter the company code</h5>
                <form class="mt-4">
                  <input class="form-control" type="email" placeholder="Company Code" />
                  <div class="mb-3">
                    <button class="btn btn-primary btn-block mt-3" type="submit" name="submit">Validate Code</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}

export default ForgotPassword;
