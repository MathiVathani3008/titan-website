import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../Context/AddressContext";
import { useCart } from "../Context/CartContext";
import Navbar from "../components/Navbar";

const Payment = () => {
  const { selectedItems, cartItems = [] } = useCart();
  const { addressData } = useAddress();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const navigate = useNavigate();

  
  const selectedCartItems = cartItems.filter(item => selectedItems.includes(item.id));

 
  const orderValue = selectedCartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.toString().replace(/,/g, '')) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return acc + price * quantity;
  }, 0);

  const shippingCost = selectedCartItems.length < 2 ? 0 : 50;
  const grandTotal = orderValue + shippingCost;

  const handlePlaceOrder = () => {
    console.log("Payment Method Selected:", paymentMethod);
    navigate("/order-success");
  };

  return (
    <div style={{ paddingTop: "90px" }}>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {/* Left Side - Payment Modes */}
          <div className="col-md-8">
            <h4 className="pb-4">Select Payment Mode</h4>

            <div className="border p-4 rounded mb-3">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="me-2"
                />
                UPI / Credit / Debit Card / Wallet / Net Banking
              </label>
            </div>

            <div className="border p-4 rounded text-muted mb-2">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="emi"
                  checked={paymentMethod === "emi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="me-2"
                />
                EMI / No Cost EMI / Cardless EMI
              </label>
            </div>

            <div className="border p-4 rounded text-muted mb-2">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="me-2"
                />
                Cash On Delivery
              </label>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="border p-3 rounded mb-3 bg-light">
              <h5>Deliver To</h5>
              {addressData ? (
                <p>
                  <strong>{addressData.name}</strong><br />
                  {addressData.address}, {addressData.city}, {addressData.state} - {addressData.pincode}<br />
                  Mobile: {addressData.mobile || (
                    <span className="text-danger">No phone number</span>
                  )}
                </p>
              ) : (
                <p className="text-danger">No address found. Please go back and fill the form.</p>
              )}
            </div>

            <div className="border p-3 rounded mb-3 bg-light">
              <h5 className="fw-bold">Order Summary ({selectedCartItems.length})</h5>
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
            </div>

            <button
              className="btn btn-warning p-3 w-100"
              onClick={handlePlaceOrder}
              disabled={selectedCartItems.length === 0 || !addressData}
            >
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;







