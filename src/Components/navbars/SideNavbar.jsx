import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class SideNavbar extends Component {

  componentDidMount = async () => {
    const theUser = await this.props.getUserInfo(this.props.user._id) 
    this.setState({user: theUser})
  }
  
  displaySideMenu(){
    if (this.state!==null){
      return(
        this.state.user.companies.map((company,companyIndex)=>{
          return(
            this.companyBlock(company._id,company.companyName,company.items,companyIndex)
          )
        })
      )
    }
  }

  companyBlock(companyId, companyName,companyItems,companyIndex){
    return(
      <li className="nav-item" key={companyIndex}>
        <Link className="nav-link dropdown-indicator" to={"/company-details/"+companyId}  role="button" aria-expanded="false" aria-controls="authentication-basic">
          {companyName}
        </Link>
        <ul className="nav" id="authentication-basic" data-parent="#authentication">
          <li className="nav-item"><Link className="nav-link" to={"/company-employees/"+companyId} key={0}>* Employees *</Link></li>
          {
            companyItems.map((item,itemIndex)=>{
              return(
                this.itemBlock(item._id,item.itemName,itemIndex+1)
              )
            })
          }
        </ul>
      </li>
    )
  }

  itemBlock(itemId,itemName,itemIndex){
    return (<li className="nav-item" key={itemIndex}><Link className="nav-link" to={"/item-details/"+itemId}>{itemName}</Link></li>)
  }

  render(){

    return (
     
        <nav className="navbar navbar-vibrant navbar-vertical navbar-expand-xl ">
          {/* HAMBURGER MENU */}
          <div className="d-flex align-items-center">
            <div className="toggle-icon-wrapper">
              <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-toggle="tooltip" data-placement="left" title="Toggle Navigation">
                <span className="navbar-toggle-icon"><span className="toggle-line"></span></span>
              </button>
            </div>
            <a className="navbar-brand" href="/">
              <div className="d-flex align-items-center py-3">
                <img className="mr-2 navbar-logo-mpasol" src="../images/blueLogo.png" alt="logo"/><span className="font-sans-serif"></span>
              </div>
            </a>
          </div>
          <div className="collapse navbar-collapse sidebaryeso" id="navbarVerticalCollapse">
            <div className="navbar-vertical-content scrollbar ">
              <ul className="navbar-nav flex-column">
                <li className="nav-item" key={0}>
                  <a className="nav-link dropdown-indicator " href="#authentication" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon"><span className="fas fa-unlock-alt"></span></span>
                      <span className="nav-link-text"> Companies</span>
                    </div>
                  </a>
                  <ul className="nav" id="authentication" data-parent="#navbarVerticalCollapse">
                    {this.displaySideMenu()}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
  
}

export default withAuth(SideNavbar);
