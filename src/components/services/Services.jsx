import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go';

const Services = () => {
  return (
    <section id='skills'>
      <h5>What I Offer</h5>
      <h2>Skills</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>Technical Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Frontend Development</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Backend Development</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Database Management</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Web Deployment</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Unit Testing</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Git Bash</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Development Tools</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Visual Studio Code</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Robo 3T</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Elastic Search</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Jenkins</p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Unix</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Communication </p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Adaptability </p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Humility </p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Willingness To Ask Questions </p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Self-Awareness </p>
            </li>
            <li>
              <GoCheck className="service__list-icon" />
              <p>Resilience </p>
            </li>
          </ul>
        </article>
      
      </div>
    </section>
  )
}

export default Services