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
        <h3 className='text-xl font-bold mb-4'>A Dedicatd Developer</h3>
        <p className=''>I am self Developer who is passionate about building awesome websites and applications! 
        I excel in designing and maintaining responsive websites that offer a smooth user experience. My current skill set is HTML, CSS, Tailwind, Bootstrap, Javascript, React, Wordpress, and I am continously learning new technologies and evolving. On personal level, I am self-driven & hard working, 
        I have good experience designing and developing in Wordpress. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.

</p>
    </div>
    

    </div>
    </div></div>
  )
}

export default About