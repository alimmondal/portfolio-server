import React from "react";
import "./Projects.css";
import panda from "../../../images/panda.png";
import fashion from "../../../images/fashion.png";
import itroom from "../../../images/itroom.png";
import news from "../../../images/news.png";
import html from "../../../images/html.png";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const projectData = [
  {
    name: "Ecommerce website on Bootstrap",
    imageURL: panda,
    Link: "https://alimmondal.github.io/panda-commerce-bootstrap/",
  },
  {
    name: "Portfolio website on HTML & CSS",
    imageURL: html,
    Link: "https://alimmondal.github.io/web-portfolio/",
  },
  {
    name: "Website on HTML, CSS & Bootstrap",
    imageURL: fashion,
    Link: "https://alimmondal.github.io/penguin-fashion/",
  },
  {
    name: "Portfolio Website",
    imageURL: itroom,
    Link: "https://www.itroomab.com/",
  },
  {
    name: "News Website",
    imageURL: news,
    Link: "https://itroomab.com/news/",
  },
  {
    name: "Portfolio website on HTML & CSS",
    imageURL: html,
    Link: "https://alimmondal.github.io/web-portfolio/",
  },
  {
    name: "Portfolio website on HTML & CSS",
    imageURL: html,
    Link: "https://alimmondal.github.io/web-portfolio/",
  },
  
  
];

const Projects = () => {
  return (
    <div>
      <section className="container mt-5">
        <hr/>
        <div className="py-5">
          <h1>Portfolio <span style={{fontSize:'14px'}}>a proof of my programming skill</span> </h1>
        </div>
        <hr/>
        <div className="d-grid gap-3 projectGrid mt-5 mb-5 ">
          <div className="row">
            {projectData.map((project) => (
              <ProjectDetail project={project}></ProjectDetail>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
