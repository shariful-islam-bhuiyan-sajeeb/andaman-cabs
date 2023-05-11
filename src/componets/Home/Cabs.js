import React from "react";
import CabCards from "./CabCards";

const Cabs = () => {
  return (
    <div>
      <div
        style={{ fontFamily: "Poppins" }}
        className="lg:mt-10 mt-6 w-full mx-auto lg:space-y-3 sm:space-y-2 space-y-1"
      >
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-[#252d35]">
          Our Cabs
        </h2>
        <p className="lg:text-xl md:text-lg text-md font-medium ">
          Enjoy your ride in our top class fleet
        </p>
      </div>

      <div>
        <CabCards />
      </div>
    </div>
  );
};

export default Cabs;
