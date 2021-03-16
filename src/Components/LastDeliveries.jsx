import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class LastDeliveries extends Component {
    
    render() {
        return (
            <div className="col" style={{height:"100%"}}>
              <div className="card mb-3"  style={{height:"100%"}}>
                <div className="card-header bg-light d-flex justify-content-between">
                  <h5 className="mb-0">Last deliveries </h5><Link className="font-sans-serif ml-2" to="/all-deliveries">All deliveries</Link>
                </div>
                <div className="card-body fs--1 p-0"  style={{height:"100%"}}>
                  <Link className="border-bottom-0 notification rounded-0 border-x-0 border border-300" to="#!">
                    <div className="notification-body">
                      <p className="mb-1"><strong>Robert Downey</strong> mention <strong>Anthony Hopkins</strong> in a comment</p>
                      <span className="notification-time">November 27, 12:00 AM</span>
                    </div>
                  </Link>
                </div>
              </div>
              </div>
        )
    }
}
