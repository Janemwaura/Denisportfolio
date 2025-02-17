import React from "react";
import "./Timeline.css";

const experiences = [
  {
    role: "Customer Service Supervisor",
    date: "April 2021 - Present",
    location: "Equity Bank (Nakuru Westside Mall)- Kenya",
    description: "Handled customer service operations and team management.",
  },
  {
    role: "Equity Investments – Representative",
    date: "April 2021 - Present",
    location: "Equity Bank (Nakuru Westside Mall) - Kenya",
    description: "Managed client relationships and sales targets.", 
  },
  // Add more experiences as needed
];

const Timeline = () => {
  return (
    <div className="timeline">
      
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.location}</h4>
              <span className="date">{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
