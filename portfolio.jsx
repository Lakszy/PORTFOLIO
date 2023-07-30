import React from "react";
import booksn from "../assests/booksntrade.png";
import bookmy from "../assests/bookmyshow.png";
import port from "../assests/portfolio.png";
import lol from "../assests/lll.png";
import sss from "../assests/sssage.png";
import ttt from "../assests/tic.png";


const Portfolio = () => {
  return (
    <div
    name="portfolio"
    className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div
      className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
        <p className="py-6">Check Out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img 
            src={port} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img 
            src={ttt} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img 
            src={booksn} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img 
            src={bookmy} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img 
            src={lol} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img 
            src={sss} 
            alt=""
            className="rounded-md duration-200 lg:hover:scale-150 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Demo</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl hover:font-semibold">Code</button>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Portfolio;
