"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Facts from "./components/Facts";
// import Landing from "./landing"; // Import the Landing component
import LiveFeed from "./components/LiveFeed";
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
          {/* <Route path="/" element={<LiveFeed />} /> */}
          {/* <Route path="/main" element={<MissionForm />} /> */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;