"use client"
import UserContext from '@/context/userContext';
import { login } from '@/services/userServices';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {
    const router = useRouter()
    const context = useContext(UserContext);
    const [loginData, setLoginData] =  useState({
        email: "",
        password: "",
    });

    const loginFormSubmitted = async (event) => {
        event.preventDefault();
        console.log(loginData);

        if (loginData.email.trim() === "" || loginData.password.trim() == "") {
            toast.warning("Data is Invalid!", { position: "top-right" });
            return;
    }
        //val
        //login

        try{
            const result = await login(loginData)
            console.log({result});
            toast.success("Logged In");
            //redirecting
            context.setUser(result.user);
            router.push("/")
        }
        catch(error){
            console.log(error)
            toast.error(error.response.data.message, 
            { position: "top-right" }
            );
        }
    }

    const resetForm = () => {
        setLoginData({
            email: "",
            password: "",
            });
    }

  return (
    <div className="grid grid-cols-12 mt-5">
        <div className="col-span-4 col-start-5"> 
            <div className="py-2">
                <h1 className="text-3xl text-center font-semibold mt-10">Login Here!</h1>
                <form action="#!" className="flex flex-col items-center justify-center mt-5 mb-10" onSubmit={loginFormSubmitted}>
                    {/*this is for email*/}
                    <div className='mt-3'>
                    <label htmlFor="user_email" 
                        className="block font-semibold text-center">
                            Email
                        </label>
                        <input type="email" id="user_email" 
                        className="w-full p-2 bg-purple-950 border border-black rounded-full text-center text-white font-light mb-3" 
                        placeholder="Enter Email" 
                        name="user_email"
                        onChange={event=>{
                            setLoginData({
                                ...loginData, 
                                email: event.target.value
                            });
                        }}
                        value={loginData.email}
                        />
                        </div>
                        
                         {/*this is for the password*/}
                         <div className='mt-3'>
                         <label htmlFor="user_password" 
                        className="block font-semibold text-center">
                            Password
                        </label>
                        <input type="password" id="user_password" className="w-full p-2 bg-purple-950 border border-black rounded-full text-white text-center font-light mb-3" 
                        placeholder="Enter Password" 
                        name="user_password"
                        onChange={event=>{
                            setLoginData({
                                ...loginData, 
                                password: event.target.value
                            });
                        }}
                        value={loginData.password}
                        />
                        </div>

                        <div className="mt-5 text-center">
                        <button type="submit" 
                        className="bg-green-700 py-2 px-3 ms-4 rounded-lg font-semibold hover:bg-green-900 mr-4">
                            Login
                        </button>
                        <button type="button" onClick={resetForm} 
                        className="bg-red-700 py-2 px-3 rounded-lg font-semibold hover:bg-red-900 mr-4">
                            Reset
                        </button>
                        </div>
                </form>
            </div>
        </div>
        {/*{JSON.stringify(loginData)}*/}
    </div>
  
  );
};

export default Login