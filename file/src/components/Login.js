import React, { useState } from 'react';
import axios from "axios" ; 

import { useNavigate } from 'react-router'
export default function Login() {



  
   
  //storing in a variable 
  const [email , setEmail ] = useState("") ; 
  const [password , setPassword ] = useState("") ; 


  const handleUserLogin= async (e )=>{
    e.preventDefault() ; 
    try{
     await axios.post('/login', {email , password});  // backend team can create an api call for this part !! 
     alert("u have successfully logged in !!")
    } catch (err) 
    {
      alert("login failed try again ") ;
       
    }
    


  }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-6xl font-semibold text-center text-black-700 ">
                   Log In 
                </h1>
                <form className="mt-6" onSubmit={handleUserLogin}>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)} 
                        />
                    </div>
                
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                
            </div>
        </div>
    );
}