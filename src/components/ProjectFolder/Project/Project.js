import React from "react";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Home/Navbar/Navbar";
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
