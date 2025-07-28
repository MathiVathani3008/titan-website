import React from 'react'

const Location = () => {
  return (
    <div>
        <div className="container-fluid loca py-2">
            <div className="d-flex justify-content-center align-items-center px-4">
    
                <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <span className="fw-semibold">You're viewing items available in your location</span>
                </div>


            <i className="bi bi-arrow-right arrow-icon"></i>
            </div>
        </div>
    </div>
  )
}

export default Location
