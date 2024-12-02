import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Order.css';

export default function Orders() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [whiteJaggeryQty, setWhiteJaggeryQty] = useState(0);
  const [blackJaggeryQty, setBlackJaggeryQty] = useState(0);
  const [liquidJaggeryQty, setLiquidJaggeryQty] = useState(0);
  const [paymentMode, setPaymentMode] = useState("Cash on Delivery");

  const whiteJaggeryPrice = 85;
  const blackJaggeryPrice = 95;
  const liquidJaggeryPrice = 200;

  const totalAmount =
    whiteJaggeryQty * whiteJaggeryPrice +
    blackJaggeryQty * blackJaggeryPrice +
    liquidJaggeryQty * liquidJaggeryPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setWhiteJaggeryQty(0);
    setBlackJaggeryQty(0);
    setLiquidJaggeryQty(0);
    setPaymentMode("Cash on Delivery");
  };

  const toggleNavbar = () => {
    const navbar = document.getElementById("myTopnav");
    if (navbar.className === "topnav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "topnav";
    }
  };

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <div className="logo-container">
          <h1 className="logo">JaggeryDelight</h1>
          <p className="slogan">Taste the Tradition of Pure Jaggery</p>
        </div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/order" className="active">Order Here</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login" className="logout-btn">Logout</Link>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={toggleNavbar}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div className="order-form-container">
        <h2>LET'S ORDER</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <textarea
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address.."
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">White Jaggery 85 Rs/Kg:</label>
            <input
              type="number"
              className="form-control"
              min="0"
              value={whiteJaggeryQty}
              onChange={(e) => setWhiteJaggeryQty(Number(e.target.value))}
              placeholder="Quantity for White Jaggery"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Black Jaggery 95 Rs/Kg:</label>
            <input
              type="number"
              className="form-control"
              min="0"
              value={blackJaggeryQty}
              onChange={(e) => setBlackJaggeryQty(Number(e.target.value))}
              placeholder="Quantity for Black Jaggery"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Liquid Jaggery 200 Rs/Litre:</label>
            <input
              type="number"
              className="form-control"
              min="0"
              value={liquidJaggeryQty}
              onChange={(e) => setLiquidJaggeryQty(Number(e.target.value))}
              placeholder="Quantity for Liquid Jaggery"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Total Amount:</label>
            <p><strong>{totalAmount} Rs</strong></p>
          </div>
          <div className="mb-3">
            <label className="form-label">Mode of Payment:</label>
            <select
              className="form-control"
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
            >
              <option>Cash on Delivery</option>
              <option>Online (UPI/DEBIT CARD/PAYTM)</option>
            </select>
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
