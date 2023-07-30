import React, { useState } from "react";
import ShuffleText from "react-shuffle-text";
import { FaTimes} from "react-icons/fa";
import {GoHubot} from "react-icons/go";
import{FcMusic} from "react-icons/fc";
import {Link} from "react-scroll";
const Navbar = () => {

const[nav, setnav]= useState(false);

    const links=[
      {
        id:1,
        link:"home",
      },
      {
        id:2,
        link:"about",
      },
      {
        id:3,
        link:"portfolio",
      },
      {
        id:4,
        link:"experience",
      },
      {
        id:5,
        link:"contact",
      },
    ];




  return (
    <div className="flex justify-between bg-black items-center w-full h-16">
      <div className="text-2xl text-blue-100 hover:shadow-white px-2 cursor-pointer font-mono animate-pulse hover:text-3xl hover:font-bold hover:animate-none">
        <span className="flex flex-row">
        <ShuffleText content="Lakshay Khattar" /><FcMusic/>

        </span>
      </div>
       
       <ul className="hidden md:flex">
{links.map(({id,link})=>(
    <li
    key={id}
    className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-white "

> 
 <Link to={link} smooth duration={500}>{link}</Link> 
</li>
))}
 </ul>
      
      <div onClick={()=> setnav(!nav)} className=" md:hidden text-white px-2 hover:cursor-pointer z-10">
        {nav ? <FaTimes size={30}/> : <GoHubot size={30}/>}
      </div>

      {nav &&(                                                                                          
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to gray-400 via-black text-gray-300">
      <li className="-mt-80 cursor-pointer capitalize font-mono text-4xl">
         <div className="cursor-pointer  pb-2 pt-2 font-base hover:text-gray-400 text-white ">Home</div>
         <div className="cursor-pointer  pb-2 pt-2 font-base hover:text-gray-400 text-white ">About</div>
         <div className="cursor-pointer  pb-2 pt-2 font-base hover:text-gray-400 text-white ">Experience</div>
         <div className="cursor-pointer  pb-2 pt-2 font-base hover:text-gray-400 text-white ">Portfolio</div>
         <div className="cursor-pointer  pb-2 pt-2 font-base hover:text-gray-400 text-white ">Contact</div>
         </li>
 
       </ul>


      )}
      
    </div>
  );
};

export default Navbar;
