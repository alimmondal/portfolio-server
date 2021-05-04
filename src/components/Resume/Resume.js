import React from "react";
// import Navbar from "../Home/Home/Navbar/Navbar";
// import Navbar from "../../Shared/Navbar/Navbar";
import Resumes from "../../images/Resume.png";
import Navbar from "../Shared/Navbar/Navbar";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container resumeHero py-5  d-flex align-items-center">
        <div className="col-md-10">
          <h1>Resume</h1>
        </div>
        <div className="col-md-2">
          <p>8 years of experience</p>
        </div>
      </div>
      <div className="">
        <img src={Resumes} alt="" />
      </div>
    </div>
  );
};

export default Resume;
