import React from "react";
import "./About.css";

const About = () => {
  const missions = [
    {
      title: "Kerala Floods (2018)",
      description:
        "One of NDRF's most successful missions, rescuing over 10,000 stranded individuals and providing immediate relief to thousands affected by devastating floods.",
      outcome: "Successful",
    },
    {
      title: "Odisha Cyclone Fani (2019)",
      description:
        "Swift operations were carried out to evacuate over a million people. However, logistical challenges delayed relief distribution in some remote areas.",
      outcome: "Partially Successful",
    },
    {
      title: "Uttarakhand Glacier Disaster (2021)",
      description:
        "Drones were deployed to locate trapped individuals in the aftermath of a glacier breach. While some survivors were rescued, over 200 lives were lost.",
      outcome: "Mixed",
    },
    {
      title: "COVID-19 Pandemic (2020-2021)",
      description:
        "NDRF teams assisted in transporting oxygen, medical supplies, and conducting awareness campaigns. Drones were used for public monitoring in high-risk zones.",
      outcome: "Successful",
    },
  ];

  return (
    <div className="about-container">
      <h2>About</h2>
      <p>
        This website is part of the Smart India Hackathon 2024. Our goal is to
        address challenges in searching for missing persons, particularly
        deceased individuals, using advanced drone technology.
      </p>
      <blockquote>
        <em>
          "The search for missing persons, particularly presumed deceased
          individuals, faces challenges with existing detection tools."
        </em>
      </blockquote>
      <p>
        Our solution integrates advanced drone technology with mapping systems
        to enhance rescue operations. Below are some of the NDRF's key missions
        over the years:
      </p>

      <div className="missions">
        {missions.map((mission, index) => (
          <div className="mission-card" key={index}>
            <h3>{mission.title}</h3>
            <p>{mission.description}</p>
            <span
              className={`outcome ${
                mission.outcome === "Successful"
                  ? "success"
                  : mission.outcome === "Partially Successful"
                  ? "partial"
                  : "mixed"
              }`}
            >
              {mission.outcome}
            </span>
          </div>
        ))}
      </div>
      <button className="cta-button">Learn More</button>
    </div>
  );
};

export default About;
