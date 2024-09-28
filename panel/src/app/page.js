"use client";
import axios from "axios";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenCreate } from "./slice/loginSlice";
import { useSelect } from "@material-tailwind/react";


export default function page() {
  const router = useRouter()

  
  let dispatch=useDispatch()
  let [loginStatus,setLoginstatus]=useState(false)
  let getToken=useSelector((state)=>{
     return state.loginReducer.token
  })
  console.log(getToken)

  let login=(event)=>{

      event.preventDefault();

      let obj={
        email:event.target.email.value,
        password:event.target.password.value
      }
      axios.post(`http://localhost:8000/admin/login`,obj)
      .then((res)=>{
        if(res.data.status==0){
          window.alert(res.data.msg)
         
        }
        else{
          setLoginstatus(true)
          dispatch(tokenCreate({token:res.data.token}))
        }
      })
  }

if(getToken!=="" && getToken!==undefined){
       
       router.push('/dashboard')
}

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900 login">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-trasperent border-white border-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight text-center tracking-tight text-white md:text-2xl dark:text-white">
                Login
              </h1>
   
              <form class="space-y-4 md:space-y-6" onSubmit={login}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
               <button
                  type="submit"
                  class="w-full text-white bg-purple-900 mt-5 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
             
                <p class="text-sm font-light text-white dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
