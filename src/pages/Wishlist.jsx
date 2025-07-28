// pages/Wishlist.js
import React from 'react';
import { useWishlist } from '../Context/WishlistContext';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { cartItems, addToCart, isInCart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Location />
      <div className="container my-5">
        <h3 className="fw-bold m-4  text-center">Your Wishlist</h3>
        <div className="row row-cols-3 row-cols-md-4 g-4 m-4 p-4">
          {wishlistItems.map(item => {
            const inCart = isInCart(item.id);
            return (
              <div className="col" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <p className="card-text fw-bold">₹{item.price}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        className={`btn ${inCart ? 'btn-success' : 'btn-outline-primary'} btn-sm`}
                        onClick={() => {
                          if (!inCart) {
                            addToCart({ ...item, quantity: 1 });
                          } else {
                            navigate('/cart');
                          }
                        }}
                      >
                        {inCart ? 'Go to Cart' : 'Add to Cart'}
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {wishlistItems.length === 0 && (
            <p className="text-center">No items in your wishlist.</p>
          )}
        </div>
      </div><br></br><br></br>
      <Footer />
    </div>
  );
};

export default Wishlist;

