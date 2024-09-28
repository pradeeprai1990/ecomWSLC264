"use client"
import React from 'react'
import img1 from "../../img/1.jpg";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
export default function page() {
  return (
    <div class="p-4 border border-gray-300 shadow-md rounded-lg w-[95%] mx-auto my-5">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold p-[10px] rounded bg-gray-200 w-full">
          Product Items
        </h2>
      </div>
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th>
              <input type="checkbox" /> Delete
            </th>
            <th class="border border-gray-300 p-2">Sr.No</th>
            <th class="border border-gray-300 p-2">Product Name</th>
            <th class="border border-gray-300 p-2"> Parent Category Name</th>
            <th class="border border-gray-300 p-2">Thumbail</th>
            <th class="border border-gray-300 p-2">Description</th>
            <th class="border border-gray-300 p-2">Actions</th>
            <th class="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="border border-gray-300 p-2 text-center">1</td>
            <td class="border border-gray-300 p-2 text-center">T-shirts</td>
            <td class="border border-gray-300 p-2 text-center">Men's</td>
            <td class="border border-gray-300 p-2 text-center">
              <Image src={img1} width={50} height={50} className="rounded"/>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab enim eius inventore 
              </p>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <div className="flex space-x-5 text-center justify-center">
                <MdDelete className="mr-3" /> | <FaRegEdit />
              </div>
            </td>
            <td class="border border-gray-300 p-2 flex space-x-2 justify-center">
              <button class="text-green-400 hover:text-red-700 text-center">
                Active
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="border border-gray-300 p-2 text-center">2</td>
            <td class="border border-gray-300 p-2 text-center">T-shirts</td>
            <td class="border border-gray-300 p-2 text-center">Men's</td>
            <td class="border border-gray-300 p-2 text-center">
            <Image src={img1} width={50} height={50} className="rounded"/>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab enim eius inventore 
              </p>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <div className="flex space-x-5 text-center justify-center">
                <MdDelete className="mr-3" /> | <FaRegEdit />
              </div>
            </td>
            <td class="border border-gray-300 p-2 flex space-x-2 justify-center">
              <button class="text-green-400 hover:text-red-700 text-center">
                Active
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="border border-gray-300 p-2 text-center">3</td>
            <td class="border border-gray-300 p-2 text-center">T-shirts</td>
            <td class="border border-gray-300 p-2 text-center">Men's</td>
            <td class="border border-gray-300 p-2 text-center">
            <Image src={img1} width={50} height={50} className="rounded"/>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab enim eius inventore 
              </p>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <div className="flex space-x-5 text-center justify-center">
                <MdDelete className="mr-3" /> | <FaRegEdit />
              </div>
            </td>
            <td class="border border-gray-300 p-2 flex space-x-2 justify-center">
              <button class="text-green-400 hover:text-red-700 text-center">
                Active
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}