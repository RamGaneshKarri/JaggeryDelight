import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Products from './Products'; 
import Order from './Order';
import Success from './Success'; 
import AboutUs from './AboutUs';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<Navigate to="/register" />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
