import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/adp.png';
import AVTR2 from '../../assets/ahead.jpg';
import AVTR3 from '../../assets/bitbakery.webp';

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
    review: 'Sanje has shown a great desire to learn, improve his technical knowledge and contribute to the project and team deliverables.'
  },
  {
    avatar: AVTR2,
    name: 'AHead Simulations',
    review: 'Sanje showed technical merit during his co-op term. He was able to complete changes to our software UI. As well he demonstrated that he was able to work with more senior software engineers effectively.'
  },
  {
    avatar: AVTR3,
    name: 'Bit Bakery Software',
    review: 'Sanje showed positive improvement in the areas of problem solving, implementation, and communication. His contributions to the project have helped us move things forward and get things done.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Employers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
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