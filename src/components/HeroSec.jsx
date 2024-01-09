import React from 'react';

import {Link} from "react-scroll"
// import HeroImage from "..//assets/icons/AtifImage.jpg"

function HeroSec() {
 
//   const [text] = useTypewriter({
//     words: ["Front-End React", "WordPress"],
//     loop : false,
//     typeSpeed:120,
//     deleteSpeed:100,
//     delaySpeed:2000 
//   });

 
  return (

    <div name="HOME" className='flex h-screen  bg-white mx-auto justify-center items-center  px-10 gap-10 text-center md:text-left'>
    <div className='w-[50%] mt-4 flex flex-col justify-center items-center'>

        <div className=' text-black  '>
           <h1 className='text-6xl  text-center font-bold'>
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
          <Link to="ABOUT" smooth offset={-100} duration={500} className='text-md font-bold px-6 py-2 bg-yellow-400   hover:scale-105 duration-300'>Know more</Link>

          
        </div>
      

        </div>
        </div>
  )
}

export default HeroSec