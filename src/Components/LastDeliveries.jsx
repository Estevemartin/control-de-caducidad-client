import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class LastDeliveries extends Component {
    
    render() {
        return (
            <div class="col" style={{height:"100%"}}>
              <div class="card mb-3"  style={{height:"100%"}}>
                <div class="card-header bg-light d-flex justify-content-between">
                  <h5 class="mb-0">Last deliveries </h5><Link class="font-sans-serif ml-2" to="/all-deliveries">All deliveries</Link>
                </div>
                <div class="card-body fs--1 p-0"  style={{height:"100%"}}>
                  <Link class="border-bottom-0 notification rounded-0 border-x-0 border border-300" to="#!">
                    <div class="notification-body">
                      <p class="mb-1"><strong>Robert Downey</strong> mention <strong>Anthony Hopkins</strong> in a comment</p>
                      <span class="notification-time">November 27, 12:00 AM</span>
                    </div>
                  </Link>
                </div>
              </div>
              </div>
        )
    }
}
