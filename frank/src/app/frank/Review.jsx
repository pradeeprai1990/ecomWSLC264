import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../../img/r1.webp";
import img2 from "../../img/r2.webp";
export default function Review() {
  return (
    <>
      <div className="w-full mt-[50px] bg-[#F9F9F9]">
        <h1 className="text-[30px] text-center py-[20px]">
          You didn’t hear it from us
        </h1>
        <div className="grid grid-cols-2 pl-[25px] space-x-3">
          <div className="grid grid-cols-2">
            <div className="bg-white p-[30px]">
              <div className="star flex space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-[10px]">Based on 113 Reviews</p>
              </div>
              <div>
                <h3 className="mb-[20px] mt-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto optio voluptatibus consequatur totam? Iste incidunt
                  veniam consectetur expedita, voluptas aperiam. Quam, autem
                  beatae voluptates tempora voluptatem quos nihil dolore at!
                </h3>
                <span className="text-gray-500 mt-[20px]">Amy.H</span>
                <br />
                <button className="underline mt-[70px]">Shop Now</button>
              </div>
            </div>
            <div>
              <Image src={img1} className="w-[400px] h-[430px]" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-white p-[30px]">
              <div className="star flex space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-[10px]">Based on 113 Reviews</p>
              </div>
              <div>
                <h3 className="mb-[20px] mt-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto optio voluptatibus consequatur totam? Iste incidunt
                  veniam consectetur expedita, voluptas aperiam. Quam, autem
                  beatae voluptates tempora voluptatem quos nihil dolore at!
                </h3>
                <span className="text-gray-500 mt-[20px]">Amy.H</span>
                <br />
                <button className="underline mt-[70px]">Shop Now</button>
              </div>
            </div>
            <div>
              <Image src={img2} className="w-[400px] h-[430px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
