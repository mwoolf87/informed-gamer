import React from "react";
import profile from "../profile_pic.jpg";

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <h3>Web Dev from the Greater Boston Area</h3>
      <img src={profile} alt="profile pic" className="profile-pic" />
      <div className="nav-links">
        <a
          href="https://www.linkedin.com/in/mwoolfdev/"
          target="_blank"
          rel="noreferrer"
        >
          Linkdin
        </a>
        <a href="https://github.com/mwoolf87" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="mailto:mwoolfdev@gmail.com">Email</a>
      </div>
    </div>
  );
};

export default About;
