import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Review from './Review';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay, Pagination } from 'swiper/core'
import Spinner from '../../Shared/Spinner/Spinner';

const Reviews = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState([])
    useEffect(() => {

            setReviews([{name: "Coverlads", address: "www.coverlads.com.au", description: "Absolutely fantastic experience working with this team! The custom website they built for us was not only visually stunning but also had an incredibly seamless payment gateway integration. We were impressed by how smooth and hassle-free the entire process was. Their attention to detail and expertise truly set them apart. Highly recommend their services!\" – Haider, CEO of CoverLads"}, {name: "JMD Electrical", address: "www.jmdelectricals.com.au/", description: "We’re thrilled with the brochure website created by this team for JMD Electrical. They did an excellent job showcasing our electrical services with a clean and professional design. The site has been a great tool for advertising our offerings and attracting new clients. The process was smooth and efficient, and their attention to detail was impressive. Highly recommended!\" – Daniel M., JMD Electrical"}]);
    }, [])
    return (
        <section id="testimonial">
            <h4 className="miniTitle text-center">TESTIMONIALS</h4>
            <div className="text-center mb-4">
                <h3 className="sectionTitle">WHAT OUR CLIENTS SAY’S</h3>
            </div>
            <Col md={11} className="mx-auto">
                <Swiper 
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    >
                    
                    {
                        reviews.length === 0 ? 
                            <div className="text-center">
                                <Spinner/>
                            </div>: 
                            reviews.map((review, id) => {
                                return(
                                    <SwiperSlide key={id}>
                                        <Review review={review} key={review._key}/>
                                    </SwiperSlide>
                                )
                        })
                    }
                </Swiper>
            </Col>
        </section>
    );
};

export default Reviews;