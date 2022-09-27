import React from 'react'
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const HeaderSocials = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <BsLinkedin size={30}/>
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Github <BsGithub size={30}/>
        </>
      ),
      href: 'https://github.com',
      },
    {
      id: 3,
      child: (
        <>
          E-Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:foo@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true
    },
  ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>

          {links.map(({id, child, href, style, download}) => (
            <li key={id} 
                className={'flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]' + " " + style}
            >
              <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="_blank" >
                {child}
              </a>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default HeaderSocials