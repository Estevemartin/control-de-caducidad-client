import React from "react";
import { Link } from "react-router-dom";

function SideNavbar(props) {
  return (
      <nav className="navbar navbar-vibrant navbar-vertical navbar-expand-xl">
        {/* HAMBURGER MENU */}
        <div className="d-flex align-items-center">
          <div className="toggle-icon-wrapper">
            <button
              className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
              data-toggle="tooltip"
              data-placement="left"
              title="Toggle Navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="toggle-line"></span>
              </span>
            </button>
          </div>
          <a className="navbar-brand" href="/">
            <div className="d-flex align-items-center py-3">
              <img
                className="mr-2 navbar-logo-mpasol"
                src="../images/blueLogo.png"
                alt="logo"
              />
              <span className="font-sans-serif"></span>
            </div>
          </a>
        </div>

        {/* VERTICAL NAVBAR */}

        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content scrollbar">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link dropdown-indicator"
                  href="#authentication"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="authentication"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-unlock-alt"></span>
                    </span>
                    <span className="nav-link-text"> Companies</span>
                  </div>
                </a>
                <ul
                  className="nav collapse"
                  id="authentication"
                  data-parent="#navbarVerticalCollapse"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#authentication-basic"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="authentication-basic"
                    >
                      Company 1
                    </a>
                    <ul
                      className="nav collapse"
                      id="authentication-basic"
                      data-parent="#authentication"
                    >
                      <li className="nav-item">
                        <Link className="nav-link" href="/employees">
                          Employees
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/item/:id">
                          Item 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/item/:id">
                          Item 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#authentication-card"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="authentication-card"
                    >
                      Company 2
                    </a>
                    <ul
                      className="nav collapse"
                      id="authentication-card"
                      data-parent="#authentication"
                    >
                      <li className="nav-item">
                        <Link className="nav-link" href="/employees">
                          Employees
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/item/:id">
                          Item 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/item/:id">
                          Item 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#authentication-split"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="authentication-split"
                    >
                      Company 3
                    </a>
                    <ul
                      className="nav collapse"
                      id="authentication-split"
                      data-parent="#authentication"
                    >
                      <li className="nav-item">
                        <Link className="nav-link" href="/employees">
                          Employees
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/item/:id">
                          Item 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/item/:id">
                          Item 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default SideNavbar;
