import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
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
          {/* Link wrapped around logo and slogan */}
          <Link to="/home" className="logo-link">
            <h1 className="logo">JaggeryDelight</h1>
            <p className="slogan">Taste the Tradition of Pure Jaggery</p>
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/home" className="active">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/order">Order Here</Link>
          <Link to="/about">About Us</Link>

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

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://t4.ftcdn.net/jpg/07/87/46/63/360_F_787466352_tRDWql3gYr9S0YfAzXtNGTLTdKQkNNXi.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://img.freepik.com/premium-photo/jaggery-chunks-with-glossy-texture-yummy-delicious-jaggery-food-image-photography_1020697-477886.jpg?w=900" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://img.freepik.com/free-photo/healthy-jaggery-still-life-arrangement_23-2149161545.jpg" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="benefits-section">
        <div className="container">
          <h2 className="benefits-title">Benefits of Eating Jaggery</h2>
          <ul className="benefits-list">
            <li><strong>Boosts Immunity:</strong> Jaggery is rich in antioxidants and essential minerals like zinc and selenium that help in strengthening the immune system.</li>
            <li><strong>Improves Digestion:</strong> Jaggery contains fiber that aids in digestion and prevents constipation.</li>
            <li><strong>Detoxifies the Body:</strong> It helps in cleansing the liver and removing toxins from the body.</li>
            <li><strong>Rich in Iron:</strong> It is an excellent source of iron that helps in the treatment of anemia and boosts hemoglobin levels.</li>
            <li><strong>Energy Booster:</strong> Jaggery provides a quick energy boost and is often consumed by athletes to regain energy after physical activity.</li>
            <li><strong>Regulates Blood Sugar:</strong> Unlike refined sugar, jaggery helps in controlling blood sugar levels due to its natural sugar content and slow absorption rate.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
