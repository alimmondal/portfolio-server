import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Projects from "../Projects/Projects";

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Projects></Projects>
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Project;
