import React from "react";
import node from "../assests/node.png";
import canva from "../assests/canva.png";
import css from "../assests/css.png";
import html from "../assests/html.png";
import github from "../assests/newgit.png";
import newnext from "../assests/newnext.png";
import react from "../assests/react.png";
import tailwind from "../assests/tailwind.png";
import mui from "../assests/mui.png";

const Experience = () => {
  return (
    <div name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-200 p-2 inline font-popins">Experience</p>
          <p className="py-6 text-lg">These are some technologies that I've worked with</p>
        </div>
           
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        <div className="shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-sky-700 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={css}
                alt=""
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">CSS</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-gray-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={newnext}
                alt=""
                className="w-20 py-6 px-3 mt-4 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">NextJs</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-white lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={github}
                alt=""
                className=" text-white w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">GitHub</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-sky-300 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={react}
                alt=""
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">ReactJs</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-orange-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={html}
                alt=""
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">HTML</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-800 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={tailwind}
                alt=""
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Tailwind</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-green-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={node}
                alt=""
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">NodeJs</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-blue-500 lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={canva}
                alt=""
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Canva</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-white lg:hover:px-40 lg:hover:text-3xl lg:hover-mt-12 lg:hover-mb-12 ">
                <img src={mui}
                alt=""
                className="w-20 mx-auto shadow-md "/>
                <p className="mt-4 font-semibold">Material UI</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
