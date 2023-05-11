import React from "react";
import { RiShieldCrossLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import { ImUsers } from "react-icons/im";
import { BiCar } from "react-icons/bi";
import VideoSet from "./VideoSet";

const OurStory = () => {
  return (
    <div className="relative">
      <div className="absolute z-20   left-0 right-0 bottom-[0px]  w-full">
        <img
          className="   "
          src="https://www.andamancab.in/assets/img/bottom-svg.svg"
          alt=""
        />
      </div>
      <div className=" w-full bg-[#252d35] ">
        <div className=" flex lg:flex-row flex-col items-start gap-6 xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-10/12 w-full mx-auto   text-white lg:px-0 px-4 lg:pt-20 lg:pb-48 md:pb-32 sm:pb-28 pb-24 ">
          <div className="lg:w-1/2 w-full mx-auto">
            <div className=" flex items-center ">
              <div className=" xl:w-[50px] lg:w-[40px] md:w-[30px] sm:w-[25px] w-[30px] h-[2px] bg-[#ffd000]"></div>
              <div className=" xl:w-[50px] lg:w-[40px] md:w-[30px] sm:w-[25px] w-[30px] h-[2px] bg-[#e1e1e1]"></div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex flex-col items-start text-left text-white lg:mt-7 md:mt-5 mt-3 lg:px-0 px-4"
            >
              <h1 className=" lg:text-2xl md:text-xl sm:text-lg text-md font-bold ">
                Know About Us
              </h1>
              <p className="lg:text-lg md:text-md sm:text-sm text-xs font-medium">
                Andaman Cabs Services LLP is the only company which has 27
                vehicles in Andaman Islands with the biggest Fleet.
              </p>
            </div>
            {/* =========================== card section  */}
            <div className=" grid md:grid-cols-2 grid-col-1 lg:gap-6 gap-4  lg:mt-6 mt-4">
              {/* ============quality card  */}
              <div className="bg-white p-6 rounded translate hover:translate-all ">
                <div className="flex flex-col items-center text-black ">
                  <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
                    <RiShieldCrossLine />
                  </div>
                  <div className="font-serif lg:mt-4 md:mt-3 mt-2">
                    <h1 className="text-bold lg:text-2xl ">Quality</h1>
                    <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                      Constantly rated high both in Tripadvisor and Google by
                      our customers.
                    </p>
                  </div>
                </div>
              </div>
              {/* ==========================time watch card  */}
              <div className="bg-white p-6 rounded ">
                <div className="flex flex-col items-center text-black ">
                  <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
                    <IoIosTimer />
                  </div>
                  <div className="font-serif lg:mt-4 md:mt-3 mt-2">
                    <h1 className="text-bold lg:text-2xl ">10 Years</h1>
                    <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                      Local team with very strong ground operations to take care
                      of you in Andaman.
                    </p>
                  </div>
                </div>
              </div>
              {/* ===========================Experts card  */}
              <div className="bg-white p-6 rounded ">
                <div className="flex flex-col items-center text-black ">
                  <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
                    <ImUsers />
                  </div>
                  <div className="font-serif lg:mt-4 md:mt-3 mt-2">
                    <h1 className="text-bold lg:text-2xl ">Experts</h1>
                    <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                      Our team is inclined to provide the great experience of
                      the journey.
                    </p>
                  </div>
                </div>
              </div>
              {/*======================= On time Pickup card  */}
              <div className="bg-white p-6 rounded ">
                <div className="flex flex-col items-center text-black ">
                  <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
                    <BiCar />
                  </div>
                  <div className="font-serif lg:mt-4 md:mt-3 mt-2">
                    <h1 className="text-bold lg:text-2xl ">On time Pickup</h1>
                    <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                      Our drivers are dedicated and be there to pickup from your
                      location on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* =================== button  */}
            <div className=" xl:mt-7 lg:mt-6 md:mt-4 mt-3 w-full mx-auto  ">
              <button className="flex items-center justify-start gap-x-2  lg:text-lg  sm:text-md text-sm lg:font-bold font-medium font-serif rounded  lg:px-6 md:px-4 px-2 lg:py-2 py-1 translate-all duration-500  bg-[#ffd000] border hover:border-white hover:bg-[#252d35] text-black hover:text-white">
                Know More
              </button>
            </div>
          </div>
          {/* =============== Our Story - Watch the Video section */}
          <div className="lg:w-1/2 w-full mx-auto">
            <div className="xl:text-2xl lg:text-xl text-md font-serif font-bold">
              <h1> Our Story - Watch the Video</h1>
            </div>
            <div className="mt-4">
              <VideoSet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
