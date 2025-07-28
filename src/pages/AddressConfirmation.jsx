import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Location from '../components/Location';
import Footer from '../components/Footer';
import { useAddress } from '../Context/AddressContext';
import { useCart } from '../Context/CartContext';
import { cardData } from '../data/Product';

const AddressConfirmation = () => {
  const { addressData } = useAddress();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  if (!addressData) {
    navigate('/checkout', { replace: true });
    return null;
  }

  
  const cartProducts = cartItems.map(cartItem =>
    cardData.find(product => product.id === cartItem.id)
  );

  const { fullName, mobile, address, city, state: userState, pincode } = addressData;

  return (
    <div style={{ paddingTop: '90px' }}>
      <Navbar />
      <Location />
      <div className="container my-4">
        <div className="row">
          
          <div className="col-md-8">
            <h4 className="fw-bold mb-3">Delivery Address</h4>
            <div className="p-4 bg-light border rounded">
              <h6 className="fw-bold">{fullName}</h6>
              <p className="mb-1">{address}</p>
              <p className="mb-1">{city}, {userState} - {pincode}</p>
              <p className="mb-1">Mobile: {mobile}</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="bg-light border rounded p-3 mb-3">
              <h6 className="fw-bold mb-3">Expected Delivery On</h6>

              {cartProducts.length === 0 && (
                <p className="text-muted">No products found in cart.</p>
              )}

              {cartProducts.map((product, index) =>
                product ? (
                  <div
                    key={product.id}
                    className="d-flex align-items-center mb-2"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'contain',
                        marginRight: '10px',
                        border: '1px solid #ddd'
                      }}
                    />
                    
                    <p className="mb-0"> {product.title}{product.description}<br></br>Within 7 days</p>
                  </div>
                ) : (
                  <p key={index} className="text-muted">Product not found.</p>
                )
              )}
            </div>

            <div className="border  bg-white">
              <button
                className="btn w-100 p-3"
                style={{
                  backgroundColor: '#d0933a',
                  color: 'white',
                  borderRadius: '0px',
                  border: 'none'
                }}
                onClick={() => navigate('/payment')}
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressConfirmation;




