import React, { useEffect, useState } from "react";
import "../../Home/cabsCard.css";
import { FaRupeeSign } from "react-icons/fa";
import { HiChevronRight, IconName } from "react-icons/hi2";
const HavelockIsland = () => {
  const [cabs, setCabs] = useState([]);
  useEffect(() => {
    fetch("HavelockIsland.json")
      .then((res) => res.json())
      .then((data) => setCabs(data));
  }, []);
  return (
    <div>
      <div>
        <div className="lg:mt-10 md:mt-8 mt-6 lg:px-0  px-4 flex items-center">
          <div className=" xl:w-[80px] lg:w-[50px] md:w-[70px] sm:w-[60px] w-[50px] h-[2px] bg-[#ffd000]"></div>
          <div className=" xl:w-[80px] lg:w-[50px] md:w-[70px] sm:w-[60px] w-[50px] h-[2px] bg-[#e1e1e1]"></div>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-left lg:mt-7 mt-5 lg:space-y-2 space-y-1 lg:px-0 px-4"
        >
          <h1 className="lg:text-2xl md:text-xl sm:text-lg text-md font-bold">
            Cabs in Port Blair
          </h1>
          <p className="lg:text-lg md:text-md sm:text-sm text-xs font-medium">
            Top cruises that sail within the islands
          </p>
        </div>

        {/* ========card section  */}
        <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-col-1 lg:mt-6 mt-4 lg:gap-6 md:gap-4 sm:gap-3 gap-2 lg:px-0 px-4">
          {cabs?.map((cab) => (
            <div key={cab.id} className="relative">
              <div style={{ fontFamily: "Poppins" }} className="w-full mx-auto">
                <h2 className="flex items-center z-20 gap-x-1 absolute lg:right-3  right-1 lg:top-3 md:top-2 top-1 bg-black text-white lg:font-bold  font-medium lg:px-3 sm:px-2 px-1 text-xs py-1 rounded-t-md rounded-r-md">
                  <FaRupeeSign />
                  {cab?.rate}
                </h2>
                <div className=" gradient1 ease-in-out duration-500 transform hover:scale-95 ">
                  <img className="w-full" src={cab?.img} alt="" />
                </div>
                <h2 className="absolute md:bottom-3 bottom-4 lg:text-md text-xs  text-white lg:font-semibold font-medium  text-center lg:px-4 md:px-3  px-4 ">
                  {cab?.title?.length > 90
                    ? cab?.title?.slice(0, 90) + "..."
                    : cab?.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center xl:mt-10 lg:mt-8 md:mt-6 mt-4 w-full mx-auto  ">
          <button className="flex items-center justify-center mx-auto gap-x-2 text-center lg:text-lg  sm:text-md text-sm lg:font-bold font-medium font-serif rounded  lg:px-6 md:px-4 px-2 lg:py-2 py-1 translate-all duration-500  bg-[#ffd000] hover:bg-gray-600 text-black hover:text-white">
            View all (4)
            <HiChevronRight className="lg:text-xs text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HavelockIsland;
