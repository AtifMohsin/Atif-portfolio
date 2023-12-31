import React from 'react'
import SoftJam from "../assets/projects/SoftJam.png"

import GerogeLinoz from "..//assets/projects/GerogeLizos.png"
import RumorsHair from "../assets/projects/RumorDesign.png"
import HessainCoffee from "..//assets/projects/HessianCoffee.png"
import WeatherApp from "..//assets/projects/WeatherApp.png"





const Portfolio = () => {



  return (
    <div name="portfolio" className='container w-full h-full mx-auto mt-2 bg-white'>
        
 
        
        
        <div className=' flex flex-col items-center mt-5 p-4 mx-auto px-6  space-y-10 max-w-lg  md:max-w-4xl'>

            <div className='text-center space-y-4 mb-12'>
                <h2 className='text-4xl font-bold inline-block border-b-4 border-cyan-400  duration-200 p-2'>PORTFOLIO</h2>
                
            </div>



{/*First Project  */}  

        
            <div className='flex flex-col-reverse md:flex-row text-lg rounded-md p-6 justify-center text-center mb-12 space-y-4 bg-white md:max-w-4xl md:space-x-6 shadow-md'>
                <div className=' max-w-sm md:w-1/2 flex flex-col items-center justify-center p-4 space-y-4 bg-white shadow-sm  '>
                    <h3 className='text-2xl font-bold'>SoftJam Website <span className='text-sm text-gray-500'>(Wordpress)</span></h3>
                    <p className='text-sm max-w-md'> This website was desingned in wordpress, theme used Hello Elementor,Elementor Pro was used to design neat and customizable layout. This project also involes HTML and CSS to do some cumstomization.</p>
                   <div className='flex space-x-4'>

                

                   </div>
                   <div className=' flex space-x-4 font-bold text-lg p-4 '>
                    <a className=" bg-white border-2  border-cyan-400 py-2 px-3  hover:text-white hover:bg-cyan-400 duration-200" target="_blank" href='https://georgelizos.com/' rel="noreferrer"> View Live </a>
                    {/* <a className=" bg-white px-4  hover:text-blue-600 hover:translate-x-2 duration-200" href='#'> Code </a> */}
                    </div>
                </div>
                <div className='max-w-sm md:w-1/2 hover:translate-y-2 duration-200'>
                <a  className=""  target="_blank" href="https://georgelizos.com/" rel='noreferrer'>
                    <img className="rounded-lg" src={SoftJam} alt='website'/>
                    </a>
                </div>
            </div>  



{/*Second Project  */}

            <div className='flex text-lg rounded-md p-6 text-center mb-12 space-y-4 bg-white md:max-w-4xl md:space-x-6 flex-col md:flex-row shadow-md'>
                
                <div className='max-w-sm md:w-1/2 mt-4 hover:translate-y-2 duration-200'>
                    <a  className="" target="_blank" href="https://georgelizos.com/" rel='noreferrer'>
                    <img className="rounded-lg" src={GerogeLinoz} alt='website'/> </a>

                </div>


                <div className='max-w-sm md:w-1/2 flex flex-col items-center justify-center p-4 space-y-4 bg-white'>
                    <h3 className='text-2xl font-bold'>George Lizos Website <span className='text-sm text-gray-500'>(Wordpress)</span></h3>
                    <p className='text-sm max-w-md'> This website was desingned and developed in wordpress, Divi theme was use to design this neat and elegent design. Also invole woocommerce to add e-commerce functionality. </p>
                   <div className='flex space-x-4'>
                    {/* <p className='py-2 px-4 bg-white rounded-md '><SiTailwindcss className='text-blue-300 size-6' /> </p>
                    <p className='py-2 px-4 bg-white rounded-md '><FaReact className="text-blue-400 size-6"/></p>

                    <p className='py-2 px-4 bg-white rounded-md '><FaWordpressSimple className="text-blue-400 size-6"/></p> */}
                    

                   </div>
                   
                   <div className=' flex space-x-4 text-lg font-bold p-4'>
                   <a className=" bg-white border-2  border-cyan-400 py-2 px-3  hover:text-white hover:bg-cyan-400 duration-200" target="_blank" href='https://georgelizos.com/' rel="noreferrer"> View Live </a>
                   
                    </div>
                    
                </div>

            </div>

{/*Third Project  */}




<div className='flex text-lg rounded-md p-6 text-center mb-12 space-y-4 bg-white max-w-4xl md:space-x-6 flex-col-reverse md:flex-row shadow-md'>
                <div className='max-w-sm md:w-1/2 flex flex-col items-center justify-center p-4 space-y-4 bg-white shadow-sm'>
                    <h3 className='text-2xl font-bold'>Rumours Hair Design <span className='text-sm text-gray-500'>(Wordpress)</span></h3>
                    <p className='text-sm max-w-md'> This website was designed and developed using WordPress with the Divi theme, which contributed to its neat and elegant design.</p>
                   <div className='flex space-x-4'>


                   </div>
                   <div className=' flex space-x-4 font-bold text-lg p-4'>
                    <a className=" bg-white border-2  border-cyan-400 py-2 px-3  hover:text-white hover:bg-cyan-400 duration-200" target="_blank" href='https://rumourshairdesigns.com/' rel="noreferrer"> View Live </a>
                    
                    </div>
                </div>
                <div className='max-w-sm md:w-1/2 hover:translate-y-2 duration-200'>
                <a  className="" target="_blank" href="https://rumourshairdesigns.com/" rel='noreferrer'>
                    <img className="rounded-lg" src={RumorsHair} alt='website'/>
                    </a>
                </div>
            </div>  

{/* Fourth Project */}


<div className='flex text-lg rounded-md p-6 text-center mb-12 space-y-4 bg-white max-w-4xl md:space-x-6 flex-col md:flex-row shadow-md'>
                
                <div className='max-w-sm md:w-1/2 mt-4 hover:translate-y-2 duration-200 shadow-md '>
                    <a  className="" target="_blank" href="https://hessiancoffee.com/" rel='noreferrer'>
                    <img className="rounded-lg" src={HessainCoffee} alt='website'/> </a>

                </div>


                <div className='max-w-sm md:w-1/2 flex flex-col items-center justify-center p-4 space-y-4 bg-white shadow-sm'>
                    <h3 className='text-2xl font-bold'>Hessian Coffee <span className='text-sm text-gray-500'>(Wordpress)</span></h3>
                    <p className='text-sm max-w-md'> This website was desingned and developed in wordpress, Divi theme was use to deisign this neat and elegent design. Also invole woocommerce to add e-commerce functionality. </p>
                   <div className='flex space-x-4'>

                    

                   </div>
                   
                   <div className=' flex space-x-4 text-lg font-bold p-4'>
                   <a className=" bg-white border-2  border-cyan-400 py-2 px-3  hover:text-white hover:bg-cyan-400 duration-200" target="_blank" href='https://hessiancoffee.com/' rel="noreferrer"> View Live </a>
                    
                    </div>
                    
                </div>

            </div>

{/* Fifth Project */}


<div className='flex text-lg rounded-md p-6 text-center mb-12 space-y-4 bg-white max-w-4xl md:space-x-6 flex-col-reverse md:flex-row shadow-md'>
                <div className='max-w-sm md:w-1/2 flex flex-col items-center justify-center p-4 space-y-4 bg-white shadow-sm'>
                    <h3 className='text-2xl font-bold'>Weather App <span className='text-sm text-gray-500'>(React)</span></h3>
                    <p className='text-sm max-w-md'> This is a responsive weather app made with Javascript using open-weather API. It was my first project using API.I will dive into API more in the future</p>
                   <div className='flex space-x-4'>


                   </div>
                   <div className=' flex space-x-4 font-bold text-lg p-4'>
                    <a className=" bg-white border-2  border-cyan-400 py-2 px-3  hover:text-white hover:bg-cyan-400 duration-200" target="_blank" href='https://atifmohsin.github.io/Weather-App/' rel="noreferrer"> View Live </a>
                    <a className=" bg-white   hover:text-cyan-400 py-2 px-3 hover:translate-x-2 duration-200" href='https://github.com/AtifMohsin/Weather-App'> View Code </a>
                    
                    </div>
                </div>
                <div className='max-w-sm md:w-1/2 hover:translate-y-2 duration-200'>
                <a  className="" target="_blank" href="https://atifmohsin.github.io/Weather-App/" rel='noreferrer'>
                    <img className="rounded-lg" src={WeatherApp} alt='website'/>
                    </a>
                </div>
            </div>  





            

        </div>

    </div>






  )
}

export default Portfolio