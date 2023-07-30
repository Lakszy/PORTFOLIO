import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
 
const SocialLink = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed justify-between">
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400">
                <a
                
                href="https://www.linkedin.com/in/lakshaykhattar0208/" target="_blank"
                className="font-semibold flex justify-between items-center w-full text-white"
                >
                    <>
                    LinkedIn<FaLinkedin size={30}/>
                    </>
                </a>
            </li>
        </ul>
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400">
                <a
                
                href="https://github.com/Lakszy" target="_blank"
                className="font-semibold flex justify-between items-center w-full text-white"
                >
                    <>
                    GitHub<FaGithub size={30}/>
                    </>
                </a>
            </li>
        </ul>
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400">
                <a
                
                href="mailto:lakshaykhattar0208@gmail.com" target="_blank"
                className="font-semibold flex justify-between items-center w-full text-white"
                >
                    <>
                    Mail;<HiOutlineMail size={30}/>
                    </>
                </a>
            </li>
        </ul>
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400">
                <a
                
                href="https://laskhaykhattar.tiiny.site" target="_blank" download={true}
                className="font-semibold flex justify-between items-center w-full text-white"
                >
                    <>
                    Resume<BsFillPersonLinesFill size={30}/>
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLink