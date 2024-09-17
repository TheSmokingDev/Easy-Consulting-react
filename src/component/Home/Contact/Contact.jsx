import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css';
import contactImg from '../../../Assets/contact.svg';
// import swal from 'sweetalert'
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const target = event.target;

        const formData = new FormData(target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        console.log(data);

        fetch("./.netlify/functions/triggerSubscribeEmail", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(()=> alert(`Enquiry sent successfully`)).catch(()=> alert(`Enquiry failed`));

    };
    return (
        <section id="contact">
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        <Fade duration={2000} left>
                            <form onSubmit={handleSubmit} className="contactForm">
                                <h4 className="miniTitle">CONTACT US</h4>
                                <h5 className="sectionTitle">GET IN TOUCH</h5>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Name" name="name" type="text" required/>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Email" name="email" type="email" required/>
                                    </Col>
                                    <Col md={12}>
                                        <input placeholder="Subject" name="subject" type="text" required/>
                                    </Col>
                                    <Col md={12}>
                                        <textarea name="message" placeholder="Your Message..." required></textarea>
                                    </Col>
                                </Row>
                                <button className="branBtn" type="submit">Submit Now</button>
                            </form>
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={`${contactImg}`} alt="Contact Us" className="img-fluid"/>
                        </Fade>
                    </Col>
                </Row>
            </Col>
        </section>
    );
};

export default Contact;