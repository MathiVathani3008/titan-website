
import tilogo from '../assets/Pictures/titan-logo.svg'
import { Link } from 'react-router-dom'
import React from "react";

import { useCart } from "../Context/CartContext.jsx";
import { useWishlist } from "../Context/WishlistContext.jsx";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist(); 
const Count = wishlistItems.length;

  const totalCount = cartItems.length;
  return (
      <nav className="navbar navbar-expand-lg  bg-white bg-body-white fixed-top shadow border-bottom" >
  <div className="container-fluid mx-4 px-5">

    
    <a className="navbar-brand h1" href="#">
      <Link to="/"><img src={tilogo} alt="titan" height="40" width="100px"/></Link>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="mx-auto w-75 bg-body-tertiary ">
        <div className="input-group ">
          <span className="input-group-text bg-tertiary border-end-0"><i className="bi bi-search"></i></span>
          <input type="text" className="form-control bg-body-tertiary  border-start-0 border-end-0" placeholder="Search here..."/>
          <span className="input-group-text bg-tertiary border-start-0"><i className="bi bi-mic-fill"></i></span>
        </div>
      </div>

    
      <div className="d-flex align-items-center ms-1 gap-4" >
        <div className="text-center icon-text"><a href="#" className="nav-link"><i className="bi bi-person"></i><p className="mb-2">Account</p></a></div>
        <div className="text-center icon-text"><Link to="/wishlist" className="nav-link"><i className="bi bi-heart"></i><p className="mb-2">Wishlist</p>
        {Count > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {Count}
              </span>
            )}
        </Link></div>
        <div className="text-center icon-text"><Link to="/cart" className="nav-link"><i className="bi bi-cart3"></i><p className="mb-2">Cart</p>
            {totalCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCount}
              </span>
            )}
        </Link></div>
        <div className="text-center icon-text"><a href="#" className="nav-link"><i className="bi bi-box2"></i><p className="mb-2">Track Order</p></a></div>

      </div>
    </div>

  </div>
</nav>
  )
}

export default Navbar
