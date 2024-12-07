import React, { useEffect, useState } from "react";
import "./Home.css";


const image1 = "/images/image-2.jpg";
const image2 = "/images/image-3.avif";
const image3 = "/images/image-4.jpg";
const image4 = "/images/image-5.webp";
const image5 = "/images/NDRF-3.webp";


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [backgroundImages.length]);

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="overlay">
        <h1>Welcome to NDRF Drone Control</h1>
        <p>Select a page from the menu to explore!</p>
      </div>
    </div>
  );
};

export default Home;


