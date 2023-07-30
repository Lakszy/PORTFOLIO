import React from "react";

const Contact = () => {
  return (
    <div name="contact" 
    className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
        <div className="-ml-2 lg:ml-80 flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6 text-lg">Submit the form below to get in touch with me </p>
            </div>

          <div>
            <form action="https://getform.io/f/28fc0c9b-43ac-40da-a144-8cbe6af69203" method="POST" className="flex flex-col w-full md:w-1/2">
          <input
          
          type="text"
            name="name"
            placeholder="Enter Your Name"
            className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          >
          </input>
          <input
          
          type="text"
            name="email"
            placeholder="Enter Your Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          >
          </input>

          <textarea placeholder="Text Goes Here" name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "></textarea>
           
           <button className="text-white font-semibold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200 ">Let's Talk</button>
            </form>
          </div>

        </div>
    </div>
  )
}

export default Contact;