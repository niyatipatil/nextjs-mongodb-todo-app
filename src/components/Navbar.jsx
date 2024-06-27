"use client"

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-purple-800 h-20 flex justify-between items-center px-8">
        <div className="logo">
            <h1 className="font-bold text-white text-xl italic">
                <Link href="/">
                    Task Tracker
                </Link> 
            </h1>
        </div>
        <div>
            <ul className="flex space-x-6">
                <li>
                    <Link href={"/"} className="text-white border-b-2 border-transparent hover:border-white">Home</Link>
                </li>
                <li>
                    <Link href={"/create-task"} className="text-white border-b-2 border-transparent hover:border-white">Create Task</Link>
                </li>
                <li>
                    <Link href={"/view-tasks"} className="text-white border-b-2 border-transparent hover:border-white">View Tasks</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="flex space-x-4">
                <li>
                    <Link href={"/login"} className="text-white hover:text-yellow-400 font-semibold">LOGIN</Link>
                </li>
                <li>
                    <Link href={"/signup"} className="text-white hover:text-yellow-400 font-semibold">SIGNUP</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;