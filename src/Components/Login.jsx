import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <main class="main" id="top">
          <div class="container">
            <div class="row flex-center min-vh-100 py-6">
              <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <Link class="d-flex flex-center mb-4" to="/">
                  <img
                    class="mr-2"
                    src="../images/rayas.png"
                    alt="logo"
                    width="58"
                  />
                  <span class="font-sans-serif font-weight-bolder fs-5 d-inline-block">
                    MPA Solutions
                  </span>
                </Link>
                <div class="card">
                  <div class="card-body p-4 p-sm-5">
                    <div class="row flex-between-center mb-2">
                      <div class="col-auto">
                        <h5>Log in</h5>
                      </div>
                      <div class="col-auto fs--1 text-600">
                        <span class="mb-0 undefined">or</span>{" "}
                        <span>
                          <Link to="/register">
                            Create an account
                          </Link>
                        </span>
                      </div>
                    </div>
                    <form>
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="email"
                          placeholder="Email address"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div class="row flex-between-center">
                        <div class="col-auto">
                          <div class="form-check mb-0">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="basic-checkbox"
                            />
                            <label
                              class="form-check-label"
                              for="basic-checkbox"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div class="col-auto">
                          <Link
                            class="fs--1"
                            to="/forgot"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                      <div class="mb-3">
                        <button
                          class="btn btn-primary btn-block mt-3"
                          type="submit"
                          name="submit"
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;