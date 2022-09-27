import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Header = () => {
  return (
    <header>
      <div name="home" className='h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>Sanje Divakaran</h2>
            <p className='text-gray-500 py-4 max-w-md'>
              Greeting I am Sanje! An aspiring Full Stack Developer,
              Currently attending the University of Waterloo.
              Thank you for visiting my profile!
            </p>
            <div>
              <a href="#about">
              <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                View My Profile 
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
                
              </button>
              </a>
            </div>
          </div>
          <div>
            <img src={ME} alt="sanje profile" className='rounded-2xl mx-auto w-2/3 md:w-full bg-gradient-to-r  from-cyan-500 to-blue-500'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header