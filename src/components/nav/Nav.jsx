import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCustomerService, AiOutlineContacts } from 'react-icons/ai';
import { useState } from 'react';


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === "#experiences" ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ''}><AiOutlineCustomerService /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav