import React, { useState } from "react";
import { Link } from "react-router-dom";
import Activities from "./Headers/Activities";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const leftMenuItems = (
    <>
      {/* ============================HOME */}
      <Link to="/" className="flex">
        <button className="flex items-center font-semibold uppercase ">
          HOME
        </button>
      </Link>
      {/* ============================= Know  */}
      <div className="dropdown dropdown-hover flex hover:text-[#ffd000] ">
        <label
          tabIndex={0}
          className=" flex items-center my-6  gap-x-1 font-semibold hover:text-[#ffd000] cursor-pointer uppercase "
        >
          Know
          <MdKeyboardArrowDown className="text-lg text-gray-400 hover:text-[#ffd000] " />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content text-left xl:mt-16 lg:mt-[72px] mt-10 border bg-base-100 text-black  w-72"
        >
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>About Andaman Cabs</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>How to Reach Andaman Islands</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Do's & Dont's</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Fun Facts</Link>
          </li>
        </ul>
      </div>
      {/*============================== Location  */}
      <div className="dropdown dropdown-hover flex relative hover:text-[#ffd000]">
        <label
          tabIndex={0}
          className="flex items-center my-6 hover:text-[#ffd000]  gap-x-1 font-semibold uppercase"
        >
          Location
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
        <div
          tabIndex={0}
          className="dropdown-content absolute -left-28 top-16 flex items-center gap-x-1 text-left  border bg-white text-black w-[1000px] "
        >
          <div className=" flex items-center gap-0.5 w-full  ">
            <li className="flex items-center gap-x-1 bg-[#d9d9d9] hover:bg-[#ffd000] py-2 px-2 border-0 rounded-none w-52 ">
              <div className="border-4 border-white  ">
                <img
                  className="w-10 "
                  src="https://i.ibb.co/BVmR9vN/travel-usnews.jpg"
                  alt=""
                />
              </div>
              <p className="uppercase font-semibold text-[11px]">
                PorBlair guide
              </p>
            </li>
            <li className="flex items-center gap-x-1 bg-[#d9d9d9] hover:bg-[#ffd000] py-2 px-2 border-0 rounded-none w-52 ">
              <div className="border-4 border-white  ">
                <img
                  className="w-10 "
                  src="https://i.ibb.co/BVmR9vN/travel-usnews.jpg"
                  alt=""
                />
              </div>
              <p className="uppercase font-semibold text-[11px]">
                {" "}
                Havelock Island Guide
              </p>
            </li>
            <li className="flex items-center gap-x-1 bg-[#d9d9d9] hover:bg-[#ffd000] py-2 px-2 border-0 rounded-none w-52 ">
              <div className="border-4 border-white  ">
                <img
                  className="w-10 h-6 "
                  src="https://i.ibb.co/W2p0mKc/download.jpg"
                  alt=""
                />
              </div>
              <p className="uppercase font-semibold text-[11px]">
                {" "}
                Neil Island guide
              </p>
            </li>
            <li className="flex items-center gap-x-1 bg-[#d9d9d9] hover:bg-[#ffd000] py-2 px-2 border-0 rounded-none w-52 ">
              <div className="border-4 border-white  ">
                <img
                  className="w-10 h-6 "
                  src="https://ychef.files.bbci.co.uk/1280x720/p08rhml3.jpg"
                  alt=""
                />
              </div>
              <p className="uppercase font-semibold text-[11px]">
                {" "}
                baratang guide
              </p>
            </li>
            <li className="flex items-center gap-x-1 bg-[#d9d9d9] hover:bg-[#ffd000] py-2 px-2 border-0 rounded-none w-52 ">
              <div className="border-4 border-white  ">
                <img
                  className="w-10 h-6 "
                  src="https://i.ibb.co/K5D7NLJ/download.jpg"
                  alt=""
                />
              </div>
              <p className="uppercase font-semibold text-[11px]">
                {" "}
                diglipur guide
              </p>
            </li>
          </div>
        </div>
      </div>
      {/*==============================Activities */}
      <div className="dropdown dropdown-hover flex relative hover:text-[#ffd000]">
        <label
          tabIndex={0}
          className="flex items-center my-6 hover:text-[#ffd000]  gap-x-1 font-semibold uppercase"
        >
          Activities
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
        <div
          tabIndex={0}
          className="  dropdown-content absolute xl:-left-56 lg:-left-40 2xl:mt-16 xl:mt-14 lg:mt-[90px] flex items-center gap-x-1 text-left   shadow bg-white text-black 2xl:w-[1200px] xl:w-[1100px] lg:w-[950px] "
        >
          <div className="  w-full  ">
            <Activities />
          </div>
        </div>
      </div>
      {/* ===========================top deals*/}
      <div className="flex hover:text-[#ffd000]">
        <button className="flex items-center font-semibold uppercase ">
          top deals
        </button>
      </div>
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Back to homepage"
        className="flex items-center "
      >
        <img
          className="md:w-[100px] sm:w-[120px] w-[150px]"
          src="https://www.andamancab.in/assets/img/logos/logo-yellow.png"
          alt=""
        />
      </a>
      {/* ===============Boat Tickets */}
      <div className="flex hover:text-[#ffd000]">
        <Link className="flex items-center uppercase font-semibold ">
          Boat Tickets
        </Link>
      </div>
      {/*===================Cab rental */}
      <div className="dropdown dropdown-hover flex hover:text-[#ffd000] ">
        <label
          tabIndex={0}
          className=" flex items-center my-6 hover:text-[#ffd000]  gap-x-1 font-semibold cursor-pointer uppercase "
        >
          Cab rental
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content text-left xl:mt-16 mt-10 border bg-base-100 text-black  w-52"
        >
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Cabs in Port Blair</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Cabs in Havelock Island</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Cabs in Neil Island</Link>
          </li>
        </ul>
      </div>
      {/* ================vehicle types */}
      <div className="flex hover:text-[#ffd000]">
        <Link className="flex items-center uppercase font-semibold">
          vehicle types
        </Link>
      </div>
      {/* =======================Ferries */}
      <div className="dropdown dropdown-hover flex hover:text-[#ffd000]">
        <label
          tabIndex={0}
          className=" flex items-center my-6 hover:text-[#ffd000]  gap-x-1 font-semibold cursor-pointer uppercase "
        >
          Ferries
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content text-left xl:mt-16 lg:mt-[75px] mt-10 border bg-base-100 text-black  w-44"
        >
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Green Ocean 1</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Nautika Lite</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Green Ocean 2 </Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Nautika </Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Nautika Lite</Link>
          </li>
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link>Makruzz </Link>
          </li>
        </ul>
      </div>
      {/* =========================Blogs */}
      <div className="flex hover:text-[#ffd000]">
        <Link className="flex items-center uppercase font-semibold">Blogs</Link>
      </div>
      {/* ======================contact us */}
      <div className="flex hover:text-[#ffd000]">
        <Link
          to="/ContactUs"
          className="flex items-center uppercase font-semibold"
        >
          contact us
        </Link>
      </div>
    </>
  );

  return (
    <div>
      <header className=" w-full max-w-[1940px] mx-auto  fixed z-50 top-0 bg-[#252d35]  text-[#ffffff]">
        <div className="container flex items-center justify-between h-16 mx-auto lg:justify-center md:space-x-8">
          {/* ====================== left side menu items is here  */}
          <div
            style={{ fontFamily: "Poppins" }}
            className="  hidden space-x-4 text-sm lg:flex flex-wrap"
          >
            {leftMenuItems}
          </div>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center pl-3 lg:hidden "
          >
            <img
              className="md:w-[100px] sm:w-[120px] w-[150px]"
              src="https://www.andamancab.in/assets/img/logos/logo-yellow.png"
              alt=""
            />
          </a>
          {/* =========================== svg botton (drawer side button) is here */}
          <label
            htmlFor="drawer2 "
            title="Button"
            type="button"
            className="p-4 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          {/* =========================== svg botton (drawer side button)is end */}
        </div>
      </header>
    </div>
  );
};

export default Header;
