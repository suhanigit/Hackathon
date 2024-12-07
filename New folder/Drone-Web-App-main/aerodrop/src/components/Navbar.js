import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Shakti Drone Control</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/livefeed">Live Feed</Link>
      </div>
    </nav>
  );
};

export default Navbar;
