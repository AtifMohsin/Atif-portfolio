import React from 'react';
import AboutImage from "../assets/projects/aboutImage.png"

const About = () => {
  return (
    <div>
      
    <div name="about" className='flex flex-col justify-center space-y-4 items-center max-w-screen-2xl h-full bg-cyan-50'>
    <div className='text-center mb-6'>
        <h2 className='text-4xl font-bold inline-block border-b-4 border-cyan-400 duration-200 p-2  '>ABOUT</h2>
        </div>
    <div   className='flex flex-col md:flex-row justify-center items-center gap-8'>
        
    <div className='max-w-md'>
    <img src={AboutImage} alt='aboutimage' />
    </div>
    <div className='flex flex-col  max-w-md bg-white p-2 rounded-md px-4  '>
        <h3 className='text-xl font-bold mb-4'>A Dedicated Developer</h3>
        <p className=''>As a self-taught Developer, I'm deeply passionate about crafting exceptional websites and applications. I specialize in creating and managing responsive interfaces that prioritize a seamless user experience. Proficient in HTML, CSS, Tailwind, Bootstrap, JavaScript, React, and WordPress, I possess substantial experience in WordPress design and development, continuously seeking growth through learning new technologies. <br/>

On a personal level, I'm inherently self-motivated and diligent. I thrive as a team player, collaborating effectively with cross-functional teams to deliver exceptional web applications

</p>
    </div>
    

    </div>
    </div></div>
  )
}

export default About