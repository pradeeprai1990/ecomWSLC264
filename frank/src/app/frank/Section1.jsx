import React from "react";
import img1 from "../../img/ss.webp";
import Image from "next/image";
import web1 from "../../img/web1.webp";
import web2 from "../../img/web2.webp";
import web3 from "../../img/web3.webp";
import web4 from "../../img/web4.webp";
export default function Section1() {
  return (
    <div>
      <div className="grid grid-cols-2 w-full h-[100vh] mt-[10px] bg-[#F0F0EE] p-[30px]">
        <div className="pt-[90px] pl-[35px]">
          <h1 className="text-[65px] font-bold leading-[60px]">
            The <br />
            Stockroom Sale
          </h1>
          <div className="flex space-x-[25px]">
            <button className="border-2 mt-[30px] w-[150px] font-bold px-[30px] py-[10px] border-black">
              Women
            </button>
            <button className="border-2 mt-[30px] w-[150px] font-bold px-[30px] py-[10px] border-black">
              Men
            </button>
          </div>
        </div>
        <div>
          <Image src={img1} className="w-[400px] h-[400px]" />
        </div>
      </div>
      <div className="bg-black w-full flex space-x-11 justify-around pl-[40px] py-[10px]">
        <div className="flex align-middle items-center space-x-3">
          <Image src={web3} className="w-[15px]"/>
          <p className="text-white ">Free Shopping at 10$ sale</p>
        </div>
        <div className="flex align-middle items-center space-x-3">
          <Image src={web2} className="w-[15px]"/>
          <p className="text-white ">Free Returns</p>
        </div>
        <div className="flex align-middle items-center space-x-3">
          <Image src={web1} className="w-[15px]"/>
          <p className="text-white ">Earn Points</p>
        </div>
        <div className="flex align-middle items-center space-x-3">
          <Image src={web4} className="w-[15px]"/>
          <p className="text-white ">Buy Now, Pay Later</p>
        </div>
      </div>
    </div>
  );
}
