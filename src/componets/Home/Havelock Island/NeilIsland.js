import React, { useEffect, useState } from "react";

import { FaRupeeSign } from "react-icons/fa";
import { HiChevronRight, IconName } from "react-icons/hi2";

const NeilIsland = () => {
  const [cabs, setCabs] = useState([]);
  useEffect(() => {
    fetch("Home/NeilIsland.json")
      .then((res) => res.json())
      .then((data) => setCabs(data));
  }, []);
  return (
    <div>
      <div className="lg:mt-10 mt-6 flex items-center md:px-3 px-4">
        <div className=" xl:w-[80px] lg:w-[50px] md:w-[70px] sm:w-[60px] w-[50px] h-[2px] bg-[#ffd000]"></div>
        <div className=" xl:w-[80px] lg:w-[50px] md:w-[70px] sm:w-[60px] w-[50px] h-[2px] bg-[#e1e1e1]"></div>
      </div>
      <div
        style={{ fontFamily: "Poppins" }}
        className="text-left lg:mt-7 md:mt-5 mt-3 lg:px-0 px-4"
      >
        <h1 className="lg:text-2xl md:text-xl sm:text-lg text-md font-bold">
          Cabs in Neil Island
        </h1>
        <p className="lg:text-lg md:text-md sm:text-sm text-xs font-medium">
          Top cruises that sail within the islands
        </p>
      </div>

      {/* ========card section  */}
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:mt-8 md:mt-6 mt-4 lg:gap-x-6 md:gap-3 sm:gap-4 gap-3 w-full lg:px-0 px-4">
        {cabs?.map((cab) => (
          <div key={cab.id} className="relative w-full mx-auto">
            <div style={{ fontFamily: "Poppins" }} className="">
              <h2 className="flex items-center z-20 gap-x-1 absolute lg:right-3  right-1 lg:top-3 md:top-2 top-1 bg-black text-white lg:font-bold  font-medium lg:px-3 md:px-2 px-1  text-xs py-1 rounded-t-md rounded-r-md">
                <FaRupeeSign />
                {cab?.rate}
              </h2>
              <div className=" gradient1 ease-in-out duration-500 transform hover:scale-95 ">
                <img className=" md:w-full w-full" src={cab?.img} alt="" />
              </div>
              <h2 className="absolute md:bottom-2 bottom-4 lg:text-md sm:text-sm text-xs flex flex-wrap  text-white font-semibold   text-center lg:px-4 md:px-3  px-4 ">
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
          View all (3)
          <HiChevronRight className="lg:text-xs text-sm" />
        </button>
      </div>
    </div>
  );
};

export default NeilIsland;
