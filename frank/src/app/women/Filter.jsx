import React from "react";
import { FaPlus } from "react-icons/fa6";
export default function Filter() {
  return (
    <>
      <div className="mt-[10px] pl-[40px] w-full  ">
        <button className="underline cursor-pointer"><a href="/">Home /</a> </button>
        <button className="underline cursor-pointer">Women</button>
        <div className="filter overflow-y-scroll h-[350px]">
          <h1 className="text-[20px] mt-4 mb-8">New In </h1>
          <hr />
          <h1 className="mt-[8px]">Subcategory</h1>

          <ul className="text-[13px]">
            <li>
              <input
                type="checkbox"
                id="top"
                className="mr-[20px] mt-[10px] w-[18px] h-[18px] rounded-none"
              />
              Tops<label htmlFor="top" className="mb-[100px]"></label>
            </li>
            <li>
              <input
                type="checkbox"
                id="top"
                className="mr-[20px] mt-[10px] w-[18px] h-[18px]  rounded-none"
              />
              Shorts<label htmlFor="top" className="mb-[100px]"></label>
            </li>
            <li>
              <input
                type="checkbox"
                id="top"
                className="mr-[20px] mt-[10px] w-[18px] h-[18px]  rounded-none"
              />
              Shirts & skin<label htmlFor="top" className="mb-[100px]"></label>
            </li>
            <li>
              <input
                type="checkbox"
                id="top"
                className="mr-[20px] mt-[10px] w-[18px] h-[18px]  rounded-none"
              />
              Dressess<label htmlFor="top" className="mb-[100px]"></label>
            </li>
            <li>
              <input
                type="checkbox"
                id="top"
                className="mr-[20px] mt-[10px] w-[18px] h-[18px]  rounded-none"
              />
              Paints<label htmlFor="top" className="mb-[100px]"></label>
            </li>
            <li>
              <input
                type="checkbox"
                id="top"
                className="mr-[20px] mt-[10px] w-[18px] h-[18px]  rounded-none"
              />
              Accessiories<label htmlFor="top" className="mb-[100px]"></label>
            </li>
          </ul>
          <hr />
          {/* plus icon  */}
          <div className="flex space-x-32 my-[15px]">
            <h1>Size</h1>
            <FaPlus />
          </div>
          <hr />
          <div className="flex space-x-28 my-[15px]">
            <h1>Colour</h1>
            <FaPlus />
          </div>
          <hr />
          <div className="flex space-x-32 my-[15px]">
            <h1>Price</h1>
            <FaPlus />
          </div>
          <hr />
          {/* feature */}
          <div className="feature">
            <ul className="text-[13px]">
              <li className="font-bold mb-[10px] mt-[10px] text-[16px]">Feature</li>
              <li>New Seller</li>
              <li>Linene</li>
              <li>Original</li>
              <li>Warm dressess</li>
              <li>Sale</li>
            </ul>
          </div>
          {/* Clothing */}
          <div className="feature">
            <ul className="text-[13px]">
              <li className="font-bold mb-[10px] mt-[10px] text-[16px]">Clothing</li>
              <li>New Seller</li>
              <li>New Seller</li>
              <li>Sale</li>
              <li>Linene</li>
              <li>Linene</li>
              <li>Original</li>
              <li>Warm dressess</li>
              <li>Sale</li>
              <li>Original</li>
              <li>Warm dressess</li>
              <li>Sale</li>
            </ul>
          </div>
          {/* Accessiories */}
          <div className="feature">
            <ul className="text-[13px]">
              <li className="font-bold mb-[10px] mt-[10px] text-[16px]">Accessiories</li>
              <li>New Seller</li>
              <li>Linene</li>
              <li>Original</li>
              <li>Warm dressess</li>
              <li>Sale</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
