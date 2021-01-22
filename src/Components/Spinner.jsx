import React from 'react'

function Spinner() {
    return (
        <div class="d-flex justify-content-center align-items-center spinner">
        <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
        </div>
        </div>
    )
}

export default Spinner
