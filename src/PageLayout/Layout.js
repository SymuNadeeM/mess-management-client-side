import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LargeNavbar from "../Componets/LargeNavbar";
import SmallNavbar from "../Componets/SmallNavbar";

const Layout = () => {
  // const [dark, setDark] = useState(true);

  // const darkClick = () => {
  //   setDark(!dark);
  // };

  return (
    <>
      <div className="z-[100] px-[10px] fixed top-0 left-0 right-0 py-4 shadow-md bg-white dark:bg-[#181818]  text-pink-600">
        <SmallNavbar />

        {/* large screen */}
        <LargeNavbar />
      </div>

      {/* </div> */}

      {/* ********* Total DashBoard ******* */}

      {/* <div className="flex mt-[66px]"> */}
      <div className="flex mt-[66px] ">
        <div className=" w-0 md:w-1/6 min-h-screen  bg-[#025464] dark:bg-darkCard md:shadow-md ">
          <div className="hidden text-white md:flex md:fixed">
            <div>
              <div className=" flex mt-8 px-6 py-3 items-center  text-bold font-semibold  duration-150">
                <i className="fa-solid fa-house-chimney text-icon "></i>
                <Link
                  className="px-4 text-bold hover:text-gray-400 duration-150 "
                  to="dashboard"
                >
                  Dashboard
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-user-plus text-icon"></i>
                <Link
                  to="members-list"
                  className="px-4 hover:text-gray-400 duration-150  text-bold"
                >
                  Members List
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-sack-dollar text-icon"></i>
                <Link
                  className="px-4 hover:text-gray-400 duration-150 text-bold "
                  to="money-list"
                >
                  Amount
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-fish text-icon"></i>
                <Link
                  className="px-4 hover:text-gray-400 duration-150 text-bold "
                  to="meal-list"
                >
                  Meal
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-regular fa-calendar text-icon"></i>
                <Link
                  className="px-4 hover:text-gray-400 duration-150 text-bold"
                  to="bazar-day-list"
                >
                  Add Bazar Day
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-clipboard-list text-icon"></i>

                <Link
                  className="px-4 hover:text-gray-400 duration-150 text-bold"
                  to="meal-cost-list"
                >
                  Bazar List
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-file-invoice-dollar text-icon"></i>
                <Link
                  className="px-4 hover:text-gray-400 duration-150 text-bold"
                  to="other-cost-list"
                >
                  Other Cost
                </Link>
              </div>
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-square-poll-vertical text-icon"></i>

                <Link
                  className="px-4 hover:text-gray-400 duration-150 text-bold"
                  to="summary"
                >
                  Summary
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

        <div className="w-full md:w-5/6  bg-[#C0DBEA] dark:bg-darkMain ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
