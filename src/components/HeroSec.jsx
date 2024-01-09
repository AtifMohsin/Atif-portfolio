import React from 'react';

import {Link} from "react-scroll"
import HeroImage from "..//assets/icons/AtifImage.jpg"

function HeroSec() {
 
//   const [text] = useTypewriter({
//     words: ["Front-End React", "WordPress"],
//     loop : false,
//     typeSpeed:120,
//     deleteSpeed:100,
//     delaySpeed:2000 
//   });

 
  return (

    <div className='mb-10'>
    <div name="HOME" className='flex h-screen  bg-white mx-auto justify-center items-center  px-10 gap-10 text-center md:text-left'>
    <div className='w-[50%] mt-4 flex flex-col justify-center items-center md:justify-start md:items-start'>

        <div className=' text-black  '>
           <h1 className='text-6xl  text-left font-bold'>
           Front-End Developer </h1> 
           <p className='text-gray-600 md:text-lg   py-4'>
           Hi, I'm Atif Mohsin. A passionate Front-End React Developer based in Edmonton, Canada.</p>     
        </div>
        

        <div className='mt-4'> 
          <p className='text-xl '>Tech Stack  |</p>
          </div>
          <div>
            <ul className='flex space-x-3 '>
              <li > <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=html' alt="html"/></li>
              <li> <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=css' alt="html"/></li>
              <li> <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=js' alt="html"/></li>
              <li> <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=react' alt="html"/></li>
              <li> <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=tailwind' alt="html"/></li>
              <li> <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=bootstrap' alt="html"/></li>
              <li> <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=wordpress' alt="html"/></li>
              <li> <img className='hover:scale-125 duration-300' src='https://skillicons.dev/icons?i=github' alt="html"/></li>
            </ul>
          </div>
          <div className='flex gap-4 mt-10'>
          <Link to="PORTFOLIO" smooth offset={-100} duration={500} className='text-md font-bold px-6 py-2 bg-yellow-400   hover:scale-105 duration-300'>PORTFOLIO</Link>
          
        </div>
      

      
    </div>
    <div className='hidden md:block md:w-[30%] shadow-lg'>
        <img className="rounded-md shadow-md" src={HeroImage} alt='heroimage'/>
      </div>
      


    </div>
    <div className='flex mb-6 space-x-6 justify-center items-center'>
          
        </div>
        <div/>
        </div>
  )
}

export default HeroSec