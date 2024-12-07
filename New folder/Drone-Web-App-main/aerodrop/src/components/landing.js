import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./landing.css";

const Header = () => {
  const navigate = useNavigate(); // Create navigate function

  return (
    <div className="header">
      <div className="header_logo">
        <span>
          <img
            src="https://marketplace.canva.cn/6gisA/MAEyl16gisA/2/tl/canva-vector-drone-icon-MAEyl16gisA.png"
            alt="shakti group"
            width="40px"
            className="logo"
          />
        </span>
        <span className="header_name" style={{ paddingBottom: "10px" }}>
          Shakti Group
        </span>
      </div>
      <div className="social_icons">
        <ul className="social_icon_list">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_icon_list"
              style={{ marginRight: "15px" }}
            >
              <ion-icon name="logo-facebook" style={{ color: "white" }}></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_icon_list"
              style={{ marginRight: "15px" }}
            >
              <ion-icon name="logo-twitter" style={{ color: "white" }}></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_icon_list"
              style={{ marginRight: "15px" }}
            >
              <ion-icon name="logo-instagram" style={{ color: "white" }}></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_icon_list"
              style={{ marginRight: "15px" }}
            >
              <ion-icon name="logo-pinterest" style={{ color: "white" }}></ion-icon>
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <button className="header_btn" onClick={() => navigate("/main")}>
            Go to Main Page
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;