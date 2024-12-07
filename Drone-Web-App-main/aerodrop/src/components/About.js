import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        This website is part of the Smart India Hackathon 2024. The problem
        statement we aim to address is:
      </p>
      <blockquote>
        <em>
          "The search for missing persons, particularly presumed deceased
          individuals, faces challenges with existing detection tools."
        </em>
      </blockquote>
      <p>
        Our solution integrates advanced drone technology with mapping systems
        to enhance rescue operations.
      </p>
    </div>
  );
};

export default About;
