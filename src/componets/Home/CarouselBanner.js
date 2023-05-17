import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselBanner.css";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function CarouselBanner() {
  const [carousel, setCarousel] = useState([]);

  return (
    <div className="relative xl:pt-10 pt-0">
      <div className="absolute z-20   left-0 right-0 bottom-[0px]  w-full">
        <img
          className="  "
          src="https://www.andamancab.in/assets/img/bottom-svg.svg"
          alt=""
        />
      </div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className=" ">
          <div className=" relative ">
            <img
              className="w-full"
              src="https://www.andamancab.in/uploads/sliders/60701.png"
              alt=""
            />
            <div className=" hidden sm:block lg:space-y-3 space-y-2 absolute 2xl:left-72 xl:left-44 lg:left-36 md:left-32 sm:left-24 left-5 2xl:top-96 xl:top-72  lg:top-64 md:top-48 sm:top-40 top-5   w-[1000px] text-left text-white ">
              <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-3xl text-xl font-serif">
                Book Your Cab
              </h2>
              <p className="text-lg">For Hassle Free Ride</p>
              <button className="bg-[#ffd000] text-black hover:bg-gray-700 hover:text-white translate-all duration-500 xl:px-6 md:px-4 sm:px-3 lg:py-2 py-1 rounded uppercase text-sm font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative ">
            <img
              className="w-full"
              src="https://www.andamancab.in/uploads/sliders/47665.png"
              alt=""
            />
            <div className=" hidden sm:block lg:space-y-3 space-y-2 absolute 2xl:left-72 xl:left-44 lg:left-36 md:left-32 sm:left-24 left-5 2xl:top-96 xl:top-72  lg:top-64 md:top-48 sm:top-40 top-5   w-[1000px] text-left text-white ">
              <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-3xl text-xl font-serif">
                Nautika
              </h2>
              <p className="text-lg">Friendly, Fabulous & Fast</p>
              <button className="bg-[#ffd000] text-black hover:bg-gray-700 hover:text-white translate-all duration-500 xl:px-6 md:px-4 sm:px-3 lg:py-2 py-1 rounded uppercase text-sm font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative ">
            <img
              className="w-full"
              src="https://www.andamancab.in/uploads/sliders/53069.png"
              alt=""
            />
            <div className=" hidden sm:block lg:space-y-3 space-y-2 absolute 2xl:left-72 xl:left-44 lg:left-36 md:left-32 sm:left-24 left-5 2xl:top-96 xl:top-72  lg:top-64 md:top-48 sm:top-40 top-5   w-[1000px] text-left text-white ">
              <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-3xl text-xl font-serif">
                Explore the Islands
              </h2>
              <p className="text-lg">Enjoy your journey in Luxury cruise</p>
              <button className="bg-[#ffd000] text-black hover:bg-gray-700 hover:text-white translate-all duration-500 xl:px-6 md:px-4 sm:px-3 lg:py-2 py-1 rounded uppercase text-sm font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative ">
            <img
              className="w-full"
              src="https://www.andamancab.in/uploads/sliders/17768.png"
              alt=""
            />
            <div className=" hidden sm:block lg:space-y-3 space-y-2 absolute 2xl:left-72 xl:left-44 lg:left-36 md:left-32 sm:left-24 left-5 2xl:top-96 xl:top-72  lg:top-64 md:top-48 sm:top-40 top-5   w-[1000px] text-left text-white ">
              <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-3xl text-xl font-serif">
                Amazing Andamans
              </h2>
              <p className="text-lg">Unleash the Paradise Islands</p>
              <button className="bg-[#ffd000] text-black hover:bg-gray-700 hover:text-white translate-all duration-500 xl:px-6 md:px-4 sm:px-3 lg:py-2 py-1 rounded uppercase text-sm font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative ">
            <img
              className="w-full"
              src="https://www.andamancab.in/uploads/sliders/60701.png"
              alt=""
            />
            <div className=" hidden sm:block lg:space-y-3 space-y-2 absolute 2xl:left-72 xl:left-44 lg:left-36 md:left-32 sm:left-24 left-5 2xl:top-96 xl:top-72  lg:top-64 md:top-48 sm:top-40 top-5   w-[1000px] text-left text-white ">
              <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-3xl text-xl font-serif">
                Book Your Cab
              </h2>
              <p className="text-lg">For Hassle Free Ride</p>
              <button className="bg-[#ffd000] text-black hover:bg-gray-700 hover:text-white translate-all duration-500 xl:px-6 md:px-4 sm:px-3 lg:py-2 py-1 rounded uppercase text-sm font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative ">
            <img
              className="w-full"
              src="https://www.andamancab.in/uploads/sliders/27283.jpg"
              alt=""
            />
            <div className=" hidden sm:block lg:space-y-3 space-y-2 absolute 2xl:left-72 xl:left-44 lg:left-36 md:left-32 sm:left-24 left-5 2xl:top-96 xl:top-72  lg:top-64 md:top-48 sm:top-40 top-5   w-[1000px] text-left text-white ">
              <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-3xl text-xl font-serif">
                Sea You here
              </h2>
              <p className="text-lg">To the Unknown & Unexplored world</p>
              <button className="bg-[#ffd000] text-black hover:bg-gray-700 hover:text-white translate-all duration-500 xl:px-6 md:px-4 sm:px-3 lg:py-2 py-1 rounded uppercase text-sm font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
