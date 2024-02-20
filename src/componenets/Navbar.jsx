import React from 'react'
import Logo from "../Assessts/Logo.png"
const Navbar = () => {
  return (
    <div className='text-black flex justify-between gap-3 px-5 py-7 items-center max-w-full'>
        <div>
            <img className='w-24 h-12' src='Logo'/>
        </div>
        <div className='flex justify-between gap-6 items-center'>
            <p>Features</p>
            <p>Made for</p>
            <p>Resources</p>
            <p>Pricing</p>
            <p>Contact</p>

        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50">Get Started</button>
    </div>
  )
}

export default Navbar