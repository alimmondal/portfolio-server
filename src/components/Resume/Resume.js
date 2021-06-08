import React from "react";
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
      <p className="text-center py-3">Click over the resume to download</p>

      <div className="">
        <a href="../../images/Resume.png" download="Resume">
          <img src="../../images/Resume.png" alt=""/>
        <img src={Resumes} alt="resume" />
        </a>
      </div>
    </div>
  );
};

export default Resume;
