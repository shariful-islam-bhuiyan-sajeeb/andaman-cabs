import React from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../Header";
import Activities from "./Activities";

const Drawer = () => {
  const leftMenuItems = (
    <>
      {/* <li className="flex w-full border ">
        <button className="pl-6 py-2 text-[#808080] text-left uppercase ">
          HOME
        </button>
      </li> */}
      {/* btn one  */}
      {/* <ul className="dropdown dropdown-hover flex  w-full border">
        <label
          tabIndex={0}
          className=" flex items-center pl-6 py-2 text-[#808080] text-left   font-semibold cursor-pointer uppercase "
        >
          Know
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content text-left xl:mt-5 mt-10 border bg-base-100 text-black  w-72"
        >
          <li className="hover:bg-[#ffd000] py-2 px-4   border-0 rounded-none">
            <Link className="">About Andaman Cabs</Link>
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
      </ul> */}
      {/* btn two  */}
      {/* <div className="dropdown dropdown-hover flex relative w-full border">
        <label
          tabIndex={0}
          className="pl-6 py-2 text-[#808080] text-left  font-semibold uppercase"
        >
          Location
        </label>
        <div
          tabIndex={0}
          className="dropdown-content absolute -left-28 top-5 flex items-center gap-x-1 text-left  border bg-white text-black w-[1000px] "
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
      </div> */}
      {/* btn three  */}
      {/* <div className="dropdown dropdown-hover flex relative w-full border">
        <label
          tabIndex={0}
          className="font-semibold pl-6 py-2 text-[#808080] text-left   uppercase"
        >
          Activities
        </label>
        <div
          tabIndex={0}
          className="dropdown-content absolute -left-48 top-5 flex items-center gap-x-1 text-left   shadow bg-white text-black w-[1000px] "
        >
          <div className=" grid lg:grid-cols-4 gap-0.5 w-full h-[500px]  overflow-hidden  ">
            <Activities />
          </div>
        </div>
      </div> */}
      {/* btn four  */}
      {/* <li className="flex w-full border">
        <button className="flex items-center pl-6 py-2 text-[#808080] text-left   font-semibold uppercase ">
          top deals
        </button>
      </li> */}
    </>
  );

  const rightMenuItems = (
    <>
      <li className="flex w-full border ">
        <Link className="pl-6 py-2 text-[#808080] text-left uppercase">
          Boat Tickets
        </Link>
      </li>
      <div className="dropdown dropdown-hover flex w-full border   ">
        <label
          tabIndex={0}
          className=" flex items-center font-semibold cursor-pointer pl-6 py-2 text-[#808080] text-left uppercase "
        >
          Cab rental
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content text-left xl:mt-5 mt-10 border bg-base-100 text-black  w-52"
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
      <li className="flex w-full border ">
        <Link className="flex items-center pl-6 py-2 text-[#808080] text-left uppercase font-semibold">
          vehicle types
        </Link>
      </li>

      <div className="dropdown dropdown-hover flex w-full border  ">
        <label
          tabIndex={0}
          className=" flex items-center font-semibold cursor-pointer pl-6 py-2 text-[#808080] text-left uppercase "
        >
          Ferries
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content text-left xl:mt-5 mt-10 border bg-base-100 text-black  w-44"
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
            <Link>Makruzz </Link>
          </li>
        </ul>
      </div>
      <li className="flex w-full border ">
        <Link className="flex items-center pl-6 py-2 text-[#808080] text-left uppercase font-semibold">
          Blogs
        </Link>
      </li>
      <li className="flex w-full border ">
        <Link className="flex items-center pl-6 py-2 text-[#808080] text-left uppercase font-semibold">
          contact us
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="header-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <Header />
          <Outlet /> */}
        </div>
        <div className="drawer-side relative">
          <label htmlFor="header-drawer" className="drawer-overlay"></label>

          <ul className=" text-center  md:w-96 sm:w-80 w-60  bg-base-100 ">
            <li className="  flex flex-col  w-full text-md font-semibold space-y-2 ">
              <li className="absolute text-2xl px-6 text-right ">X</li>
              <li className=" flex flex-col w-full mx-auto">{leftMenuItems}</li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
