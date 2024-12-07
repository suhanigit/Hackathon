"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Facts from "./Facts";
// import Landing from "./landing"; // Import the Landing component
import LiveFeed from "./LiveFeed";
import MissionForm from "./MissionForm"; // Import your Main page component

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          {/* Define Routes */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facts" element={<Facts />} />
          {/* <Route path="/" element={<Landing />} />  */}
          <Route path="/" element={<LiveFeed />} /> 
          {/* <Route path="/main" element={<MissionForm />} /> */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;