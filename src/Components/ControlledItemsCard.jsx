import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class ControlledItemsCard extends Component {
  // state={
  //   value:null,
  //   percentage:null
  // }
  // componentDidMount(){
  //   const items = this.props.items
  //   if (items !== undefined){
  //     console.log(items)
  //     if (items.length===0){
  //       this.setState({value:0,percentage:""})
  //     } else {
  //       // count controlled items from "items" object, calculate percentage and set state.
  //     }
  //   }
  // }
  
  render() {
    const {value,percentage} =this.props
    return(
        <div className="card mb-3 overflow-hidden " style={{ minWidth: 12 + "rem" }}>
          <div className="bg-holder bg-card company-details-controlled-items-card"></div>
          <div className="card-body position-relative">
            <h6>
              Controlled Items
              <span className="badge badge-soft-success rounded-pill ml-2">
                {percentage}
              </span>
            </h6>
            <div className="display-4 fs-4 mb-2 font-weight-normal font-sans-serif" data-countup='{"endValue":1450,"suffix":" Items"}'>
              {value}
            </div>
            <a className="font-weight-semi-bold fs--1 text-nowrap" href="index.html">
              See all
              <span className="fas fa-angle-right ml-1" data-fa-transform="down-1"></span>
            </a>
          </div>
        </div>
    );
  }
}

export default withAuth(ControlledItemsCard);
