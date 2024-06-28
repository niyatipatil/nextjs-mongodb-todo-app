"use client"

import React from 'react'
import Link from 'next/link'
import UserContext from '@/context/userContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/services/userServices'

const Navbar = () => {
    const context = useContext(UserContext);
    const router = useRouter()
    console.log(context);

    async function doLogout(){
        try{
            const result = await logout();
            console.log(result);
            context.setUser(undefined);
            router.push("/login")
        } catch (error){
            console.log(error);
            toast.error("Logout Error")
        }

    }
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
                {
                    context.user && 
                    <>
                        <li>
                            <Link href={"/"} className="text-white border-b-2 border-transparent hover:border-white">Home</Link>
                        </li>
                        <li>
                            <Link href={"/create-task"} className="text-white border-b-2 border-transparent hover:border-white">Create Task</Link>
                        </li>
                        <li>
                            <Link href={"/view-task"} className="text-white border-b-2 border-transparent hover:border-white">View Tasks</Link>
                        </li>
                    </>
                }
            </ul>
        </div>
        <div>
            <ul className="flex space-x-4">
                {
                    context.user &&
                    <>
                <li>
                    <Link href={"/#!"} className="text-white hover:text-yellow-400 font-semibold">{context.user.name}</Link>
                </li>
                <li>
                    <button onClick={doLogout} className="text-white hover:text-yellow-400 font-semibold">LOGOUT</button>
                </li>
                    </>
                }
                {
                    !context.user &&
                    <>
                <li>
                    <Link href={"/login"} className="text-white hover:text-yellow-400 font-semibold">LOGIN</Link>
                </li>
                <li>
                    <Link href={"/signup"} className="text-white hover:text-yellow-400 font-semibold">SIGNUP</Link>
                </li>
                    </>
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;