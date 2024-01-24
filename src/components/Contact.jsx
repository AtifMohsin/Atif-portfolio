import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact () {
  return (

    <div className= 'bg-gray-800 py-10'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div>
          <h1 className='text-5xl text-white font-bold'>GET IN TOUCH </h1>
        </div>
        <div className='border-2 text-white px-4 text-lg'>
          <p>Email:atif.h.mohsin@gmai.com</p>
        </div>
        <div className='flex gap-5'>
        <a href="https://github.com/AtifMohsin" target="_blank" rel="noopener noreferrer"><FaGithub size={30} color='gray'/></a>
        <a href="https://www.linkedin.com/in/atifmohsin/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} color='gray'/></a>
          
        </div>
      </div>
    </div>

  ) }
        



       

export default Contact