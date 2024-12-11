import React, { useEffect, useState } from "react";
import "./Home.css";


const image1 = "/images/image-2.jpg";
const image2 = "/images/image-1.avif";
const image3 = "/images/image-7.webp";
const image4 = "/images/image-9.jpg";
const image5 = "/images/image-3.jpg";


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
        <h1>Welcome to JATAYU - The Rescue Control</h1>
        <a href="/livefeed"><p>Select a page from the menu to explore!</p>
        </a>
      </div>
    </div>
  );
};

export default Home;


