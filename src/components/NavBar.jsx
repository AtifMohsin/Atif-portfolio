import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Avatar from '..//assets/icons/avatar.png';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const closeMenu = () => {
    setNav(false); 
  };

  const links = [
    {
      id: 1,
      link: 'HOME',
    },
    {
      id: 2,
      link: 'ABOUT',
    },
    {
      id: 3,
      link: 'PORTFOLIO',
    },
    {
      id: 4,
      link: 'CONTACT',
    },
  ];

  return (
    <div  className='flex justify-between items-center w-full h-20 px-4
    text-black bg-white fixed'>
       <div className='flex justify space-x-3 pl-20'>
       <img className='h-[30px] hover:scale-150 duration-200' src={Avatar} alt='avatar'/>
       <h1 className='text-md lg:text-lg font-bold py-1  text-black' >AM.</h1>
       </div>
      <ul className='hidden md:flex pr-20'>
        {links.map(({ id, link }) => (
          <li key={id} className='text-sm flex cursor-pointer capitalize text-black px-4 hover:text-cyan-400 font-bold duration-200'>
            <Link to={link} smooth offset={-100} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer z-10 text-black'>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className='flex flex-col top-0 left-0 w-full h-screen absolute justify-center items-center bg-cyan-100'>
          {links.map(({ link, id }) => (
            <li key={id} className='text-4xl cursor-pointer font-bold capitalize text-black hover:scale-105 py-6 hover:text-cyan-400 hover:border-black duration-200 hover:border-b-2'>
              <Link to={link} smooth duration={500} onClick={closeMenu}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;