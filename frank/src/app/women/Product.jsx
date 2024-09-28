import React from "react";
import s1 from "../../img/sl1.webp";
import s2 from "../../img/sl2.webp";
import s3 from "../../img/sl3.webp";
import s4 from "../../img/sl4.webp";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

export default function Product() {
  return (
    <>
      <div className="w-full mt-[50px] px-[35px]">
        <hr />
        <h1 className="mt-[30px] mb-[10px] text-[20px]">New In</h1>
        <div className="flex space-x-5 flex-wrap mb-[30px]">
          {/* img1 */}
          <div className="relative mb-[40px]">
           <a href="/ProductDetails">
           <Image
              src={s1}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
           </a>
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          {/* img1 end */}
          <div className="relative">
            <Image
              src={s2}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s3}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s4}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s1}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s2}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s1}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s2}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s1}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s2}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s1}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s2}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s1}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s2}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s1}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
          <div className="relative">
            <Image
              src={s2}
              alt="Slide 1"
              width={200}
              height={200}
              className="object-cover  img1"
            />
            <div className="absolute top-[0%] ml-[70%] bg-black">
              <p className="text-white text-[10px] p-[5px]">NEW</p>
            </div>
            <div className="flex space-x-7">
              {" "}
              <h1 className="text-[13px] font-bold">
                The baby T-Shirt in Black
              </h1>
              <CiHeart className="text-[25px]" />
            </div>
            <span className="line-through text-[13px]">$200.50 </span>
            <span className="text-red-600 font-bold"> $100.50</span> <br />
            <span className="text-gray-500 mt-[15px]">1 colour</span>
          </div>
        </div>
      </div>
    </>
  );
}
