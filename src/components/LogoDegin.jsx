 import React from 'react'
 import logo from "../assets/logo.png"
 const LogoDesign = () => {
   return (
     <div className="  flex items-center mb-6 mr-3 ">
        <img className='w-19 h-15 mr-1 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform duration-200' src={logo} alt="logo-image" />
        <h1 className="flex flex-col text-4xl text-gray-800 font-semibold mr-4 mt-5"> 
            YeTi
            <span className="text-gray-600 text-sm ml-3"> The Himalayan Choice </span>
        </h1>

     </div>
   )
 }

 export default LogoDesign;