import React from 'react';
import { useCart } from '../Context/CartContext';
import Navbar from '../components/Navbar';
import car from '../assets/Pictures/cart.webp';
import { Link,useNavigate } from 'react-router-dom';
import deli from '../assets/raga/deli.png'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    selectedItems,
    toggleSelectItem,
    selectAll,
    deselectAll,
    isSelected
  } = useCart();
  const navigate = useNavigate();

 
  const selectedCartItems = cartItems.filter(item => selectedItems.includes(item.id));

  const orderValue = selectedCartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.toString().replace(/,/g, '')) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return acc + price * quantity;
  }, 0);

  const shippingCost = selectedCartItems.length < 2 ? 0 : 50;
  const grandTotal = orderValue + shippingCost;

  return (
    <div style={{ paddingTop: '90px' }}>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className="container">
              {cartItems.length === 0 ? (
                <p className='text-center p-5 m-0'>
                  <img src={car} alt="Empty Cart" className="img-fluid" />
                  <br /><br />
                  <b>No items in cart</b><br /><br />
                  Let's fill it with Titan
                </p>
              ) : (
                <>
                  <div
                    className="d-flex justify-content-between align-items-center p-3 mb-3"
                    style={{ backgroundColor: "#fdf3f9", height: "70px" }}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={selectedItems.length === cartItems.length}
                        onChange={(e) =>
                          e.target.checked ? selectAll() : deselectAll()
                        }
                      />
                      <span className="fw-semibold">{` ${selectedItems.length}/${cartItems.length}: Selected`}</span>
                    </div>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.id} className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-2">
                          <div className="form-check m-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={isSelected(item.id)}
                              onChange={() => toggleSelectItem(item.id)}
                            />
                          </div>
                          <Link to={`/product/${item.id}`}>
                            <img
                              src={item.image}
                              className="img-fluid rounded-start my-3"
                              alt={item.title}
                            />
                          </Link>
                        </div>

                        <div className="col-md-10 d-flex justify-content-between align-items-center p-3">
                          <div>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text text-muted">{item.description}</p>
                            <p className="card-text">
                              <strong>₹{item.price}</strong>
                            </p>
                            <div
                              className="d-inline-flex border overflow-hidden"
                              style={{ width: "fit-content" }}
                            >
                              <div
                                className="btn btn-xl btn-outline-secondary border-0"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                −
                              </div>
                              <span className="px-3 d-flex align-items-center">
                                {item.quantity}
                              </span>
                              <div
                                className="btn btn-outline-secondary border-0"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <div
                            className="position-absolute top-0 end-0 m-2 text-dark"
                            style={{ cursor: 'pointer', zIndex: 10 }}
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="bi bi-x-lg"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          
          <div className='col-md-4'>
              <img src={deli} className='img-fluid mt-3 mb-4'></img>
            <div className="border p-4 rounded shadow-sm bg-white">
              <h5 className="fw-bold">Order Summary ({selectedItems.length})</h5>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Order Value</span>
                <span>₹{orderValue.toLocaleString('en-IN')}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? <span className="text-success">Free</span> : `₹${shippingCost}`}</span>
              </p>
              <hr />
              <p className="d-flex justify-content-between fw-bold">
                <span>Grand Total</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              </p>
              <button className="btn  btn-xl w-100  mt-3 py-3 fw-semibold" style={{ backgroundColor: '#ffa500', color: 'white' }} onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;



