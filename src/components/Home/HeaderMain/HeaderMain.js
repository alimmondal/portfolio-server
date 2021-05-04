import React from 'react';
import Hero from '../../../images/hero.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="container">
            <div style={{height:'600px', }}  className="row d-flex align-items-center">
            <div style={{paddingLeft:'100px', }} className="col-md-6 ">
                <img src={Hero} alt="" className="heroImg"/>
            </div>
            <div className="col-md-5">
                <p>Fronted-developer</p>
                <h1 className="">Md Alim</h1>
                <p className="text-secondary">I am the master of HTML, CSS and Javascript. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called React JS. I even know the deployment, server and security. I will give you 100% web solution..</p>
                <button className="btn-primary px-3 py-2 me-3 rounded">Download CV</button>
                <button className="btn-secondary px-3 py-2 rounded">Contact us</button>
            </div>
            </div>
        </div>
    );
};

export default HeaderMain;