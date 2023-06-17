import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import user from "../Images/formal2.png";

const Layout = () => {
  const [dark, setDark] = useState(true);
  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav(!nav);
  };
  const darkClick = () => {
    setDark(!dark);
  };

  return (
    <>
      <div className="px-[10px] fixed top-0 left-0 right-0 py-4 shadow-md bg-white  text-pink-600">
        <div className="flex justify-between items-center gap-2 ">
          <div>
            <div onClick={handleClick} className="block md:hidden">
              <i class="fa-solid fa-bars  text-2xl "></i>
            </div>
            <div
              className={
                !nav
                  ? "fixed left-0 top-0 w-[55%] h-full  ease-in-out duration-500 bg-[#C4DFDF] md:hidden"
                  : "fixed left-[-100%] duration-200"
              }
            >
              <div className="p-5 ">
                <div className="flex items-center justify-between">
                  <div className=" flex items-center gap-[4px] md:gap-2">
                    <i class="fa-solid fa-plate-wheat text-2xl  text-[#E55807]"></i>
                    <h3 className="text-[#025464] font-archivo2 text-lg font-bold">
                      SUN HOSTEL
                    </h3>
                  </div>
                  <div onClick={handleClick}>
                    <i class="fa-regular fa-circle-xmark text-green hover:text-red-600 duration-150 text-xl"></i>
                  </div>
                </div>
                <hr className="mt-2" />

                <div className=" mt-8 space-y-4">
                  <div className=" flex  items-center  text-bold font-semibold  duration-150">
                    <i className="fa-solid fa-house-chimney text-gray-700 "></i>
                    <Link
                      className="px-3 text-bold text-[#4C4C6D] hover:text-gray-400 duration-150 "
                      to="dashboard"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <div
                    className="flex   items-center text-bold font-semibold 
               duration-150"
                  >
                    <i className="fa-solid fa-user-plus text-gray-700"></i>
                    <Link
                      to="members-list"
                      className="px-3  text-bold text-[#4C4C6D] hover:text-gray-400 duration-150"
                    >
                      Members List
                    </Link>
                  </div>
                  <div
                    className="flex  items-center text-bold font-semibold 
               duration-150"
                  >
                    <i className="fa-solid fa-sack-dollar text-gray-700"></i>
                    <Link
                      className="px-3 text-bold text-[#4C4C6D] hover:text-gray-400 duration-150 "
                      to="money-list"
                    >
                      Amount
                    </Link>
                  </div>
                  <div
                    className="flex  items-center text-bold font-semibold 
               duration-150"
                  >
                    <i className="fa-solid fa-fish text-gray-700"></i>
                    <Link
                      className="px-3 text-[#4C4C6D] hover:text-gray-400 duration-150  text-bold "
                      to="meal-list"
                    >
                      Meal
                    </Link>
                  </div>
                  <div
                    className="flex  items-center text-bold font-semibold 
               duration-150"
                  >
                    <i className="fa-regular fa-calendar text-gray-700"></i>
                    <Link
                      className="px-3 text-[#4C4C6D] hover:text-gray-400 duration-150  text-bold"
                      to="bazar-day-list"
                    >
                      Add Bazar Day
                    </Link>
                  </div>
                  <div
                    className="flex  items-center text-bold font-semibold 
               duration-150"
                  >
                    <i className="fa-solid fa-clipboard-list text-gray-700"></i>

                    <Link
                      className="px-3 text-[#4C4C6D] hover:text-gray-400 duration-150  text-bold"
                      to="meal-cost-list"
                    >
                      Bazar List
                    </Link>
                  </div>
                  <div
                    className="flex  items-center text-bold font-semibold 
               duration-150"
                  >
                    <i className="fa-solid fa-file-invoice-dollar text-gray-700"></i>
                    <Link
                      className="px-3 text-[#4C4C6D] hover:text-gray-400 duration-150  text-bold"
                      to="other-cost-list"
                    >
                      Other Cost
                    </Link>
                  </div>
                  <div
                    className="flex  items-center text-bold font-semibold 
               duration-150"
                  >
                    <i className="fa-solid fa-file-invoice-dollar text-gray-700"></i>
                    <Link
                      className="px-3 text-[#4C4C6D] hover:text-gray-400 duration-150  text-bold"
                      to="summary"
                    >
                      Summary
                    </Link>
                  </div>

                  <div className="py-6 ">
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
          </div>
          <div className="">
            <Link
              to="/home"
              className="ml-6 flex items-center gap-1  font-archivo2 text-lg font-bold "
            >
              <i class="fa-solid fa-plate-wheat text-2xl  text-[#E55807]"></i>
              <h3 className="text-[#025464]"> SUN HOSTEL</h3>
            </Link>
          </div>

          {/* search  */}
          <div className="p-1 px-2  rounded-md  space-x-2 border border-[#d5d6d7] md:ml-[245px]   md:w-2/4 w-2/5  flex items-center text-gray-400 ">
            <i className="fa-solid fa-magnifying-glass text-xs md:text-base"></i>
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
          {/* dark & Light */}
          <div>
            <div onClick={darkClick}>
              {!dark ? (
                <i className="fa-regular fa-lightbulb ring-2 p-1 rounded-full  ring-pink-300 ring-inset"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </div>
          </div>
          {/* Notification */}
          <div>
            <i className="fa-solid fa-bell"></i>
          </div>
          {/* User */}
          <div>
            <img src={user} className="h-7 w-7 rounded-full" alt="" />
          </div>
        </div>
      </div>

      {/* </div> */}

      {/* ********* Total DashBoard ******* */}

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
              <div
                className="flex px-6 py-3 items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-file-invoice-dollar text-icon"></i>
                <Link className="px-4 text-bold" to="summary">
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
        <div className="w-full md:w-5/6  my-[30px] ml-[20px] mr-[8px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
