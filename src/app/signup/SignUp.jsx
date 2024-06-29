//client component
"use client";

import React, { useState } from 'react'
import SignUpImg from "../../assets/login.png";
import Image from 'next/image';
import { toast } from 'react-toastify';
import { signUp } from '@/services/userServices';

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://static.thenounproject.com/png/5572513-200.png" //temp
    });

    const doSignUp = async (event) => {
        event.preventDefault();
        console.log(event);
        console.log(data)
        if( data.name.trim()==='' || data.name == null ){
            toast.warning("Name is required!", 
           {
            position: "top-right",
           });
            return;
        }
        if (data.email.trim() === '' || data.email == null) {
            toast.warning("Email required!", { position: "top-right" });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            toast.warning("Enter a valid email!", { position: "top-right" });
            return;
        }
        if (data.password.trim() === '' || data.password == null) {
            toast.warning("Password required!", { position: "top-right" });
            return;
        }
        if (data.password.length < 6) {
            toast.warning("Password should be at least 6 characters long!", { position: "top-right" });
            return;
        }
        //val
        try{
            const result = await signUp(data);
            console.log(result);

            toast.success("User registered successfully!",{
                position: "top-right"
            });
            setData({
                name: "",
                email: "",
                password: "",
                about: "",
                profileURL: "https://static.thenounproject.com/png/5572513-200.png"
                });
        }
        catch(error){
            console.log(error);
            toast.error("User SignUp Error", {
                position: "top-right"
            });
        }
    };

    const resetForm = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about: "",
            profileURL: "https://static.thenounproject.com/png/5572513-200.png"
            });
    }

  return (
    <div className="grid grid-cols-12 mt-5">
        <div className="col-span-4 col-start-5"> 
        {/*4 cols taken by the content and begin from 5*/}
            <div className="py-2 text-white">
                <div className="">
                    <center>
                    <Image 
                    src={SignUpImg}
                    alt="SignUpImg"
                    style={{
                        width: '30%',
                      }}
                      />
                      </center>
                </div>
                <h1 className="text-3xl text-center font-semibold">
                    SignUp Here!
                </h1>
                <form action="#!" onSubmit={doSignUp} className="flex flex-col items-center justify-center gap-5 mt-5">
                    <div className="mt-2">

                        {/*this is for name*/}
                        <label htmlFor="user_name" 
                        className="block font-semibold text-center">
                            Username
                        </label>
                        <input type="text" id="user_name" className="w-full p-2 bg-purple-950 border border-black rounded-full text-white text-center font-light mb-3" 
                        placeholder="Enter Name" 
                        name="user_name"
                        onChange={event=>{
                            setData({
                                ...data, 
                                name: event.target.value
                            });
                        }}
                        value={data.name}
                        />

                        {/*this is for email*/}
                        <label htmlFor="user_email" 
                        className="block font-semibold text-center">
                            Email
                        </label>
                        <input type="email" id="user_email" 
                        className="w-full p-2 bg-purple-950 border border-black rounded-full text-center text-white font-light mb-3" 
                        placeholder="Enter Email" 
                        name="user_email"
                        onChange={event=>{
                            setData({
                                ...data, 
                                email: event.target.value
                            });
                        }}
                        value={data.email}
                        />
                        
                         {/*this is for the password*/}
                         <label htmlFor="user_password" 
                        className="block font-semibold text-center">
                            Password
                        </label>
                        <input type="password" id="user_password" className="w-full p-2 bg-purple-950 border border-black rounded-full text-white text-center font-light mb-3" 
                        placeholder="Enter Password" 
                        name="user_password"
                        onChange={event=>{
                            setData({
                                ...data, 
                                password: event.target.value
                            });
                        }}
                        value={data.password}
                        />

                        {/*this is for About*/}
                        <label htmlFor="user_about" 
                        className="block font-semibold text-center">
                            About
                        </label>
                        <textarea type="text" 
                        id="user_about" 
                        name="user_about"
                        rows={3} 
                        className="w-full p-2 bg-purple-950 border border-black rounded-lg text-white text-center font-light" 
                        placeholder="Enter About"
                        onChange={event=>{
                            setData({
                                ...data, 
                                about: event.target.value
                            });
                        }}
                        value={data.about} ></textarea>
                    </div>
                    <div className="mt-2 text-center">
                        <button type="submit" 
                        className="bg-green-700 py-2 px-3 ms-4 rounded-lg font-semibold hover:bg-green-900 mr-4 text-white">
                            Sign Up
                        </button>
                        <button type="button" onClick={resetForm} className="bg-red-700 py-2 px-3 rounded-lg font-semibold hover:bg-red-900 mr-4 text-white">Reset</button>
                    </div>
                    {/*{JSON.stringify(data)}*/}
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp