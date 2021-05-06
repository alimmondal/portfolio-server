import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../../images/hero.png";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <div className="headerColor">
      <div className="container">
        <div
          style={{ height: "600px" }}
          className="row d-flex align-items-center"
        >
          <div style={{ paddingLeft: "100px" }} className="col-md-6 ">
            <img src={Hero} alt="" className="heroImg" />
          </div>
          <div className="col-md-5">
            <p className="text-white">Webste-developer | Fronted-developer</p>
            <h1 className="">Md Alim</h1>
            <p className="text-white">
              I am the master of HTML, CSS and Javascript. I know everything
              needed to make a website function, efficient. I didn't stop with
              the web. I went beyond with most popular Javascript framework
              called React JS. I even know the deployment, server and security.
              I will give you 100% web solution..
            </p>
            <Link to="/resume">
              <button className="btn-primary px-3 py-2 me-3 rounded">
                Download CV
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-secondary px-3 py-2 rounded">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
