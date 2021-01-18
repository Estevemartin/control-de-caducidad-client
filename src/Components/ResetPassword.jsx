import React from 'react';
import {Link} from 'react-router-dom';

function ResetPassword() {
    return (
        <main class="main" id="top">
      <div class="container">
        <div class="row flex-center min-vh-100 py-6">
          <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4"><Link class="d-flex flex-center mb-4" to="/"><img class="mr-2" src="../../assets/img/illustrations/rayas.png" alt="logo" width="58" /><span class="font-sans-serif font-weight-bolder fs-5 d-inline-block">MPA Solutions</span></Link>
            <div class="card">
              <div class="card-body p-4 p-sm-5">
                <h5 class="text-center">Reset new password</h5>
                <form class="mt-3">
                  <div class="mb-3">
                    <label class="form-label"></label>
                    <input class="form-control" type="password" placeholder="New Password" />
                  </div>
                  <div class="mb-3">
                    <input class="form-control" type="password" placeholder="Confirm Password" />
                  </div>
                  <button class="btn btn-primary btn-block mt-3" type="submit" name="submit">Set password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}

export default ResetPassword
