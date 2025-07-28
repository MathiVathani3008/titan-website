import React from 'react'
import Bw1 from '../assets/brands/bw1.jpg'
import Bw2 from '../assets/brands/bw2.jpg'
import Bw3 from '../assets/brands/bw3.jpg'
import Bw4 from '../assets/brands/bw4.jpg'
import { Link } from 'react-router-dom'
const Brand = () => {
  return (
    <div className="container-fluid text-center py-4 px-4" style={{ backgroundColor: "#fff" }}>
  <h4 className="fw-bold mb-4">CHOOSE BY BRANDS</h4>
  <div className="row">
    <div className="col-3 brand-image-container">
      <Link to="/edge"><img src={Bw1} className="brand-image" alt="Brand 1" /></Link>
    </div>
    <div className="col-3 brand-image-container">
      <Link to="/clocks"><img src={Bw4} className="brand-image" alt="Brand 2" /></Link>
    </div>
    <div className="col-3 brand-image-container">
      <Link to="/nebula"><img src={Bw3} className="brand-image" alt="Brand 3" /></Link>
    </div>
    <div className="col-3 brand-image-container">
      <Link to="/raga"><img src={Bw2} className="brand-image" alt="Brand 4" /></Link>
    </div>
  </div>
</div>

  )
}

export default Brand
