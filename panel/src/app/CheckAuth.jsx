import React from 'react'
import { useSelector } from "react-redux";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckAuth() {
  let router=useRouter()
    let token=useSelector((store)=>{
        return store.loginReducer.token
      })
    
      // console.log(token)
      useEffect(()=>{
        if(token===undefined || token==""){
          console.log(token,"hello")
            redirect('/')
        }
        
      },[token])
       

    
  return (
    <div></div>
  )
}
