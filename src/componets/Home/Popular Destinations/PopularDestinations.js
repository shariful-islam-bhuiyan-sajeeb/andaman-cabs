import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { HiChevronRight, IconName } from "react-icons/hi2";

const PopularDestinations = () => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("Home/PopularDestinations.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="mt-10 mb-20">
      <div className="flex flex-col justify-center w-full ">
        <div className=" flex items-center justify-center ">
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#e1e1e1]"></div>
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#ffd000]"></div>
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#e1e1e1]"></div>
        </div>
        <div
          style={{ fontFamily: "Poppins", fontWeight: "800" }}
          className="flex flex-col items-center justify-center text-left text-black lg:mt-7 md:mt-5 mt-3 lg:px-0 px-4"
        >
          <h1 className=" lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold ">
            Popular Destinations
          </h1>
          <p className="lg:text-xl md:text-lg sm:text-md text-xs font-medium">
            Explore top destinations across the islands
          </p>
        </div>
      </div>
      {/* card section  */}
      <div>
        <div className="grid  xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:mt-8 md:mt-6 mt-4 lg:gap-x-6 md:gap-3 sm:gap-4 gap-3 w-full lg:px-0 px-4">
          {cards?.map((card) => (
            <div
              style={{ fontFamily: "Poppins" }}
              key={card.id}
              className="relative w-full mx-auto"
            >
              <div className="">
                <div className=" gradient1 ease-in-out duration-500 transform hover:scale-95 ">
                  <img className=" md:w-full w-full" src={card?.img} alt="" />
                </div>
                <div className="flex flex-col items-start absolute md:bottom-2 bottom-3  text-white  text-center lg:pl-3 md:px-3  px-4 ">
                  <h2 className="lg:text-xs sm:text-sm text-xs  text-[#ffd000]">
                    {card?.name}
                  </h2>
                  <h2 className="lg:text-md sm:text-sm text-xs  font-medium">
                    {card?.title?.length > 25
                      ? card?.title?.slice(0, 25) + "..."
                      : card?.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" xl:mt-7 lg:mt-6 md:mt-4 mt-3 w-full mx-auto  ">
          <button className="flex items-center justify-center mx-auto gap-x-2  lg:text-lg  sm:text-md text-sm lg:font-bold font-medium rounded  lg:px-6 md:px-4 px-2 lg:py-2 py-1 translate-all duration-500  bg-[#ffd000] border hover:border-white hover:bg-[#252d35] text-black hover:text-white">
            View all (15)
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
