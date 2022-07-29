import React from 'react'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "./testemonials.css";
import Data from "./testemonialsData";  

function Testemonials() {
  return (
    <section id="#testemonlials">
      <h5>Riview From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testemonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          Data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key='index' className="testemonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
}

export default Testemonials