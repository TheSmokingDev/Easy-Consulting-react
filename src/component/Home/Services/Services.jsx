import React, { useEffect, useState } from 'react';
import Service from './Service';
import Spinner from '../../Shared/Spinner/Spinner';

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        setServices([
            {name: "Custom Website Development", description: "Tailored websites to meet your specific needs", price: "From $200"},
            {name: "Ecommerce Stores", description: "Build and optimize online stores to boost your sales", price: "From $500"},
            {name: "Brochure Websites", description: "Create professional websites to showcase your business", price: "From $300"},
            {name: "App Development", description: "Develop custom mobile and web applications to enhance user engagement", price: "From $800"},
            {name: "Data Pipelines", description: "Design and implement robust data processing systems", price: "Contact for details"},
            {name: "Cloud Architecture", description: "Develop scalable cloud solutions for your business", price: "Contact for details"},
            {name: "Deployment & DevOps", description: "Streamline your development and deployment processes", price: "Contact for details"},
            {name: "Consulting", description: "Expert advice to guide your technology strategy", price: "Contact for details"}
        ]);

    }, [])

    return (
        <section id="services" className="services">
            <h4 className="miniTitle text-center">SERVICES</h4>
            <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <div className="row mt-4 container mx-auto justify-content-center">
                {
                    services?.map((service, id) => <Service key={service._key + id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;