"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import s1 from "../../img/sl1.webp";
import s2 from "../../img/sl2.webp";
import s3 from "../../img/sl3.webp";
import s4 from "../../img/sl4.webp";
import m1 from "../../img/m1.webp";
import m2 from "../../img/m2.webp";
import m3 from "../../img/m3.webp";
import m4 from "../../img/m4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
export default function Saleslider() {
  const [activeSlider, setActiveSlider] = useState("women");
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjusted to 4 for better spacing
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000,
  };
  // Data for Women slider
  const womenSlides = [
    { src: s1, alt: "Women Slide 1" },
    { src: s2, alt: "Women Slide 2" },
    { src: s3, alt: "Women Slide 3" },
    { src: s4, alt: "Women Slide 4" },
  ];

  // Data for Men slider
  const menSlides = [
    { src: m1, alt: "Men Slide 1" },
    { src: m2, alt: "Men Slide 2" },
    { src: m3, alt: "Men Slide 3" },
    { src: m4, alt: "Men Slide 4" },
  ];
  return (
    <>
      <div className="w-full p-[30px]">
        <div className="flex justify-around">
          <h1 className="text-[30px] font-bold">
            The Stockroom Sale — Incomparable prices, from our <br /> warehouse
            to you.
          </h1>
          <button
            className={`text-[25px] ${
              activeSlider === "women" ? "underline" : ""
            }`}
            onClick={() => setActiveSlider("women")}
          >
            Women
          </button>
          <button
            className={`text-[25px] ${
              activeSlider === "men" ? "underline text-black" : "text-[#787878]"
            }`}
            onClick={() => setActiveSlider("men")}
          >
            Men
          </button>
        </div>

        <div className="w-full mt-[50px]">
          <Slider {...settings}>
            {(activeSlider === "women" ? womenSlides : menSlides).map(
              (slide, index) => (
                <>
                  <div className="p-[10px]">
                    <Image
                      src={slide.src}
                      alt="Slide 1"
                      width={250}
                      height={300}
                      className="object-cover relative img1"
                    />
                    <div className="bg-white absolute top-3 ml-[8px]">
                      <p className="text-red-600 text-[10px]">-59%</p>
                    </div>
                    <div className="absolute top-4 ml-[190px] bg-black">
                      <p className="text-white text-[10px] p-[8]">FEWLETFE</p>
                    </div>
                    <div className="flex space-x-7">
                      {" "}
                      <h1>The baby T-Shirt in Black</h1>
                      <CiHeart className="text-[25px]" />
                    </div>
                    <span className="line-through">$200.50 </span>
                    <span className="text-red-600"> $100.50</span> <br />
                    <span className="text-gray-500">1 colour</span>
                  </div>
                </>
              )
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}
