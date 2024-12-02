// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="topnav" id="myTopnav">
      <Link to="/home" className="active">Home</Link>
      <Link to="/products">Our Products</Link>
      <Link to="/order">Order Here</Link>
      <Link to="/about">About Us</Link>

      {user ? (
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      ) : (
        <Link to="/login" className="logout-btn">Login</Link>
      )}

      <a href="javascript:void(0);" className="icon" onClick={() => toggleNavbar()}>
        <i className="fa fa-bars"></i>
      </a>
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
