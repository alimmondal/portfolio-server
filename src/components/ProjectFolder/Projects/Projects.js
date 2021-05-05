import React from "react";
import "./Projects.css";
import doctor from "../../../images/doctor's portal.png";
import panda from "../../../images/panda.png";
import iRepair from "../../../images/iRepair.png";
import fashion from "../../../images/fashion.png";
import itroom from "../../../images/itroom.png";
import news from "../../../images/news.png";
import html from "../../../images/html.png";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const projectData = [
  {
    name: "doctor's Portal",
    imageURL: doctor,
    Link: "https://peaceful-austin-447329.netlify.app/",
  },
  {
    name: "Ecommerce website on Bootstrap",
    imageURL: panda,
    Link: "https://alimmondal.github.io/panda-commerce-bootstrap/",
  },
  {
    name: "Portfolio website on HTML & CSS",
    imageURL: iRepair,
    Link: "https://gifted-stonebraker-03413b.netlify.app/",
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
 
];

const Projects = () => {
  return (
    <div>
      <section className="container mt-5">
        <hr/>
        <div className="py-5 text-center">
          
          <h1>Portfolio </h1>
          <h5 className="text-primary">a proof of my programming skill</h5>
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
