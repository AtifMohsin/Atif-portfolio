import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {Link} from "react-scroll"
import { motion, Variants } from 'framer-motion';
function HeroSec() {

  const techStackIcons = [
    { src: 'https://skillicons.dev/icons?i=html', alt: 'HTML' },
    { src: 'https://skillicons.dev/icons?i=css', alt: 'CSS' },
    { src: 'https://skillicons.dev/icons?i=js', alt: 'JS' },
    { src: 'https://skillicons.dev/icons?i=react', alt: 'react' },
    { src: 'https://skillicons.dev/icons?i=tailwind', alt: 'tailwind' },
    { src: 'https://skillicons.dev/icons?i=bootstrap', alt: 'bootstrap' },
    { src: 'https://skillicons.dev/icons?i=wordpress', alt: 'wordpress' },
    { src: 'https://skillicons.dev/icons?i=github', alt: 'github' },
  
  ];
 
  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  return (

    <motion.div name="HOME" className='flex h-screen  bg-white mx-auto justify-center items-center  px-10 gap-10 text-center md:text-left'>
    <div className='w-[50%] mt-4 flex flex-col justify-center items-center'>

        <div className=' text-black  '>
        
           <h1 className='text-7xl  text-center font-bold'>
           Front-End React Developer &#128075; </h1> 
           <p className='text-gray-600 md:text-lg   py-4'>
           Hi, I'm Atif Mohsin. A passionate Front-End React Developer based in Edmonton, Canada.</p>     
        </div>
        

        
          <div>
                  <ul className='flex space-x-3 '>
          <p className='flex flex-col items-center justify-center text-xl '>Tech Stack  |</p>
          {techStackIcons.map((icon, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img className='hover:scale-125 duration-300' src={icon.src} alt={icon.alt} />
            </motion.li>
          ))}
        </ul>
          </div>
          <div className='flex gap-5 mt-6'>
        <a href="https://github.com/AtifMohsin" target="_blank" ><FaGithub size={30} color='gray'/></a>
        <a href="https://www.linkedin.com/in/atifmohsin/" target="_blank"><FaLinkedin size={30} color='gray'/></a>
          
        </div>
          <div className='flex gap-4 mt-6'>
          <Link to="ABOUT" smooth offset={-100} duration={500} className=" text-lg font-bold bg-white border-2  border-black py-2 px-3  hover:text-white hover:bg-black duration-200">Know more</Link>

          
        </div>
      

        </div>
        </motion.div>
  )
}

export default HeroSec