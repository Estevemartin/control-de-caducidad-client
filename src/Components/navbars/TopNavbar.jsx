import React from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

function TopNavbar(props) {
  const { logout, isLoggedin } = props;

    return (
      <>
      {isLoggedin ? (
      <nav className="navbar navbar-mpa navbar-light navbar-glass navbar-top navbar-expand">
        <button
          className="btn navbar-toggler-humburger-icon navbar-toggler mr-1 mr-sm-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarVerticalCollapse"
          aria-controls="navbarVerticalCollapse"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line"></span>
          </span>
        </button>
        <Link className="navbar-brand mr-1 mr-sm-3" to="/">
          <div className="d-flex align-items-center">
            <img
              className="mr-2 navbar-logo-mpasol"
              src="../images/blueLogo.png"
              alt="logo"
            />
          </div>
        </Link>
        <ul className="navbar-nav navbar-nav-icons ml-auto flex-row align-items-center">
          <li className="nav-item dropdown">
          {/* eslint-disable-next-line */}
            <a
              className="nav-link pr-0"
              id="navbarDropdownUser"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar avatar-xl">
                <i className="fas fa-cog navbar-screw-icon"></i>
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right py-0"
              aria-labelledby="navbarDropdownUser"
            >
              <div className="bg-white rounded-lg py-2">
                <Link className="dropdown-item" to="/profile-settings">
                  Profile settings
                </Link>
                <Link className="dropdown-item" to="/logout" onClick={logout}>
                  Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>) : ""
      }
      </>
    )
}

export default withAuth(TopNavbar)
