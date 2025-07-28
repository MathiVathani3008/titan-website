import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ld from '../assets/raga/lb.svg';
import { useAddress } from '../Context/AddressContext';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    phone:''
  });

  const { setAddressData } = useAddress();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleContinue = () => {
    setAddressData(formData); 
    navigate('/confirm-address');
  };

  return (
    <div className="container" style={{ paddingTop: '90px' }}>
      <div className="row">
        
        <div className="col-md-6 p-5 d-flex align-items-center justify-content-center">
          <img src={ld} alt="checkout-illustration" className="img-fluid" />
        </div>

        
        <div className="col-md-6">
          <div className="container py-4">
            <h4 className="mb-4">Enter Delivery Address</h4>

            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number*"
                className="form-control"
                value={formData.mobile}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                name="address"
                placeholder="Full Address*"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode*"
                  className="form-control"
                  value={formData.pincode}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City*"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  name="state"
                  placeholder="State*"
                  className="form-control"
                  value={formData.state}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="text-end">
              <button
                className="btn btn-warning"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;




