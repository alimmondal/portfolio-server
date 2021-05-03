import React from 'react';
import './ServiceDetail.css';


const ServiceDetail = ({service}) => {
    // console.log('props', service);
   
    return (
        <div className="col-md-4 text-center pb-5 services">
            <img style={{height: '50px'}} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;