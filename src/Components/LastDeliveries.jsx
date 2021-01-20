import React, { Component } from 'react'

export default class LastDeliveries extends Component {
    
    render() {
        return (
            <div class="col-lg-4 pl-lg-2 mb-3">
              <div class="card mb-3">
                <div class="card-header bg-light d-flex justify-content-between">
                  <h5 class="mb-0">Last deliveries </h5><a class="font-sans-serif" href="pages/activity.html">All deliveries</a>
                </div>
                <div class="card-body fs--1 p-0">
                  <a class="border-bottom-0 notification rounded-0 border-x-0 border border-300" href="#!">
                    <div class="notification-body">
                      <p class="mb-1"><strong>Robert Downey</strong> mention <strong>Anthony Hopkins</strong> in a comment</p>
                      <span class="notification-time">November 27, 12:00 AM</span>
                    </div>
                  </a>
                </div>
              </div>
              </div>
        )
    }
}
