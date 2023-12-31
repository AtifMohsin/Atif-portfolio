import React from 'react'

function Contact () {
  return (
    <div name="contact" className='flex flex-col justify-center space-y-4 items-center w-full h-full bg-cyan-50'>
        <div className='text-center pt-6'>
        <h2 className='text-4xl font-bold inline-block border-b-4 border-cyan-400 duration-200 p-2 mb-5 '>Contact</h2>
        </div>
    <div className="">
       <form action='' className='flex flex-col w-96 max-w-lg space-y-6 ' >
        <input className="p-2 px-4 border-2 border-cyan-400 bg-white rounded-full focus:outline-none " type='text' name='name' placeholder='Your Name'></input>
        <input className="p-2 px-4  border-2 bg-white  border-cyan-400 rounded-full  focus:outline-none" type='email' name='email' placeholder='Your Email'></input>
        <textarea className="p-2 px-4  border-2 bg-white  border-cyan-400 rounded-lg  focus:outline-none" type="text" rows={8}></textarea>
        

       </form> 
       <button className=' flex justify-centerfont-bold mx-auto  px-10 py-2 bg-cyan-400 text-white  my-5   hover:scale-105 duration-300'>Submit</button>


    </div>
    </div>
  ) }
        



       

export default Contact