import React, { useEffect, useState } from 'react';
import Service from './Service';
import Spinner from '../../Shared/Spinner/Spinner';

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        setServices([
            {name: "AI Solutions", description: "We build and deploy AI-based software tailored to your needs.", price: "From $200"},
            {name: "Custom Website Development", description: "Tailored websites designed to fit your specific requirements.", price: "From $200"},
            {name: "Ecommerce Stores", description: "Develop and optimize online stores to enhance your sales performance.", price: "From $500"},
            {name: "Brochure Websites", description: "Professional websites created to effectively showcase your business.", price: "From $300"},
            {name: "App Development", description: "Custom mobile and web apps designed to boost user engagement.", price: "From $800"},
            {name: "Data Pipelines", description: "Robust data processing systems designed and implemented to your needs.", price: "Contact for details"},
            {name: "Cloud Architecture", description: "Scalable cloud solutions developed to fit your business requirements.", price: "Contact for details"},
            {name: "Deployment & DevOps", description: "Streamlined processes for efficient development and deployment.", price: "Contact for details"},
            {name: "Consulting", description: "Expert advice to guide and refine your technology strategy effectively.", price: "Contact for details"}
        ]);


    }, [])

    return (
        <section id="services" className="services">
            <h5 className="miniTitle text-center">SERVICES</h5>
            <div className="text-center">
                <h6 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h6>
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