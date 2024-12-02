import React from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <div className="logo-container">
          <h1 className="logo">JaggeryDelight</h1>
          <p className="slogan">Taste the Tradition of Pure Jaggery</p>
        </div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/products" className="active">Our Products</a>
          <a href="/order">Order Here</a>
          <a href="/about">About Us</a>
          <a href="/login" className="logout-btn">Logout</a>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={() => toggleNavbar()}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://bell-mart.netlify.app/jaggery-2.png"
                className="card-img-top"
                alt="White Jaggery"
              />
              <div className="card-body">
                <h5 className="card-title">White Jaggery</h5>
                <p className="card-text">
                  White jaggery is a pure, unrefined sugar made from raw sugarcane juice, naturally processed without chemicals, and used in sweets, beverages, and traditional dishes.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0"><strong>Price:</strong> 85 Rs/Kg</p>
                  <button className="btn btn-primary" onClick={() => navigate("/order")}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://bell-mart.netlify.app/jaggery-1.png"
                className="card-img-top"
                alt="Brown Jaggery"
              />
              <div className="card-body">
                <h5 className="card-title">Brown Jaggery</h5>
                <p className="card-text">
                  Brown jaggery is a traditional, natural sweetener made from sugarcane juice or palm sap, unrefined, and rich in minerals and nutrients.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0"><strong>Price:</strong> 95 Rs/Kg</p>
                  <button className="btn btn-primary" onClick={() => navigate("/order")}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://bell-mart.netlify.app/jaggery-3.png"
                className="card-img-top"
                alt="Panakam"
              />
              <div className="card-body">
                <h5 className="card-title">Panakam</h5>
                <p className="card-text">
                  Panakam, a jaggery-based traditional drink, is rich in natural energy, aids digestion, and helps cool the body, making it a healthy and refreshing choice during festivals and hot summer days.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0"><strong>Price:</strong> 200 Rs/Litre</p>
                  <button className="btn btn-primary" onClick={() => navigate("/order")}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function toggleNavbar() {
    const navbar = document.getElementById("myTopnav");
    if (navbar.className === "topnav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "topnav";
    }
  }
}
