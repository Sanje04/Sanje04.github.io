import React from 'react'
import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {

  return (
    <footer>
      <a href="/#" className='footer__logo'>Sanje Divakaran</a>

      <ul className='permalinks'>
        <li><a href="!#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/sanjedivakaran"><BsLinkedin/></a>
        <a href="https://github.com/Sanje04"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sanje Divakaran. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer