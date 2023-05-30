import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../Images/formal2.png";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [nav, setNav] = useState(true);
  const handleclick = () => {
    setNav(!nav);
  };
  const darkClick = () => {
    setDark(!dark);
  };
  return (
    <>
      <div className=" py-4 shadow-md flex justify-around items-center bg-white">
        <div onClick={handleclick} className="block md:hidden ml-4">
          {!nav ? (
            <i className="fa-solid fa-bars rounded  ring-purple-600 ring-2 text-purple-600"></i>
          ) : (
            <i className="fa-solid fa-bars  ring-purple-600 "></i>
          )}
        </div>
        <div className="hidden md:flex">
          <Link
            to="/"
            className="ml-4  inline-block font-archivo2 text-lg font-bold"
          >
            MESS
          </Link>
        </div>
        <div className="flex container items-center mx-auto px-6 text-purple-600 justify-between">
          <div className="p-1  rounded-md  space-x-2 border border-[#d5d6d7] md:ml-[245px]  md:w-2/4 w-2/3  flex items-center ">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search for projects"
            />
          </div>
          <div className="flex items-center justify-around space-x-6">
            <div onClick={darkClick}>
              {!dark ? (
                <i className="fa-regular fa-lightbulb"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </div>

            <i className="fa-solid fa-bell"></i>
            <div>
              <img src={user} className="h-7 w-7 rounded-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
