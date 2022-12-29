import React from "react";
import "./MainSection.css";

const MainSection = () => {
  const user = {
    id: 1,
    name: "Rahul",
    Designation: "Software Developer",
    role: "Frontend",
  };
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h6>Hello</h6>
        <h2>
          I' m <span className="user-name">{user.name}</span>
        </h2>
        <h4>{user.Designation}</h4>
        <p>--{user.role}</p>
        <button className="hire-btn">Hire Me</button>
      </div>
      <div className="hero-image">
        <div className="blob"></div>
      </div>
    </div>
  );
};

export default MainSection;
