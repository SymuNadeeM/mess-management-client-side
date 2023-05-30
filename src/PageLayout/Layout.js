import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import user from "../Images/formal2.png";

const Layout = () => {
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
      <div className="fixed top-0 left-0 right-0 py-4 shadow-md flex justify-around items-center bg-white">
        <div onClick={handleclick} className="block md:hidden ml-4">
          {!nav ? (
            <i className="fa-solid fa-bars rounded  ring-purple-600 ring-2 text-purple-600"></i>
          ) : (
            <i className="fa-solid fa-bars  ring-purple-600 "></i>
          )}
        </div>
        <div className="hidden md:flex">
          <Link
            to="/home"
            className="ml-6   font-archivo2 text-lg font-bold  text-btnbgs"
          >
            SUN_HOSTEL
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
                <i className="fa-regular fa-lightbulb ring-2 p-1 rounded-full  ring-pink-300 ring-inset"></i>
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

      {/* navbar */}
      {/* ********* for SMALL******* */}
      {/* <div
        className={
          !nav
            ? "fixed  shadow-md min-h-screen bg-white ease-in-out duration-150"
            : "fixed left-[-100%]"
        }
      >
        <div className="md:hidden">
          <div className=" flex mt-8 px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <i className="fa-solid fa-house-chimney"></i>
            <Link className="px-4 text-bold" to="dashboard">
              Dashboard
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <i className="fa-solid fa-user-plus"></i>
            <Link className="px-4 text-bold" to="add-member">
              Add New Member
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <i className="fa-solid fa-sack-dollar"></i>
            <Link className="px-4 text-bold" to="add-money">
              Add Member's Money
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <i className="fa-solid fa-utensils"></i>
            <Link className="px-4 text-bold" to="add-meal">
              Add Meal
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <i className="fa-solid fa-utensils"></i>
            <Link className="px-4 text-bold" to="bazar-day">
              Add Bazar Day
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <i className="fa-solid fa-file-invoice-dollar"></i>
            <Link className="px-4 text-bold" to="meal-cost">
              Add Meal Cost
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <i className="fa-solid fa-file-invoice-dollar"></i>
            <Link className="px-4 text-bold" to="other-cost">
              Add Other Cost
            </Link>
          </div>

          <div className="px-6 py-6 ">
            <button
              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm  bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
              type="button"
            >
              Create account
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </div> */}
      {/* ********* END SMALL******* */}
      {/* ********* LARGE ******* */}

      {/* <div className="flex mt-[66px]"> */}
      <div className="flex mt-[66px]">
        <div className=" w-0 md:w-1/6 min-h-screen  bg-bgdshb md:shadow-md ">
          <div className="hidden text-white md:flex md:fixed">
            <div>
              <div className=" flex mt-8 px-6 py-3 items-center  text-bold font-semibold  duration-150">
                <i className="fa-solid fa-house-chimney text-icon"></i>
                <Link className="px-4 text-bold " to="dashboard">
                  Dashboard
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-user-plus text-icon"></i>
                <Link to="members-list" className="px-4  text-bold">
                  Members List
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-sack-dollar text-icon"></i>
                <Link className="px-4 text-bold " to="money-list">
                  Amount
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-fish text-icon"></i>
                <Link className="px-4 text-bold " to="meal-list">
                  Meal
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-regular fa-calendar text-icon"></i>
                <Link className="px-4 text-bold" to="bazar-day-list">
                  Add Bazar Day
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-clipboard-list text-icon"></i>

                <Link className="px-4 text-bold" to="meal-cost-list">
                  Bazar List
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-file-invoice-dollar text-icon"></i>
                <Link className="px-4 text-bold" to="other-cost-list">
                  Other Cost
                </Link>
              </div>

              <div className="px-6 py-6 ">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-200 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm  hover:text-black  bg-btnbg hover:bg-green text-white focus:shadow-outline-purple"
                  type="button"
                >
                  {" "}
                  <Link to="/add-member">
                    {" "}
                    Create account
                    <span className="ml-2" aria-hidden="true">
                      +
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ********* END LARGE ******* */}

        {/* ********* OUT-LET ******* */}
        <div className="w-full md:w-5/6  my-[30px] ml-[20px] mr-[8px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
