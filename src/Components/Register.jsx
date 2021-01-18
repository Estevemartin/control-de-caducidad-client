import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <main class="main" id="top">
                <div class="container">
                    <div class="row flex-center min-vh-100 py-6">
                    <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4"><Link class="d-flex flex-center mb-4" to="/"><img class="mr-2" src="../../assets/img/illustrations/rayas.png" alt="logo" width="58" /><span class="font-sans-serif font-weight-bolder fs-5 d-inline-block">MPA Solutions</span></Link>
                        <div class="card">
                        <div class="card-body p-4 p-sm-5">
                            <div class="row flex-between-center mb-2">
                            <div class="col-auto">
                                <h5>Register</h5>
                            </div>
                            <div class="col-auto fs--1 text-600"><span class="mb-0 undefined">Have an account?</span> <span><Link to="/login">Login</Link></span></div>
                            </div>
                            <form>
                            <div class="mb-3">
                                <input class="form-control" type="text" placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <input class="form-control" type="email" placeholder="Email address" />
                            </div>
                            <div class="row gx-3">
                                <div class="mb-3 col-sm-6">
                                <input class="form-control" type="password" placeholder="Password" />
                                </div>
                                <div class="mb-3 col-sm-6">
                                <input class="form-control" type="password" placeholder="Confirm Password" />
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="basic-register-checkbox" />
                                <label class="form-label" for="basic-register-checkbox">I accept the <Link to="#!">terms </Link>and <Link to="#!">privacy policy</Link></label>
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary btn-block mt-3" type="submit" name="submit">Register</button>
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
}

export default Register;