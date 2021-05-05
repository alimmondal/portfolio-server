import React from 'react';
import './ProjectDetail.css'

const ProjectDetail = ({project}) => {
    // console.log(project)
    return (
        <div className=" text-center col-md-4 py-5 ProjectDetails">
            <img style={{height: '350px',}} src={project.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{project.name}</h5>
            <button className="rounded"><a style={{textDecoration:'none', color:'black'}}  target="_blank" href={project.Link} > See the project </a></button>
        </div>
    );
};

export default ProjectDetail;