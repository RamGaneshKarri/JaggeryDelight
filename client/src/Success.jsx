import React from "react";

export default function Success() {
  return (
    <div>
      <div className="topnav">
        <a href="/home" className="active">Home</a>
        <a href="/products">Our Products</a>
        <a href="/order">Order Here</a>
        <a href="/about">About Us</a>
        <a href="/login" className="logout-btn">Logout</a>
      </div>

      <div className="success-message">
        <p id='one'>Thank You for Ordering!</p>
        <p>Your order has been successfully placed.</p>
      </div>

      <style>
        {`
          .success-message {
            font-family: 'Poppins', sans-serif;
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px;
            border-radius: 10px;
            margin-top: 80px;
          }

          #one {
            color: white;
            font-family: 'Pacifico', cursive;
            font-size: 3rem;
            margin-bottom: 20px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          p {
            font-size: 1.4rem;
            font-family: 'Pacifico', cursive;
            color: white;
            line-height: 1.8;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 500;
            text-align: center;
          }

          @media (max-width: 768px) {
            .success-message {
              padding: 30px;
            }

            h2 {
              font-size: 2.5rem;
            }

            p {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </div>
  );
}
