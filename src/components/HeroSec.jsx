import React from 'react';
import {useTypewriter,Cursor} from "react-simple-typewriter"
import {Link} from "react-scroll"

function HeroSec() {
 
  const [text] = useTypewriter({
    words: ["Front-End React", "WordPress"],
    loop : false,
    typeSpeed:120,
    deleteSpeed:100,
    delaySpeed:2000 
  });

 
  return (

    
    <div name="home" className='flex flex-col  bg-white mx-auto h-screen justify-center items-center  px-10 gap-10 text-center md:text-left'>
    <div>

        <div className=' text-black max-w-4xl '>
           <h1 className=' text-6xl  text-center font-bold'>
           <span className=' text-6xl  text-center font-bold' >{text}</span> <Cursor/> Developer </h1> 
           <p className='text-gray-600 md:text-lg  py-4'>
           Hi, I'm Atif Mohsin. A passionate Front-End React Developer based in Edmonton, Canada.</p>     
        </div>
        <div className='flex gap-4 mt-4 justify-center'>
          <Link to="portfolio" smooth offset={-100} duration={500} className='text-md font-bold px-6 py-2 bg-cyan-400 text-white   hover:scale-105 duration-300'>PORTFOLIO</Link>
    
        </div>
        <div className='flex mt-20 space-x-6 justify-center'>
          <div> 
          <p className='text-xl mt-4'>Tech Stack  |</p>
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
        </div>


    </div>
      


    </div>
  )
}

export default HeroSec