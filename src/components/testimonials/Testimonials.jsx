import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';

// import Swiper core and required modules
import { Pagination, Scrollbar, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'ADP',
    review: 'lorem impsum asmd amsd damd adsm adsjd dasjadsj'
  },
  {
    avatar: AVTR2,
    name: 'AHead Simulations',
    review: 'lorem impsum asmd amsd damd adsm adsjd dasjadsj'
  },
  {
    avatar: AVTR3,
    name: 'Bit Bakery Software',
    review: 'lorem impsum asmd amsd damd adsm adsjd dasjadsj'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          data.map(({avatar, name, review}, index) => {
            return (  
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className="client__review"> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials