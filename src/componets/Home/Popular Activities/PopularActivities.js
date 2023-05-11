import React from "react";
import PopularActivitiesCard from "./PopularActivitiesCard";

const PopularActivities = () => {
  return (
    <div className="flex justify-center w-full xl:mt-20 lg:mt-16 md:mt-14 sm:mt-10 mt-8 mb-16">
      <div>
        <div className=" ">
          <div className=" flex items-center justify-center">
            <div className=" xl:w-[40px] lg:w-[30px] md:w-[30px] sm:w-[25px] w-[30px] h-[2px] bg-[#e1e1e1]"></div>
            <div className=" xl:w-[40px] lg:w-[30px] md:w-[30px] sm:w-[25px] w-[30px] h-[2px] bg-[#ffd000]"></div>
            <div className=" xl:w-[40px] lg:w-[30px] md:w-[30px] sm:w-[25px] w-[30px] h-[2px] bg-[#e1e1e1]"></div>
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex flex-col items-center text-left lg:mt-7 md:mt-5 mt-3 lg:px-0 px-4"
          >
            <h1 className=" lg:text-2xl md:text-xl sm:text-lg text-md font-bold text-black">
              Popular Activities
            </h1>
            <p className="lg:text-lg md:text-md sm:text-sm text-xs font-medium">
              Explore top destinations across the islands
            </p>
          </div>
        </div>
        <PopularActivitiesCard />
      </div>
    </div>
  );
};

export default PopularActivities;
