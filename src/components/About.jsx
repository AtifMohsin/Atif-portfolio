import React from 'react';

import heroImage from  "..//assets/projects/heroImageAtif.jpg"
const About = () => {
  return (
    <div>
      
    <div name="ABOUT" className='flex flex-col justify-center space-y-4 items-center max-w-screen-2xl h-full bg-white mb-20'>
    <div className='text-center mb-6'>
        <h2 className='text-4xl font-bold inline-block border-b-4 border-yellow-400 duration-200 p-2 mb-20 '>ABOUT</h2>
        </div>
    <div   className='flex flex-col md:flex-row justify-center space-x-10 items-center gap-8'>
        
    
    <div className='flex flex-col  max-w-md bg-white p-2 rounded-md px-4  '>
        <h3 className='text-xl font-bold mb-4'>Code Crafters: Building Tomorrow's Innovations Today!</h3>
        <p className=''>As a self-taught Developer, I'm deeply passionate about crafting exceptional websites and applications. I specialize in creating and managing responsive interfaces that prioritize a seamless user experience. Proficient in HTML, CSS, Tailwind, Bootstrap, JavaScript, React, and WordPress, I possess substantial experience in WordPress design and development, continuously seeking growth through learning new technologies. <br/>

On a personal level, I'm inherently self-motivated and diligent. I thrive as a team player, collaborating effectively with cross-functional teams to deliver exceptional web applications.


</p>
    </div>
    <div className='max-w-sm'>
    <img className='rounded-md' src={heroImage} alt='aboutimage' />
    </div>
    

    </div>
    </div></div>
  )
}

export default About