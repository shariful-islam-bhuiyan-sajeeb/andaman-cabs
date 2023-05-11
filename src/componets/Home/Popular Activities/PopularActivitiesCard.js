import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { HiChevronRight, IconName } from "react-icons/hi2";

const PopularActivitiesCard = () => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("Home/PopularActivities.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div>
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:mt-8 md:mt-6 mt-4 lg:gap-x-6 md:gap-3 sm:gap-4 gap-3 w-full lg:px-0 px-4">
        {cards?.map((card) => (
          <div
            style={{ fontFamily: "Poppins" }}
            key={card.id}
            className="relative w-full mx-auto"
          >
            <div className="">
              <div className="  flex flex-col  absolute lg:right-3  right-1 lg:top-3 md:top-2 top-1 bg-[#252d35]   lg:px-3 md:px-2 px-1  text-xs py-1 rounded-t-md rounded-r-md ">
                <h2 className="text-[#fff] font-medium">{card?.Starts}</h2>
                <h2 className="font-semibold text-[#ffd000]">{card?.rate}</h2>
              </div>
              <div className=" gradient1  ease-in-out duration-500 transform hover:scale-95">
                <img className=" md:w-full w-full" src={card?.img} alt="" />
              </div>
              <div className="flex flex-col items-start absolute md:bottom-2 bottom-3  text-white  text-center lg:pl-3 md:px-3  px-4 ">
                <h2 className="lg:text-lg sm:text-sm text-xs  text-[#ffd000]">
                  {card?.name}
                </h2>
                <h2 className="lg:text-lg sm:text-sm text-xs text-justify text-white font-semibold">
                  {card?.title?.length > 50
                    ? card?.title?.slice(0, 50) + "..."
                    : card?.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularActivitiesCard;
