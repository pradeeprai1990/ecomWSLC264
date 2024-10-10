"use client"
import Saleslider from '@/app/frank/Saleslider'
import Filter from '@/app/women/Filter'
import Product from '@/app/women/Product'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function CategoryPage() {

    let {slug}=useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/website/product/product-data/${slug}`)
        .then((res)=>{
            console.log(res.data)
        })
    },[slug])

  return (
    <div>
        
      <div className="w-full flex">
      <div className="w-[20%]">  <Filter /></div>
     <div className="w-[80%]">   <Product /></div>
      </div>
      <Saleslider/>
   
    </div>
  )
}
