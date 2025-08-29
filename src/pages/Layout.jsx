import React from 'react'
//import Header from "../components/Header.jsx"
import LogoDesign from '../components/LogoDegin.jsx'
import MySearchInput from '../components/MySearchInput.jsx'
import {Bell, Heart, ShoppingCartIcon,} from "lucide-react"
const Layout = () => {
  return (
    <>
  <div className="flex justify-between items-center bg-white h-16 px-4 shadow" id="header">
  {/* Left - Logo */}
  <div id="left-header" className="flex p-1 mt-4">
    <LogoDesign />
  </div>

  {/* Middle - Search */}
  <div className="hidden md:block flex-1 max-w-md mx-6" id="mid-header">
    <MySearchInput />
  </div>

  {/* Right - Icons */}
  <div className="flex items-center gap-4 text-gray-700 font-sans" id="right-header">
    {/* Notification */}
    <span className="flex items-center gap-2 px-3 py-1 rounded-lg cursor-pointer 
                     hover:bg-gray-100 hover:text-indigo-600 transition-colors">
      <Bell className="w-5 h-5" />
      <span className="hidden sm:inline">Notification</span>
    </span>

    {/* Favourite */}
    <span className="flex items-center gap-2 px-3 py-1 rounded-lg cursor-pointer 
                     hover:bg-gray-100 hover:text-indigo-600 transition-colors">
      <Heart className="w-5 h-5" />
      <span className="hidden sm:inline">Favourite</span>
    </span>

    {/* Shopping */}
    <span className="flex items-center gap-2 px-3 py-1 rounded-lg cursor-pointer 
                     hover:bg-gray-100 hover:text-indigo-600 transition-colors">
      <ShoppingCartIcon className="w-5 h-5" />
      <span className="hidden sm:inline">Shopping</span>
    </span>
  </div>
</div>

    
    </>
  )
}

 
export default Layout;