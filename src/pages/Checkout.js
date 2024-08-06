import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Checkout.css';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      navigate('/shop');
    }, 2000); // Redirect to Shop after 2 seconds
  };

  return (
    <div className="checkout-container">
      <div className="container">
        <h1 className="text-center mb-5">Checkout</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {orderPlaced ? (
              <div className="order-message text-center">
                <p className="text-success">Order placed successfully!</p>
                <p>Redirecting to Shop...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" id="address" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="card" className="form-label">Credit Card Number</label>
                  <input type="text" id="card" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Place Order</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
