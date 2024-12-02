import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AboutUs.css';

export default function AboutUs() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
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
          <Link to="/order">Order Here</Link>
          <Link to="/about" className="active">About Us</Link>
          {user ? (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          ) : (
            <Link to="/login" className="logout-btn">Logout</Link>
          )}
        </div>
        <a href="javascript:void(0);" className="icon" onClick={toggleNavbar}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div className="about-us-container">
        <header className="about-us-header">
          <h1 className="about-title">Jaggery Delight</h1>
          <p className="about-tagline">Taste the Tradition of Pure Jaggery</p>
        </header>

        <section className="mission-section">
          <h2 className="section-title">OUR MISSION</h2>
          <ul className="mission-list">
            <li><strong>To Share Love through Food:</strong> Love of Customers</li>
            <li><strong>Tasty, Nourishing & Easy-to-Use:</strong> Pure Jaggery</li>
            <li><strong>Produce Pure Jaggery:</strong> With 100% Sugarcane</li>
            <li><strong>Bulk Orders:</strong> We accept bulk orders</li>
          </ul>
        </section>

        <section className="story-section">
          <h2 className="section-title">OUR STORY</h2>
          <p className="story-text">
            At <strong>Jaggery Delight</strong>, our aim is to produce 100% pure jaggery for the world. 
            Being an IT student, my aspiration is to connect the world of agriculture with technology. 
            With this vision, I began to seriously think about joining my family business. 
            I shared my idea with my family, and together, we built the foundation for <strong>Jaggery Delight</strong>.
            <br /><br />
            That’s how the idea of <strong>Jaggery Delight</strong> was born — blending tradition with innovation 
            to bring pure jaggery products to the world. This website is a reflection of that inspiration and drive.
          </p>
        </section>

        <footer className="contact-section">
          <h3 className="contact-title">For More Details, Contact</h3>
          <p className="contact-info">Founder of Jaggery Delight: <a href="mailto:ramganeshkarri18@gmail.com">ramganeshkarri18@gmail.com</a></p>
        </footer>
      </div>
    </div>
  );
}
