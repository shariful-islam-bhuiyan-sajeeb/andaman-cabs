import React from "react";
import CustomerReviewVideo from "./CustomerReviewVideo";

const CustomerReview = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col justify-center w-full ">
        <div className=" flex items-center justify-center ">
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#e1e1e1]"></div>
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#ffd000]"></div>
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#e1e1e1]"></div>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex flex-col items-center justify-center space-y-2 text-left  lg:mt-7 md:mt-5 mt-3 lg:px-0 px-4"
        >
          <h1 className=" lg:text-4xl md:text-2xl sm:text-xl text-lg text-black font-bold ">
            Customer Review
          </h1>
          <p className="lg:text-xl md:text-lg sm:text-md text-xs font-medium">
            Know what our customers say about us
          </p>
        </div>
        <div className="lg:mt-8 md:mt-6 sm:mt-4 mt-3">
          <CustomerReviewVideo />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
