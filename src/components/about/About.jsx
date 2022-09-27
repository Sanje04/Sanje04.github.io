import React from 'react'
import './About.css';
import ME from '../../assets/sanje.jpg';
import { FaAward, FaFolder } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 Terms of Work Experience</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon' />
              <h5>University of Waterloo</h5>
              <small>Computer Engineering</small>
            </article>

            <article className='about__card'>
              <FaFolder className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

            
          <p>
            Currently growing my skills in programming in any sort of ways, with goals of becoming a Devops Solution Architect.
            I'm a problem solver and a strong communicator eager to prove my value for any company that gives me a chance.
            Motivated to advance and expand my skills set through targeted mentorship and challenging projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about