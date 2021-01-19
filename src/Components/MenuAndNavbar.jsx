import React from 'react';
import {Link} from 'react-router-dom';

function MenuAndNavbar() {



    return (
        <main className="main" id="top">
      <div className="container">
        <nav className="navbar navbar-vibrant navbar-vertical navbar-expand-xl">
          <div className="d-flex align-items-center">
            <div className="toggle-icon-wrapper">
              <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-toggle="tooltip" data-placement="left" title="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
            </div><a className="navbar-brand" href="../index.html">
              <div className="d-flex align-items-center py-3"><img className="mr-2 navbar-logo-mpasol" src="../images/blueLogo.png" alt="logo"  /><span className="font-sans-serif"></span>
              </div>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div className="navbar-vertical-content scrollbar">
              <ul className="navbar-nav flex-column">
              <li className="nav-item"><Link className="nav-link dropdown-indicator" href="#authentication" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication">
                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-unlock-alt"></span></span><span className="nav-link-text"> Companies</span>
                    </div>
                  </Link>
                  <ul className="nav collapse" id="authentication" data-parent="#navbarVerticalCollapse">
                    <li className="nav-item"><Link className="nav-link dropdown-indicator" href="#authentication-basic" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication-basic">Company 1</Link>
                      <ul className="nav collapse" id="authentication-basic" data-parent="#authentication">
                        <li className="nav-item"><Link className="nav-link" href="/employees">Employees</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="/item/:id">Item 1</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="/item/:id">Item 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link dropdown-indicator" href="#authentication-card" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication-card">Company 2</Link>
                      <ul className="nav collapse" id="authentication-card" data-parent="#authentication">
                        <li className="nav-item"><Link className="nav-link" href="../authentication/card/login.html">Employees</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="../authentication/card/logout.html">Item 1</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="../authentication/card/register.html">Item 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link dropdown-indicator" href="#authentication-split" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication-split">Company 3</Link>
                      <ul className="nav collapse" id="authentication-split" data-parent="#authentication">
                        <li className="nav-item"><Link className="nav-link" href="../authentication/split/login.html">Employees</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="../authentication/split/logout.html">Item 1</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="../authentication/split/register.html">Item 2</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                  </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
            <button className="btn navbar-toggler-humburger-icon navbar-toggler mr-1 mr-sm-3" type="button" data-toggle="collapse" data-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
            <Link className="navbar-brand mr-1 mr-sm-3" href="/">
              <div className="d-flex align-items-center"><img className="mr-2 navbar-logo-mpasol" src="../images/blueLogo.png" alt="logo" />
              </div>
            </Link>
            <ul className="navbar-nav navbar-nav-icons ml-auto flex-row align-items-center">
              <li className="nav-item"><Link className="nav-link settings-popover" href="#settings-modal" data-toggle="modal"><span className="ripple"></span><span className="fa-spin position-absolute all-0 d-flex flex-center"><span className="icon-spin position-absolute all-0 d-flex flex-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z" fill="#2A7BE4"></path>
                      </svg></span></span></Link></li>
            </ul>
          </nav>
          <div className="card">
            <div className="card-body overflow-hidden p-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-6"><img className="img-fluid" src="../assets/img/illustrations/4.png" alt="" /></div>
                <div className="col-lg-6 pl-lg-4 my-5 text-center text-lg-left">
                  <h3> You have no companies!</h3>
                  <p className="lead">Time to get a company.</p>
                  <Link className="btn btn-falcon-primary" href="/create-company">Create a New Company</Link><br/><br/>
                  <Link className="btn btn-falcon-primary" href="/add-company">Add an Existing Company</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}

export default MenuAndNavbar
