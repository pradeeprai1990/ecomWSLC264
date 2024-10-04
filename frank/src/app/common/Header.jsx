"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiSearch, CiHeart, CiFacebook } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import s from "../../img/s.png";
import Link from "next/link";
import "./login.css";
import axios from "axios";
export default function Header() {
  const [modal, setModal] = useState(""); // "" means no modal, "login" means login modal, "signup" means signup modal

  const [registerorotp,setregisterorotp]=useState(false)

  let [registerdata,setRegisterData]=useState({
    uname:'',
    uemail:'',
    upassword:'',
    otp:''
  })


  let getValueSetValue=(event)=>{
    let obj={...registerdata}
    obj[event.target.name]=event.target.value
    setRegisterData(obj)


  }
  // Add/remove body class to prevent scrolling
  useEffect(() => {
    if (modal !== "") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal closes
    }
  }, [modal]);

  const openModal = (modalType) => {
    setModal(modalType);
  };

  const closeModal = () => {
    setModal("");
  };

  let register=(event)=>{
    event.preventDefault()
    console.log(registerdata)
    axios.post("http://localhost:8000/website/user/register",registerdata)
    .then((res)=>{
        setregisterorotp(true) //Check
    })
    //regiter api 
   
  }


  let verifyOTP=(event)=>{
    event.preventDefault()
    axios.post("http://localhost:8000/website/user/verify-otp",registerdata)
    .then((res)=>{
        console.log(res.data)
    })
  }

  let login=(event)=>{
    event.preventDefault()
    let obj={
      userEmail:event.target.userEmail.value,
      userPassword:event.target.userPassword.value
    }
    axios.post("http://localhost:8000/website/user/login",obj)
    .then((res)=>{
      if(res.data.status==0){
        window.alert(res.data.error)
      }
    })
  }
  return (
    <>
      <div className="w-full mt-[20px] flex justify-between border-b-[1px] pb-[15px]">
        <div className="flex">
          <ul className="flex">
            <li className="font-bold text-[20px] mr-[45px] ml-[20px]">
              <a href="/">Frank And Oak</a>
            </li>
            {/* Other menu items */}
          </ul>
        </div>
        <div className="flex space-x-5 pr-[25px]">
          <a href="#">
            <CiSearch className="text-[30px]" />
          </a>
          <a href="#" className="text-black">
            <HiOutlineUserCircle
              className="text-[30px]"
              onClick={() => openModal("login")}
            />
          </a>
          <a href="#">
            <CiHeart className="text-[30px]" />
          </a>
          <a href="/Cart">
            <IoBagOutline className="text-[30px]" />
          </a>
        </div>
      </div>

      {/* Modal Overlay */}
      {modal !== "" && (
        <div className="modal-overlay">
          <div className="modal-content relative">
            <RxCross1
              className="absolute right-[5px] top-[10px] font-bold cursor-pointer"
              onClick={closeModal}
            />
            {modal === "login" && (
              <>
                <h1 className="text-[30px] font-bold">Welcome Back</h1>
                <p>Log in to get access to your member perks.</p>
                <Image src={s} className="mt-[10px]" />
                <form onSubmit={login}>
                  <input
                    type="email"
                    placeholder="Email"
                    name="userEmail"
                    className="border border-black w-[90%] mt-[15px] p-[10px]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                     name="userPassword"
                    className="border border-black w-[90%] mt-[15px] p-[10px]"
                  />
                  <ul>
                    <li className="underline mt-[10px]">Forgot Password?</li>
                  </ul>
                  <button className="bg-black text-white p-[15px] mt-[20px] w-[90%]">
                    Login
                  </button>
                </form>
                <div className="flex justify-around mt-[20px]">
                  <button className="border-2 border-black p-[8px] flex items-center">
                    <CiFacebook className="mr-[10px]" /> Sign In With Facebook
                  </button>
                  <button className="border-2 border-black p-[8px] flex items-center">
                    <FaGoogle className="mr-[10px]" /> Sign In With Google
                  </button>
                </div>
                <h1 className="my-[35px]">
                  Don&apos;t have an account?{" "}
                  <button
                    className="underline font-bold"
                    onClick={() => openModal("signup")}
                  >
                    Sign Up
                  </button>
                </h1>
              </>
            )}
            {/* Add Signup modal content similarly */}
            {modal === "signup" && (
              <div className="main w-full ">
                <div className="bg-white w-full mx-auto pt-[50px] pb-[50px] text-center border opacity-1 relative">
             
                  <h1 className="text-[30px] font-bold">Create your account</h1>
                  <p>Sign up and enjoy member benefits</p>
                  <Image src={s} className="mt-[10px]" />

                <>
                {registerorotp 
                  ?
                 
                  <form onSubmit={verifyOTP}>
                      <input
                          type="text"
                          placeholder="OTP"
                          name="otp"
                          value={registerdata.otp}
                          onChange={getValueSetValue}
                          className="border border-black w-[90%] mt-[15px] p-[10px]"
                        />
                       
                       
                        <button className="bg-black text-white p-[15px] mt-[20px] w-[90%]">
                         Verfify OTP
                        </button>
                  </form>
                  :

                  <form onSubmit={register}>
                      <input
                          type="text"
                          placeholder="Name"
                          name="uname"
                          onChange={getValueSetValue}
                          className="border border-black w-[90%] mt-[15px] p-[10px]"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          onChange={getValueSetValue}
                          name="uemail"
                          className="border border-black w-[90%] mt-[15px] p-[10px]"
                        />
                        <input
                          type="password"
                          placeholder="password"
                          onChange={getValueSetValue}
                          name="upassword"
                          className="border border-black w-[90%] mt-[15px] p-[10px]"
                        />
                        <ul>
                          <li className="underline mt-[10px]">
                            Already have an account?{" "}
                            <a href="#">
                              <button onClick={() => openModal("login")}>
                                Login
                              </button>
                            </a>
                          </li>
                        </ul>
                        <button className="bg-black text-white p-[15px] mt-[20px] w-[90%]">
                          Sign Up
                        </button>
                  </form>
                
                }
                
                </>
              
                 
                  <div className="flex justify-around">
                    <button className="border-2 border-black p-[8px] mt-[20px] flex justify-between">
                      <CiFacebook /> Sign In With Facebook
                    </button>
                    <button className="border-2 border-black p-[8px] mt-[20px] flex justify-between">
                      <FaGoogle /> Sign In With Google
                    </button>
                  </div>
                  <p className="my-[35px] text-[10px] text-start">
                    By joining, you agree to Frank And Oak’s Terms & Conditions
                    and Privacy Policy and to receive Frank And Oak’s electronic
                    communications.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
