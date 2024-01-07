import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons//hi"



const SocialLInks = () => {


    const links = [
        {
            id:1,
            child:(
            <> LinkedIn<FaLinkedin  size={30}/></>

            ),
            href:"https://www.linkedin.com/in/atifmohsin/",
            style: "rounded-tr-md"
        },

        {
            id:2,
            child:(
            <> GitHub<FaGithub size={30}/></>

            ),
            href:"https://github.com/AtifMohsin",
            
        },
        {
            id:3,
            child:(
            <> Mail<HiOutlineMail  size={30}/></>

            ),
            href:"mailto:atif.h.mohsin@gmail.com",
            style: "rounded-br-md",

        },
        // {
        //     id:4,
        //     child:(
        //     <> Resume<BsFillPersonLinesFill size={30}/></>

        //     ),
        //     href:"/resume.pdf",
        //     style: "rounded-br-md",
        //     download:true,

        // },
    ]



  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

{links.map(({ id, child, href, style, download }) => {
  return (
    <li
      key={id}
      className={
        "group flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-800 hover:bg-yellow-400 hover:rounded-md duration-300 hover:ml-[-10px]" +
        " " +
        style
      }
    >
      <a href={href} className="flex justify-between items-center w-full text-white group-hover:text-black
      " download={download}
      target='blank'
      rel='noreferrer'>
        {child}
      </a>
    </li>
  );
})}
    
      
        </ul>

    </div> );
  
}

export default SocialLInks