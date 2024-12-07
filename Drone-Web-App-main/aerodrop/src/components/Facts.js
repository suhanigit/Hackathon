import React from "react";
import "./Facts.css";

const Facts = () => {
  const rescueTeams = [
    {
      country: "India",
      teamName: "National Disaster Response Force (NDRF)",
      success: "Over 600",
      majorDeployments: "2015 Nepal Earthquake, 2020 Vizag Gas Leak, 2023 Turkey Earthquake",
      notableFailures: "Limited early response during 2013 Uttarakhand floods; resource allocation issues",
    },
    {
      country: "USA",
      teamName: "Federal Emergency Management Agency (FEMA US&R Task Forces)",
      success: "Over 1,000",
      majorDeployments: "2001 9/11 Response, 2005 Hurricane Katrina, 2010 Haiti Earthquake",
      notableFailures: "Delays during Hurricane Katrina; criticized for bureaucratic inefficiencies",
    },
    {
      country: "UK",
      teamName: "UK International Search and Rescue (UK ISAR)",
      success: "40+ international missions",
      majorDeployments: "2004 Indian Ocean Tsunami, 2015 Nepal Earthquake",
      notableFailures: "Criticized for limited effectiveness in Haiti earthquake (2010)",
    },
    {
      country: "Japan",
      teamName: "Japan Disaster Relief Team (JDR)",
      success: "300+ domestic, 60+ international",
      majorDeployments: "2008 Wenchuan Earthquake, 2010 Chile Earthquake",
      notableFailures: "Slow response during 1995 Kobe Earthquake",
    },
    {
      country: "Russia",
      teamName: "EMERCOM (Russian Ministry of Emergency Situations)",
      success: "150+",
      majorDeployments: "2008 South Ossetia conflict, 2021 Norilsk flooding",
      notableFailures: "Limited coordination in the 2012 Krymsk floods",
    },
    {
      country: "China",
      teamName: "China International Search and Rescue Team (CISAR)",
      success: "40+ international missions",
      majorDeployments: "2008 Wenchuan Earthquake, 2010 Haiti Earthquake",
      notableFailures: "Challenges in 2008 Sichuan Earthquake; rescued fewer survivors than expected due to scale",
    },
    {
      country: "France",
      teamName: "Sécurité Civile",
      success: "200+ missions",
      majorDeployments: "2004 Indian Ocean Tsunami, 2010 Haiti Earthquake",
      notableFailures: "Criticized for coordination lapses during the 2003 European heatwave",
    },
    {
      country: "Germany",
      teamName: "THW (Technisches Hilfswerk)",
      success: "300+ international operations",
      majorDeployments: "2010 Haiti Earthquake, 2014 Balkans floods",
      notableFailures: "Limited impact in the 2014 Balkans floods",
    },
    {
      country: "Australia",
      teamName: "Australian Medical Assistance Teams (AUSMAT)",
      success: "50+ international deployments",
      majorDeployments: "2013 Philippines Typhoon Haiyan, 2020 Beirut Explosion",
      notableFailures: "Criticized for delayed response in 2004 Indian Ocean Tsunami",
    },
  ];

  return (
    <div className="facts">
      {/* <h2>Rescue Teams and Their Operations</h2> */}
      <div className="table-container">
        <table className="facts-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Rescue Team Name</th>
              <th>Successful Operations</th>
              <th>Major Deployments (Year)</th>
              <th>Notable Failures</th>
            </tr>
          </thead>
          <tbody>
            {rescueTeams.map((team, index) => (
              <tr key={index}>
                <td>{team.country}</td>
                <td>{team.teamName}</td>
                <td>{team.success}</td>
                <td>{team.majorDeployments}</td>
                <td>{team.notableFailures}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Facts;
