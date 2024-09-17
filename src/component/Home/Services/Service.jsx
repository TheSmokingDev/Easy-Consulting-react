import React from 'react';
import './Service.css'
import Fade from 'react-reveal/Fade';
import './Service.css';

const Service = ({service}) => {
    const {name, description, img} = service;


    
    return (
        <div className="col-md-6 col-lg-4 service">
            <Fade bottom duration={2700} distance='70px'>
                <div className="service-card">
                    <div className="text-center">
                        {img && <img src={`${img}`} alt="" className="serviceImg"/>}
                    </div>
                    <h4 className="serviceName">{name}</h4>
                    <p className="serviceDes">{description}</p>

                </div>
            </Fade>
        </div>
    );
};

export default Service;