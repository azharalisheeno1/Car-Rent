"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu ,IoMdLogIn,IoMdPersonAdd} from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false)

  const menues = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Cars", path: "/cars" },
    { id: 5, name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <header className="bg-blue-300 shadow " >
        {/* <!-- Top Header --> */}
        <div className="hidden md:flex justify-between  items-center py-2 px-12 bg-blue-800">
          <div className="flex text-lg font-semibold gap-3">
            <p className="text-white">Need Help?</p>
            <p className="text-white">Need Help?</p>
          </div>
          <div className="flex space-x-4 text-lg font-semibold">
            <button className="text-white flex items-center gap-1 "><IoMdLogIn size={20}/> Login</button>
            <button className="text-white flex items-center gap-1"><IoMdPersonAdd size={20}/> Register</button>
          </div>
        </div>

        {/* <!-- Middle Header --> */}
        <div className="hidden md:flex justify-between  px-12 bg-white items-center">
          <div className="text-center">
            <h1 className="text-lg font-semibold text-green-600 mt-2">Rent Car </h1>
            <h1 className="text-md font-semibold text-green-600 mt-2">Service </h1>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-semibold text-green-600 mt-2">Pakistan</h1>
            <h1 className="text-md font-semibold text-green-600 mt-2">Karachi DHA Phase 2</h1>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-semibold text-green-600 mt-2">Monday To Saturday</h1>
            <h1 className="text-md font-semibold text-green-600 mt-2">10 AM to 9 PM</h1>
          </div>
          <div className="text-center">
            <button className="bg-green-500 px-4 py-2 rounded-xl text-white font-semibold">Register Call</button>
          </div>
        </div>

        {/* <!-- Navbar --> */}
        <nav className="bg-blue-800 text-white ">
          <div className="mx-auto flex justify-between flex-row-reverse md:flex-row items-center py-3 px-6">
            {/* <!-- Logo --> */}
            <div className="text-2xl hidden md:block font-bold text-white">
            DriveEase
            </div>

            {/* <!-- Navbar Links (Desktop) --> */}
            <ul className="hidden md:flex  space-x-6">
              {menues.map((menu) => (
                <li key={menu.id}>
                  <Link className='text-lg font-semibold  uppercase hover:border-b-2 hover:border-b-red-700' href={menu.path}>{menu.name}</Link>
                </li>
              ))}
            </ul>

            {/*  <!-- Hamburger Icon for Mobile --> */}
            <div className="md:hidden " onClick={() => setOpen(!open)}>
           
              {open ? <IoCloseSharp size={30} className='hover:cursor-pointer'/ > :   <IoMdMenu  size={30} className='hover:cursor-pointer'/> }
            </div>

            {/* <!-- Search Input --> */}
            <div className="text-xl font-bold ">
              <input type="text" className="rounded-full bg-blue-700 outline-none px-4 py-1 text-sm" placeholder="SEARCH" />
            </div>
          </div>

          {/* <!-- Mobile Menu --> */}
          <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-blue-500 text-white`}>
            <ul className="space-y-4 py-4 px-6">
              {menues.map((menu) => (
                <li key={menu.id}>
                  <Link className='text-lg font-semibold  uppercase hover:border-b-2 hover:border-b-red-700' href={menu.path}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
